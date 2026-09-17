import type {
  Pillar,
  ImpactMetric,
  FocusArea,
  ProcessStep,
  Sdg,
  PolicyItem,
  ReportItem,
  PartnershipModel,
} from "@/lib/types";

export const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Inclusion",
    body: "Ensuring communities and vulnerable groups are meaningfully involved — in deciding what a programme does, not only in receiving it.",
    imageNote: "Community consultation — residents in discussion with programme staff",
  },
  {
    number: "02",
    title: "Collaboration",
    body: "Working with corporates, communities, institutions and subject experts, through local structures rather than around them.",
    imageNote: "Collaboration — corporate and community representatives working together",
  },
  {
    number: "03",
    title: "Sustainability",
    body: "Creating solutions that remain effective over the long term, with local ownership established from the first month.",
    imageNote: "Sustainability — a community-managed facility in continued use",
  },
  {
    number: "04",
    title: "Innovation",
    body: "Finding practical and scalable approaches to complex challenges, tested in the field before being extended.",
    imageNote: "Innovation — practical field technology in community use",
  },
];

/**
 * IMPACT METRICS — PLACEHOLDERS.
 * value: null renders as "XX+". No figure is published until Eco Green
 * supplies verified data with a definition and basis of calculation.
 */
export const IMPACT_METRICS: ImpactMetric[] = [
  { id: "people", label: "People Benefited", value: null, group: "both" },
  { id: "communities", label: "Communities Reached", value: null, group: "both" },
  { id: "programmes", label: "CSR Programmes", value: null, group: "social" },
  { id: "students", label: "Students Supported", value: null, group: "social" },
  { id: "women", label: "Women Empowered", value: null, group: "social" },
  { id: "livelihoods", label: "Livelihoods Supported", value: null, group: "social" },
  { id: "trees", label: "Trees Planted", value: null, group: "environmental" },
  { id: "water", label: "Water Initiatives", value: null, group: "environmental" },
  { id: "volunteers", label: "Volunteers Engaged", value: null, group: "both" },
];

export const CSR_PROCESS: ProcessStep[] = [
  { number: "01", title: "Corporate CSR Commitment", body: "We begin from your board-approved CSR policy, thematic priorities and geography." },
  { number: "02", title: "Community Need Assessment", body: "Consultation and baseline work in the proposed location, before scope or budget is fixed." },
  { number: "03", title: "Programme Design", body: "An intervention designed against the assessed need, with indicators agreed in writing." },
  { number: "04", title: "Implementation", body: "Delivery through local teams and partner institutions, sequenced against the plan." },
  { number: "05", title: "Monitoring", body: "Concurrent monitoring during delivery rather than a review after it." },
  { number: "06", title: "Impact Measurement", body: "Outcomes measured against the original baseline, using the method declared at design stage." },
  { number: "07", title: "Reporting & Continuous Improvement", body: "Transparent reporting, including what underperformed and what changes next cycle." },
];

export const CORPORATE_PROCESS: ProcessStep[] = [
  { number: "01", title: "CSR Priorities", body: "Understand the organisation's CSR objectives, thematic focus and governance requirements." },
  { number: "02", title: "Need Assessment", body: "Identify community needs and development priorities in the intended geography." },
  { number: "03", title: "Programme Design", body: "Develop a customised programme with defined scope, indicators and timeline." },
  { number: "04", title: "Implementation", body: "Deploy appropriate teams and delivery partners on the ground." },
  { number: "05", title: "Monitoring", body: "Track implementation and performance throughout the programme period." },
  { number: "06", title: "Impact Measurement", body: "Measure outputs, outcomes and impact against the baseline." },
  { number: "07", title: "Reporting", body: "Provide transparent programme and utilisation reporting." },
];

