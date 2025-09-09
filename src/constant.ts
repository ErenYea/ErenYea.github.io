export const news = [
    {
        date: 'Nov 01, 2024',
        text: 'Rejoined Rehani Soko as Full Stack Developer'
    },
    {
        date: 'Oct 30, 2024',
        text: 'Concluded my role at Algorithm Consulting PVT'
    },
    {
        date: 'May 01, 2024',
        text: 'Joined Algorithm Consulting PVT as a Software Engineer'
    },
    {
        date: 'Aug 21, 2023',
        text: 'Graduated with a Bachelor\'s degree in Computer Systems Engineering from NED University of Engineering and Technology (NEDUET), achieving a CGPA of 3.6 .'
    },

    {
        date: 'Sep 01, 2023',
        text: 'Joined MyAsk AI as Frontend Developer (As a Freelancer)'
    },
    {
        date: 'Dec 01, 2023',
        text: 'Concluded my role at MyAsk AI'
    },
    {
        date: 'Feb 01, 2023',
        text: 'Joined Rehani Soko as a Full Stack Developer'
    },
]

export interface Project {
    title: string;
    status?: string;        // “In Progress” etc.
    dates?: string;         // “Jul 2024 – Aug 2024”
    thumbnail: string;
    description: string;
    links: { label: string; href: string }[];
}

export const projects: Project[] = [
    {
        title: 'AI Chatbot',
        dates: 'July 2025 - Aug 2025',
        thumbnail: '/aichatbot.webp',
        description:
            'F1GPT is a domain-focused AI assistant built with Next.js and powered by GPT-5 through the AI/ML API. It uses a Retrieval-Augmented Generation (RAG) pipeline that scrapes and indexes authoritative Formula One sources — such as Wikipedia and the official F1 site — into a vector database (DataStax Astra DB). When a user asks a question, the system embeds the query, retrieves the most relevant chunks, and streams a GPT-5 answer enriched with this context. The chatbot is deployed with a sleek Formula One-themed UI, enabling real-time streaming responses. Its technical stack includes Next.js 15, Vercel AI SDK, LangChain text splitters, Puppeteer for scraping, and Astra DB for high-performance similarity search. Value & Use Cases: - Fans can quickly look up race results, driver stats, or rule explanations. - Journalists can explore historical data and technical regulations faster. - Teams & Analysts can leverage a conversational layer over structured F1 data. By combining GPT-5’s reasoning power with RAG, F1GPT reduces hallucinations and delivers trusted, up-to-date answers. This positions it as a unique sports-focused AI assistant, showing how AI can enhance fan engagement and knowledge accessibility in high-data domains like Formula One.',
        links: [
            { label: 'View Project', href: 'https://github.com/ErenYea/rag-f1gpt-chatbot-nextjs' },
            { label: 'View Demo', href: 'https://rag-f1gpt-chatbot-nextjs-production.up.railway.app/' },
        ],
    },
    {
        title: 'Optimal Robotic Arm Gripper (FYP)',
        dates: 'Aug 2022 - Aug 2023',
        thumbnail: 'https://owais142002.github.io/assets/img/fyp.jpg',
        description:
            'The Final Year Design Project aims to improve object grasping and manipulation in warehouses. It features an autonomous robotic arm that efficiently retrieves items from any defined place using dual monocular cameras for 6D object pose estimation and techniques involving robotics and machine learning for grasping strategies that includes kinematic modeling and inverse kinematic modeling of the robotic arm.',
        links: [
            { label: 'View Presentation', href: 'https://docs.google.com/presentation/d/1angaKsRuR_vHHrlyIwOUKt6ev2wqfSnjwKETaQpPNFc/' },
            { label: 'View Project', href: 'https://drive.google.com/drive/folders/1U4Bl81hgEc-5N_hCVpneEVkcrgtJiXAt' },
            { label: 'View Demonstration', href: 'https://www.youtube.com/shorts/nJrsF2eAPDo' },
            { label: "View Research Paper", href: 'https://arxiv.org/pdf/2411.13205' }
        ],
    },

];

