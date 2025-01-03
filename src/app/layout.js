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
    "Hi! I'm Saisreenadh (Sreenadh) Yandapalli, a Stanford CS student specializing in AI. I'm passionate about leveraging technology to create meaningful impact!",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Corrected Favicon Path */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {/* Navigation Bar */}
          <nav
            className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-center space-x-4 p-3 bg-top-dark shadow-lg md:flex-col md:space-x-0 md:space-y-7 md:top-1/2 md:right-0 md:left-auto md:transform md:-translate-y-1/2 md:rounded-lg"
          >
            <NavItem href="/" Icon={FaHome} label="Home" />
            <NavItem href="/me" Icon={FaUser} label="Me" />
            <NavItem href="/projects" Icon={FaLayerGroup} label="Projects" />
            <NavItem href="/experience" Icon={FaBriefcase} label="Experience" />
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </nav>

          {/* Page Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-top-dark text-gray-800 dark:text-[#EAEAEA] py-8 text-center shadow-md">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://github.com/saisreenadh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 dark:hover:text-gray-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saisreenadh-yandapalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 dark:hover:text-gray-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:saisreenadh@stanford.edu"
                className="hover:text-gray-400 dark:hover:text-gray-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-800 dark:text-[#EAEAEA]">
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
      className="relative group flex items-center justify-center bg-card-bg rounded-lg p-3 md:p-4 shadow-md hover:scale-105 transition-transform"
    >
      {/* Icon Size Adjusted */}
      <Icon
        size={20} // Mobile icon size
        className="text-gray-800 dark:text-[#EAEAEA] md:size-[28px]" // Larger icon on desktop
      />
      {/* Text appears only on desktop when hovering */}
      <span className="absolute hidden md:block right-full mr-3 px-2 py-1 text-sm bg-gray-800 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </a>
  );
}