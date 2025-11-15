export const metadata = {
  title: "Privacy Policy · AI Image Studio",
};

const sections = [
  {
    title: "What we do not collect",
    body: (
      <>
        <p>
          AI Image Studio does <strong>not</strong> collect, store or transmit personal data,
          browsing history, processed images, API keys, usage analytics or cookies.
        </p>
        <p>Everything stays on your device unless you explicitly send data to an AI provider.</p>
      </>
    ),
  },
  {
    title: "Local storage only",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-slate-300">
        <li>Your API keys (encrypted locally in Chrome).</li>
        <li>Extension preferences (provider defaults, download options).</li>
        <li>Temporary image data cleared immediately after use.</li>
      </ul>
    ),
  },
  {
    title: "Third-party services",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-slate-300">
        <li>OpenAI - GPT Image 1 (https://openai.com/policies/privacy-policy)</li>
        <li>Google AI - Imagen &amp; Gemini (https://policies.google.com/privacy)</li>
        <li>Ideogram - (https://ideogram.ai/privacy)</li>
        <li>fal.ai - SeeDream 4 (https://fal.ai)</li>
        <li>PhotoRoom - optional background removal (https://www.photoroom.com/legal/privacy)</li>
        <li>ExtensionPay - subscription management (https://extensionpay.com/)</li>
      </ul>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="container mx-auto max-w-3xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            SmartEcom Apps
          </p>
          <h1 className="section-title mt-2">Privacy Policy for AI Image Studio</h1>
          <p className="text-sm text-slate-400">Last updated: July 5, 2025</p>
        </div>
        <p className="text-slate-300 leading-relaxed">
          AI Image Studio is a Chrome extension owned by SmartEcom Apps. We built the product so your data stays on your device.
        </p>
        {sections.map((section) => (
          <section key={section.title} className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <div className="text-sm text-slate-300 leading-relaxed">{section.body}</div>
          </section>
        ))}
        <section className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold">Permissions</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>storage - save your API keys and preferences.</li>
            <li>activeTab - capture images on the current page only when triggered.</li>
            <li>contextMenus - right-click entry for images.</li>
            <li>downloads - save generated images to your device.</li>
            <li>host permissions - call OpenAI, Google, Ideogram, fal.ai or PhotoRoom APIs.</li>
          </ul>
        </section>
        <section className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-sm text-slate-300">
            Email <a href="mailto:support@smartecom.app" className="underline">support@smartecom.app</a> for any privacy request.
          </p>
        </section>
      </div>
    </main>
  );
}
