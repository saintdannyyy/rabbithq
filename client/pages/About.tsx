import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Leaf,
  Heart,
  Sprout,
  Award,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "John Martinez",
      role: "Founder & Farm Manager",
      bio: "15+ years of rabbit farming experience with a passion for sustainable agriculture",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Operations",
      bio: "Expert in farm management and animal welfare with certifications in sustainable farming",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Marcus Thompson",
      role: "Quality Control Manager",
      bio: "Ensures every product meets our rigorous standards for quality and freshness",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      name: "Sarah Liu",
      role: "Customer Relations",
      bio: "Dedicated to ensuring every customer has an exceptional experience with RabbitHq",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description:
        "John Martinez founded RabbitHq with a vision to raise rabbits the right way.",
    },
    {
      year: "2013",
      title: "Farm Expansion",
      description:
        "Expanded operations to include sustainable farming practices and expanded product lines.",
    },
    {
      year: "2016",
      title: "Certification",
      description:
        "Achieved sustainable farming certification and began supplying local restaurants.",
    },
    {
      year: "2019",
      title: "Direct to Consumer",
      description:
        "Launched online store to deliver fresh products directly to customers nationwide.",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Recognized as one of the top sustainable rabbit farms in the region.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description:
        "Committed to expanding our reach while maintaining our core values of quality and ethics.",
    },
  ];

  const commitments = [
    {
      title: "Animal Welfare First",
      description:
        "Every rabbit at RabbitHq has access to clean shelter, proper nutrition, and space to express natural behaviors. We maintain low stocking densities and provide enrichment activities to ensure psychological well-being.",
      icon: Heart,
    },
    {
      title: "Sustainable Practices",
      description:
        "We use crop rotation, natural fertilizers, and water conservation techniques to minimize our environmental impact. Our farming methods work with nature, not against it.",
      icon: Leaf,
    },
    {
      title: "No Antibiotics, No Hormones",
      description:
        "We believe in raising healthy animals naturally. All our rabbits are raised without any antibiotics, growth hormones, or artificial additives. Health comes from proper care, not chemicals.",
      icon: Sprout,
    },
    {
      title: "Quality Assurance",
      description:
        "Every product goes through rigorous testing and inspection before leaving our farm. We maintain cold chain integrity to ensure maximum freshness from farm to table.",
      icon: Award,
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Dedicated to raising premium rabbits with integrity, sustainability,
            and a deep commitment to animal welfare.
          </p>
        </div>
      </div>

      {/* Farm Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                15 Years of Excellence
              </h2>
              <p className="text-slate-600 leading-relaxed">
                RabbitHq was born from a simple dream: to prove that you could
                raise premium quality rabbits while maintaining the highest
                standards of animal welfare and environmental responsibility.
                What started as a small family farm has grown into a trusted
                source for premium rabbit products.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our founder, John Martinez, grew up on a farm and always
                believed that ethical farming and exceptional quality could go
                hand in hand. Rather than accepting industry shortcuts, he built
                RabbitHq on the principle that the right way is always worth the
                extra effort.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we're proud to work with restaurants, food professionals,
                and home cooks who demand the same commitment to quality that we
                do. Every rabbit on our farm is part of our extended family, and
                that care shows in every product.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=600&fit=crop"
                alt="RabbitHq farm landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="flex gap-4 mb-6">
              <Target className="w-10 h-10 text-primary flex-shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Promise to You
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              When you choose RabbitHq, you're not just buying a product—you're
              supporting a farm that believes in doing things the right way. We
              promise you that every rabbit on our farm is treated with
              compassion, every product meets rigorous quality standards, and
              every purchase supports sustainable farming practices. We're
              committed to transparency, consistent excellence, and building a
              community of customers who share our values.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitments Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Commitments
            </h2>
            <p className="text-lg text-slate-600">
              Core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, idx) => {
              const Icon = commitment.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-slate-600">{commitment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600">
              Key milestones in the RabbitHq story
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row gap-8 ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div
                      className={`bg-slate-50 p-6 rounded-xl border border-slate-200 ${
                        idx % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="md:w-1/2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions? Get in Touch
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Contact us to learn more about our farm,
            products, or partnership opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
