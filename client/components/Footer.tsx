import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary text-sm">RH</span>
              </div>
              <span className="font-bold text-lg">RabbitHq</span>
            </div>
            <p className="text-sm text-white/80">
              Premium rabbit products from our trusted farm, delivered fresh to
              your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-white/80 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=meat" className="text-sm text-white/80 hover:text-white transition-colors">
                  Rabbit Meat
                </Link>
              </li>
              <li>
                <Link to="/shop?category=live" className="text-sm text-white/80 hover:text-white transition-colors">
                  Live Rabbits
                </Link>
              </li>
              <li>
                <Link to="/shop?category=eggs" className="text-sm text-white/80 hover:text-white transition-colors">
                  Eggs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/bulk-orders" className="text-sm text-white/80 hover:text-white transition-colors">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-white/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">info@rabbithq.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  123 Farm Lane, Rural County
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2024 RabbitHq. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
