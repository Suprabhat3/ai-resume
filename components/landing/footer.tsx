"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Heart,
  X,
} from "lucide-react";
import { GridPattern } from "@/components/landing/illustrations";

export function Footer() {
  const [showPricingAlert, setShowPricingAlert] = useState(false);

  useEffect(() => {
    if (showPricingAlert) {
      const timer = setTimeout(() => setShowPricingAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showPricingAlert]);
  return (
    <footer className="border-t border-slate-200 bg-slate-50 relative z-10 pt-16 pb-8 overflow-hidden">
      <GridPattern className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="w-32 sm:w-40">
              <img
                src="/logo.png"
                alt="ATScV logo"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-slate-600 max-w-sm leading-relaxed">
              Craft an industry-standard, ATS-optimized resume in minutes.
              Revamp your old resume or let our deep-learning engine analyze
              your ATS score instantly.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://x.com/Suprabhat_3"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/Suprabhat3"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/suprabhatt"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 tracking-wide uppercase text-sm">
              Product
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li>
                <Link
                  href="/builder"
                  className="hover:text-emerald-600 transition-colors inline-block"
                >
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/ats-checker"
                  className="hover:text-emerald-600 transition-colors inline-block"
                >
                  ATS Checker
                </Link>
              </li>
              <li>
                <Link
                  href="#templates"
                  className="hover:text-emerald-600 transition-colors inline-block"
                >
                  Templates
                </Link>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPricingAlert(true);
                  }}
                  className="hover:text-emerald-600 transition-colors inline-block cursor-pointer text-left"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 tracking-wide uppercase text-sm">
              Resources
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li>
                <Link
                  href="https://blog.suprabhat.site"
                  target="_blank"
                  className="hover:text-emerald-600 transition-colors inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-600 transition-colors inline-block"
                >
                  Career Advice
                </Link>
              </li>
              <li>
                <Link
                  href="https://hirementis.site"
                  target="_blank"
                  className="hover:text-emerald-600 transition-colors inline-block"
                >
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="hover:text-emerald-600 transition-colors inline-block"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 tracking-wide uppercase text-sm">
              Contact
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>suprabhat.work@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="hover:text-green-600 transition-colors">
                  <a href="https://new.suprabhat.site" target="_blank">
                    Portfolio
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  in a quite place
                  <br />
                  somewhere on Earth
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ATScV. Built for excellence.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link
              href="/privacy"
              className="hover:text-emerald-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-emerald-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-emerald-600 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Alert Toast */}
      {showPricingAlert && (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 animate-in slide-in-from-bottom-8 fade-in duration-500">
          <div className="bg-white border border-emerald-200 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] p-4 sm:p-5 flex items-start gap-4 max-w-sm relative overflow-hidden group">
            {/* Background effects */}
            <div className="absolute top-[-50%] right-[-20%] w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-colors pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-20 h-20 bg-teal-400/20 rounded-full blur-xl pointer-events-none"></div>

            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-2.5 sm:p-3 text-emerald-600 shrink-0 relative z-10 ring-1 ring-emerald-200/50 shadow-sm">
              <Heart className="w-5 h-5 fill-emerald-500 text-emerald-600 drop-shadow-sm animate-pulse" />
            </div>

            <div className="flex-1 pr-6 relative z-10">
              <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-1 tracking-tight">
                100% Free Forever
              </h4>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                ATScV is an open initiative built for the community. Enjoy full
                access without any paywalls or hidden fees!
              </p>
            </div>

            <button
              onClick={() => setShowPricingAlert(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 p-1 transition-colors z-20"
              aria-label="Close alert"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
