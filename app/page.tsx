"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Fingerprint,
  Layers,
  Menu,
  Shield,
  Sparkles,
} from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#workflow", label: "Workflow" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const aiModels = [
  {
    name: "OpenAI GPT Image 1",
    description:
      "Primary prompt-to-image engine with transparent background export and remix controls.",
  },
  {
    name: "OpenAI Sora 2",
    description:
      "Rapid image-to-video remixes with support for fine control and future Sora upgrades.",
  },
  {
    name: "OpenAI Sora 2 Pro",
    description:
      "Premium cinematic motion tailored for hero shots, campaign teasers, and storytelling.",
  },
  {
    name: "Google Imagen 4",
    description:
      "High fidelity prompt-to-image workflow optimized for apparel, packaging, and product renders.",
  },
  {
    name: "Google Gemini 2.5 Flash Image (Nano Banana)",
    description:
      "Lightning-fast remixing powered by Google’s latest multimodal model via fal.ai.",
  },
  {
    name: "fal.ai SeeDream 4",
    description:
      "High fidelity editing with multi-image context, style transfer, and inpainting.",
  },
  {
    name: "fal.ai Kling 2.5 Image-to-Video",
    description:
      "Pro and Standard tiers for turning still frames into smooth product motion.",
  },
  {
    name: "PhotoRoom Background Studio",
    description:
      "Optional background removal and cleanup finishing pass for export-ready assets (not a generator).",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Precision cropping",
    body: "Detect every image on the page, apply multi-region crops with rotation snapping and respect the grid of your storefront.",
  },
  {
    icon: Layers,
    title: "AI generation layer",
    body: "Connect OpenAI, Google, Ideogram or fal.ai using your own API keys. Templates, batch mode and Direct mode keep you fast.",
  },
  {
    icon: Shield,
    title: "Product analysis",
    body: "Trigger a 14-section analysis covering audience, positioning, pricing, keywords and campaign ideas with URL-based caching.",
  },
  {
    icon: Fingerprint,
    title: "Privacy by design",
    body: "No uploads to SmartEcom servers. Everything stays between your browser and the providers you configure. Keys live locally.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Install the extension",
    copy: "Use the official Chrome Web Store listing to add AI Image Studio and pin it to your toolbar.",
  },
  {
    step: "02",
    title: "Connect providers",
    copy: "Paste your API keys for OpenAI, Google, Ideogram, fal.ai or PhotoRoom. We never transmit them.",
  },
  {
    step: "03",
    title: "Upgrade via ExtensionPay",
    copy: "Click “Upgrade to Pro” inside AI Image Studio to open Stripe-powered checkout (monthly, yearly or lifetime).",
  },
  {
    step: "04",
    title: "Create and analyze",
    copy: "Crop, send to AI, download results and review the product analysis without leaving the page.",
  },
];

const pricing = [
  {
    title: "Monthly",
    price: "$19.99",
    cadence: "per month · auto-renew",
    bullets: [
      "Unlimited AI Image Studio usage",
      "Full creative + analysis suite",
      "Manage subscription inside the extension",
    ],
  },
  {
    title: "Yearly",
    price: "$149.99",
    cadence: "per year · auto-renew",
    highlight: true,
    bullets: [
      "Save 37% vs. monthly",
      "Priority billing support",
      "Ideal for teams running campaigns year-round",
    ],
  },
  {
    title: "Lifetime",
    price: "$349.99",
    cadence: "one-time · no renewals",
    bullets: [
      "Lifetime Pro license for one user",
      "Future updates included",
      "Perfect for agencies or long-term operators",
    ],
  },
];

const faqs = [
  {
    q: "Where does checkout happen?",
    a: "Inside AI Image Studio using ExtensionPay (powered by Stripe). This site describes the workflow, but payment and license management run through Stripe.",
  },
  {
    q: "Do you store my images or API keys?",
    a: "No. Images go straight from your browser to OpenAI, Google, Ideogram or fal.ai. API keys never leave Chrome storage and are encrypted locally.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Open the extension, click “Manage Subscription”, and ExtensionPay/Stripe will cancel the renewal while keeping access until the end of the paid period.",
  },
  {
    q: "Do you offer refunds?",
    a: "We provide a 14-day refund window on first purchases. Requests are handled via support@smartecom.app and processed by Stripe.",
  },
  {
    q: "Is there a trial?",
    a: "You can explore the UI for free after installing. Upgrade to Pro when you’re ready to unlock unlimited AI models and product analysis.",
  },
  {
    q: "Who uses AI Image Studio?",
    a: "Shopify and Amazon sellers, creative agencies, and marketing teams who need to iterate product visuals and insights rapidly.",
  },
];

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <SiteHeader />
      <main className="space-y-8 pb-16">
        <Hero />
        <VideoSection />
        <ProvidersSection />
        <Features />
        <Workflow />
        <Pricing />
        <FAQ />
        <Company />
      </main>
      <Footer />
    </div>
  );
}

