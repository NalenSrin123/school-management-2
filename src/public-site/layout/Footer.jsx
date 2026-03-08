import {
  Mail,
  Phone,
  MapPin,
  Share2,
  Globe,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb- sm:mb-6">
          <div className="col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-600 flex-shrink-0">
                <span className="text-base sm:text-lg font-bold text-white">
                  <GraduationCap />
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                EduManage
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              Providing an integrated ecosystem for students, parents, and
              educators to collaborate and achieve higher academic success
              through modern technology
            </p>

            <div className="flex gap-2 sm:gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xs sm:text-sm uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Course List
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Video Library
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xs sm:text-sm uppercase tracking-wide mb-4">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Guideline
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xs sm:text-sm uppercase tracking-wide mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  125 Education Boulevard, Campus District, San Francisco, CA
                  94105
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 break-all">
                  admissions@edumanage.edu
                </a>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  +1 (555) EDU-HELP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 my-6 sm:my-6"></div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            © 2026 EduManage SaaS. Empowering Education Everywhere.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
