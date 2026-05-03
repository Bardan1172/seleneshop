import PageLayout from "../(pages)/layout";
import BlogSection from "../components/Blog";
import { ScrollReveal } from "../ScrollReveal";

export const metadata = {
  title: "Berita - Selene Shop",
  description: "Berita terkini dari Selene Shop",
};

export default function BlogPage() {
  return (
    <PageLayout>
      <ScrollReveal>
        <section className="pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">LATEST NEWS</span>
              <h1 className="font-serif italic tracking-wider uppercase text-5xl md:text-7xl font-bold text-white">BERITA</h1>
            </div>
            <BlogSection fantasyFont="font-serif italic tracking-wider uppercase" />
          </div>
        </section>
      </ScrollReveal>
    </PageLayout>
  );
}