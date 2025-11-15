export const metadata = {
  title: "Terms of Service · AI Image Studio",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By installing or using AI Image Studio you agree to these Terms of Service. If you disagree, please uninstall the extension.",
  },
  {
    title: "2. Service description",
    body: "AI Image Studio is a Chrome extension that detects images on a page, allows precise cropping, sends selections to AI providers for generation and performs product analysis.",
  },
  {
    title: "3. Eligibility",
    body: "You must be at least 13 years old, have a compatible Chromium-based browser and comply with the terms of any AI provider you connect.",
  },
  {
    title: "4. API keys",
    body: "You are responsible for obtaining and managing your own API keys for OpenAI, Google, Ideogram, fal.ai and PhotoRoom. Usage is billed directly by those services.",
  },
  {
    title: "5. Subscription & payments",
    body: "Pro features require a paid subscription or lifetime purchase processed through ExtensionPay using Stripe. Monthly and yearly plans renew automatically; lifetime is one-time.",
  },
  {
    title: "6. Refund policy",
    body: "We provide a 14-day refund window on first-time purchases. Contact support@smartecom.app with your purchase email to request one.",
  },
  {
    title: "7. Acceptable use",
    body: "You agree not to violate laws, process content you do not have the right to use, generate harmful material, or interfere with the extension’s operation.",
  },
  {
    title: "8. Intellectual property",
    body: "You retain rights to your content. SmartEcom Apps owns all rights to the extension’s code, design and documentation.",
  },
  {
    title: "9. Disclaimer & liability",
    body: "THE EXTENSION IS PROVIDED AS-IS WITHOUT WARRANTIES. SMARTECOM APPS IS NOT LIABLE FOR INDIRECT OR CONSEQUENTIAL DAMAGES.",
  },
  {
    title: "10. Termination",
    body: "We may suspend access if you violate these terms or engage in fraudulent activity. You may terminate by uninstalling the extension and cancelling your subscription.",
  },
  {
    title: "11. Governing law",
    body: "These terms are governed by the laws of Alberta, Canada.",
  },
];

export default function TermsPage() {
  return (
    <main className="section">
      <div className="container mx-auto max-w-3xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            SmartEcom Apps
          </p>
          <h1 className="section-title mt-2">Terms of Service</h1>
          <p className="text-sm text-slate-400">Last updated: January 2025</p>
        </div>
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-3">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{section.body}</p>
          </section>
        ))}
        <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <p className="text-sm text-slate-300">
            Contact: <a className="underline" href="mailto:support@smartecom.app">support@smartecom.app</a>
          </p>
        </section>
      </div>
    </main>
  );
}

