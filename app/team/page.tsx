import PageLayout from "../(pages)/layout";
import TeamSection from "../components/Team";
import { ScrollReveal } from "../ScrollReveal";

export const metadata = {
  title: "Team - Selene Shop",
  description: "Tim kreatif Selene Shop",
};

export default function TeamPage() {
  return (
    <PageLayout>
      <ScrollReveal>
        <section className="pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">OUR TEAM</span>
              <h1 className="font-serif italic tracking-wider uppercase text-5xl md:text-7xl font-bold text-white">TIM KAMI</h1>
            </div>
            <TeamSection fantasyFont="font-serif italic tracking-wider uppercase" />
          </div>
        </section>
      </ScrollReveal>
    </PageLayout>
  );
}