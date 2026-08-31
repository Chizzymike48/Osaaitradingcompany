import SectionHeading from "@/components/shared/SectionHeading";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata = {
  title: "About Us - OSSAI Premium Furniture",
  description: "Learn about OSSAI and our commitment to premium furniture design",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="About OSSAI"
            subtitle="Crafting Elegance, Inspiring Spaces"
          />
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="font-serif text-3xl mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-neutral-dark leading-relaxed mb-6">
              OSSAI was founded with a single vision: to bring premium, thoughtfully designed furniture into homes and spaces across Africa. We believed that quality furniture should not be inaccessible, and that every customer deserves pieces that combine functionality with timeless elegance.
            </p>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Today, we continue that mission by partnering with skilled craftspeople and selecting materials that meet our rigorous standards. Every piece in our collection reflects our commitment to excellence.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-6 text-foreground">
              What We Do
            </h2>
            <p className="text-lg text-neutral-dark leading-relaxed mb-6">
              We curate and create furniture and interior pieces that transform spaces. Our collection includes dining chairs, tables, complete dining sets, sofas, and carefully selected accent pieces. Each item is chosen or crafted with attention to design, quality, and durability.
            </p>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Whether you are furnishing a new home, redesigning a living space, or adding that perfect accent piece, we are here to help you find furniture that speaks to your style.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-6 text-foreground">
              Our Approach
            </h2>
            <p className="text-lg text-neutral-dark leading-relaxed mb-6">
              We believe furniture is more than just functional objects—it is an investment in your lifestyle and an expression of your personal style. Our approach is simple:
            </p>
            <ul className="space-y-4 text-lg text-neutral-dark">
              <li className="flex items-start space-x-4">
                <span className="text-accent font-bold mt-1">•</span>
                <div>
                  <strong>Quality First:</strong> We source materials carefully and work with skilled craftspeople to ensure every piece meets our standards.
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-accent font-bold mt-1">•</span>
                <div>
                  <strong>Timeless Design:</strong> We focus on pieces that will not feel dated in a few years—clean lines, elegant proportions, and enduring appeal.
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-accent font-bold mt-1">•</span>
                <div>
                  <strong>Customer Care:</strong> From selection to delivery and beyond, we are dedicated to ensuring your satisfaction.
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-accent font-bold mt-1">•</span>
                <div>
                  <strong>Accessibility:</strong> We believe premium furniture should be available to more people, which is why we focus on fair pricing without compromising quality.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-6 text-foreground">
              Why We&apos;re Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl mb-3 text-foreground">
                  Curated Selection
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  We do not stock everything—we carefully choose pieces that align with our vision of elegance and quality.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-foreground">
                  Local & Global
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  We work with local craftspeople while also sourcing premium materials and designs from trusted global partners.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-foreground">
                  Personalized Service
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  Our team is here to help you find exactly what you need for your space. We love talking about furniture.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-foreground">
                  Lasting Value
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  When you buy from OSSAI, you are investing in pieces designed to last for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-dark mb-8">
            Have questions about our furniture or need recommendations? We would love to hear from you.
          </p>
          <div className="space-y-4 text-lg">
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="text-accent hover:underline"
              >
                {BUSINESS_CONFIG.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="text-accent hover:underline"
              >
                {BUSINESS_CONFIG.email}
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Chat with us
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
