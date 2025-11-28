export const tutorialsData = [
    {
        id: 1,
        title: "Tutorial 01: Airbnb Case Study",
        topic: "L1 & L5",
        caseText: `Airbnb, Inc. is an American online marketplace that connects people seeking accommodations with hosts offering lodging, vacation rentals, or unique stays. Founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe Gebbia, Airbnb started as a small idea of renting out air mattresses in a San Francisco apartment. Today, it has grown into a global hospitality platform, operating in more than 190 countries with millions of active listings worldwide. The company's growth and global reach are supported by the extensive use of management information systems (MIS), which enable efficient decision-making, enhance user experiences, and streamline operations. By leveraging big data, predictive analytics, and cloud-based technologies, Airbnb continuously improves its services for both guests and hosts.

Airbnb operates as an aggregator, connecting customers with service providers without owning inventory. It partners with providers to sell their services under its own brand, ensuring consistent quality and pricing. Airbnb's unique selling proposition is not just space, but an experience, making it more budget friendly and comfortable. It also provides personal profiles and a review system, helping travelers choose hosts and accommodations wisely. Additionally, Airbnb collaborates with a network of freelance photographers to increase property visibility and attract more guests.

Airbnb collects and analyzes large volumes of data, such as user search patterns, booking history, seasonal trends, and location preferences. Machine learning algorithms process this data to provide personalized accommodation recommendations that match individual traveler needs. For instance, guests searching for business stays may be shown listings with strong Wi-Fi ratings and proximity to commercial centers, while vacation travelers might be presented with properties near tourist attractions. The platform's data infrastructure, built on distributed computing and cloud services, enables real-time analysis and delivery of these personalized suggestions.

A key feature of Airbnb's platform is its Smart Pricing tool, which assists hosts in determining optimal prices for their properties. This system analyzes various factors such as local demand, seasonality, competitor rates, special events, and guest booking patterns. Hosts are then able to set competitive yet profitable prices, increasing both occupancy rates and revenue. This revenue management system is an example of MIS being applied to balance host profitability with guest affordability.

Since trust is central to its business model, Airbnb employs MIS-driven systems to maintain platform security. Artificial intelligence and risk assessment tools detect fraudulent activity, fake accounts, or suspicious payment behavior. Identity verification, review systems, and host response rate tracking are integrated into the platform to promote transparency and reliability. These measures strengthen the trust between hosts and guests, making the platform safer and more dependable for millions of users.`,
        questions: [
            {
                q: "1. Explain how does Airbnb refine its Information System to align with and support the company's strategic objectives?",
                a: "Airbnb aligns IS with strategy by using Big Data and predictive analytics to achieve 'Customer Intimacy' (personalized recommendations) and 'Operational Excellence' (Smart Pricing tool). Their system supports the strategic goal of global reach without physical assets."
            },
            {
                q: "2. How does Airbnb demonstrate the characteristics of an emerging digital firm?",
                a: "It manages core assets digitally (brand, network of hosts). It senses and responds rapidly to environmental changes (demand fluctuations). It offers flexibility in time (24/7 booking) and space (global operations) without traditional physical constraints."
            },
            {
                q: "3. What are the key drivers of Airbnb's competitive advantage?",
                a: "1. Network Effects (more hosts = more guests). 2. Smart Pricing (Data-driven revenue management). 3. Trust System (Reviews/Identity verification reducing information asymmetry). 4. Low marginal cost of adding inventory."
            },
            {
                q: "7. Explain how Airbnb's platform performs the four functions of an information system.",
                a: "Input: User searches, host listings, reviews. Processing: Matching algorithms, dynamic pricing calculations, fraud detection. Output: Search results, booking confirmations, revenue reports. Feedback: Reviews and ratings system."
            }
        ]
    },
    {
        id: 2,
        title: "Tutorial 02: Netflix Case Study",
        topic: "L3 & L7",
        caseText: `Netflix, founded in 1997 as a DVD-by-mail service, has grown into the world's leading subscription-based video streaming platform, now serving over 260 million subscribers. Its transformation illustrates how disruptive technologies and strategic use of IS can reshape an entire industry.

Netflix integrates information systems across all management levels. At the operational level, it uses automated systems for billing and support. At the managerial level, analytics dashboards provide insights into churn and regional demand. At the strategic level, executives rely on predictive analytics and big data intelligence to greenlight multi-million-dollar productions. The recommendation engine, powered by AI, guides more than 80% of user viewing.

Netflix's operations are supported by all major business functions. In marketing, advanced analytics drive targeted campaigns. In finance, real-time systems monitor subscription revenues. Functions are integrated through cross-functional processes; for example, launching a new original series requires collaboration between content production, finance, marketing, and HR.

The company's heavy investment in technology has been a key driver of financial success. Netflix pioneered streaming services by leveraging AWS for global scalability. Its AI-driven personalization system differentiates the platform from rivals.

Netflix's industry position can be examined using Porter's Five Forces. Threat of new entrants is moderate (high cost of content). Rivalry is intense (Disney+, Amazon). Supplier power is high (studios), prompting Netflix to produce original content. Buyer power is significant (low switching costs). Substitutes are high (YouTube, gaming).`,
        questions: [
            {
                q: "1. Identify and explain two functional business processes at Netflix.",
                a: "Marketing: Running targeted campaigns based on user viewing history. Finance: Managing subscription billing and forecasting cash flows for content production."
            },
            {
                q: "3. Classify Netflix's information systems to operational, managerial, and strategic levels.",
                a: "Operational: TPS for processing monthly subscription payments. Managerial: MIS for reporting churn rates by region. Strategic: ESS for deciding which original content genres to invest in over the next 5 years."
            },
            {
                q: "4. Explain how Netflix's use of business intelligence provides a competitive advantage.",
                a: "Their recommendation engine (BI) keeps users engaged, reducing churn (Survival/Customer Intimacy). Predictive analytics allows them to produce content they *know* will succeed (House of Cards), reducing the risk of flops."
            }
        ]
    },
    {
        id: 3,
        title: "Tutorial 03: TechnoFurniture (ERP)",
        topic: "L4",
        caseText: `TechnoFurniture Inc. is a rapidly growing furniture manufacturing company. However, it is experiencing significant operational challenges due to fragmented information systems. Sales uses one system, manufacturing another, and procurement relies on spreadsheets. This fragmentation has resulted in inaccurate inventory levels (stockouts of popular items), increased customer complaints (40% increase), and the bullwhip effect causing massive inefficiencies in the supply chain.

The CEO, Maria Rodriguez, noticed that despite a 25% increase in sales revenue, profit margins have decreased due to operational inefficiencies. Customer data is scattered across different touchpoints. Suppliers are frustrated with inconsistent ordering patterns. Maria realizes they need to implement integrated enterprise applications.`,
        questions: [
            {
                q: "1. Identify problems due to fragmented systems and how an ERP addresses them.",
                a: "Problems: Data redundancy, lack of visibility (stockouts), poor coordination between sales and production. ERP Solution: A single central database ensures that when a sale is made, inventory is instantly updated, and production schedules are adjusted automatically."
            },
            {
                q: "3. Compare Push vs Pull supply chain models for this company.",
                a: "Current (Push): Build-to-stock based on guesses -> leads to Bullwhip effect and excess inventory. Proposed (Pull/Demand-Driven): Manufacturing is triggered by actual customer orders. This reduces inventory costs and improves responsiveness."
            }
        ]
    },
    {
        id: 4,
        title: "Tutorial 04: Music Industry",
        topic: "L5",
        caseText: `In the early 2000s, the global music industry was dominated by physical goods (CDs). Customers faced high search and transaction costs. With the rise of the Internet, the market shifted toward digital goods (streaming/downloads).

Digital platforms use ubiquity, global reach, and universal standards. A user in Colombo can listen to the same song as someone in London instantly. Traditional markets had high information asymmetry (consumers didn't know true costs). In digital markets, asymmetry is reduced. The marginal cost of producing the second unit of a digital song is nearly zero. This led to disintermediation, bypassing distributors.`,
        questions: [
            {
                q: "1. Define 'digital goods' and 'traditional goods' using examples.",
                a: "Traditional: Physical CD. High marginal cost to produce each unit. Inventory costs exist. Digital: MP3/Stream. Zero marginal cost for the 2nd unit. No inventory cost."
            },
            {
                q: "4. What is disintermediation?",
                a: "The removal of intermediaries (distributors, retail stores). Artists can sell directly to platforms like Spotify or even directly to consumers, lowering the final price."
            }
        ]
    },
    {
        id: 5,
        title: "Tutorial 05: Handcraft Hub & MediCare",
        topic: "L5 & L6",
        caseText: `[CASE 1: HANDCRAFT HUB]
Handcraft Hub is a global online marketplace that connects independent artisans, crafters, and vintage collectors with consumers seeking unique products. Founded in 2008, it operates as an intermediary platform where individual sellers can set up shops. The platform charges sellers listing fees, transaction fees, and optional advertising fees. It expanded mobile capabilities and integrated social media shopping (Instagram/Pinterest). It also introduced "Handcraft Wholesale" for B2B bulk sales.

[CASE 2: MEDICARE]
MediCare is a network of 12 hospitals with 5,000 medical staff. Challenges included doctors being unaware of successful treatments used by colleagues, new nurses taking too long to learn, and knowledge loss when experts retired.
Solutions Implemented:
1. Digital Library: Doctors upload case studies, protocols, videos.
2. Find an Expert System: Search for specialists in rare diseases.
3. MediCare Learning Portal (LMS): Training modules for nurses.
4. Discussion Forums: Sharing experiences on difficult cases.
Results: 40% reduction in errors, faster nurse training (3 months vs 6), 25% increase in patient satisfaction.`,
        questions: [
            {
                q: "1. (Handcraft Hub) Identify and explain three different types of e-commerce engaged in.",
                a: "1. C2C (Consumer-to-Consumer): Individual artisans selling to individual buyers. 2. B2C (Business-to-Consumer): If established businesses sell on the platform. 3. B2B (Business-to-Business): 'Handcraft Wholesale' allowing bulk sales to retail stores."
            },
            {
                q: "2. (Handcraft Hub) How does integration with social media represent a specific e-commerce category?",
                a: "This represents 'Social Commerce'. It allows sellers to promote products on Instagram/Pinterest, leveraging social graphs to drive sales and utilizing the 'Social Technology' feature of e-commerce."
            },
            {
                q: "3. (Handcraft Hub) What role does it play in C2C transactions and how does it generate revenue?",
                a: "Role: Intermediary/Platform Provider (Market Creator). Revenue Models: Transaction Fees (commission on sales), Listing Fees, and Advertising Fees."
            },
            {
                q: "4. (MediCare) Why does MediCare need Knowledge Management?",
                a: "To prevent 'Knowledge Loss' (experts retiring) and to improve 'Knowledge Sharing' (doctors unaware of colleagues' success). It addresses the issue of Tacit Knowledge (in heads) needing to be made Explicit (documented)."
            },
            {
                q: "5. (MediCare) The 'Find an Expert' system is what type of KMS?",
                a: "This is a 'Knowledge Network System' (or Knowledge Directory). It doesn't store the knowledge itself but points to the person who holds the tacit knowledge."
            },
            {
                q: "6. (MediCare) What type of KMS is the Learning Portal?",
                a: "Learning Management System (LMS). It automates the administration, delivery, and tracking of training programs."
            }
        ]
    }]
