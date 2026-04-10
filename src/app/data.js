import React from 'react';
import { withBasePath } from './lib/paths';

export const NAV_ITEMS = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
];

export const MENU_CONTENT = {
    services: {
        heading: 'Services',
        items: [
            {
                label: 'Architectural Design',
                children: ['Residential', 'Commercial']
            },
            'Planning Applications',
            {
                label: 'Interior Design',
                children: ['Residential', 'Commercial']
            },
            'Create & Construct'
        ]
    },
    portfolio: {
        heading: 'Portfolio',
        items: ['Residential', 'Commercial']
    },
    about: {
        heading: 'About',
        items: ['Read More', 'Interior Design Philosophy', 'Core Values', 'About My Studio']
    },
    contact: {
        heading: 'Get in Touch',
        items: [
            'skapedesign.in@gmail.com',
            'Kolathur, Chennai-600099, TAMIL NADU, INDIA',
            '+91 9940482048',
            '+91 9940340216'
        ]
    }
};

export const RESIDENTIAL_SERVICE_DETAIL = {
    eyebrow: 'Architectural Design | Residential',
    title: 'Residential Architecture',
    intro: [
        'At SKAPE, we believe a home is more than walls and a roof. It is a reflection of your lifestyle, aspirations, and personality. Our residential architecture is thoughtfully designed to balance aesthetics, functionality, comfort, and sustainability.',
        'We create homes that feel timeless, elegant, and deeply personal.'
    ],
    approach: [
        {
            title: 'Understanding You',
            text: 'Every home begins with listening. We understand your lifestyle, family needs, cultural values, and future goals before shaping the design vision.'
        },
        {
            title: 'Concept to Creation',
            text: 'From initial sketches to final execution, we deliver a seamless architectural journey, integrating form, function, materials, and light.'
        },
        {
            title: 'Smart and Sustainable Design',
            text: 'We incorporate climate-responsive architecture, natural ventilation and daylight optimization, energy-efficient planning, and sustainable materials.'
        }
    ],
    offerings: [
        {
            title: 'Home Renovation',
            text: 'At SKAPE, we transform existing homes into refined, functional living spaces. Our renovation approach blends modern design with structural improvement, enhancing comfort, aesthetics, and value. From facade upgrades to complete interior remodeling, we reimagine your home with thoughtful planning, quality materials, and seamless execution tailored to your lifestyle.'
        },
        {
            title: 'Planning Application',
            text: 'We provide complete assistance for planning approval and statutory submissions. Our team prepares accurate drawings, documentation, and compliance reports aligned with local building regulations. We coordinate with authorities, ensuring a smooth approval process while minimizing delays. From concept to submission, we handle every detail professionally, making your project legally compliant and ready for construction.'
        },
        {
            title: 'Architecture and Interior Design',
            text: 'We seamlessly blend architecture and interior design to create cohesive, functional, and visually striking spaces. Our holistic approach ensures that structure, layout, materials, lighting, and interiors work in harmony. From concept to completion, we design spaces that reflect your lifestyle, enhance comfort, and deliver timeless aesthetics with thoughtful detailing and efficient planning.'
        },
        {
            title: 'Landscape Design',
            text: 'We design landscapes that enhance architecture and connect spaces with nature. Our approach balances aesthetics, functionality, and sustainability, creating inviting outdoor environments that complement your home. From garden planning and hardscape design to lighting and planting concepts, we craft serene, well-structured landscapes that elevate everyday living.'
        }
    ],
    heroImage: {
        src: withBasePath('/assets/residential-hero.jpg'),
        alt: 'Architectural planning desk with drawings and a laptop'
    },
    landscapeImage: {
        src: withBasePath('/assets/residential-landscape.jpg'),
        alt: 'Residential landscape lighting and outdoor seating'
    }
};

