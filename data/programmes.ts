import type { Programme, CaseStudy, Insight } from "@/lib/types";

/**
 * PROGRAMMES.
 * Programme names and thematic definitions are Eco Green's own. Anything
 * describing scale, location or results is deliberately absent — those are
 * supplied once real delivery data exists.
 */
export const PROGRAMMES: Programme[] = [
  {
    slug: "education-for-future",
    number: "01",
    category: "CSR",
    title: "Education for Future",
    summary: "Supporting education, digital learning and skills development.",
    imageNote: "Education programme — children in a classroom learning session",
    challenge:
      "Learning outcomes in many government schools sit well below grade level, and disrupted schooling has widened the gap. Digital access is uneven, and the pathway from school into work is weakly supported.",
    approach:
      "We work inside the existing school system rather than parallel to it — diagnosing actual learning levels, supporting teachers, and adding the digital and life-skills components schools are rarely resourced to provide.",
    interventions: ["Diagnostic assessment of learning levels at intake and each term", "Remedial learning support grouped by level rather than by grade", "Digital learning infrastructure and teacher capacity building", "Life skills, career guidance and scholarship support", "Engagement with school management committees and parents"],
    beneficiaries: ["School students in government and aided schools", "Teachers and school staff", "Out-of-school and at-risk children", "Parents and school management committees"],
    outcomes: ["Improvement in foundational literacy and numeracy against baseline", "Improved retention, particularly among adolescent girls", "Strengthened teaching capability that outlasts the programme"],
    indicators: ["Proportion of children at grade-level competency, baseline to endline", "Retention and attendance rates in participating schools", "Number of teachers trained and applying the method in class"],
  },
  {
    slug: "healthcare-for-communities",
    number: "02",
    category: "CSR",
    title: "Healthcare for Communities",
    summary: "Improving awareness, preventive healthcare and community wellbeing.",
    imageNote: "Healthcare programme — community health screening in progress",
    challenge:
      "Communities distant from a functioning health facility rely on treatment after illness rather than prevention before it. Screening, nutrition support and health awareness are often absent entirely.",
    approach:
      "Predictable, recurring presence — a fixed route and a known date — combined with referral into the public health system rather than parallel to it.",
    interventions: ["Community health camps and preventive screening", "Health and hygiene awareness at household and school level", "Maternal and child nutrition support with frontline health workers", "Referral tracking into public health facilities", "Sanitation and hygiene infrastructure where needed"],
    beneficiaries: ["Rural and peri-urban households", "Women and adolescent girls", "Children under five", "Frontline health and anganwadi workers"],
    outcomes: ["Earlier detection of preventable and chronic conditions", "Improved nutrition and maternal health indicators", "Stronger link between communities and public health provision"],
    indicators: ["Number screened and proportion referred with follow-up completed", "Change in target health indicators, baseline to endline", "Awareness and practice change at household level"],
  },
  {
    slug: "women-for-progress",
    number: "03",
    category: "CSR",
    title: "Women for Progress",
    summary: "Building women's skills, livelihoods and economic independence.",
    imageNote: "Women's programme — self-help group enterprise activity",
    challenge:
      "Many women have no independent income and limited access to credit, markets or formal financial services. Self-help groups often exist on paper but are inactive in practice.",
    approach:
      "Strengthen the group structure first, then build enterprise on top of it — with financial literacy, bank linkage and market access treated as part of the programme rather than as an afterthought.",
    interventions: ["Self-help group formation, revival and strengthening", "Financial literacy and bank linkage", "Enterprise incubation and micro-enterprise support", "Digital literacy and leadership development", "Market linkage and aggregation support"],
    beneficiaries: ["Women in rural and peri-urban households", "Women-led micro-enterprises", "Self-help groups and federations"],
    outcomes: ["Independent income established for participating women", "Active, bank-linked groups that continue without facilitation", "Increased participation of women in local decision-making"],
    indicators: ["Women reporting independent income, baseline to endline", "Groups active and bank-linked at programme close", "Enterprise survival at twelve months"],
  },
  {
    slug: "youth-for-tomorrow",
    number: "04",
    category: "CSR",
    title: "Youth for Tomorrow",
    summary: "Supporting young people through skills, employability and leadership.",
    imageNote: "Youth programme — vocational training session",
    challenge:
      "Training supply is frequently disconnected from local employer demand, producing certificates that do not convert into work. Placement at course completion is reported, but what happens a year later is not.",
    approach:
      "Course design driven by demonstrated employer demand, and tracking that continues for twelve months after placement rather than stopping at the exit gate.",
    interventions: ["Vocational and digital skills training aligned to local demand", "Employability, communication and workplace readiness", "Entrepreneurship support for self-employment pathways", "Placement linkage with employer partners", "Sports and leadership development"],
    beneficiaries: ["Young people in rural and peri-urban areas", "First-generation entrants to formal employment", "Young women entering the workforce"],
    outcomes: ["Sustained employment or self-employment, not placement alone", "Improved earning capacity against household baseline", "Increased participation of young women in the workforce"],
    indicators: ["Proportion in employment at twelve months after placement", "Earnings against household baseline", "Share of participants and placements who are women"],
  },
  {
    slug: "sustainable-livelihoods",
    number: "05",
    category: "CSR",
    title: "Sustainable Livelihoods",
    summary: "Creating opportunities for income generation and entrepreneurship.",
    imageNote: "Livelihoods programme — small enterprise production activity",
    challenge:
      "Household income in many communities is seasonal, single-source and exposed to shocks. Enterprise attempts often fail for want of working capital, bookkeeping capability or market access rather than for want of effort.",
    approach:
      "Treat livelihood as a system — skills, capital, market and record-keeping together — rather than delivering training and expecting enterprise to follow.",
    interventions: ["Skill development matched to viable local opportunity", "Micro-enterprise development and mentoring", "Farmer livelihood support and input efficiency", "Market linkage and collective aggregation", "Financial awareness and access to working capital"],
    beneficiaries: ["Smallholder farming households", "Micro-entrepreneurs and artisans", "Landless and casual-labour households"],
    outcomes: ["Diversified household income with reduced seasonal exposure", "Enterprises surviving beyond the mentoring period", "Stronger collective bargaining through aggregation"],
    indicators: ["Change in household income and income sources", "Enterprise survival rate at twelve and twenty-four months", "Volume transacted through collective market linkage"],
  },
  {
    slug: "rural-community-development",
    number: "06",
    category: "CSR",
    title: "Rural Community Development",
    summary: "Strengthening essential services and community resilience.",
    imageNote: "Community development — village infrastructure in use",
    challenge:
      "Villages often carry several single-theme interventions from different agencies with no coordination between them, and no costed plan owned by the panchayat itself.",
    approach:
      "Participatory planning that produces one costed, prioritised village development plan, formally adopted by the gram sabha before any construction starts.",
    interventions: ["Participatory village development planning", "Drinking water and sanitation infrastructure", "Community facilities and shared infrastructure", "Local institution and panchayat capacity building", "Community resilience and disaster preparedness"],
    beneficiaries: ["Village households", "Gram panchayats and village committees", "Local institutions including schools and health centres"],
    outcomes: ["A costed development plan owned and driven by the panchayat", "Improved access to water, sanitation and community facilities", "Continued delivery of the plan after our exit"],
    indicators: ["Plans formally adopted in gram sabha", "Access indicators for water and sanitation, baseline to endline", "Villages continuing the plan at two years post-exit"],
  },
  {
    slug: "green-communities",
    number: "07",
    category: "Sustainability",
    title: "Green Communities",
    summary: "Creating environmentally aware and resilient communities.",
    imageNote: "Green communities — village environmental infrastructure",
    challenge:
      "Environmental programmes are frequently delivered to communities rather than with them, and stop functioning once the implementing organisation leaves.",
    approach:
      "Build environmental practice into existing community institutions, with maintenance responsibility and a funded schedule assigned before handover.",
    interventions: ["Sustainable village development planning", "Green infrastructure and resource efficiency measures", "Environmental awareness in schools and households", "Community environmental committees with maintenance schedules"],
    beneficiaries: ["Village and neighbourhood communities", "Schools and community institutions", "Local governance bodies"],
    outcomes: ["Measurable reduction in resource consumption", "Community structures maintaining infrastructure independently", "Environmental practice embedded in local institutions"],
    indicators: ["Resource consumption, baseline to endline", "Infrastructure functional at year-three audit", "Committees active and meeting at programme close"],
  },
  {
    slug: "water-for-the-future",
    number: "08",
    category: "Sustainability",
    title: "Water for the Future",
    summary: "Supporting water conservation and responsible water management.",
    imageNote: "Water programme — recharge structure and catchment area",
    challenge:
      "Groundwater decline and unreliable rainfall are making both drinking water and irrigation less secure, and structures built without hydrological assessment frequently fail to recharge.",
    approach:
      "Site every structure against a hydrological assessment, require community labour contribution as a condition of siting, and measure recharge rather than counting structures.",
    interventions: ["Hydrological and watershed assessment", "Rainwater harvesting and recharge structures", "Watershed development and catchment protection", "Village water committees with maintenance schedules", "Water awareness and demand-side management"],
    beneficiaries: ["Water-stressed rural households", "Farming households dependent on groundwater", "Schools and community institutions"],
    outcomes: ["Measurable improvement in groundwater availability", "Improved drinking water security through the dry season", "Community structures maintained after handover"],
    indicators: ["Water table at fixed observation wells, pre and post monsoon", "Area under assured irrigation against baseline", "Structures functional at year-three audit"],
  },
  {
    slug: "waste-to-value",
    number: "09",
    category: "Sustainability",
    title: "Waste to Value",
    summary: "Promoting waste reduction, segregation, recycling and circularity.",
    imageNote: "Waste programme — material recovery and segregation facility",
    challenge:
      "Collection without segregation sends recoverable material to landfill, and the workers handling that material often do so without safety equipment or social security.",
    approach:
      "Behaviour change at the household combined with recovery infrastructure the local body can operate, and formal integration of the waste workers already doing the work.",
    interventions: ["Household source segregation and behaviour change", "Material recovery facilities and composting units", "Waste worker registration, safety equipment and social security linkage", "Circular economy and plastic reduction awareness"],
    beneficiaries: ["Urban and peri-urban residents", "Informal waste workers", "Urban local bodies and municipal councils"],
    outcomes: ["Increased source segregation and landfill diversion", "Recovery facilities operating under local body management", "Waste workers formally registered and protected"],
    indicators: ["Household segregation rate, baseline to endline", "Material diverted from landfill", "Workers registered for social security"],
  },
  {
    slug: "climate-action",
    number: "10",
    category: "Sustainability",
    title: "Climate Action",
    summary: "Building awareness and community-level climate resilience.",
    imageNote: "Climate programme — community climate resilience activity",
    challenge:
      "Communities most exposed to heat, drought and flood stress are often least equipped to plan for it, and climate information rarely reaches them in a usable form.",
    approach:
      "Translate climate exposure into practical, local planning — what changes in cropping, water use, work patterns and preparedness — rather than delivering awareness alone.",
    interventions: ["Community climate risk awareness and education", "Climate resilience planning with exposed communities", "Carbon-conscious practice at household and institution level", "Decentralised clean energy access for community facilities"],
    beneficiaries: ["Communities exposed to drought, flood or heat stress", "Farming households", "Schools and health facilities"],
    outcomes: ["Community climate plans in place and in use", "Reduced exposure of livelihoods to climate shocks", "Improved reliability of essential community services"],
    indicators: ["Communities with an active climate resilience plan", "Adoption of climate-resilient practice", "Service reliability at supported institutions"],
  },
  {
    slug: "biodiversity-restoration",
    number: "11",
    category: "Sustainability",
    title: "Biodiversity & Restoration",
    summary: "Supporting restoration and protection of ecosystems.",
    imageNote: "Restoration programme — established native species plantation",
    challenge:
      "Plantation drives are widely reported by the number of saplings planted. Survival three years later is rarely measured, and is frequently low.",
    approach:
      "Native species only, sited against a soil and water assessment, maintained under a multi-year community agreement, and reported on survival rather than planting.",
    interventions: ["Native species plantation with site assessment", "Habitat and ecosystem restoration", "Multi-year community maintenance agreements", "Biodiversity awareness and community participation", "Third-party survival audit"],
    beneficiaries: ["Communities adjacent to restored land", "Local maintenance committees", "Ecosystems and dependent livelihoods"],
    outcomes: ["Surviving, established tree cover rather than planting counts", "Restored habitat under community protection", "Local income from maintenance and nursery activity"],
    indicators: ["Survival rate at year three, third-party audited", "Area under active restoration and protection", "Maintenance agreements active at programme close"],
  },
];

