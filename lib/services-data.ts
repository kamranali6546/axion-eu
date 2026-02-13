export interface SubService {
  title: string
  slug: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  tools: string[]
}

export interface ServiceProcess {
  title: string
  description: string
}

export interface WhyChooseItem {
  title: string
  description: string
}

export interface Service {
  slogan: string
  title: string
  subHeading: string
  slug: string
  color: string
  tagline: string
  heroSubtitle: string
  description: string
  longDescription: string
  ctaText: string
  process: ServiceProcess[]
  whyChoose: WhyChooseItem[]
  subServices: SubService[]
}

export const services: Service[] = [
  {
    slogan: "High-Performance",
    title: "Development",
    subHeading: "For the Future",
    slug: "development",
    color: "#4285F4",
    tagline: "Building the Future",
    heroSubtitle: "Full-Stack Development Agency",
    description:
      "We craft robust, scalable, and high-performance digital solutions tailored to your business needs using cutting-edge technologies.",
    longDescription:
      "At Exion Technologies, we engineer powerful digital solutions that form the backbone of your business. From web applications to mobile platforms and custom enterprise solutions, our development team leverages the latest frameworks and best practices to deliver software that performs flawlessly. We believe in clean code, agile methodology, and transparent collaboration that turns your vision into reality.",
    ctaText: "Start Your Project",
    process: [
      { title: "Discovery & Requirements", description: "We deep-dive into your business goals, user needs, and technical requirements to create a comprehensive project brief." },
      { title: "Architecture & Planning", description: "Our architects design scalable system blueprints with clear milestones, tech stack selection, and timeline estimates." },
      { title: "Agile Development", description: "We build iteratively in sprints, sharing progress demos at every stage and incorporating your feedback in real time." },
      { title: "Quality Assurance", description: "Rigorous testing including unit tests, integration tests, and performance audits ensure bulletproof delivery." },
      { title: "Deployment & Launch", description: "Zero-downtime deployments with CI/CD pipelines, monitoring, and rollback strategies for safe launches." },
      { title: "Maintenance & Growth", description: "Ongoing support, feature enhancements, and performance optimization to keep your product ahead of the curve." },
    ],
    whyChoose: [
      { title: "Senior Engineers Only", description: "Every project is staffed with experienced developers who bring 5+ years of hands-on expertise." },
      { title: "Modern Tech Stack", description: "We use React, Next.js, Node.js, TypeScript, and cloud-native tools for future-proof solutions." },
      { title: "Agile & Transparent", description: "Sprint-based delivery with daily standups, weekly demos, and complete project visibility." },
      { title: "Performance First", description: "We optimize for speed, security, and scalability from day one, not as an afterthought." },
    ],
    subServices: [
      {
        title: "Web Development",
        slug: "web-development",
        description:
          "Modern, responsive, and lightning-fast web applications built with Next.js, React, and Node.js that deliver exceptional user experiences.",
        longDescription:
          "Your website is your most powerful business asset. We build modern web applications using Next.js, React, and Node.js that are blazing fast, SEO-optimized, and designed to convert visitors into customers. From progressive web apps to complex enterprise dashboards, our web development team delivers experiences that set you apart from the competition.",
        features: [
          "Progressive Web Apps (PWA)",
          "Single Page Applications (SPA)",
          "Server-Side Rendering (SSR)",
          "Headless CMS Integration",
          "API Development & REST/GraphQL",
          "Performance Optimization",
        ],
        benefits: [
          "40% faster page loads with SSR and edge caching",
          "Mobile-first responsive design for all devices",
          "SEO-optimized architecture for better rankings",
          "Accessible WCAG 2.1 compliant interfaces",
        ],
        tools: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      },
      {
        title: "Mobile App Development",
        slug: "mobile-app-development",
        description:
          "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
        longDescription:
          "Reach your users wherever they are with beautifully crafted mobile applications. We build both native and cross-platform apps using React Native and Flutter, ensuring native-like performance with a single codebase. From concept to App Store launch, we handle every step of your mobile journey.",
        features: [
          "React Native & Flutter Apps",
          "Native iOS (Swift) & Android (Kotlin)",
          "App Store Optimization",
          "Push Notifications & Analytics",
          "Offline-First Architecture",
          "In-App Purchases & Subscriptions",
        ],
        benefits: [
          "Single codebase for iOS and Android, reducing cost by 40%",
          "Native-like performance and smooth animations",
          "Offline functionality for uninterrupted user experience",
          "Deep analytics integration for user behavior insights",
        ],
        tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
      },
      {
        title: "Custom Software Development",
        slug: "custom-software",
        description:
          "Bespoke software solutions designed to solve unique business challenges and streamline operations.",
        longDescription:
          "Off-the-shelf software rarely fits perfectly. We design and build custom software solutions tailored to your exact business processes, eliminating inefficiencies and unlocking new capabilities. From ERP systems to workflow automation, we create tools that give you a competitive edge.",
        features: [
          "Enterprise Resource Planning (ERP)",
          "Customer Relationship Management (CRM)",
          "Inventory Management Systems",
          "Workflow Automation Tools",
          "Data Analytics Dashboards",
          "Legacy System Modernization",
        ],
        benefits: [
          "Perfectly aligned with your business processes",
          "Eliminates manual workflows, saving 20+ hours per week",
          "Scales seamlessly as your business grows",
          "Full ownership with no recurring license fees",
        ],
        tools: ["Python", "Django", ".NET", "PostgreSQL", "Redis", "Docker"],
      },
      {
        title: "Cloud & DevOps",
        slug: "cloud-devops",
        description:
          "Scalable cloud infrastructure and DevOps practices that ensure reliability, security, and rapid deployment.",
        longDescription:
          "Modern applications need modern infrastructure. We architect and manage cloud environments on AWS, Azure, and GCP with DevOps practices that ensure 99.99% uptime, automated deployments, and robust security. From migration to optimization, we make your infrastructure a competitive advantage.",
        features: [
          "AWS, Azure & GCP Solutions",
          "CI/CD Pipeline Setup",
          "Docker & Kubernetes",
          "Infrastructure as Code (IaC)",
          "Monitoring & Alerting",
          "Security & Compliance",
        ],
        benefits: [
          "99.99% uptime with fault-tolerant architectures",
          "Deploy updates in minutes, not days",
          "30-50% cost savings through resource optimization",
          "Enterprise-grade security and compliance",
        ],
        tools: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
      },
    ],
  },
  {
    slogan: "Your Growth Partner in",
    title: "Digital Marketing",
    subHeading: "Strengthening Your Digital Reach",
    slug: "marketing",
    color: "#DB4437",
    tagline: "Strengthening Your Digital Reach",
    heroSubtitle: "Performance-Focused Digital Marketing Agency",
    description:
      "At Exion Technologies, we design powerful digital marketing strategies that connect your brand with the right audience at the right time.",
    longDescription:
      "The digital landscape is more competitive than ever. To stand out, brands need more than visibility -- they need strategy. Exion Technologies partners with businesses to create powerful digital ecosystems that attract attention, convert users, and scale revenue. By combining creativity, data, and performance marketing, we turn ideas into measurable growth and clicks into loyal customers. From brand awareness to customer retention, our marketing solutions are designed to move your business forward.",
    ctaText: "Schedule a Free Strategy Call",
    process: [
      { title: "Business & Market Analysis", description: "We explore your industry, competitors, and customer behavior to uncover opportunities." },
      { title: "Strategic Planning", description: "A tailored digital marketing blueprint built around your goals and KPIs." },
      { title: "Campaign Execution", description: "Coordinated rollout across digital channels with consistent messaging." },
      { title: "Performance Optimization", description: "Data-driven adjustments to improve reach, engagement, and conversions." },
      { title: "Insights & Reporting", description: "Clear reports that highlight progress, impact, and next steps." },
      { title: "Growth & Scaling", description: "Ongoing refinement to support sustainable expansion." },
    ],
    whyChoose: [
      { title: "Seasoned Professionals", description: "A skilled team with hands-on experience across industries and platforms." },
      { title: "Results-Backed Strategies", description: "Every campaign is guided by data, not assumptions." },
      { title: "Tailored Solutions", description: "Your business is unique -- your marketing strategy should be too." },
      { title: "Partnership Mindset", description: "We work as an extension of your team, not just a service provider." },
    ],
    subServices: [
      {
        title: "Search Engine Optimization",
        slug: "seo",
        description:
          "Build long-term visibility and authority. We optimize your website using proven SEO techniques to improve rankings and visibility.",
        longDescription:
          "We optimize your website using proven SEO techniques including keyword research, technical optimization, and authority building to improve rankings and visibility. Our SEO strategies are designed for sustainable, long-term growth that compounds over time, ensuring your business becomes the go-to authority in your niche.",
        features: [
          "Technical SEO Audits",
          "Keyword Research & Strategy",
          "On-Page & Off-Page SEO",
          "Local SEO Optimization",
          "Link Building Campaigns",
          "SEO Performance Tracking",
        ],
        benefits: [
          "Sustainable organic traffic growth that compounds",
          "Higher search visibility for commercial keywords",
          "Reduced dependency on paid advertising",
          "Improved website authority and trust signals",
        ],
        tools: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Surfer SEO", "Google Analytics"],
      },
      {
        title: "Pay-Per-Click Advertising",
        slug: "ppc",
        description:
          "Immediate exposure with controlled spend. Our paid advertising strategies focus on high-intent keywords and compelling creatives.",
        longDescription:
          "Our paid advertising strategies focus on high-intent keywords, compelling ad creatives, and ongoing optimization to maximize ROI. We manage Google Ads, Bing Ads, and display networks to drive targeted traffic to your business, ensuring every dollar spent delivers measurable returns.",
        features: [
          "Google Ads Management",
          "Bing Ads Campaigns",
          "Display & Remarketing",
          "Shopping Ads Optimization",
          "A/B Testing & Experimentation",
          "Bid Strategy Optimization",
        ],
        benefits: [
          "Immediate visibility for high-intent search queries",
          "Full control over budget and targeting",
          "Measurable ROI on every campaign dollar",
          "Quick testing of messaging and offers",
        ],
        tools: ["Google Ads", "Bing Ads", "Google Merchant Center", "Optmyzr", "Google Analytics", "Tag Manager"],
      },
      {
        title: "Social Media Marketing",
        slug: "social-media",
        description:
          "Grow communities, not just followers. We create platform-specific strategies that spark engagement and strengthen brand voice.",
        longDescription:
          "We create platform-specific strategies that spark engagement, strengthen brand voice, and encourage meaningful interactions. Our social media team builds authentic communities around your brand across Facebook, Instagram, LinkedIn, TikTok, and more, turning followers into advocates and advocates into customers.",
        features: [
          "Platform Strategy & Management",
          "Content Calendar Planning",
          "Community Management",
          "Influencer Partnerships",
          "Social Media Advertising",
          "Performance Analytics",
        ],
        benefits: [
          "Authentic community building around your brand",
          "Increased brand awareness and social proof",
          "Direct engagement with your target audience",
          "Multi-platform presence that drives referrals",
        ],
        tools: ["Meta Business Suite", "Hootsuite", "Canva", "Later", "Sprout Social", "TikTok Ads Manager"],
      },
      {
        title: "Content Marketing",
        slug: "content-marketing",
        description:
          "Content that builds trust and drives conversions. From blogs to landing pages, our content supports your SEO and conversion goals.",
        longDescription:
          "From blogs to landing pages, our content educates, builds trust, and supports your SEO and conversion goals. We develop comprehensive content strategies that position your brand as an industry authority, attract organic traffic, and nurture leads through every stage of the buyer journey.",
        features: [
          "Blog & Article Writing",
          "Video Content Production",
          "Infographic Design",
          "Email Newsletter Campaigns",
          "Podcast Production",
          "Content Strategy Development",
        ],
        benefits: [
          "Positions your brand as an industry thought leader",
          "Drives organic traffic that converts over time",
          "Nurtures leads through educational content",
          "Builds lasting trust with your audience",
        ],
        tools: ["WordPress", "HubSpot", "Grammarly", "Canva", "Adobe Premiere", "Mailchimp"],
      },
      {
        title: "E-Commerce Marketing",
        slug: "ecommerce-marketing",
        description:
          "Maximize your online store revenue with targeted campaigns, product feed optimization, and conversion rate strategies.",
        longDescription:
          "We help e-commerce businesses drive more sales through targeted advertising, product feed optimization, and conversion rate strategies. Our e-commerce marketing experts understand the unique challenges of online retail and create data-driven campaigns that turn browsers into buyers and one-time customers into loyal repeat purchasers.",
        features: [
          "Product Feed Optimization",
          "Shopping Campaign Management",
          "Conversion Rate Optimization",
          "Abandoned Cart Recovery",
          "Customer Retention Campaigns",
          "Marketplace Advertising",
        ],
        benefits: [
          "Higher average order values through upsell strategies",
          "Reduced cart abandonment rates",
          "Improved customer lifetime value",
          "Multi-marketplace visibility and sales",
        ],
        tools: ["Shopify", "Google Merchant Center", "Klaviyo", "Hotjar", "Google Optimize", "Facebook Ads"],
      },
      {
        title: "Email Marketing",
        slug: "email-marketing",
        description:
          "Turn interest into loyalty. We design email campaigns that nurture leads, re-engage customers, and increase lifetime value.",
        longDescription:
          "We design email campaigns that nurture leads, re-engage customers, and increase lifetime value through personalization and automation. Our email marketing strategies combine compelling copywriting, beautiful design, and intelligent segmentation to deliver the right message to the right person at the right time.",
        features: [
          "Email Automation Workflows",
          "List Segmentation & Targeting",
          "Newsletter Design & Copywriting",
          "Drip Campaign Development",
          "A/B Subject Line Testing",
          "Deliverability Optimization",
        ],
        benefits: [
          "Highest ROI channel at $42 return per $1 spent",
          "Automated nurture sequences that convert on autopilot",
          "Personalized messaging that resonates with segments",
          "Re-engagement of dormant customers and leads",
        ],
        tools: ["Mailchimp", "Klaviyo", "HubSpot", "SendGrid", "Litmus", "ConvertKit"],
      },
    ],
  },
  {
    slogan: "Building",
    title: "Brand",
    subHeading: "That Endures",
    slug: "branding",
    color: "#F4B400",
    tagline: "Define Your Identity, Own Your Market",
    heroSubtitle: "Strategic Brand Development Agency",
    description:
      "Strategic brand development that creates lasting impressions and establishes your unique market position.",
    longDescription:
      "Your brand is more than a logo. It is the complete experience your customers have with your company. At Exion Technologies, we help you define, design, and deliver a brand identity that resonates with your target audience and stands the test of time. We combine market research, creative strategy, and world-class design to build brands that people remember, trust, and choose -- again and again.",
    ctaText: "Build Your Brand",
    process: [
      { title: "Brand Discovery", description: "Deep-dive workshops to understand your values, vision, competitors, and target audience personas." },
      { title: "Market Research", description: "Comprehensive competitive analysis and market positioning to identify your unique differentiators." },
      { title: "Strategy Development", description: "Defining your brand architecture, messaging framework, voice, and positioning statement." },
      { title: "Creative Design", description: "Crafting visual identity including logo, color palette, typography, and design system." },
      { title: "Brand Rollout", description: "Consistent implementation across all touchpoints -- digital, print, environmental, and social." },
      { title: "Brand Guardianship", description: "Ongoing brand monitoring, guidelines enforcement, and evolution as your business grows." },
    ],
    whyChoose: [
      { title: "Award-Winning Creative Team", description: "Designers and strategists with portfolios spanning Fortune 500 brands to innovative startups." },
      { title: "Research-Driven Approach", description: "Every creative decision is backed by market data, competitor analysis, and audience insights." },
      { title: "Holistic Brand Thinking", description: "We don't just design logos -- we build complete brand ecosystems that work everywhere." },
      { title: "Long-Term Brand Growth", description: "Our brand systems are built to evolve with your business, not become obsolete." },
    ],
    subServices: [
      {
        title: "Brand Identity Design",
        slug: "brand-identity",
        description:
          "Complete brand identity systems that communicate your values and differentiate you from competitors.",
        longDescription:
          "Your brand identity is the visual language that communicates who you are before a single word is read. We create comprehensive brand identity systems including logo design, color palettes, typography, and visual elements that work harmoniously across every touchpoint, from business cards to billboards.",
        features: [
          "Logo Design & Variations",
          "Color Palette Development",
          "Typography Selection",
          "Brand Pattern & Texture Design",
          "Iconography System",
          "Brand Asset Library",
        ],
        benefits: [
          "Instantly recognizable brand presence",
          "Consistent visual language across all platforms",
          "Professional perception that builds trust",
          "Scalable design system for future growth",
        ],
        tools: ["Adobe Illustrator", "Figma", "Adobe Photoshop", "Pantone", "Coolors", "Font Explorer"],
      },
      {
        title: "Brand Strategy",
        slug: "brand-strategy",
        description:
          "Data-informed brand strategies that position your business for long-term success and market leadership.",
        longDescription:
          "Before design comes strategy. We conduct thorough market research, competitive analysis, and audience profiling to develop a brand strategy that positions you for long-term success. Our strategic frameworks define your brand's purpose, personality, and promise -- creating a foundation that every future decision can be built upon.",
        features: [
          "Market Research & Analysis",
          "Competitive Positioning",
          "Brand Messaging Framework",
          "Target Audience Profiling",
          "Brand Voice & Tone Guide",
          "Brand Architecture",
        ],
        benefits: [
          "Clear market positioning that differentiates you",
          "Messaging that resonates with your ideal customer",
          "Strategic foundation for all marketing decisions",
          "Data-backed brand decisions, not guesswork",
        ],
        tools: ["Brandwatch", "SurveyMonkey", "Google Trends", "Semrush", "Miro", "Notion"],
      },
      {
        title: "Visual Design",
        slug: "visual-design",
        description:
          "Stunning visual assets that bring your brand to life across every touchpoint and platform.",
        longDescription:
          "Great brands are visually unforgettable. We create stunning design assets that bring your brand to life across every medium -- digital ads, social media, print materials, packaging, and environmental design. Our designers ensure every pixel and every print reflects your brand's personality and captivates your audience.",
        features: [
          "UI/UX Design",
          "Marketing Collateral",
          "Packaging Design",
          "Environmental/Signage Design",
          "Presentation Templates",
          "Social Media Templates",
        ],
        benefits: [
          "Visually cohesive presence across all channels",
          "Professional collateral that closes deals",
          "On-brand templates for quick content creation",
          "Elevated customer perception and trust",
        ],
        tools: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "After Effects"],
      },
      {
        title: "Brand Guidelines",
        slug: "brand-guidelines",
        description:
          "Comprehensive brand guidelines that ensure consistency across all channels and team members.",
        longDescription:
          "Consistency builds trust, and trust builds brands. We create comprehensive brand guidelines that serve as the definitive reference for how your brand looks, sounds, and behaves across every channel. From internal teams to external agencies, everyone will be aligned on your brand standards.",
        features: [
          "Brand Standards Manual",
          "Usage Guidelines & Rules",
          "Digital Asset Management",
          "Template Systems",
          "Training & Workshops",
          "Brand Audit Services",
        ],
        benefits: [
          "Guaranteed brand consistency across all teams",
          "Faster content creation with clear guidelines",
          "Reduced brand dilution from third-party usage",
          "Easy onboarding for new team members and partners",
        ],
        tools: ["Frontify", "Bynder", "Brandfolder", "Figma", "Notion", "Google Workspace"],
      },
    ],
  },
  {
    slogan: "Elevating",
    title: "E-Commerce",
    subHeading: "To A Luxury Experience",
    slug: "e-commerce",
    color: "#0F9D58",
    tagline: "Sell Smarter, Scale Faster",
    heroSubtitle: "End-to-End E-Commerce Solutions Agency",
    description:
      "End-to-end e-commerce solutions that transform browsers into buyers and drive sustainable revenue growth.",
    longDescription:
      "Whether you are launching your first online store or scaling an enterprise marketplace, we build e-commerce experiences that convert. At Exion Technologies, we combine deep technical expertise with conversion psychology to create online stores that don't just look beautiful -- they drive revenue. From platform selection to payment integration, we handle every aspect of your online retail presence.",
    ctaText: "Launch Your Store",
    process: [
      { title: "E-Commerce Audit", description: "We analyze your current setup, competitors, and market opportunity to identify growth levers." },
      { title: "Platform & Architecture", description: "Selecting the optimal platform and designing a scalable architecture for your business model." },
      { title: "Store Design & Build", description: "Creating conversion-optimized designs with seamless UX, then building to pixel perfection." },
      { title: "Integration & Testing", description: "Connecting payment gateways, shipping APIs, and third-party tools with thorough QA testing." },
      { title: "Launch & Optimization", description: "Strategic launch with monitoring, A/B testing, and continuous conversion optimization." },
      { title: "Growth & Scaling", description: "Multi-channel expansion, marketplace integration, and performance scaling strategies." },
    ],
    whyChoose: [
      { title: "50+ Stores Launched", description: "Proven track record of launching and scaling successful online stores across industries." },
      { title: "Conversion-Focused Design", description: "Every design decision is backed by conversion data and UX best practices." },
      { title: "Full-Stack E-Commerce Team", description: "Designers, developers, and strategists working together for seamless execution." },
      { title: "Post-Launch Growth Support", description: "Ongoing optimization, marketing integration, and scaling strategies after go-live." },
    ],
    subServices: [
      {
        title: "E-Commerce Development",
        slug: "ecommerce-development",
        description:
          "Custom e-commerce platforms built for performance, scalability, and exceptional shopping experiences.",
        longDescription:
          "We build online stores that are engineered for performance and designed for conversion. Whether you need a Shopify storefront, a WooCommerce site, or a fully custom headless commerce solution, our development team creates e-commerce platforms that handle high traffic, complex catalogs, and seamless checkout experiences.",
        features: [
          "Shopify & WooCommerce Development",
          "Custom E-Commerce Platforms",
          "Multi-Vendor Marketplace",
          "Mobile Commerce (M-Commerce)",
          "Headless Commerce Solutions",
          "Progressive Web App Stores",
        ],
        benefits: [
          "Lightning-fast load times that reduce bounce rates",
          "Scalable architecture that grows with your business",
          "Mobile-optimized shopping experiences",
          "Seamless third-party integration capabilities",
        ],
        tools: ["Shopify", "WooCommerce", "Medusa.js", "Next.js Commerce", "Stripe", "Saleor"],
      },
      {
        title: "Store Management",
        slug: "store-management",
        description:
          "Complete store management solutions that keep your e-commerce operations running smoothly.",
        longDescription:
          "Running an online store is more than just listing products. We provide complete store management solutions that streamline your operations, from inventory management to customer service integration, ensuring your e-commerce business runs like a well-oiled machine.",
        features: [
          "Product Catalog Management",
          "Inventory & Order Management",
          "Customer Service Integration",
          "Shipping & Logistics Setup",
          "Returns & Refund Processing",
          "Multi-Channel Selling",
        ],
        benefits: [
          "Automated inventory sync across all channels",
          "Reduced operational overhead and manual work",
          "Faster order fulfillment and delivery",
          "Improved customer satisfaction and retention",
        ],
        tools: ["Shopify Admin", "ShipStation", "Zendesk", "Inventory Planner", "ChannelAdvisor", "Linnworks"],
      },
      {
        title: "Payment Integration",
        slug: "payment-integration",
        description:
          "Secure, seamless payment processing that supports multiple methods and builds customer trust.",
        longDescription:
          "A smooth checkout is where revenue is won or lost. We integrate secure, reliable payment processing systems that support multiple payment methods, currencies, and regions. From Stripe to local payment gateways, we ensure your customers can pay however they prefer with complete confidence.",
        features: [
          "Stripe & PayPal Integration",
          "Local Payment Methods",
          "Subscription Billing",
          "PCI Compliance",
          "Fraud Prevention",
          "Multi-Currency Support",
        ],
        benefits: [
          "Reduced cart abandonment with frictionless checkout",
          "Global reach with multi-currency support",
          "Enterprise-grade security and PCI compliance",
          "Subscription and recurring billing capabilities",
        ],
        tools: ["Stripe", "PayPal", "Square", "Adyen", "JazzCash", "Easypaisa"],
      },
      {
        title: "E-Commerce Strategy",
        slug: "ecommerce-strategy",
        description:
          "Data-driven e-commerce strategies that optimize conversions and maximize revenue.",
        longDescription:
          "Growing an e-commerce business requires more than great products. We develop data-driven strategies that optimize every step of the customer journey -- from first touch to repeat purchase. Our strategists use advanced analytics, user behavior data, and industry benchmarks to create growth playbooks that maximize your revenue potential.",
        features: [
          "Conversion Optimization",
          "Customer Journey Mapping",
          "Pricing Strategy",
          "Upsell & Cross-sell Systems",
          "Loyalty Program Design",
          "Analytics & Performance Tracking",
        ],
        benefits: [
          "Higher conversion rates through optimized funnels",
          "Increased average order value with smart upsells",
          "Data-driven pricing for maximum profitability",
          "Loyal customer base with retention programs",
        ],
        tools: ["Google Analytics", "Hotjar", "Optimizely", "Klaviyo", "LoyaltyLion", "Mixpanel"],
      },
    ],
  },
]

