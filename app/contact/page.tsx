export const metadata = {
  title: "Contact · SmartEcom Apps",
};

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container mx-auto max-w-3xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            SmartEcom Apps
          </p>
          <h1 className="section-title mt-2">Contact &amp; Support</h1>
        </div>
        <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-2 text-sm text-slate-200">
          <p className="text-lg font-semibold">Business details</p>
          <p>SmartEcom Apps</p>
          <p>6221 Cronquist Dr, Red Deer, Alberta, T4N 7E8, Canada</p>
          <p>Email: <a href="mailto:support@smartecom.app" className="underline">support@smartecom.app</a></p>
          <p>Manage subscription: open the extension and choose “Manage Subscription”.</p>
          <p>Support hours: Monday to Friday, 09:00 to 17:00 (MST)</p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-4">
          <p className="text-lg font-semibold text-slate-50">Draft a support email</p>
          <p className="text-sm text-slate-300">
            We do not store form submissions. Click the button below to open your email client with a pre-filled subject line.
          </p>
          <a
            href="mailto:support@smartecom.app?subject=Question%20about%20AI%20Image%20Studio"
            className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-slate-50"
          >
            Compose email
          </a>
        </section>
      </div>
    </main>
  );
}