/**
 * CASE STUDIES — TEMPLATE ONLY.
 * These demonstrate the layout real projects will use. Every factual field
 * is an explicit placeholder. No project is described as having happened.
 */
export const CASE_STUDIES: CaseStudy[] = [
  { slug: "case-study-template-csr", number: "01", title: "Sustainable Community Development Programme", sector: "CSR", location: "XXXXX", duration: "XXXXX", partner: "XXXXX", imageNote: "Project photography — to be supplied by Eco Green" },
  { slug: "case-study-template-education", number: "02", title: "Education & Skill Development Programme", sector: "CSR", location: "XXXXX", duration: "XXXXX", partner: "XXXXX", imageNote: "Project photography — to be supplied by Eco Green" },
  { slug: "case-study-template-water", number: "03", title: "Water Conservation & Watershed Programme", sector: "Sustainability", location: "XXXXX", duration: "XXXXX", partner: "XXXXX", imageNote: "Project photography — to be supplied by Eco Green" },
];

export const CASE_STUDY_SECTIONS = [
  { number: "01", title: "The Challenge", body: "The situation in the community before the programme began, established through assessment rather than assumption." },
  { number: "02", title: "Our Approach", body: "How the intervention was designed against that assessed need, and why this approach was chosen." },
  { number: "03", title: "Programme Activities", body: "What was actually delivered, in sequence, and by whom." },
  { number: "04", title: "Beneficiaries", body: "Who the programme reached — people, communities, women, children, youth and other groups." },
  { number: "05", title: "Results", body: "What was delivered against what was planned, including where delivery fell short." },
  { number: "06", title: "Impact", body: "What changed for the community, measured against the baseline." },
  { number: "07", title: "Community Story", body: "The programme in the words of the people it was designed for." },
  { number: "08", title: "Photographs", body: "Before, during and after the intervention." },
  { number: "09", title: "Impact Numbers", body: "The measured figures, with the definition and method behind each." },
];

