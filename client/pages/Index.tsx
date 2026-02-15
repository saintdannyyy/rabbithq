import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  Zap,
  Shield,
  Heart,
  Sprout,
  Award,
} from "lucide-react";

export default function Index() {
  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Rabbit Meat",
      category: "Meat",
      price: "$24.99",
      image: "/rabbit-meat.jpg",
      description: "Premium quality, ethically raised rabbit meat",
    },
    {
      id: 2,
      name: "Live Rabbits",
      category: "Live Animals",
      price: "$49.99",
      image: "/live-rabbit.jpg",
      description: "Healthy, well-bred rabbits from our farm",
    },
    {
      id: 3,
      name: "Organic Farm Eggs",
      category: "Eggs",
      price: "$6.99",
      image: "/Farm-Eggs.jpg",
      description: "Fresh, nutrient-rich organic eggs",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description:
        "We practice sustainable agriculture that respects the environment and maintains soil health for future generations.",
    },
    {
      icon: Heart,
      title: "Animal Welfare",
      description:
        "Every rabbit on our farm is treated with compassion and raised in humane conditions with proper care.",
    },
    {
      icon: Sprout,
      title: "Natural Growth",
      description:
        "No antibiotics, no hormones, no shortcuts. Just natural, healthy growth in a stress-free environment.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Every product is inspected and tested to ensure it meets our rigorous standards for freshness and quality.",
    },
  ];

  const testimonials = [
    {
      name: "Chef Marcus",
      role: "Head Chef, The Green Table Restaurant",
      text: "RabbitHq provides the highest quality rabbit meat I've ever worked with. The flavor is exceptional and our customers love it.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "Home Cook & Food Blogger",
      text: "I started buying from RabbitHq for their commitment to ethical farming. The quality is incredible and delivery is always fresh.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "David Chen",
      role: "Sustainable Living Advocate",
      text: "Finally, a source for premium rabbit products that aligns with my values. RabbitHq is doing it right.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Premium Rabbit Products, Delivered Fresh
              </h1>
              <p className="text-lg text-slate-600">
                From our family farm to your table. Ethically raised rabbits and
                rabbit products backed by a commitment to quality,
                sustainability, and animal welfare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-80 md:h-96 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="/happy-rabbits.png"
                alt="Happy rabbits on farm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Generations of Farming Excellence
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                RabbitHq was founded on a simple principle: deliver premium
                quality rabbit products while maintaining the highest standards
                of animal welfare and environmental stewardship.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For over 15 years, our family-owned farm has been raising
                rabbits the right way—naturally, humanely, and sustainably. We
                don't believe in shortcuts. Every rabbit on our farm is treated
                as part of our family, and that care translates into superior
                products.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Learn More About Our Farm
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=600&fit=crop"
                alt="RabbitHq farm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              What drives us every single day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose RabbitHq?
            </h2>
            <p className="text-lg text-slate-600">
              The difference is in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Ethically Raised",
                description:
                  "All our rabbits are raised in healthy, humane conditions with space to roam and natural behaviors encouraged.",
              },
              {
                icon: Zap,
                title: "Fresh Delivery",
                description:
                  "Products are harvested fresh and delivered quickly to maintain peak quality, nutrition, and flavor.",
              },
              {
                icon: Shield,
                title: "Premium Quality",
                description:
                  "Rigorous quality standards, no antibiotics, no hormones. Just pure, natural rabbit products.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors"
                >
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Products
            </h2>
            <p className="text-lg text-slate-600">
              Explore our range of premium offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary transition-colors group"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-slate-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Browse All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600">
              Join thousands of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bulk Orders for Restaurants & Businesses?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We offer special pricing and dedicated support for restaurants,
            catering services, and bulk purchases. Get in touch for a quote.
          </p>
          <Link
            to="/bulk-orders"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Bulk Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Stay Updated</h2>
          <p className="text-slate-600 mb-8">
            Get updates on new products, seasonal specials, and farming insights
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </Layout>
  );
}