export const teamMembers = [
  {
    name: "Mohsin bin Khalid",
    designation: "Chief Executive Officer (CEO)",
    experience: "4+ Years",
    specialty: "Team Building, Strategic Leadership & Organizational Growth",
    description:
      "A results-oriented executive leader with over 4 years of experience in strategic planning, business development, and high-performing team leadership. Responsible for defining company vision, leading cross-functional teams, and ensuring successful project delivery while maintaining long-term business sustainability and client satisfaction. Strong focus on operational excellence, corporate strategy, and stakeholder management.",
    image: "/team/mohsin.jpg",
    skills: ["Strategic Leadership", "Project Management", "Team Development", "Business Growth", "Client Relations"],
    color: "#4285F4",
    languages: ["English", "Spanish", "Georgian (Basic)", "Urdu"],
  },
  {
    name: "Kamran Ali",
    designation: "Project Manager",
    experience: "5+ Years",
    specialty: "Project Management & Client Relations",
    description:
      "Highly skilled Project Manager with over 5 years of experience in managing projects and client relations. Experienced in collaborating with cross-functional teams and optimizing performance, SEO, and user experience. Proven track record of improving page load times, increasing mobile traffic, and enhancing SEO rankings through modern frontend architecture and performance optimization techniques.",
    image: "/team/kamran.jpg",
    skills: ["Project Management", "Client Relations", "Team Development", "Business Growth", "Client Relations"],
    color: "#4285F4",
  },
  {
    name: "Muhammad Rizwan",
    designation: "Marketing Manager",
    experience: "3+ Years",
    specialty: "Digital Marketing & Brand Growth Strategy",
    description:
      "Results-driven Marketing Manager with over 3 years of hands-on experience in digital marketing, campaign management, and brand growth. Specialized in planning, executing, and optimizing multi-channel marketing campaigns to increase brand visibility, lead generation, and revenue growth. Experienced in collaborating with sales, design, and development teams to ensure marketing initiatives align with business objectives and deliver measurable ROI.",
    image: "/team/rizwan.jpg",
    skills: ["Digital Marketing", "Social Media Marketing", "Performance Marketing", "SEO & SEM", "Lead Generation"],
    color: "#DB4437",
    tools: ["Google Ads", "Meta Ads", "Ahrefs", "SEMrush", "HubSpot"],
  },
  {
    name: "Faisal Naveed",
    designation: "B2B Lead Generation Specialist",
    experience: "5+ Years",
    specialty: "B2B Lead Generation, Prospect Research & Outreach Campaigns",
    description:
      "Highly experienced B2B Lead Generation and Data Research Specialist with over 5 years of professional freelance experience. Successfully collaborated with 200+ Upwork clients and 300+ LinkedIn clients, delivering accurate prospect lists, verified contact data, and structured outreach campaigns. Specialized in building conversion-focused lead systems that help businesses reach decision-makers, generate appointments, and scale sales operations.",
    image: "/team/Faisal.jpg",
    skills: ["B2B Lead Generation", "Prospect Research", "Email Outreach", "LinkedIn Outreach", "CRM Management"],
    color: "#DB4437",
    tools: ["Sales Navigator", "Apollo", "Hunter", "Snov.io"],
  },
  {
    name: "Muhammad Muntazir Mehdi",
    designation: "E-Commerce Specialist",
    experience: "4+ Years",
    specialty: "E-Commerce Management, PPC Optimization & Data-Driven Growth",
    description:
      "Results-oriented E-Commerce Specialist with over 4 years of experience in eBay account management, product research, private label development, and PPC campaign optimization. Demonstrated success in increasing store sales by up to 65% and driving significant revenue growth through strategic listing optimization and data analytics. Skilled in managing multi-channel platforms while improving ROI through detailed market research and performance tracking.",
    image: "/team/Muntazir.jpg",
    skills: ["Store Management", "Product Research", "PPC Strategy", "Listing Optimization", "Data Analytics"],
    color: "#0F9D58",
    tools: ["Shopify", "eBay Seller Hub", "Amazon Seller Central", "Google Analytics"],
  },
  {
    name: "Elsa Ali",
    designation: "Junior Software Developer",
    experience: "2 Years",
    specialty: "Software Development & Programming",
    description:
      "A motivated and detail-oriented Junior Software Developer with 2 years of academic and hands-on experience in software development and programming. Skilled in writing, testing, and debugging code while supporting web and application development projects. Passionate about learning industry-level best practices under senior mentorship and continuously improving technical expertise.",
    image: "/team/elsa.jpg",
    skills: ["C/C++", "Python", "HTML/CSS", "JavaScript", "Debugging", "Testing"],
    color: "#4285F4",
  },
]
