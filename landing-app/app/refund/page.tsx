export const metadata = {
  title: "Refund & Cancellation Policy · AI Image Studio",
};

export default function RefundPage() {
  return (
    <main className="section">
      <div className="container mx-auto max-w-3xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            SmartEcom Apps
          </p>
          <h1 className="section-title mt-2">Refund &amp; Cancellation Policy</h1>
          <p className="text-sm text-slate-400">Last updated: January 2025</p>
        </div>
        <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-4">
          <h2 className="text-xl font-semibold">Digital product</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            AI Image Studio is delivered instantly as a Chrome extension. Access is tied to your ExtensionPay account as soon as payment succeeds.
          </p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-4">
          <h2 className="text-xl font-semibold">Refund window</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We offer a 14-day refund window for first-time purchases for Monthly, Yearly and Lifetime plans.
          </p>
          <p className="text-sm text-slate-300">
            Email <a className="underline" href="mailto:support@smartecom.app">support@smartecom.app</a> with:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2">
            <li>Purchase email address</li>
            <li>Date and plan type</li>
            <li>Reason for refund</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-4">
          <h2 className="text-xl font-semibold">Subscription cancellation</h2>
          <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2">
            <li>In Chrome, click the AI Image Studio icon to open the extension.</li>
            <li>In the billing area, select “Manage Subscription”.</li>
            <li>You will be redirected to ExtensionPay / Stripe to cancel or update payment info.</li>
          </ul>
          <p className="text-sm text-slate-300">
            After cancellation your license stays active until the end of the current billing period.
          </p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-3">
          <h2 className="text-xl font-semibold">Non-refundable cases</h2>
          <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2">
            <li>Requests outside the 14-day window</li>
            <li>Evidence of abuse or fraudulent payment activity</li>
            <li>Repeated refund requests across multiple accounts</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