export const CSR_FOCUS_AREAS: FocusArea[] = [
  {
    number: "01",
    slug: "education-skill-development",
    title: "Education & Skill Development",
    summary: "Strengthening learning outcomes and the pathway from education into work.",
    items: ["School education", "Digital education", "Vocational training", "Employability programmes", "Career development", "Life skills", "Scholarships and learning support", "Teacher and community capacity building"],
    imageNote: "Education — classroom learning in a government school",
  },
  {
    number: "02",
    slug: "healthcare-wellbeing",
    title: "Healthcare & Wellbeing",
    summary: "Preventive health, nutrition and access where public provision is thin.",
    items: ["Community health programmes", "Health awareness", "Preventive healthcare", "Medical camps", "Nutrition", "Maternal and child wellbeing", "Sanitation and hygiene"],
    imageNote: "Healthcare — community health screening session",
  },
  {
    number: "03",
    slug: "livelihood-economic-empowerment",
    title: "Livelihood & Economic Empowerment",
    summary: "Income, enterprise and market access for households with few options.",
    items: ["Skill development", "Entrepreneurship", "Self-employment", "Farmer livelihood support", "Market linkage", "Micro-enterprise development", "Financial awareness"],
    imageNote: "Livelihood — a small enterprise at work",
  },
  {
    number: "04",
    slug: "women-empowerment",
    title: "Women Empowerment",
    summary: "Skills, independent income and leadership for women in their own communities.",
    items: ["Women's skill development", "Entrepreneurship", "Livelihood programmes", "Financial independence", "Leadership development", "Digital literacy"],
    imageNote: "Women's empowerment — a women's self-help group meeting",
  },
  {
    number: "05",
    slug: "youth-development",
    title: "Youth Development",
    summary: "Employability, enterprise and leadership for young people entering work.",
    items: ["Career readiness", "Vocational skills", "Digital skills", "Entrepreneurship", "Employability", "Sports and leadership"],
    imageNote: "Youth development — young people in a skills session",
  },
  {
    number: "06",
    slug: "rural-community-development",
    title: "Rural & Community Development",
    summary: "The shared infrastructure and local capability a community runs on.",
    items: ["Community infrastructure", "Drinking water", "Sanitation", "Community facilities", "Local capacity building", "Community resilience"],
    imageNote: "Rural development — community infrastructure in use",
  },
  {
    number: "07",
    slug: "social-inclusion",
    title: "Social Inclusion",
    summary: "Making sure development reaches the people most often left out of it.",
    items: ["Vulnerable communities", "Persons with disabilities", "Elderly support", "Marginalised groups", "Inclusive development"],
    imageNote: "Social inclusion — an inclusive community programme",
  },
];

export const SUSTAINABILITY_FOCUS_AREAS: FocusArea[] = [
  {
    number: "01",
    slug: "climate-action",
    title: "Climate Action",
    summary: "Community-level awareness, resilience and carbon-conscious practice.",
    items: ["Climate awareness", "Climate resilience", "Community climate programmes", "Carbon-conscious initiatives", "Climate education"],
    imageNote: "Climate action — community climate resilience work",
  },
  {
    number: "02",
    slug: "water-conservation",
    title: "Water Conservation",
    summary: "Securing water availability through structures communities can maintain.",
    items: ["Water conservation", "Rainwater harvesting", "Watershed development", "Water awareness", "Community water security"],
    imageNote: "Water conservation — a recharge structure after monsoon",
  },
  {
    number: "03",
    slug: "waste-circular-economy",
    title: "Waste & Circular Economy",
    summary: "Keeping materials in use and out of landfill, starting at the household.",
    items: ["Waste reduction", "Recycling", "Waste segregation", "Circular economy awareness", "Plastic reduction", "Resource efficiency"],
    imageNote: "Circular economy — a material recovery facility in operation",
  },
  {
    number: "04",
    slug: "biodiversity-ecosystem-restoration",
    title: "Biodiversity & Ecosystem Restoration",
    summary: "Restoration measured by what survives, not by what was planted.",
    items: ["Tree plantation", "Habitat restoration", "Biodiversity awareness", "Ecosystem conservation", "Community participation"],
    imageNote: "Biodiversity — established native plantation",
  },
  {
    number: "05",
    slug: "sustainable-communities",
    title: "Sustainable Communities",
    summary: "Villages and neighbourhoods designed to use less and withstand more.",
    items: ["Sustainable village development", "Green infrastructure", "Resource efficiency", "Environmental awareness", "Community resilience"],
    imageNote: "Sustainable communities — green village infrastructure",
  },
  {
    number: "06",
    slug: "sustainable-livelihoods",
    title: "Sustainable Livelihoods",
    summary: "Work that holds up as the climate and the resource base change.",
    items: ["Green jobs", "Sustainable agriculture", "Responsible resource use", "Climate-resilient livelihoods"],
    imageNote: "Sustainable livelihoods — climate-resilient agriculture",
  },
];

