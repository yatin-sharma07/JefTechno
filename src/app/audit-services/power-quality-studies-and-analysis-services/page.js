
import PowerQualityStudiesAudit from "./solution";

export const metadata = {
    title: 'Power Quality Studies & Analysis: Harmonic Mitigation | JEF',
    description: 'Resolve power quality issues with JEF’s expert studies. We analyze harmonics, transients, and voltage fluctuations to ensure system reliability and efficiency.',
    keywords: 'power quality studies, harmonic analysis, voltage sags, transients, IEEE 519 compliance, JEF engineering',
    alternates: {
        canonical: 'https://www.jefuae.com/audit-services/power-quality-studies-and-analysis-services',
    },
}

export default function PQSPage() {
    return (
        <>
           <PowerQualityStudiesAudit/>
        </>
    );
}   
