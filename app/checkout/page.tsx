const steps = [
  {
    title: "Install AI Image Studio",
    body: "Visit the Chrome Web Store listing and click “Add to Chrome”. Pin the extension to your toolbar.",
    link: "https://chromewebstore.google.com/detail/ai-image-studio/ojglbhhklfkbffklgebjgiclhmmnpmbc",
  },
  {
    title: "Open the extension",
    body: "Configure your API keys for OpenAI, Google, Ideogram, fal.ai or PhotoRoom. Keys stay on your device.",
  },
  {
    title: "Upgrade to Pro",
    body: "Click the Upgrade button inside AI Image Studio to open ExtensionPay’s Stripe checkout overlay. Choose Monthly, Yearly or Lifetime.",
  },
  {
    title: "Instant activation",
    body: "After payment, Pro access is granted immediately. You can manage or cancel your plan inside the extension.",
  },
];

export default function CheckoutPage() {
  return (
    <main className="section">
      <div className="container mx-auto max-w-3xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            AI Image Studio
          </p>
          <h1 className="section-title mt-2">Checkout &amp; Billing</h1>
          <p className="section-subtitle">
            Payments are processed via ExtensionPay (powered by Stripe). SmartEcom Apps is the merchant of record.
          </p>
        </div>
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-slate-50">
                  {index + 1}
                </span>
                <h2 className="text-xl font-semibold">{step.title}</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{step.body}</p>
              {step.link && (
                <a href={step.link} className="text-sm text-emerald-300 underline">
                  Visit Chrome Web Store listing
                </a>
              )}
            </div>
          ))}
        </div>
        <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Plans & pricing</h2>
          <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2">
            <li>Monthly - $19.99 USD</li>
            <li>Yearly - $149.99 USD</li>
            <li>Lifetime - $349.99 USD</li>
          </ul>
          <p className="text-sm text-slate-400">
            AI provider usage (OpenAI, Google, Ideogram, fal.ai, PhotoRoom) is billed separately by those services.
          </p>
        </section>
      </div>
    </main>
  );
}
