import type { DomainConfig } from "./automation";

export const domainConfig: DomainConfig = {
  "slug": "05-ai-reporting-dashboard-generator",
  "title": "AI Reporting Dashboard Generator",
  "tagline": "Ingests spreadsheet-style data, calculates KPIs, detects anomalies, and writes executive summaries.",
  "workflow": "Automated KPI reporting",
  "audience": "Operators, founders, and agencies reporting to clients",
  "itemNoun": "report",
  "itemPlural": "reports",
  "primaryAction": "Generate report",
  "accent": "#0891b2",
  "businessGoal": "Turn messy weekly data into decision-ready reporting without manual slide building.",
  "integrations": [
    "Google Sheets",
    "Airtable",
    "Looker Studio",
    "Slack",
    "Email",
    "Make"
  ],
  "routes": [
    "Executive summary",
    "Ops review",
    "Finance review",
    "Client delivery"
  ],
  "categories": [
    {
      "name": "Revenue anomaly",
      "keywords": [
        "revenue",
        "drop",
        "spike",
        "refund"
      ],
      "route": "Finance review",
      "boost": 24
    },
    {
      "name": "Operations risk",
      "keywords": [
        "late",
        "delay",
        "backlog",
        "capacity"
      ],
      "route": "Ops review",
      "boost": 18
    },
    {
      "name": "Client report",
      "keywords": [
        "client",
        "campaign",
        "weekly",
        "month"
      ],
      "route": "Client delivery",
      "boost": 12
    },
    {
      "name": "Executive snapshot",
      "keywords": [
        "kpi",
        "growth",
        "margin",
        "pipeline"
      ],
      "route": "Executive summary",
      "boost": 10
    }
  ],
  "positiveKeywords": [
    "growth",
    "margin",
    "pipeline",
    "won",
    "increase"
  ],
  "riskKeywords": [
    "drop",
    "late",
    "refund",
    "delay",
    "churn",
    "down"
  ],
  "outputLabels": [
    "Executive summary",
    "Anomaly notes",
    "Slack update"
  ],
  "sampleItems": [
    {
      "id": "report-902",
      "title": "Weekly revenue dashboard",
      "source": "Google Sheets",
      "customer": "Founder team",
      "owner": "Ops analyst",
      "value": 32000,
      "urgency": 70,
      "description": "Revenue increased 18 percent, but refunds spiked in the enterprise segment and onboarding backlog is up 27 percent.",
      "tags": [
        "revenue",
        "refund",
        "backlog"
      ],
      "receivedAt": "2026-04-29T06:30:00Z"
    },
    {
      "id": "report-903",
      "title": "Client campaign month-end",
      "source": "Airtable",
      "customer": "Agency client",
      "owner": "Account manager",
      "value": 7800,
      "urgency": 58,
      "description": "Campaign leads are up 31 percent month over month with cost per lead down 12 percent. Need client-ready summary.",
      "tags": [
        "client",
        "campaign",
        "growth"
      ],
      "receivedAt": "2026-04-29T07:45:00Z"
    },
    {
      "id": "report-904",
      "title": "Warehouse delay snapshot",
      "source": "CSV upload",
      "customer": "Operations",
      "owner": "Warehouse lead",
      "value": 5100,
      "urgency": 83,
      "description": "Late shipments increased and capacity is constrained for the west region this week.",
      "tags": [
        "late",
        "capacity"
      ],
      "receivedAt": "2026-04-29T11:20:00Z"
    }
  ],
  "demo": {
    "beforeTitle": "Manual automated KPI reporting",
    "beforeState": [
      "Reports arrive from Google Sheets, Airtable, Looker Studio and are reviewed one by one.",
      "The team copies details between tools, decides priority manually, and writes repetitive notes or replies from scratch.",
      "High-value or risky reports can sit in the same queue as low-value work, so follow-up quality depends on who notices first."
    ],
    "whatWeProvide": [
      "A deployable React and Express workflow app tailored to Operators, founders, and agencies reporting to clients.",
      "An AI scoring and routing engine for reports, with deterministic fallback mode and optional live OpenAI Responses API review.",
      "Human-in-loop approval screens, generated drafts, audit-friendly timeline, and mock adapters for Google Sheets, Airtable, Looker Studio, Slack, Email, Make.",
      "Production-ready handoff assets: Dockerfile, Render config, environment template, tests, and integration payload examples."
    ],
    "afterTitle": "Automated automated KPI reporting",
    "afterState": [
      "Reports are classified, scored, routed to Executive summary, and prepared for review in seconds.",
      "The operator receives draft outputs, next-best actions, and integration payloads before anything is sent externally.",
      "Approved work is pushed to Google Sheets and Airtable, keeping the source workflow and downstream records aligned."
    ],
    "demoFlow": [
      "Open the dashboard and show the client the incoming reports queue.",
      "Select the highest-value sample report and explain the before state: manual review, copy/paste, and slow routing.",
      "Click \"Generate report\" to run deterministic AI automation, or enable live OpenAI review if an API key is configured.",
      "Review the score, route, confidence, timeline, and generated outputs with the client.",
      "Click a mock integration button to show exactly what would be sent to Google Sheets, Zapier, Make, n8n, or the client tool stack.",
      "Close with the after state: faster response time, cleaner records, and a human approval lane for sensitive work."
    ],
    "successMetrics": [
      "Manual review steps reduced",
      "Average response time improved",
      "High-priority items routed faster",
      "Records updated consistently",
      "Human approval preserved for risky cases"
    ],
    "clientOffer": "I will replace the demo data and mock adapters with your real Google Sheets, Airtable, Looker Studio setup, connect the API credentials, tune the routing rules, and deploy the workflow for your team."
  }
};