export const navLinks = [
    { href: '/', label: 'About' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/education', label: 'Education' },
    { href: '/publications', label: 'Publications' },
    { href: '/projects', label: 'Projects' },
    // { href: '/teaching', label: 'Teaching' },
    { href: '/competitions', label: 'Competitions' },
    { href: 'https://www.hamzaaliportfolio.com/', label: 'Developer Portfolio' },
    { href: 'https://flowcv.com/resume/6v7ig8lbh9e8', label: 'CV' },            // external/static route
];

export const experiences = [
    {
        company: 'Rehani Soko',
        logo: '/rehani.jpg',
        position: 'Full Stack Developer',
        employmentType: 'Full Time',
        periods: ['Feb 2023 - Present'],
        location: '57 N St NW, Washington DC (Remote)',
        responsibilities: [
            'Developed and maintained scalable backend APIs using Django and integrated with PostgreSQLand MongoDB.',
            'Built dynamic and responsive frontend interfaces using Nuxt (Vue js) , enhancing user experience across platforms.',
            'Implemented authentication and authorization using JWT, ensuring secure access control throughout the application.',
            'Implement Real Time Chat functionality  using SocketIO and  NestJS.'
        ],
        letterUrl: '',
        link: 'https://rehanisoko.com/',
    },
    {
        company: 'Algorithm Consulting [Pvt.]',
        logo: '/logo-algo-glow.png',
        position: 'Software Engineer',
        employmentType: 'Full Time',
        periods: ['May 2024 - Oct 2024'],
        location: 'Karachi, Pakistan (On-site)',
        responsibilities: [
            'Actively contributed to the development and maintenance of a dynamic product using ASP.NET.',
            'Worked closely with senior developers to implement core features, resolve technical issues, and improve overall system functionality.'
        ],
        link: 'https://www.algorithm.com.pk/index.html',
    },
    {
        company: 'MyAsk AI',
        logo: 'https://owais142002.github.io/assets/img/myaskai.jpg',
        position: 'Full Stack Developer (Remote)',
        employmentType: 'Part Time',
        periods: ['Sep 2023 - Dec 2023'],
        location: 'London, England (Remote)',
        responsibilities: [
            'Design Frontend to Integrate the Bot using ReactJS.',
        ],
        link: 'https://myaskai.com/',
    },
    {
        company: 'CrossWing Inc.',
        logo: 'https://owais142002.github.io/assets/img/crosswing.jpg',
        position: 'Full Stack Developer (Remote)',
        employmentType: 'Full Time',
        periods: ['Dec 2022 - Nov 2023'],
        location: '238 Wellington St E Suite 214, Aurora, ON L4G 1J5, Canada (Remote)',
        responsibilities: [
            'I have engineered and deployed sophisticated machine learning algorithms and computer vision systems to tackle contemporary challenges. I created a Scheduler Optimizer that arranges car production schedules according to worker efficiency, streamlining the car manufacturing timeline. Additionally, I developed a RULA Score Detector to promote correct ergonomic practices among workers, thereby boosting safety and productivity. Furthermore, I constructed a comprehensive full-stack platform to consolidate all the Machine Learning models within a unified application.',
        ],
        link: 'https://crosswing.com/',
    },
    {
        company: 'Profecia Links',
        logo: 'https://owais142002.github.io/assets/img/profecia.png',
        position: 'Junior Software Engineer ',
        employmentType: 'Part Time',
        periods: ['Apr 2021 - Sep 2022'],
        location: 'Dubai, United Arab Emirates (Remote)',
        responsibilities: [
            'Developed, implemented, and maintained web scrapers in JavaScript for extracting data from various e-commerce websites.',
            'Collaborated with the team to ensure efficient and accurate data extraction based on project requirements.'
        ],
        link: 'https://profecialinks.com/',
        letterUrl: 'https://drive.google.com/file/d/1tP_08y9Wax1hk3VHh46KRlTKBvqZfL6l/view?usp=sharing'
    },
];

export const schools = [
    {
        name: 'NED University of Engineering and Technology',
        logo: 'https://owais142002.github.io/assets/img/NEDUET_logo.png',
        degree: "Bachelor's of Engineering in Computer Systems",
        dates: 'Oct 2019 - Oct 2023',
        location: 'Service Rd, NED University, Karachi, Pakistan',
        summary: [
            'Ranked in the top 15 % of the batch.',
            'Graduated with a CGPA of 3.61.',
            'Completed one of the most complex final-year projects in the entire batch.',
        ],
    },
    {
        name: 'Adamjee Govt. Science College',
        logo: 'https://owais142002.github.io/assets/img/Adamjee_College_Logo.jpg',
        degree: 'Higher Secondary School Certificate (H.S.S.C), Pre-Engineering',
        dates: 'Aug 2017 - Aug 2019',
        location: 'Soldier Bazaar, Garden East, Karachi, Pakistan',
        summary: [
            'Ranked 10 % in Karachi Board examinations.',
            'Scored 923 out of 1100 (83.91 %) in Karachi Board examinations.',
        ],
    },
    {
        name: 'S.M Public Academy',
        logo: 'https://owais142002.github.io/assets/img/SM_Public_Academy_Logo.png',
        degree: 'Secondary School Certificate (S.S.C), Computer Science',
        dates: 'Aug 2015 - Aug 2017',
        location: 'Gulshan-e-Iqbal, Karachi, Pakistan',
        summary: [
            'Ranked 5 % in Karachi Board examinations.',
            'Scored 747 out of 850 (87.88 %) in Karachi Board examinations.',
        ],
    },
];

export interface Pub {
    year: number;
    title: string;
    date: string;        // Month YYYY
    thumbnail: string;
    absUrl: string;
    htmlUrl: string;
    pdfUrl: string;
    abstract: string;
}
export const publications: Pub[] = [
    {
        year: 2025,
        title: 'Smart Shelf Advertising using Real-Time Product Segmentation and Interaction on Low-Cost Edge',
        date: 'Jul 2025',
        thumbnail: 'https://owais142002.github.io/assets/img/publication_preview/rg.png',
        absUrl: '#',
        htmlUrl: 'https://www.researchgate.net/publication/394095306_Smart_Shelf_Advertising_using_Real-Time_Product_Segmentation_and_Interaction_on_Low-Cost_Edge_Devices',
        pdfUrl: 'https://www.researchgate.net/publication/394095306_Smart_Shelf_Advertising_using_Real-Time_Product_Segmentation_and_Interaction_on_Low-Cost_Edge_Devices',
        abstract: 'This paper presents a comprehensive review of the work "A Dynamic Algorithm for Approximate Flow Computations" by Professor Prabhakar and Professor Viswanathan. The original paper introduces an algorithm that improves the efficiency of reachability analysis in linear dynamical systems by dynamically determining time intervals and using polynomial approximations to maintain a specified error bound. This review summarizes the key contributions, including the use of Bernstein polynomials and error control mechanisms, and critically evaluates the algorithm’s performance, scalability, and limitations. Experimental insights, theoretical underpinnings, and potential directions for future research are discussed to highlight the broader implications of the work in formal verification and control systems.',
    },
    {
        year: 2023,
        title: 'An Integrated Approach to Robotic Object Grasping and Manipulation',
        date: 'Aug 2023',
        thumbnail: 'https://owais142002.github.io/assets/img/publication_preview/arxiv.jpg',
        absUrl: '#',
        htmlUrl: 'https://arxiv.org/pdf/2411.13205',
        pdfUrl: 'https://drive.google.com/file/d/1ghqFgfXwl_K7K_odG0w792T9tBUI34-Z/view?usp=sharing',
        abstract: 'In response to the growing challenges of manual labor and efficiency in warehouse operations, Amazon has embarked on a significant transformation by incorporating robotics to assist with various tasks. While a substantial number of robots have been successfully deployed for tasks such as item transportation within warehouses, the complex process of object picking from shelves remains a significant challenge. This project addresses the issue by developing an innovative robotic system capable of autonomously fulfilling a simulated order by efficiently selecting specific items from shelves. A distinguishing feature of the proposed robotic system is its capacity to navigate the challenge of uncertain object positions within each bin of the shelf. The system is engineered to autonomously adapt its approach, employing strategies that enable it to efficiently locate and retrieve the desired items, even in the absence of pre-established knowledge about their placements. Crucially, the robotic system operates with a paramount emphasis on autonomy. The intricate interplay of algorithms, control mechanisms, and sensor fusion empowers the robot to execute the entire object picking task without human intervention. This unfaltering commitment to autonomy is a pivotal step towards revolutionizing warehouse operations, potentially paving the way for unprecedented levels of efficiency and productivity. This project serves as a testament to the intersection of robotics, computer vision, and artificial intelligence in tackling a complex challenge within the realm of modern logistics. The envisioned robotic system represents a significant advancement in autonomous object-picking technology, holding the promise of transforming conventional warehousing practices. As the fusion of cutting-edge technology and logistical innovation unfolds, the outcomes of this endeavor have the potential to redefine the future of warehouse operations and automation within the industry.',
    },
];


export interface Competition {
    title: string;
    dates: string;
    thumbnail: string;
    organizer: { name: string; href?: string };
    project?: string;
    description: string;
    links: { label: string; href: string }[];
}

export const comps: Competition[] = [
    {
        title: 'Co-Creating with GPT-5',
        dates: '18 Aug 2025 - 24 Aug 2025',
        thumbnail: '/aichatbot.webp',
        organizer: { name: 'Lablab.ai', href: 'https://lablab.ai/event/co-creating-with-gpt-5' },
        project: 'F1GPT - Formula One AI Chatbot',
        description:
            'F1GPT is a domain-focused AI assistant built with Next.js and powered by GPT-5 through the AI/ML API. It uses a Retrieval-Augmented Generation (RAG) pipeline that scrapes and indexes authoritative Formula One sources — such as Wikipedia and the official F1 site — into a vector database (DataStax Astra DB). When a user asks a question, the system embeds the query, retrieves the most relevant chunks, and streams a GPT-5 answer enriched with this context. The chatbot is deployed with a sleek Formula One-themed UI, enabling real-time streaming responses. Its technical stack includes Next.js 15, Vercel AI SDK, LangChain text splitters, Puppeteer for scraping, and Astra DB for high-performance similarity search. Value & Use Cases: - Fans can quickly look up race results, driver stats, or rule explanations. - Journalists can explore historical data and technical regulations faster. - Teams & Analysts can leverage a conversational layer over structured F1 data. By combining GPT-5’s reasoning power with RAG, F1GPT reduces hallucinations and delivers trusted, up-to-date answers. This positions it as a unique sports-focused AI assistant, showing how AI can enhance fan engagement and knowledge accessibility in high-data domains like Formula One.',
        links: [
            { label: 'View Project', href: 'https://github.com/ErenYea/rag-f1gpt-chatbot-nextjs' },
            { label: 'View Submission', href: 'https://lablab.ai/event/co-creating-with-gpt-5/aignitivex/f1gpt-formula-one-ai-chatbot' },
            { label: 'View Demo', href: 'https://rag-f1gpt-chatbot-nextjs-production.up.railway.app/' },
        ],
    }
];