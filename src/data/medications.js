export const SAMPLE_MEDICATIONS = [
  {
    id: "trulicity",
    brand: "Trulicity®",
    generic: "dulaglutide",
    company: "Eli Lilly and Company",
    strength: "0.75 mg / 0.5 mL",
    form: "Single-dose Pre-filled Pen",
    purpose: "Type 2 Diabetes Mellitus & Cardiovascular Risk Reduction",
    summary: "Trulicity is a once-weekly injectable prescription medicine that improves blood sugar in adults with type 2 diabetes.",
    dosing: {
      title: "Dosing & How to Take",
      audioText: "Dosing Instructions for Trulicity. Take once a week, on the same day each week, any time of day, with or without food. Inject subcutaneously in your abdomen, thigh, or upper arm.",
      steps: [
        "Frequency: Once a week, on the same day each week (any time of day).",
        "Administration: Subcutaneous injection in abdomen, thigh, or upper arm.",
        "Preparation: Inspect pen window. Solution should be clear and colorless.",
        "Missed Dose: Take within 3 days (72 hours) of missed dose. If more than 3 days pass, skip and resume regular schedule."
      ]
    },
    sideEffects: {
      title: "Side Effects & What to Watch For",
      audioText: "Common Side Effects of Trulicity include nausea, diarrhea, vomiting, abdominal pain, and decreased appetite. Contact your doctor immediately if you feel severe abdominal pain.",
      common: [
        "Nausea (most common during first few weeks)",
        "Diarrhea & decreased appetite",
        "Mild abdominal pain or indigestion",
        "Vomiting or fatigue"
      ],
      serious: [
        "Severe, persistent stomach pain (possible Pancreatitis sign)",
        "Low blood sugar (Hypoglycemia) when combined with insulin",
        "Allergic reactions (swelling of face, lips, tongue, or breathing difficulty)"
      ]
    },
    warnings: {
      title: "Warnings & Contraindications",
      audioText: "Important Warnings: Do not use if you or your family have a history of Medullary Thyroid Carcinoma or Multiple Endocrine Neoplasia syndrome type 2.",
      points: [
        "Boxed Warning: Risk of thyroid C-cell tumors.",
        "Pancreatitis: Discontinue immediately if pancreatitis is suspected.",
        "Hypoglycemia: Increased risk if used with insulin secretagogues.",
        "Severe Kidney Problems: Dehydration from diarrhea or vomiting may worsen kidney function."
      ]
    },
    storage: {
      title: "Storage & Handling",
      audioText: "Storage Instructions: Store refrigerated between 36 degrees and 46 degrees Fahrenheit. Do not freeze.",
      steps: [
        "Refrigerate: Store at 2°C to 8°C (36°F to 46°F) in original carton.",
        "Room Temp Option: May be stored un-refrigerated at room temperature (up to 30°C / 86°F) for up to 14 days.",
        "Keep away from direct heat and light. Do not freeze."
      ]
    }
  },
  {
    id: "mounjaro",
    brand: "Mounjaro®",
    generic: "tirzepatide",
    company: "Eli Lilly and Company",
    strength: "5 mg / 0.5 mL",
    form: "Single-dose Pen",
    purpose: "Type 2 Diabetes Mellitus & Weight Management Support",
    summary: "Mounjaro is a GIP and GLP-1 receptor agonist injected once weekly to improve glycemic control.",
    dosing: {
      title: "Dosing & Administration",
      audioText: "Dosing Instructions for Mounjaro. Inject once weekly under the skin in abdomen, thigh, or upper arm. Rotate injection site each week.",
      steps: [
        "Start Dose: Typically started at 2.5 mg once weekly, then adjusted to 5 mg after 4 weeks.",
        "Injection Site: Rotate injection site each week between abdomen, thigh, or upper arm.",
        "Day Selection: Can change day of weekly administration as long as time between doses is at least 3 days (72 hours)."
      ]
    },
    sideEffects: {
      title: "Side Effects & Reactions",
      audioText: "Side Effects for Mounjaro include nausea, diarrhea, constipation, decreased appetite, and dyspepsia.",
      common: [
        "Nausea and diarrhea",
        "Decreased appetite & satiety",
        "Constipation & stomach discomfort",
        "Indigestion or heartburn"
      ],
      serious: [
        "Thyroid C-cell tumor warnings",
        "Acute gallbladder disease or gallstones",
        "Severe gastrointestinal adverse reactions"
      ]
    },
    warnings: {
      title: "Important Safety Warnings",
      audioText: "Safety Warning: Mounjaro is contraindicated in patients with a personal or family history of Medullary Thyroid Carcinoma.",
      points: [
        "Thyroid C-cell tumor risk.",
        "Monitor for signs of pancreatitis (severe abdominal pain radiating to back).",
        "Hypoglycemia risk when combined with sulfonylureas or insulin."
      ]
    },
    storage: {
      title: "Storage Requirements",
      audioText: "Store in refrigerator between 2 to 8 degrees Celsius. Can remain up to 21 days at room temperature below 30 degrees Celsius.",
      steps: [
        "Keep refrigerated at 2°C to 8°C (36°F to 46°F).",
        "Can be stored at room temp up to 21 days.",
        "Protect from light; keep in original box."
      ]
    }
  },
  {
    id: "humalog",
    brand: "Humalog®",
    generic: "insulin lispro",
    company: "Eli Lilly and Company",
    strength: "100 units / mL (U-100)",
    form: "KwikPen / Vial",
    purpose: "Fast-acting Insulin for Diabetes Mellitus",
    summary: "Humalog is a rapid-acting insulin used to control high blood sugar in adults and children with diabetes.",
    dosing: {
      title: "Dosing & Time of Injection",
      audioText: "Dosing Instructions for Humalog. Inject within 15 minutes before a meal or immediately after a meal.",
      steps: [
        "Timing: Take within 15 minutes before starting a meal or immediately after eating.",
        "Administration: Inject under the skin of stomach area, buttocks, upper arms, or thighs.",
        "Never mix Humalog U-200 with any other insulins."
      ]
    },
    sideEffects: {
      title: "Side Effects & Hypoglycemia",
      audioText: "Most common side effect of Humalog is low blood sugar, also known as hypoglycemia. Symptoms include shakiness, sweating, fast heartbeat, and dizziness.",
      common: [
        "Hypoglycemia (low blood sugar)",
        "Injection site reactions (redness, swelling, itching)",
        "Lipodystrophy (thickening of skin at injection site)",
        "Weight gain & mild edema"
      ],
      serious: [
        "Severe Hypoglycemia (can lead to unconsciousness or seizures)",
        "Severe Hypokalemia (low blood potassium)",
        "Generalized systemic allergic reactions"
      ]
    },
    warnings: {
      title: "Safety Warnings",
      audioText: "Warning: Never share a Humalog KwikPen between people, even if the needle is changed.",
      points: [
        "Pen Sharing Hazard: Never share pens or needles due to risk of infection.",
        "Hypoglycemia Awareness: Always carry fast-acting glucose tablets or fruit juice.",
        "Hyperglycemia & Ketoacidosis: Never stop insulin suddenly."
      ]
    },
    storage: {
      title: "Storage Guide",
      audioText: "Unopened pens should be kept in refrigerator. Opened pens should be stored at room temperature and used within 28 days.",
      steps: [
        "Unopened: Refrigerate at 2°C to 8°C until expiration date.",
        "In-Use (Opened Pen): Keep at room temperature below 30°C (86°F) for up to 28 days. Do NOT refrigerate opened pens."
      ]
    }
  }
];
