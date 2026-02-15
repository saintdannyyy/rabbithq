import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-2xl">
          <div className="text-7xl md:text-8xl font-bold text-primary mb-4">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back
            on track!
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
