"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionHeading from "@/components/shared/SectionHeading";
import { BUSINESS_CONFIG } from "@/config/business";
import { PRODUCTS } from "@/data/products";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  product: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        throw new Error(result.error ?? "Unable to send your message.");
      }

      setSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Unable to send your message.");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Get in Touch"
            subtitle="We would love to hear from you. Send us a message."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-xl mb-4 text-foreground">
                  Phone
                </h3>
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="text-lg text-accent hover:underline"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4 text-foreground">
                  Email
                </h3>
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="text-lg text-accent hover:underline"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4 text-foreground">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-accent hover:underline"
                >
                  Chat with us
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4 text-foreground">
                  Address
                </h3>
                <p className="text-neutral-dark">{BUSINESS_CONFIG.address}</p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4 text-foreground">
                  Hours
                </h3>
                <p className="text-neutral-dark">{BUSINESS_CONFIG.hours}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-sm">
                  <h3 className="font-serif text-2xl text-green-800 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-3 border border-neutral-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-neutral-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-neutral-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+234 123 456 7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      className="w-full px-4 py-3 border border-neutral-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Product */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Product (optional)
                    </label>
                    <select
                      {...register("product")}
                      className="w-full px-4 py-3 border border-neutral-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a product</option>
                      {PRODUCTS.map((product) => (
                        <option key={product.id} value={product.name}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
