import ElectricalAndFireSafetyAudit from "./efsa";

export const metadata = {
  title: "Electrical and Fire Safety Audit | JEF UAE",
  description:
    "Professional Electrical and Fire Safety Audit services by JEF UAE.",
  keywords:
    "electrical safety audit, fire safety audit, electrical inspection, fire risk assessment, JEF UAE",
  alternates: {
    canonical:
      "https://www.jefuae.com/audit-services/electical-and-fire-safety-audit",
  },
  openGraph: {
    url:
      "https://www.jefuae.com/audit-services/electical-and-fire-safety-audit",
    description:
      "Expert Electrical and Fire Safety Audit services by JEF UAE.",
    siteName: "Electrical and Fire Safety Audit | JEF UAE",
  },
};

export default function ElectricalAndFireSafetyAuditPage() {
  return <ElectricalAndFireSafetyAudit />;
}