const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link className="flex items-center gap-3" href="#">
        <div className="relative h-9 w-9 md:h-11 md:w-11">
          <Image
            src="/icon.png"
            alt="AI Image Studio logo"
            fill
            sizes="44px"
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-tight">
            AI Image Studio
          </span>
          <span className="text-xs text-muted-foreground">
            a product of SmartEcom.app
          </span>
        </div>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-300/90 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Button asChild>
          <Link href="https://chromewebstore.google.com/detail/ai-image-studio/ojglbhhklfkbffklgebjgiclhmmnpmbc">
            Install extension
          </Link>
        </Button>
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-4 pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild>
                <Link href="https://chromewebstore.google.com/detail/ai-image-studio/ojglbhhklfkbffklgebjgiclhmmnpmbc">
                  Install extension
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = (index: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.06, duration: 0.5 },
  },
});

const Hero = () => (
  <motion.section
    className="section"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
  >
    <div className="container mx-auto flex flex-col gap-12 px-4 lg:flex-row">
      <div className="flex-1 space-y-6">
        <SectionLabel text="Chrome Extension" />
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          AI-powered image editing & product analysis inside your browser.
        </h1>
        <p className="text-lg text-muted-foreground">
          AI Image Studio is a Chrome extension that overlays any storefront,
          lets you crop product images with pixel precision, transform them with
          leading AI models, and generate structured market insights without
          switching tabs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild className="gap-2 text-base">
            <Link href="https://chromewebstore.google.com/detail/ai-image-studio/ojglbhhklfkbffklgebjgiclhmmnpmbc">
              Install on Chrome
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/checkout">How checkout works</Link>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-3xl font-semibold">14</p>
            <p className="text-muted-foreground">analysis modules</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">5+</p>
            <p className="text-muted-foreground">AI providers supported</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">90s</p>
            <p className="text-muted-foreground">idea → final visual</p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <Card className="surface-card shadow-[0_30px_80px_rgba(5,7,20,0.65)] border-white/5 bg-gradient-to-b from-white/10 via-white/5 to-transparent">
          <CardHeader className="flex-row items-start justify-between">
            <div>
              <CardTitle className="text-2xl">Live on your product page</CardTitle>
              <CardDescription className="text-sm text-slate-200">
                Select any image → Crop → Send to AI
              </CardDescription>
            </div>
            <Badge className="rounded-full border border-emerald-200/20 bg-gradient-to-r from-emerald-400/20 to-emerald-300/10 px-4 py-1 text-xs text-emerald-100">
              On-page overlay
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-[0.65rem] uppercase tracking-[0.5em] text-slate-400">
                Workflow inside the extension
              </p>
              <div className="space-y-3">
                {[
                  "Hover any product image and choose “Crop with AI Image Studio”.",
                  "Use multi-region crop + rotation to isolate the exact area you need.",
                  "Send to your preferred AI model, run analysis and auto-download.",
                ].map((text, index) => (
                  <div key={text} className="hero-step">
                    <span className="hero-step-number">{index + 1}</span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-wrap gap-3 text-xs text-slate-100">
              <Badge variant="outline" className="rounded-full border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100">
                No external uploads
              </Badge>
              <Badge variant="outline" className="rounded-full border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100">
                Your API keys stay local
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </motion.section>
);

const ProvidersSection = () => (
  <motion.section
    className="section"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
  >
    <div className="container mx-auto px-4">
      <div className="surface-card shadow-soft-glow border-white/10 bg-white/5/80 p-8">
        <div className="mb-4 flex items-center justify-between">
          <SectionLabel text="AI models" />
          <p className="text-sm text-slate-300">
            Bring your own API keys for any of these services.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {aiModels.map((model) => (
            <div
              key={model.name}
              className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/5 px-5 py-4 shadow-[0_10px_25px_rgba(2,6,23,0.55)]"
            >
              <p className="text-lg font-semibold text-slate-50">{model.name}</p>
              <p className="text-sm text-slate-300 mt-1">{model.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-300">
          We never proxy or store API responses. Your browser communicates
          directly with each provider, and we continuously add the latest
          best-performing models as soon as they become available.
        </p>
      </div>
    </div>
  </motion.section>
);

const VideoSection = () => (
  <section className="section">
    <div className="container mx-auto px-4">
      <div className="surface-card shadow-soft-glow flex flex-col items-center gap-4 border-white/10 bg-white/5/70 p-8 text-center">
        <SectionLabel text="Product video" />
        <h3 className="text-3xl font-semibold tracking-tight">
          Watch AI Image Studio in action
        </h3>
        <div className="mt-4 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(5,7,20,0.6)]">
          <video
            controls
            playsInline
            className="aspect-video w-full bg-black"
            poster="/video-poster.jpg"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <motion.section
    className="section"
    id="product"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-3xl space-y-4">
        <SectionLabel text="Product" />
        <h2 className="section-title">
          Built for creative and growth teams who move fast.
        </h2>
        <p className="section-subtitle">
          Swap between creative generation and strategic analysis without
          juggling browser tabs or manual exports.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={stagger(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="surface-card">
              <CardHeader className="space-y-2">
                <feature.icon className="h-9 w-9 text-brand-secondary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-slate-200">
                  {feature.body}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Workflow = () => (
  <motion.section
    className="section"
    id="workflow"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-3xl space-y-4">
        <SectionLabel text="Workflow" />
        <h2 className="section-title">
          Checkout and onboarding take less than two minutes.
        </h2>
        <p className="section-subtitle">
          Install from Chrome Web Store, configure your providers, and upgrade
          securely via ExtensionPay.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {workflow.map((item, index) => (
          <motion.div
            key={item.step}
            variants={stagger(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="surface-card">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold">
                  {item.step}
                </div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-200">
                    {item.copy}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Pricing = () => (
  <motion.section
    className="section"
    id="pricing"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-3xl space-y-4">
        <SectionLabel text="Pricing" />
        <h2 className="section-title">Simple plans via ExtensionPay.</h2>
        <p className="section-subtitle">
          AI provider usage is billed separately by OpenAI, Google, Ideogram or
          fal.ai according to your accounts.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pricing.map((plan, index) => (
          <motion.div
            key={plan.title}
            variants={stagger(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card
              className={`surface-card flex h-full flex-col ${
                plan.highlight
                  ? "border-emerald-400/60 bg-emerald-400/10 shadow-soft-glow"
                  : ""
              }`}
            >
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {plan.title}
              </CardTitle>
              <CardDescription className="text-slate-200">
                <span className="text-4xl font-semibold text-foreground">
                  {plan.price}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  {plan.cadence}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-2 text-sm">
              {plan.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-brand-secondary" />
                  <span>{bullet}</span>
                </div>
              ))}
              <Button asChild className="mt-6" variant={plan.highlight ? "default" : "secondary"}>
                <Link href="https://chromewebstore.google.com/detail/ai-image-studio/ojglbhhklfkbffklgebjgiclhmmnpmbc">
                  Install &amp; upgrade in extension
                </Link>
              </Button>
            </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="info-banner mt-8">
        Payments are processed securely via ExtensionPay (Stripe). Subscriptions
        renew automatically until cancelled. Refund policy: 14-day window for
        first-time purchases. See{" "}
        <Link href="/refund">Refund &amp; Cancellation Policy</Link>.
      </div>
    </div>
  </motion.section>
);

const FAQ = () => (
  <motion.section
    className="section"
    id="faq"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-3xl space-y-4">
        <SectionLabel text="FAQ" />
        <h2 className="section-title">
          Common questions from teams and compliance reviewers.
        </h2>
        <p className="section-subtitle">
          Need something else? Email{" "}
          <Link href="mailto:support@smartecom.app" className="underline">
            support@smartecom.app
          </Link>
          .
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.q}
            variants={stagger(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="surface-card">
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-slate-200">
                  {faq.a}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Company = () => (
  <motion.section
    className="section"
    id="contact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
  >
    <div className="container mx-auto grid gap-6 px-4 lg:grid-cols-2">
      <Card className="surface-card">
        <CardHeader>
          <CardTitle>SmartEcom Apps · Canada</CardTitle>
          <CardDescription className="text-slate-200">
            AI Image Studio is a product of SmartEcom.app.
            <br />
            6221 Cronquist Dr, Red Deer, Alberta, T4N 7E8, Canada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            Email:{" "}
            <Link href="mailto:support@smartecom.app" className="underline">
              support@smartecom.app
            </Link>
          </p>
          <p>Manage subscription: open the extension and choose “Manage Subscription”.</p>
        </CardContent>
      </Card>
      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Need help?</CardTitle>
          <CardDescription className="text-slate-200">
            Draft an email using your preferred client. We respond within one
            business day for billing or support requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary">
            <Link href="mailto:support@smartecom.app?subject=Question%20about%20AI%20Image%20Studio">
              Contact support
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="border-t border-white/10 py-10 text-sm text-muted-foreground">
    <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p>© {new Date().getFullYear()} SmartEcom Apps. All rights reserved.</p>
        <p className="text-xs text-slate-500">
          6221 Cronquist Dr, Red Deer, Alberta, T4N 7E8, Canada · support@smartecom.app
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-white">
          Terms
        </Link>
        <Link href="/refund" className="hover:text-white">
          Refunds
        </Link>
        <Link href="/checkout" className="hover:text-white">
          Checkout
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>
    </div>
  </footer>
);
