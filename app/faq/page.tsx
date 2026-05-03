import PageLayout from "../(pages)/layout";
import FAQSection from "../components/FAQ";
import { ScrollReveal } from "../ScrollReveal";

export const metadata = {
  title: "FAQ - Selene Shop",
  description: "Frequently Asked Questions",
};

export default function FAQPage() {
  return (
    <PageLayout>
      <ScrollReveal>
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <FAQSection fantasyFont="font-serif italic tracking-wider uppercase" />
          </div>
        </section>
      </ScrollReveal>
    </PageLayout>
  );
}