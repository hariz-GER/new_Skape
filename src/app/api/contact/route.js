import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

const SUBMISSIONS_DIR = path.join(process.cwd(), 'submissions');
const SUBMISSIONS_FILE = path.join(SUBMISSIONS_DIR, 'contact-inquiries.csv');
const CSV_HEADER = 'timestamp,full_name,email,project_brief\n';

const escapeCsv = (value = '') => `"${String(value).replace(/"/g, '""')}"`;

export async function POST(request) {
    try {
        const payload = await request.json();
        const name = String(payload?.name || '').trim();
        const email = String(payload?.email || '').trim();
        const message = String(payload?.message || '').trim();

        if (name.length < 2) {
            return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
        }
        if (message.length < 10) {
            return NextResponse.json({ error: 'Please provide at least 10 characters.' }, { status: 400 });
        }

        await fs.mkdir(SUBMISSIONS_DIR, { recursive: true });
        try {
            await fs.access(SUBMISSIONS_FILE);
        } catch {
            await fs.writeFile(SUBMISSIONS_FILE, CSV_HEADER, 'utf8');
        }

        const row = [
            escapeCsv(new Date().toISOString()),
            escapeCsv(name),
            escapeCsv(email),
            escapeCsv(message)
        ].join(',') + '\n';

        await fs.appendFile(SUBMISSIONS_FILE, row, 'utf8');

        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json(
            {
                error: 'Unexpected server error while saving inquiry.',
                detail: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
