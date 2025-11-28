import {
    BookOpen, FileText, CheckSquare, Menu, X, ChevronRight, ChevronDown,
    Monitor, Database, Globe, Brain, BarChart, ShoppingCart, Layers,
    Search, ArrowRight, Book, HelpCircle, AlertCircle, Users, Cpu, Briefcase
} from 'lucide-react';

export const lecturesData = [
    {
        id: 1,
        title: "L1: Foundations of IS",
        icon: <Monitor size={18} />,
        content: (
            <div className="space-y-8 text-gray-800 leading-relaxed">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-blue-900">Foundations of Information Systems</h1>
                    <p className="text-lg text-gray-600 mt-2">Business & Organization Context</p>
                </div>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><Globe className="mr-2" /> 1. The Changing MIS Landscape</h2>
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <h4 className="font-bold text-blue-900 mb-2">5 Paramount Changes Reshaping MIS:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><strong>IT Innovations:</strong> Continuous advancements creating new opportunities.</li>
                            <li><strong>New Business Models:</strong> New ways to produce/deliver (e.g., Netflix, Uber).</li>
                            <li><strong>E-commerce Expansion:</strong> Transformation of retail and business.</li>
                            <li><strong>Management Changes:</strong> Shifts in strategies required by new tech.</li>
                            <li><strong>Changes in Firms:</strong> Structure/operations evolving to leverage tech.</li>
                        </ul>
                    </div>

                    <h3 className="font-bold text-lg mb-2">Globalization & The Digital Firm</h3>
                    <p className="mb-3 text-sm"><strong>The Digital Firm:</strong> A firm where nearly all significant business relationships (customers, suppliers, employees) are digitally enabled. Core processes and key assets (IP, competencies) are managed digitally.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="border p-3 rounded">
                            <span className="font-bold block text-indigo-700">Time Shifting</span>
                            Business conducted 24/7.
                        </div>
                        <div className="border p-3 rounded">
                            <span className="font-bold block text-indigo-700">Space Shifting</span>
                            Work takes place in a global workshop.
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><Briefcase className="mr-2" /> 2. Six Strategic Business Objectives</h2>
                    <div className="grid grid-cols-1 gap-3">
                        {[
                            { t: "1. Operational Excellence", d: "Higher efficiency/productivity = Higher Profitability. Example: Walmart's Retail Link system linking suppliers to stores." },
                            { t: "2. New Products, Services, & Models", d: "IS is a major enabler. Example: Apple's iPad created a new market for tablets." },
                            { t: "3. Customer & Supplier Intimacy", d: "Serving customers well -> Repeat business. Engaging suppliers -> Lower costs. Example: High-end hotels tracking preferences." },
                            { t: "4. Improved Decision Making", d: "Real-time data replaces forecasts/guesses. Avoids over/under-production." },
                            { t: "5. Competitive Advantage", d: "Delivering better performance, charging less, responding faster. Example: UPS." },
                            { t: "6. Survival", d: "Necessity to compete (e.g., ATMs for banks) or regulatory compliance (e.g., Sarbanes-Oxley Act)." }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                                <h4 className="font-bold text-gray-900 text-sm">{item.t}</h4>
                                <p className="text-sm text-gray-700 mt-1">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><Database className="mr-2" /> 3. What is an Information System?</h2>
                    <p className="mb-4 text-sm">Set of interrelated components that collect, process, store, and distribute information to support decision making, coordination, and control.</p>

                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1 bg-green-50 p-3 rounded border border-green-200">
                            <strong className="block text-green-800">Data</strong>
                            <span className="text-sm">Streams of raw facts.</span>
                        </div>
                        <div className="flex-1 bg-green-50 p-3 rounded border border-green-200">
                            <strong className="block text-green-800">Information</strong>
                            <span className="text-sm">Data shaped into meaningful form.</span>
                        </div>
                    </div>

                    <h3 className="font-bold text-sm mb-2">Core Functions:</h3>
                    <ul className="list-decimal pl-5 text-sm space-y-1 mb-6">
                        <li><strong>Input:</strong> Captures raw data.</li>
                        <li><strong>Processing:</strong> Converts raw data into meaningful form.</li>
                        <li><strong>Output:</strong> Transfers processed information to users.</li>
                        <li><strong>Feedback:</strong> Output returned to evaluate/correct input.</li>
                    </ul>

                    <h3 className="font-bold text-sm mb-2">Three Dimensions of IS (Sociotechnical):</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                        <li><strong>Organizational:</strong> Hierarchy, business processes, culture, politics.</li>
                        <li><strong>Management:</strong> Strategy, leadership, creating new products.</li>
                        <li><strong>Technology:</strong> Hardware, software, data mgmt, networking.</li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><Brain className="mr-2" /> 4. Complementary Assets</h2>
                    <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                        <p className="text-sm font-semibold mb-2 text-yellow-900">Concept: Investment in IT alone does not guarantee returns. It requires:</p>
                        <div className="space-y-2 text-sm">
                            <p><strong>Organizational Assets:</strong> Supportive culture, efficient processes, decentralized authority.</p>
                            <p><strong>Managerial Assets:</strong> Senior management support, incentives for innovation, teamwork.</p>
                            <p><strong>Social Assets:</strong> Internet infrastructure, educational standards, laws/regulations.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 2,
        title: "L2: Functional Perspectives",
        icon: <Layers size={18} />,
        content: (
            <div className="space-y-8 text-gray-800 leading-relaxed">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-blue-900">Functional Perspectives</h1>
                    <p className="text-lg text-gray-600 mt-2">Processes, Systems & Collaboration</p>
                </div>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">1. Business Processes</h2>
                    <p className="mb-4 text-sm">Manner in which work is organized, coordinated, and focused to produce a valuable product. Collection of activities supported by flows of material, info, and knowledge.</p>

                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                        <h4 className="font-bold text-sm mb-2">How IS Enhances Business Processes:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm list-disc pl-5">
                            <li>Increase Efficiency (Automate manual steps).</li>
                            <li>Enable entirely new processes (e.g., online shopping).</li>
                            <li>Improve Information Flow (Instant availability).</li>
                            <li>Support Parallel Steps (Simultaneous tasks).</li>
                            <li>Eliminate Delays (Rapid decision making).</li>
                            <li>Support New Business Models (e.g., Uber).</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">2. Systems by Management Group</h2>

                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-bold text-lg text-blue-900">1. Transaction Processing Systems (TPS)</h3>
                            <p className="text-xs font-bold text-gray-500 uppercase">Level: Operational</p>
                            <p className="text-sm mt-1">Perform and record daily routine transactions (sales, payroll, shipping). Highly structured. Major producers of data for other systems. Failure is catastrophic.</p>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4">
                            <h3 className="font-bold text-lg text-yellow-900">2. Management Information Systems (MIS)</h3>
                            <p className="text-xs font-bold text-gray-500 uppercase">Level: Middle Management</p>
                            <p className="text-sm mt-1">Provide reports on firm's current performance based on TPS data. Answer structured, routine questions (e.g., "Total sales last month?"). Not flexible, little analytic capability.</p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="font-bold text-lg text-orange-900">3. Decision Support Systems (DSS)</h3>
                            <p className="text-xs font-bold text-gray-500 uppercase">Level: Middle Management</p>
                            <p className="text-sm mt-1">Support non-routine decision making. Unique, rapidly changing problems.
                                <br />- <strong>Data-driven:</strong> Analyze large pools of data (buying patterns).
                                <br />- <strong>Model-driven:</strong> Mathematical models (voyage estimating).</p>
                        </div>

                        <div className="border-l-4 border-red-500 pl-4">
                            <h3 className="font-bold text-lg text-red-900">4. Executive Support Systems (ESS)</h3>
                            <p className="text-xs font-bold text-gray-500 uppercase">Level: Senior Management</p>
                            <p className="text-sm mt-1">Support long-term, non-routine decisions requiring judgment/insight. Incorporate external data (market trends). Use <strong>Digital Dashboards</strong> for KPIs.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">3. Collaboration & Social Business</h2>
                    <div className="space-y-3">
                        <p className="text-sm"><strong>Collaboration:</strong> Working with others to achieve shared goals. Driven by changing nature of work, flattening organizations, and innovation.</p>
                        <p className="text-sm"><strong>Social Business:</strong> Using social platforms (internal/external) to deepen interactions. Relies on "conversations" and transparency.</p>
                        <div className="bg-green-50 p-3 rounded text-sm text-green-800 border border-green-200">
                            <strong>Business Benefits:</strong> Productivity, Quality, Innovation, Customer Service, Financial Performance.
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 3,
        title: "L3: IS, Org & Strategy",
        icon: <BarChart size={18} />,
        content: (
            <div className="space-y-8 text-gray-800 leading-relaxed">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-blue-900">Organizations & Strategy</h1>
                    <p className="text-lg text-gray-600 mt-2">Organizational Features & Competitive Advantage</p>
                </div>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">1. Key Features of Organizations</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>Routines & Business Processes:</strong> Standard Operating Procedures (SOPs) developed to cope with expected situations.</li>
                        <li><strong>Organizational Politics:</strong> Divergent viewpoints on resources/rewards lead to political struggle.</li>
                        <li><strong>Organizational Culture:</strong> Fundamental assumptions about goals/products. Unifying force but restraint on change.</li>
                        <li><strong>Environments:</strong> Reciprocal relationship. Environments change faster than organizations.</li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">2. Disruptive Technologies</h2>
                    <p className="mb-3 text-sm">Technologies bringing drastic change to businesses.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-gray-50 p-3 rounded">
                            <strong>Substitute Products</strong>
                            <p>Perform better than existing (e.g., Digital photography vs Film).</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                            <strong>Market Extension</strong>
                            <p>Extend market with less functionality/lower cost (e.g., Disk drives).</p>
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600"><strong>First Movers vs Fast Followers:</strong> Inventors don't always benefit. Fast followers (who copy/improve) often reap rewards.</p>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">3. Organizational Structure (Mintzberg)</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border text-left">Structure</th>
                                    <th className="p-2 border text-left">Description</th>
                                    <th className="p-2 border text-left">Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="p-2 border font-bold">Entrepreneurial</td><td className="p-2 border">Flat, single leader.</td><td className="p-2 border">Small Startup</td></tr>
                                <tr><td className="p-2 border font-bold">Machine Bureaucracy</td><td className="p-2 border">Standardized, rigid.</td><td className="p-2 border">Manufacturing Firm</td></tr>
                                <tr><td className="p-2 border font-bold">Divisionalized</td><td className="p-2 border">Semi-autonomous units + HQ.</td><td className="p-2 border">General Motors</td></tr>
                                <tr><td className="p-2 border font-bold">Professional Bureaucracy</td><td className="p-2 border">Knowledge-based, skilled pros.</td><td className="p-2 border">Law Firms, Hospitals</td></tr>
                                <tr><td className="p-2 border font-bold">Adhocracy</td><td className="p-2 border">Flexible, multidisciplinary teams.</td><td className="p-2 border">Consulting/Tech Firms</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">4. Impacts of IS</h2>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-sm text-indigo-800">Economic Impacts</h4>
                            <ul className="list-disc pl-5 text-sm">
                                <li><strong>Transaction Cost Theory:</strong> IT lowers market transaction costs, making it cheaper to outsource (firms shrink).</li>
                                <li><strong>Agency Theory:</strong> IT reduces agency costs by making it easier to supervise employees (reduces mgmt costs).</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-indigo-800">Behavioral Impacts</h4>
                            <ul className="list-disc pl-5 text-sm">
                                <li><strong>Flattening:</strong> IT pushes decision making lower, increasing span of control.</li>
                                <li><strong>Resistance:</strong> Most common reason for failure. IS alters routines, structure, and politics.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">5. Competitive Advantage Models</h2>

                    <div className="mb-6">
                        <h3 className="font-bold text-md mb-2">A. Porter's Competitive Forces</h3>
                        <p className="text-sm mb-2">Strategic position determined by competition with traditional competitors and:</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {["New Entrants", "Substitute Products", "Customers (Bargaining Power)", "Suppliers (Bargaining Power)"].map(f => (
                                <span key={f} className="px-2 py-1 bg-red-100 text-red-800 rounded border border-red-200">{f}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-bold text-md mb-2">B. Four Generic Strategies</h3>
                        <ul className="list-decimal pl-5 text-sm space-y-1">
                            <li><strong>Low-Cost Leadership:</strong> Lowest operational costs/prices (Walmart).</li>
                            <li><strong>Product Differentiation:</strong> New products/convenience (Google, Nike).</li>
                            <li><strong>Focus on Market Niche:</strong> Specific target market (Hilton).</li>
                            <li><strong>Customer/Supplier Intimacy:</strong> Strong ties/Loyalty (Amazon, Chrysler).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-md mb-2">C. Value Chain & Network Strategies</h3>
                        <div className="text-sm space-y-2">
                            <p><strong>Value Chain:</strong> Primary Activities (Logistics, Ops, Sales) + Support Activities (HR, Tech). <strong>Value Web:</strong> Network of independent firms using IT to coordinate value chains.</p>
                            <p><strong>Synergies:</strong> Output of one unit = input of another.</p>
                            <p><strong>Core Competencies:</strong> Activity where firm is world-class leader.</p>
                            <p><strong>Network Economics:</strong> Value grows with community size (marginal cost ~0).</p>
                            <p><strong>Business Ecosystems:</strong> Interdependent networks (Keystone firms vs Niche firms).</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 4,
        title: "L4: Enterprise Apps",
        icon: <Database size={18} />,
        content: (
            <div className="space-y-8 text-gray-800 leading-relaxed">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-blue-900">Enterprise Applications</h1>
                    <p className="text-lg text-gray-600 mt-2">ERP, SCM, CRM, KMS</p>
                </div>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">1. Enterprise Systems (ERP)</h2>
                    <p className="mb-3 text-sm">Integrate core internal business processes into a single software system with a central database. Resolves fragmented data.</p>
                    <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-900 text-sm">Business Value</h4>
                        <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Increases operational efficiency.</li>
                            <li>Provides firm-wide information for decision making.</li>
                            <li>Enables rapid response to customer requests.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">2. Supply Chain Management (SCM)</h2>
                    <p className="mb-3 text-sm">Network of organizations/processes for procuring, transforming, and distributing products. Includes Upstream, Downstream, and Internal supply chains.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 border rounded bg-red-50">
                            <span className="font-bold text-red-800 block text-sm">Challenge: Bullwhip Effect</span>
                            <span className="text-xs">Info about demand gets distorted as it passes up the supply chain. SCM reduces this.</span>
                        </div>
                        <div className="p-3 border rounded bg-green-50">
                            <span className="font-bold text-green-800 block text-sm">Models</span>
                            <span className="text-xs"><strong>Push:</strong> Build-to-stock (Forecast/Best guess).<br /><strong>Pull:</strong> Demand-driven (Customer orders trigger events).</span>
                        </div>
                    </div>
                    <p className="text-sm font-semibold">Value: Match supply to demand, reduce inventory, speed time to market.</p>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">3. Customer Relationship Management (CRM)</h2>
                    <p className="mb-3 text-sm">Capture, integrate, and analyze customer data from all touchpoints to provide a single enterprise view.</p>
                    <div className="space-y-2 mb-3">
                        <div className="bg-gray-50 p-3 rounded border">
                            <h4 className="font-bold text-sm">Operational CRM</h4>
                            <p className="text-xs">Customer-facing applications (Sales force automation, Call centers, Marketing automation).</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded border">
                            <h4 className="font-bold text-sm">Analytical CRM</h4>
                            <p className="text-xs">Analyzes customer data (from data warehouse). Identifies profitable customers, churn rate, and <strong>Customer Lifetime Value (CLTV)</strong>.</p>
                        </div>
                    </div>
                    <p className="text-sm font-semibold">Value: Increased satisfaction, reduced churn, lower acquisition costs.</p>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">4. Challenges & Trends</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-sm text-red-700">Challenges</h4>
                            <ul className="list-disc pl-5 text-xs">
                                <li>Expensive and time-consuming.</li>
                                <li>Requires technology + organizational change.</li>
                                <li>Dependence on software vendors.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-green-700">Next-Gen Trends</h4>
                            <ul className="list-disc pl-5 text-xs">
                                <li><strong>Social CRM:</strong> Using social networks to engage.</li>
                                <li><strong>Business Intelligence:</strong> Flexible reporting included.</li>
                                <li>Cloud-based, mobile-friendly versions.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 5,
        title: "L5: E-Commerce",
        icon: <ShoppingCart size={18} />,
        content: (
            <div className="space-y-8 text-gray-800 leading-relaxed">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-blue-900">E-Commerce</h1>
                    <p className="text-lg text-gray-600 mt-2">Digital Markets & Digital Goods</p>
                </div>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">1. Eight Unique Features</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-medium">
                        <div className="p-2 bg-blue-50 rounded border">Ubiquity</div>
                        <div className="p-2 bg-blue-50 rounded border">Global Reach</div>
                        <div className="p-2 bg-blue-50 rounded border">Universal Standards</div>
                        <div className="p-2 bg-blue-50 rounded border">Richness</div>
                        <div className="p-2 bg-blue-50 rounded border">Interactivity</div>
                        <div className="p-2 bg-blue-50 rounded border">Info Density</div>
                        <div className="p-2 bg-blue-50 rounded border">Personalization</div>
                        <div className="p-2 bg-blue-50 rounded border">Social Tech</div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">2. Digital Markets & Goods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded">
                            <h4 className="font-bold text-gray-900 mb-2">Digital Markets</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li>Reduced Information Asymmetry.</li>
                                <li>Reduced Search/Transaction Costs.</li>
                                <li><strong>Dynamic Pricing:</strong> Price varies based on demand.</li>
                                <li><strong>Disintermediation:</strong> Removal of intermediaries (lowers cost).</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <h4 className="font-bold text-gray-900 mb-2">Digital Goods</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li>Delivered over digital network (Music, SW).</li>
                                <li>Cost of 1st unit: High (entire cost).</li>
                                <li>Marginal cost of 2nd unit: ~Zero.</li>
                                <li>Delivery cost: Low.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">3. Types & Models</h2>
                    <div className="flex gap-2 mb-4 justify-center">
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">B2C (Retail)</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">B2B (Sales)</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">C2C (eBay)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="border p-3 rounded bg-white">
                            <strong className="block mb-2 text-indigo-700">Business Models</strong>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                                <li>Portal (Google)</li>
                                <li>E-tailer (Amazon)</li>
                                <li>Content Provider (Netflix)</li>
                                <li>Transaction Broker (E*Trade)</li>
                                <li>Market Creator (eBay, Uber)</li>
                                <li>Service Provider (Salesforce)</li>
                                <li>Community Provider (Facebook)</li>
                            </ul>
                        </div>
                        <div className="border p-3 rounded bg-white">
                            <strong className="block mb-2 text-indigo-700">Revenue Models</strong>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                                <li>Advertising</li>
                                <li>Sales</li>
                                <li>Subscription</li>
                                <li>Free/Freemium</li>
                                <li>Transaction Fee</li>
                                <li>Affiliate</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">4. Social & M-Commerce</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Social E-Commerce:</strong> Based on digital social graph (mapping significant relationships).</p>
                        <p><strong>M-Commerce:</strong> Use of handheld devices. Fastest growing. Enables location-based services (Geosocial, Geo-advertising, Geoinformation).</p>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 6,
        title: "L6: Managing Knowledge",
        icon: <Brain size={18} />,
        content: (
            <div className="space-y-8 text-gray-800 leading-relaxed">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-blue-900">Managing Knowledge</h1>
                    <p className="text-lg text-gray-600 mt-2">KMS, Value Chain & Intelligent Techniques</p>
                </div>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">1. Important Dimensions</h2>
                    <div className="flex flex-col gap-3">
                        <div className="bg-blue-50 p-3 rounded text-sm">
                            <strong>Hierarchy:</strong> Data &rarr; Information &rarr; Knowledge &rarr; Wisdom
                        </div>
                        <div className="bg-blue-50 p-3 rounded text-sm">
                            <strong>Forms:</strong> <span className="text-purple-700 font-bold">Tacit</span> (in minds, unstructured) vs <span className="text-purple-700 font-bold">Explicit</span> (documented, structured).
                        </div>
                        <p className="text-xs italic mt-1">Knowledge is sticky (hard to move), situated (in culture), and contextual.</p>
                        <p className="text-sm"><strong>Organizational Learning:</strong> Learning by collecting data, gaining experience, adjusting behavior.</p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">2. The KM Value Chain</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center">
                        <div className="p-3 bg-green-50 border border-green-200 rounded">
                            <div className="font-bold text-sm text-green-900">1. Acquisition</div>
                            <div className="text-xs mt-1">Documenting/Creating</div>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded">
                            <div className="font-bold text-sm text-green-900">2. Storage</div>
                            <div className="text-xs mt-1">Databases/CMS</div>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded">
                            <div className="font-bold text-sm text-green-900">3. Dissemination</div>
                            <div className="text-xs mt-1">Portals/Search/Collab</div>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded">
                            <div className="font-bold text-sm text-green-900">4. Application</div>
                            <div className="text-xs mt-1">New Processes/Decisions</div>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">3. Types of KM Systems</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-indigo-500 pl-4 bg-gray-50 py-2">
                            <h4 className="font-bold text-sm">A. Enterprise-Wide KMS</h4>
                            <p className="text-xs mt-1">General purpose.
                                <br />- <strong>Enterprise Content Mgmt (ECM):</strong> Manage structured/semi-structured content.
                                <br />- <strong>Knowledge Network Systems:</strong> Directories of experts.
                                <br />- <strong>Learning Mgmt Systems (LMS):</strong> Employee training.</p>
                        </div>
                        <div className="border-l-4 border-pink-500 pl-4 bg-gray-50 py-2">
                            <h4 className="font-bold text-sm">B. Knowledge Work Systems (KWS)</h4>
                            <p className="text-xs mt-1">Specialized for knowledge workers (scientists/engineers). Examples: CAD, Virtual Reality (VR), Investment workstations.</p>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-4 bg-gray-50 py-2">
                            <h4 className="font-bold text-sm">C. Intelligent Techniques</h4>
                            <ul className="list-disc pl-5 text-xs mt-1">
                                <li><strong>Expert Systems:</strong> Capture tacit knowledge as rules (If/Then). Uses Inference Engine.</li>
                                <li><strong>Case-Based Reasoning (CBR):</strong> Database of past cases/solutions.</li>
                                <li><strong>Machine Learning:</strong> Recognizes patterns, learns from experience.</li>
                                <li><strong>Intelligent Agents:</strong> Background tasks (e.g., Siri).</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 7,
        title: "L7: Decision Making",
        icon: <BarChart size={18} />,
        content: (
            <div className="space-y-8 text-gray-800 leading-relaxed">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-blue-900">Enhancing Decision Making</h1>
                    <p className="text-lg text-gray-600 mt-2">BI, Analytics, and Processes</p>
                </div>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">1. Decision Making Framework</h2>
                    <p className="text-sm mb-3">Value: Improving "small" decisions adds up to large value.</p>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
                        <div className="bg-green-50 p-2 rounded border border-green-200">
                            <div className="font-bold text-green-900">Structured</div>
                            <div className="text-[10px]">Repetitive, Routine (Ops)</div>
                        </div>
                        <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
                            <div className="font-bold text-yellow-900">Semistructured</div>
                            <div className="text-[10px]">Partly Clear (Middle)</div>
                        </div>
                        <div className="bg-red-50 p-2 rounded border border-red-200">
                            <div className="font-bold text-red-900">Unstructured</div>
                            <div className="text-[10px]">Judgment, Insight (Senior)</div>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-sm text-center">
                        <strong>Simon's Process:</strong> Intelligence &rarr; Design &rarr; Choice &rarr; Implementation.
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">2. Business Intelligence (BI) Environment</h2>
                    <p className="mb-4 text-sm"><strong>BI:</strong> Infrastructure for collecting/storing/analyzing data. <strong>Analytics:</strong> Tools/techniques (OLAP, Mining).</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-3 rounded border">
                            <h4 className="font-bold text-sm mb-2 text-indigo-800">6 Elements of BI Environment</h4>
                            <ol className="list-decimal pl-5 text-xs space-y-1">
                                <li>Data from business environment</li>
                                <li>BI Infrastructure (DB/Data Warehouse)</li>
                                <li>Business Analytics Toolset</li>
                                <li>Managerial Users & Methods</li>
                                <li>Delivery Platform (MIS, DSS, ESS)</li>
                                <li>User Interface (Visualization)</li>
                            </ol>
                        </div>
                        <div className="bg-gray-50 p-3 rounded border">
                            <h4 className="font-bold text-sm mb-2 text-indigo-800">BI Capabilities</h4>
                            <ul className="list-disc pl-5 text-xs space-y-1">
                                <li>Production/Parameterized Reports</li>
                                <li>Dashboards/Scorecards</li>
                                <li>Ad-hoc Query / Drill-down</li>
                                <li>Forecasts/Scenarios/Models</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-blue-800 mb-4">3. Advanced Analytics & Constituencies</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-purple-50 p-2 rounded text-center border"><strong>Predictive Analytics</strong><br />Predict future trends using history/stats.</div>
                            <div className="bg-purple-50 p-2 rounded text-center border"><strong>Big Data Analytics</strong><br />Massive datasets (sensors/social).</div>
                            <div className="bg-purple-50 p-2 rounded text-center border"><strong>Location Analytics</strong><br />Geographic insights (GIS).</div>
                        </div>

                        <div className="border-t pt-4">
                            <h4 className="font-bold text-sm mb-2">BI Users (Constituencies)</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="bg-gray-50 p-2 rounded">
                                    <strong>Operational/Middle Mgmt:</strong> Use MIS for routine production/exception reports.
                                </li>
                                <li className="bg-gray-50 p-2 rounded">
                                    <strong>Super Users (Analysts):</strong> Use DSS for "What-if" analysis (testing outcomes) and Sensitivity Analysis.
                                </li>
                                <li className="bg-gray-50 p-2 rounded">
                                    <strong>Senior Mgmt:</strong> Use ESS & Balanced Scorecard.
                                    <br /><span className="text-xs italic ml-4">4 Dimensions: Financial, Business Process, Customer, Learning & Growth. Uses KPIs.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
];