export const INSIGHTS: Insight[] = [
  {
    slug: "what-a-baseline-is-worth",
    title: "What a baseline is worth",
    category: "Impact measurement",
    readingTime: "6 min",
    excerpt: "Most CSR reporting describes activity rather than change. The difference is whether anyone measured the starting position.",
    imageNote: "Field team conducting a household baseline survey",
    body: [
      "An output is a thing you did. An outcome is a thing that changed. Most CSR reporting describes outputs, because outputs are easy to count and require nothing to have been measured beforehand.",
      "The obstacle is almost never analytical capability. It is that nobody established a baseline, and by the time anyone wants to demonstrate change the starting position is gone. Reconstructing it retrospectively is possible, but always weaker, and an independent assessor will treat it as such.",
      "A baseline costs a small fraction of a programme budget and takes a few weeks. It is the highest-return decision available at design stage, and the one most often skipped because it delays visible activity.",
    ],
  },
  {
    slug: "designing-employee-volunteering-that-works",
    title: "Designing employee volunteering that communities actually want",
    category: "Corporate partnership",
    readingTime: "5 min",
    excerpt: "Volunteering days can create real value or pure disruption. The difference is whether the community was asked first.",
    imageNote: "Corporate volunteers working alongside community members",
    body: [
      "Corporate volunteering is one of the strongest reasons a company selects one implementing partner over another, because it delivers staff engagement alongside programme delivery. It is also the activity most likely to impose cost on a community while appearing generous.",
      "The familiar failure mode is forty employees arriving for a day, a school suspending teaching, photographs being taken, and nothing changing.",
      "Volunteering works when the activity is something the community asked for, needs the specific skills the volunteers have, and fits a sequence rather than standing alone. Mentoring over six months beats a single career talk.",
    ],
  },
  {
    slug: "counting-what-survives",
    title: "Counting what survives, not what was planted",
    category: "Sustainability",
    readingTime: "4 min",
    excerpt: "Plantation drives report saplings planted. Survival at year three is the number that matters, and it is rarely published.",
    imageNote: "Native species plantation three years after establishment",
    body: [
      "Tree plantation is among the most widely reported environmental interventions in corporate responsibility, and among the least rigorously measured. The figure published is almost always saplings planted on the day.",
      "Survival depends on species selection, siting against soil and water conditions, and — more than anything — on whether someone is responsible for maintenance in years two and three.",
      "Reporting survival instead of planting changes the design. It forces native species, honest siting, and a maintenance agreement with a named local owner before the first sapling goes in.",
    ],
  },
];
