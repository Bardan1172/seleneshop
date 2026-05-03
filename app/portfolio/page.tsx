import PageLayout from "../(pages)/layout";
import PortfolioSection from "../components/Portfolio";
import { ScrollReveal } from "../ScrollReveal";

export const metadata = {
  title: "Portfolio - Selene Shop",
  description: "Portfolio karya-karya terbaik Selene Shop",
};

export default function PortfolioPage() {
  return (
    <PageLayout>
      <ScrollReveal>
        <section className="pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">OUR WORK</span>
              <h1 className="font-serif italic tracking-wider uppercase text-5xl md:text-7xl font-bold text-white">PORTFOLIO</h1>
            </div>
            <PortfolioSection fantasyFont="font-serif italic tracking-wider uppercase" />
          </div>
        </section>
      </ScrollReveal>
    </PageLayout>
  );
}