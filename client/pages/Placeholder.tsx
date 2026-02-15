import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Placeholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-2xl">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-6 flex items-center justify-center">
            <span className="text-2xl">🐰</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            {description ||
              "This page is coming soon! Let us know if you'd like us to build this section."}
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
