import "./globals.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Sreenadh Portfolio",
  description: "Portfolio showcasing projects, skills, and experiences of Sreenadh Yandapalli",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-teal-100 to-blue-50 text-gray-800">
        {/* Navigation Bar */}
        <nav className="sticky top-0 bg-white shadow-md z-50">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="text-teal-600 font-bold text-xl">
              Saisreenadh (Sreenadh) Yandapalli
            </div>
            <div className="space-x-6 text-gray-800 font-medium">
              <a href="/" className="hover:text-teal-500 transition-colors">Home</a>
              <a href="/projects" className="hover:text-teal-500 transition-colors">Projects</a>
              <a href="/experience" className="hover:text-teal-500 transition-colors">Experience</a>
              <a
                href="mailto:syandapalli89@gmail.com"
                className="hover:text-teal-500 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-teal-300 to-blue-200 text-gray-800 py-8 text-center">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/saisreenadh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sreenadh-yandapalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:syandapalli89@gmail.com"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-sm">
            © 2024 Sreenadh Yandapalli. Built with ❤️ using Next.js and TailwindCSS.
          </p>
        </footer>
      </body>
    </html>
  );
}