export const PARTNERSHIP_MODELS: PartnershipModel[] = [
  { number: "01", title: "CSR Programme Implementation", body: "End-to-end delivery of a board-approved CSR programme, from need assessment to utilisation reporting." },
  { number: "02", title: "Strategic CSR Advisory", body: "Support in shaping CSR priorities, thematic focus and programme architecture before delivery begins." },
  { number: "03", title: "Community Development Projects", body: "Defined projects addressing a specific community need in a specific geography." },
  { number: "04", title: "Employee Engagement & Volunteering", body: "Structured volunteering planned around the programme calendar, not around a photo opportunity." },
  { number: "05", title: "Environmental Programmes", body: "Climate, water, waste and restoration programmes delivered with community participation." },
  { number: "06", title: "Impact Assessment", body: "Baseline and outcome measurement designed to withstand independent third-party assessment." },
  { number: "07", title: "CSR Reporting", body: "Programme and utilisation reporting in the form your board and auditor require." },
  { number: "08", title: "Multi-year Community Development", body: "Sustained engagement in one geography across several thematic areas and budget cycles." },
];

export const WHY_PARTNER = [
  { title: "Professional implementation", body: "Delivery run by programme staff and local partners with defined roles, not by volunteers on rotation." },
  { title: "Transparent processes", body: "Documented scope, documented method, and reporting that shows variance rather than concealing it." },
  { title: "Community engagement", body: "Programmes designed with the community that will live with them, through existing local institutions." },
  { title: "Measurable outcomes", body: "A baseline before delivery, and outcomes measured against it using the method agreed at design stage." },
  { title: "Strong reporting", body: "Reporting built for your board, your auditor and your own disclosure requirements." },
  { title: "Long-term programme approach", body: "Designed for the community to continue after our involvement ends, with local ownership from the start." },
];

export const SDGS: Sdg[] = [
  { number: 1, title: "No Poverty", relevance: "Livelihood and economic empowerment programmes" },
  { number: 3, title: "Good Health & Well-being", relevance: "Preventive healthcare, nutrition and hygiene" },
  { number: 4, title: "Quality Education", relevance: "School education, digital learning and skills" },
  { number: 5, title: "Gender Equality", relevance: "Women's skills, enterprise and leadership" },
  { number: 6, title: "Clean Water & Sanitation", relevance: "Water conservation and community sanitation" },
  { number: 8, title: "Decent Work & Economic Growth", relevance: "Employability, enterprise and green jobs" },
  { number: 10, title: "Reduced Inequalities", relevance: "Social inclusion and reach to marginalised groups" },
  { number: 12, title: "Responsible Consumption", relevance: "Waste reduction and circular economy" },
  { number: 13, title: "Climate Action", relevance: "Community climate awareness and resilience" },
  { number: 15, title: "Life on Land", relevance: "Restoration, plantation and habitat protection" },
];

export const POLICIES: PolicyItem[] = [
  { title: "Code of Conduct", summary: "Standards of behaviour expected of staff, partners and volunteers." },
  { title: "Child Protection Policy", summary: "Safeguarding standards for every programme involving children." },
  { title: "Safeguarding Policy", summary: "Protection of vulnerable participants across all programme activity." },
  { title: "Anti-Fraud Policy", summary: "Prevention, detection and reporting of financial misconduct." },
  { title: "Anti-Corruption Policy", summary: "Prohibition on facilitation payments and improper inducements." },
  { title: "Conflict of Interest Policy", summary: "Declaration and management of related-party and personal interests." },
  { title: "Whistleblower Policy", summary: "Protected disclosure route for staff, partners and communities." },
  { title: "Data Privacy Policy", summary: "How personal data of participants and enquirers is handled." },
  { title: "Environmental Policy", summary: "Environmental standards applied to our own operations." },
  { title: "Health & Safety Policy", summary: "Safety standards for field teams, volunteers and participants." },
  { title: "Inclusion / Non-discrimination Policy", summary: "Equal access to programmes regardless of identity or background." },
];

/** REPORT ARCHIVE — INTERFACE ONLY. No document is claimed to exist. */
export const REPORTS: ReportItem[] = [
  { year: "2026", title: "Annual Report", type: "Annual report" },
  { year: "2025", title: "Annual Report", type: "Annual report" },
  { year: "2024", title: "Annual Report", type: "Annual report" },
  { year: "2026", title: "Audited Financial Statements", type: "Financial statement" },
  { year: "2025", title: "Audited Financial Statements", type: "Financial statement" },
  { year: "2026", title: "Programme Utilisation Report", type: "Utilisation report" },
  { year: "2025", title: "Programme Impact Assessment", type: "Impact assessment" },
];

export const GOVERNANCE_STRUCTURE = [
  { title: "Board / Trustees", body: "Composition, member profiles and meeting cadence to be published." },
  { title: "Advisory Board", body: "Subject specialists advising on programme design and measurement." },
  { title: "Leadership", body: "Executive team responsible for programme delivery and operations." },
  { title: "Committees", body: "Audit and finance, programme review, and safeguarding committees." },
];