export const PLANNING_APPLICATION_SERVICE_DETAIL = {
    eyebrow: 'Planning Applications | Statutory Compliance',
    title: 'Planning Application Services',
    intro: [
        'We manage the complete planning permission process with precision and clarity. From preparing detailed architectural drawings to coordinating statutory documentation and authority approvals, we ensure full compliance with local regulations. Our streamlined approach minimizes delays, making your project legally approved and ready to move forward with confidence.',
        'We ensure every project complies with Indian building regulations and safety standards. Our designs align with the National Building Code of India, local Development Control Rules (DCR), and municipal authority guidelines.',
        'From planning to approval, we handle documentation, zoning compliance, structural safety norms, fire safety provisions, and accessibility requirements to deliver safe, legal, and construction-ready designs with complete transparency and professional accountability.'
    ],
    approachHeading: 'Our Planning Application Service',
    approachLayout: 'timeline',
    approach: [
        {
            title: 'Consultation & Site Analysis',
            text: 'We begin by understanding your project requirements, site conditions, and local authority regulations to establish a clear approval strategy.'
        },
        {
            title: 'Design & Documentation',
            text: 'Our team prepares detailed architectural drawings, site plans, and statutory documents in compliance with local building rules.'
        },
        {
            title: 'Submission & Coordination',
            text: 'We submit the planning application and coordinate with authorities, addressing queries and ensuring smooth communication.'
        },
        {
            title: 'Approval & Compliance Support',
            text: 'We assist until final approval is secured, ensuring your project is legally compliant and ready for execution.'
        }
    ],
    scopeHeading: 'Regulatory Coverage',
    offerings: [
        {
            title: 'Authority Documentation',
            text: 'Preparation of statutory drawings, applications, declarations, and submission-ready documents for local body approvals.'
        },
        {
            title: 'Zoning and DCR Compliance',
            text: 'Checks for setbacks, land-use controls, permissible FSI/FAR, and development norms based on applicable local regulations.'
        },
        {
            title: 'Safety and Structural Norms',
            text: 'Design coordination for structural safety provisions, fire-safety requirements, and mandatory code-aligned planning controls.'
        },
        {
            title: 'Accessibility and Final Clearances',
            text: 'Integration of accessibility standards and end-to-end support through authority clarifications, revisions, and approval closure.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
        alt: 'Architectural planning desk with drawings and tablet'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=1400&q=80',
        alt: 'Construction site with tower crane silhouette'
    },
    featureLabel: 'PLANNING PERMISSION'
};

export const CREATE_CONSTRUCT_SERVICE_DETAIL = {
    eyebrow: 'Create & Construct | End-to-End Delivery',
    title: 'Create and Construct',
    intro: [
        'At SKAPE, we offer a seamless create-and-construct approach that transforms ideas into built reality. From initial concept design and detailed drawings to on-site execution and final finishes, we manage every stage with precision and accountability.',
        'Our integrated process ensures design integrity, quality craftsmanship, cost efficiency, and timely delivery. By coordinating architects, engineers, and contractors under one vision, we create thoughtfully designed spaces that are functional, durable, and aesthetically refined.'
    ],
    approachHeading: 'Core Services',
    approach: [
        {
            title: 'Architectural and Design Services',
            text: 'We provide comprehensive architecture and design services that transform concepts into inspiring built environments. Our expertise spans residential, commercial, and mixed-use projects, combining innovative design thinking with practical planning. From site analysis and conceptual development to detailed drawings and material selection, we ensure every element aligns with your vision. With a focus on functionality, sustainability, and refined aesthetics, we deliver thoughtfully crafted spaces that stand the test of time.'
        },
        {
            title: 'Construct | Construction',
            text: 'Our construct and construction services focus on delivering high-quality, durable, and precisely executed spaces. We manage the entire construction process, from structural works to final finishes, with strict quality control and on-site supervision. Our team ensures adherence to timelines, budget efficiency, and design accuracy. By combining skilled craftsmanship with careful coordination, we transform approved designs into strong, refined, and long-lasting built environments.'
        },
        {
            title: 'Construct | Project Management',
            text: 'Our project management process drives clear coordination, disciplined scheduling, and transparent execution from start to handover. We align consultants, contractors, procurement, and site teams under a single roadmap to control quality, costs, and milestones. Through proactive reporting, risk tracking, and decision support, we keep delivery predictable, efficient, and faithful to the approved design intent.'
        }
    ],
    scopeHeading: 'Execution Scope',
    offerings: [
        {
            title: 'Integrated Design to Build',
            text: 'A unified workflow that connects concept design, technical documentation, approvals, and construction into one coordinated process.'
        },
        {
            title: 'On-Site Quality and Supervision',
            text: 'Continuous site monitoring, workmanship checks, and material verification to maintain quality standards and build precision.'
        },
        {
            title: 'Timeline and Budget Control',
            text: 'Structured scheduling, milestone tracking, and cost monitoring to reduce delays, prevent overruns, and improve delivery certainty.'
        },
        {
            title: 'Handover and Final Finishes',
            text: 'Final detailing, snag rectification, and close-out coordination to deliver spaces that are complete, refined, and ready for use.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
        alt: 'Architect and engineer reviewing drawings at an active construction site'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
        alt: 'Construction team coordination on site with structural framework'
    },
    featureLabel: 'CREATE AND CONSTRUCT'
};

export const WORK_PLACE_SERVICE_DETAIL = {
    eyebrow: 'Architectural Design | Work Place',
    title: 'Work Place Design',
    intro: [
        'We create inspiring workplace environments that enhance productivity, collaboration, and brand identity.',
        'Our designs balance functionality, comfort, and aesthetics to ensure efficient space planning and thoughtful detailing. From modern offices to creative studios, we craft dynamic workspaces that reflect your vision while promoting innovation, flexibility, and a positive work culture.'
    ],
    approach: [
        {
            title: 'Productivity-First Planning',
            text: 'Layouts are organized to support focused work, smooth movement, and better day-to-day efficiency across teams.'
        },
        {
            title: 'Collaboration and Flexibility',
            text: 'We design a mix of collaborative and quiet zones so teams can shift naturally between discussion, creation, and concentration.'
        },
        {
            title: 'Brand-Led Spatial Identity',
            text: 'Materials, colors, and spatial language are curated to reflect your brand while keeping the workplace modern, comfortable, and professional.'
        }
    ],
    offerings: [
        {
            title: 'Corporate Offices',
            text: 'Structured workplace environments with clear zoning, meeting areas, and employee-focused planning.'
        },
        {
            title: 'Creative Studios',
            text: 'Flexible studio layouts that support ideation, production workflows, and dynamic team collaboration.'
        },
        {
            title: 'Workspace Renovation',
            text: 'Transformation of existing office spaces with improved circulation, updated materials, and stronger visual identity.'
        },
        {
            title: 'Lighting and Detailing',
            text: 'Layered lighting and interior detailing that improve comfort, mood, and day-long workplace usability.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
        alt: 'Modern collaborative office with glass partitions and open desks'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80',
        alt: 'Workplace lounge and meeting area with contemporary design'
    },
    approachHeading: 'Design Approach',
    scopeHeading: 'Work Place Scope',
    featureLabel: 'WORK PLACE INTERIORS'
};

export const HOSPITALITY_SERVICE_DETAIL = {
    eyebrow: 'Architectural Design | Hospitality',
    title: 'Hospitality Design',
    intro: [
        'We design hospitality spaces that create memorable guest experiences by blending architecture, interiors, and ambiance.',
        'From hotels and resorts to cafes and lounges, we craft spaces that balance comfort, functionality, and visual appeal. Our thoughtful planning, material selection, and lighting concepts create inviting environments that reflect your brand identity and elevate every visitor experience.'
    ],
    approach: [
        {
            title: 'Guest Journey Planning',
            text: 'Spaces are designed around arrival, movement, comfort, and service flow to create seamless and welcoming experiences.'
        },
        {
            title: 'Atmosphere and Identity',
            text: 'Interior character, mood, and layout are shaped to express brand personality while staying warm and intuitive for guests.'
        },
        {
            title: 'Material and Lighting Harmony',
            text: 'We combine durable materials, layered textures, and balanced lighting to deliver spaces that feel elegant, practical, and memorable.'
        }
    ],
    offerings: [
        {
            title: 'Hotels and Resorts',
            text: 'Guest-focused planning for lobbies, rooms, amenities, and shared spaces with a strong visual identity.'
        },
        {
            title: 'Cafes and Lounges',
            text: 'Social hospitality environments designed for comfort, atmosphere, and efficient front-of-house operations.'
        },
        {
            title: 'Restaurant Interiors',
            text: 'Dining spaces with refined zoning, seating strategy, and material palettes for an elevated experience.'
        },
        {
            title: 'Lighting Concepts',
            text: 'Feature and ambient lighting systems that enhance mood, wayfinding, and spatial depth throughout the venue.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80',
        alt: 'Luxury hotel lobby with warm hospitality lighting'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
        alt: 'Hospitality lounge seating with elegant interior styling'
    },
    approachHeading: 'Design Approach',
    scopeHeading: 'Hospitality Scope',
    featureLabel: 'GUEST EXPERIENCE'
};

export const INTERIOR_DESIGN_SERVICE_DETAIL = {
    eyebrow: 'Interior Design | Residential',
    title: 'Residential Interior Design',
    intro: [
        'At SKAPE, we craft residential interiors that reflect your personality and elevate everyday living. Our designs combine functionality, aesthetics, and comfort, ensuring every space is thoughtfully planned and beautifully detailed.',
        'From space planning and material selection to lighting and custom furnishings, we create harmonious interiors that are modern, timeless, and tailored to your lifestyle.'
    ],
    approach: [
        {
            title: 'Homes and Apartments',
            text: 'We design homes and apartments that blend comfort, functionality, and modern aesthetics. Whether it is an independent house or a contemporary apartment, our approach focuses on smart space planning, natural light, ventilation, and refined detailing. We create personalized living environments that reflect your lifestyle while maximizing efficiency, elegance, and long-term value.'
        },
        {
            title: 'Housing Interiors',
            text: 'At SKAPE, we design housing interiors that combine practicality, comfort, and refined aesthetics. Our approach focuses on efficient space utilization, seamless layouts, and cohesive material palettes to create harmonious living environments. From compact units to premium residences, we craft interiors that enhance functionality while delivering timeless design and everyday comfort tailored to your lifestyle.'
        },
        {
            title: 'Bespoke Joinery',
            text: 'We create bespoke joinery solutions tailored to your space and lifestyle. From custom wardrobes and kitchens to feature panels and storage units, every element is precisely designed and crafted with premium materials. Our focus on detailing, functionality, and seamless integration ensures elegant, durable, and space-efficient solutions that enhance your interiors.'
        }
    ],
    offerings: [
        {
            title: 'Furniture, Fixture and Equipment (FF&E)',
            text: 'At SKAPE, we curate and specify high-quality furniture, fixtures, and equipment that enhance both function and aesthetics. Our FF&E services ensure every element, from loose furniture to lighting and accessories, aligns with the overall design vision. We focus on durability, comfort, and cohesive styling, delivering well-coordinated spaces that are practical, elegant, and ready for use.'
        },
        {
            title: 'Residential Interior Design and Architecture',
            text: 'We integrate architecture and interior design to create cohesive, thoughtfully crafted homes. Our approach ensures that spatial planning, structure, materials, lighting, and interiors work seamlessly together. From concept development to final detailing, we design residences that balance functionality, comfort, and timeless aesthetics, delivering personalized spaces that reflect your lifestyle and elevate everyday living.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
        alt: 'Modern residential interior with contemporary furniture and warm lighting'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=1400&q=80',
        alt: 'Luxury living room interior with elegant design elements'
    },
    approachHeading: 'Design Services',
    scopeHeading: 'Interior Design Scope',
    featureLabel: 'RESIDENTIAL INTERIORS'
};

export const INTERIOR_COMMERCIAL_SERVICE_DETAIL = {
    eyebrow: 'Interior Design | Commercial',
    title: 'Commercial Interior Design',
    intro: [
        'At SKAPE, we design commercial interiors that align brand identity with day-to-day functionality. Our spaces are planned to improve user experience, support operations, and create a strong visual impact.',
        'From concept development and layout strategy to lighting, finishes, and FF&E, we deliver commercial interiors that are efficient, durable, and memorable.'
    ],
    approach: [
        {
            title: 'Workplaces and Offices',
            text: 'We create office interiors that support productivity, collaboration, and comfort through clear zoning, ergonomic planning, and balanced spatial flow.'
        },
        {
            title: 'Retail and Experience Spaces',
            text: 'Our retail interiors are shaped around customer journey, display strategy, and brand expression to create engaging spaces that improve interaction and sales performance.'
        },
        {
            title: 'Hospitality and Public Interiors',
            text: 'We design hospitality and public-facing environments with strong ambience, intuitive circulation, and durable materials to deliver welcoming and high-performing spaces.'
        }
    ],
    offerings: [
        {
            title: 'Space Planning and Zoning',
            text: 'Functional layouts for reception, circulation, work, display, and service zones to ensure smooth movement and operational efficiency.'
        },
        {
            title: 'Materials and Detailing',
            text: 'Carefully selected finishes, textures, and detailing systems that reinforce brand character while meeting durability and maintenance requirements.'
        },
        {
            title: 'Furniture, Fixtures and Equipment (FF&E)',
            text: 'Curated furniture and fixture specifications tailored to project use, comfort, performance, and long-term value.'
        },
        {
            title: 'Lighting and Coordination',
            text: 'Layered ambient, task, and feature lighting coordinated with MEP requirements to improve visual comfort and spatial quality.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
        alt: 'Contemporary commercial interior with lounge seating'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80',
        alt: 'Modern office collaboration area with warm finishes'
    },
    approachHeading: 'Design Services',
    scopeHeading: 'Commercial Interior Scope',
    featureLabel: 'COMMERCIAL INTERIORS'
};

export const SERVICES_DATA = [
    {
        title: 'Home Renovation',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path d="M9 22V12h6v10" />
            </svg>
        ),
        text:
            'We offer a seamless home renovation experience that transforms outdated spaces into functional, modern, and beautifully refined environments. Our process begins with understanding each client\'s needs, lifestyle, and vision, ensuring that every design decision reflects their goals. From structural improvements to aesthetic upgrades, we manage every detail with precision, transparency, and care.'
    },
    {
        title: 'Planning Applications',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M2 12h20M2 2l20 20M2 22L22 2" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
        ),
        text:
            'We provide thoughtful residential planning that transforms ideas into well-organized, efficient, and comfortable living spaces. By understanding each client\'s needs and lifestyle, we create layouts that maximize function, flow, and natural light. Our goal is to deliver personalized plans that make every home feel practical, beautiful, and truly livable.'
    },
    {
        title: 'Interior Design',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3v18M3 12h18" />
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8l4 4-4 4M8 12h8" />
            </svg>
        ),
        text:
            'Our interior design experience is all about creating spaces that feel personal, comfortable, and genuinely connected to the way you live. We listen closely to your ideas, understand your lifestyle, and shape every detail to reflect your taste. From choosing materials and colors to planning furniture and lighting, we make the entire process simple and enjoyable.'
    }
];

export const PROJECTS_DATA = [
    {
        id: 'mr-antony-residence',
        segment: 'residential',
        banner: 'RESIDENTIAL | MODERN TROPICAL CONTEMPORARY',
        title: 'Mr. Antony Residence',
        subtitle: 'Refined, climate-responsive home interiors balancing elegance, comfort, and long-term durability.',
        cover: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1400&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1616594039964-3d7f9f4f89ad?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1617325247661-675ab4b64f11?auto=format&fit=crop&w=1400&q=80'
        ],
        detailSections: [
            {
                title: 'Project Overview',
                content: [
                    'This residential interior project for Mr. Antony in Chennai is designed to create a refined, comfortable, and climate-responsive home. The design intent is to reflect the client’s lifestyle while preserving functionality, durability, and long-term value.'
                ]
            },
            {
                title: 'Architecture',
                content: [
                    'The overall direction follows a modern tropical contemporary language: clean lines, warm materiality, and climate-aware planning aligned to Chennai conditions. The result is an elegant yet practical environment with strong visual clarity.'
                ]
            },
            {
                title: 'Interior Design Concept',
                content: [
                    'The dining and transition zones are developed in a modern-classic expression with deep moody tones, rich wood textures, and controlled detailing. A sculpted arched wooden partition acts as both divider and statement feature, adding rhythm and architectural identity.',
                    'Dark olive-grey paneled walls, marble dining surfaces, upholstered seating, brushed gold accents, and layered lighting combine to produce a warm, intimate, and timeless atmosphere suited for both everyday living and gatherings.'
                ]
            },
            {
                title: 'Design Details',
                content: [
                    'Spaces are composed through structured vertical elements, subtle panel articulation, and softened curves. Each room transitions seamlessly into the next to maintain continuity, depth, and a cohesive premium finish across the home.'
                ]
            }
        ],
        designBrief:
            'Residential project in Chennai designed as a refined, climate-responsive home with timeless elegance and practical everyday comfort.',
        interiorDesign:
            'Modern tropical contemporary interiors with deep green tones, walnut textures, marble surfaces, subtle molding, and layered warm lighting.'
    },
    {
        id: 'mr-sampath-residence',
        segment: 'residential',
        banner: 'RESIDENTIAL | SOFT LINEAR MINIMALISM',
        title: 'Mr. Sampath Residence',
        subtitle:
            'A modern minimal residence where clean geometry, gentle curves, and warm textures create calm sophistication.',
        cover:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1617098907768-79e4c90f9b2a?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1612320648993-61c1cd604b71?auto=format&fit=crop&w=1400&q=80'
        ],
        detailSections: [
            {
                title: 'Project Overview',
                content: [
                    'This living environment is conceived in a modern minimal aesthetic using clean geometry, vertical detailing, and soft neutrals. The goal is to maximize perceived spaciousness while preserving warmth, usability, and comfort within a compact footprint.'
                ]
            },
            {
                title: 'Design Concept',
                content: [
                    'The concept, soft linear minimalism, combines slatted vertical rhythms, curved wall gestures, and restrained panel detailing. Straight lines are balanced with gentle curves to create visual harmony and architectural depth without clutter.'
                ]
            },
            {
                title: 'Architecture',
                content: [
                    'The architecture follows a contemporary tropical approach with open planning, smooth circulation, and climate-aware daylight use. Double-height moments, floating stair elements, and integrated storage improve both spatial flow and functionality.'
                ]
            },
            {
                title: 'Interior Design',
                content: [
                    'A calm neutral palette is layered with warm wood finishes, fluted surfaces, and soft ambient lighting. Each zone is designed to blend elegance with comfort, delivering timeless, personalized residential interiors.'
                ]
            },
            {
                title: 'Design Details',
                content: [
                    'Precision detailing is carried through concealed lighting, patterned wall treatments, vertical fluting, and curated display niches. These details introduce texture and rhythm while preserving the minimalist design language.'
                ]
            },
            {
                title: 'Furniture Details',
                content: [
                    'Furniture selection emphasizes clean silhouettes, ergonomic comfort, and material continuity. Custom storage, floating consoles, upholstered beds, and refined dining elements integrate seamlessly with the architecture for a cohesive premium result.'
                ]
            }
        ],
        designBrief:
            'A modern minimal residential project focused on spatial clarity, gentle geometry, and practical elegance for compact living.',
        interiorDesign:
            'Soft neutral interiors with fluted textures, curved motifs, warm wood finishes, and integrated bespoke furniture for a timeless feel.'
    },
    {
        id: 'leisure-hall',
        segment: 'commercial',
        banner: 'COMMERCIAL | INTERIOR DESIGN',
        title: 'Leisure Hall',
        subtitle: 'Warm, socially engaging leisure environment with contemporary materials and fluid zoning.',
        cover:
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1400&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80'
        ],
        designBrief:
            'This project focuses on creating a warm, contemporary leisure space that blends natural materials with modern design elements to deliver an inviting, socially engaging environment. The brief emphasizes openness, fluid circulation, and visually rich textures that enhance both comfort and aesthetics. The layout integrates multiple seating arrangements to support casual conversations, collaborative activities, and relaxed dining. Wooden elements, earthy tones, and organic forms are used to create a cohesive atmosphere that feels both grounded and vibrant.',
        interiorDesign:
            'The interior features a striking composition of wooden textures, sculptural lighting, and woven furniture that together create a warm, immersive atmosphere. Curved seating, layered pendant lights, patterned surfaces, and greenery keep the space connected, comfortable, and contemporary.'
    },
    {
        id: 'cultural-hall',
        segment: 'commercial',
        banner: 'COMMERCIAL | INTERIOR DESIGN',
        title: 'Cultural Hall',
        subtitle: 'Elegant event space that blends cultural identity with modern comfort and clarity.',
        cover:
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=80'
        ],
        designBrief:
            'To create an elegant cultural hall designed for gatherings, ceremonies, and formal events, blending traditional aesthetics with a refined spatial layout. The brief focuses on delivering a space that feels grand, welcoming, and visually expressive while supporting large audiences comfortably. Ample seating, clear sightlines, and smooth circulation were key requirements, ensuring functionality for various programs. The design emphasizes cultural identity, incorporating classical motifs, rich colors, and handcrafted detailing.',
        interiorDesign:
            'Lighting, acoustics, and proportions are carefully balanced to improve audience comfort and stage visibility. Rich material layers and precise detailing create a ceremonial yet contemporary environment that supports both heritage expression and modern operations.'
    }
];
