import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import {
  FaHome,
  FaLayerGroup,
  FaBriefcase,
  FaUser,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Saisreenadh Yandapalli | Website",
  description:
    "Hi! I'm Saisreenadh (Sreenadh) Yandapalli, a Stanford CS student specializing in AI and Psychology. I'm passionate about leveraging technology to create meaningful impact!",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {/* Navigation Bar */}
          <nav className="fixed md:top-1/2 md:right-6 md:transform md:-translate-y-1/2 z-50 flex justify-center md:justify-end">
            <div className="flex flex-col items-center space-y-6 bg-top-dark shadow-lg rounded-lg p-4 bg-opacity-90">
              <NavItem href="/" Icon={FaHome} label="Home" />
              <NavItem href="/me" Icon={FaUser} label="Me" />
              <NavItem href="/projects" Icon={FaLayerGroup} label="Projects" />
              <NavItem href="/experience" Icon={FaBriefcase} label="Experience" />
              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>
            </div>
          </nav>

          {/* Page Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-top-dark text-gray-800 dark:text-textLightGrey py-8 text-center shadow-md">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://github.com/saisreenadh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sreenadh-yandapalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:syandapalli89@gmail.com"
                className="hover:text-teal-400"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-sm">
              © 2024 Saisreenadh Yandapalli. Built with ❤️ using Next.js and TailwindCSS.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

function NavItem({ href, Icon, label }) {
  return (
    <a
      href={href}
      className="relative group flex items-center justify-center bg-card-bg rounded-lg p-3 shadow-md hover:scale-105 transition-transform"
    >
      <Icon size={28} className="text-gray-800 dark:text-gray-200" />
      <span className="absolute right-full mr-2 px-2 py-1 text-sm bg-gray-800 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </a>
  );
}