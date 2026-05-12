import LightningProtectionSystemAdequacyAudit from "./lpsaa";

export const metadata = {
  title: "Lightning Protection System Adequacy Audit | JEF UAE",
  description:
    "Professional Lightning Protection System Adequacy Audit services by JEF UAE.",
  keywords:
    "lightning protection system audit, LPS audit, lightning risk assessment, earthing and lightning protection, IEC 62305, JEF UAE",
  alternates: {
    canonical:
      "https://www.jefuae.com/audit-services/lightning-protection-system-adequacy-audit",
  },
  openGraph: {
    url:
      "https://www.jefuae.com/audit-services/lightning-protection-system-adequacy-audit",
    title: "Lightning Protection System Adequacy Audit | JEF UAE",
    description:
      "Expert Lightning Protection System Adequacy Audit services by JEF UAE.",
    siteName: "JEF UAE",
  },
};

export default function LightningProtectionSystemAdequacyAuditPage() {
  return <LightningProtectionSystemAdequacyAudit />;
}