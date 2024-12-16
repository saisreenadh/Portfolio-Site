import "./globals.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Saisreenadh Yandapalli | Website",
  description:
    "Hi! I'm Saisreenadh (Sreenadh) Yandapalli, a Stanford CS student specializing in AI and Psychology. I'm passionate about leveraging technology to create meaningful impact!",
  openGraph: {
    title: "Saisreenadh Yandapalli | Website",
    description:
      "Hi! I'm Saisreenadh (Sreenadh) Yandapalli, a Stanford CS student specializing in AI and Psychology. I'm passionate about leveraging technology to create meaningful impact!",
    images: [
      {
        url: "/images/hero-image.jpg", // Path to hero image for social sharing
        width: 1200,
        height: 630,
        alt: "Hero Image for Saisreenadh Yandapalli Portfolio",
      },
    ],
    type: "website",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Hi! I'm Saisreenadh (Sreenadh) Yandapalli, a Stanford CS student specializing in AI and Psychology. I'm passionate about leveraging technology to create meaningful impact!"
        />
        <meta property="og:title" content="Saisreenadh Yandapalli | Website" />
        <meta
          property="og:description"
          content="Hi! I'm Saisreenadh (Sreenadh) Yandapalli, a Stanford CS student specializing in AI and Psychology. I'm passionate about leveraging technology to create meaningful impact!"
        />
        <meta property="og:image" content="/images/hero-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saisreenadh Yandapalli | Website" />
        <meta
          name="twitter:description"
          content="Hi! I'm Saisreenadh (Sreenadh) Yandapalli, a Stanford CS student specializing in AI and Psychology. I'm passionate about leveraging technology to create meaningful impact!"
        />
        <meta name="twitter:image" content="/images/hero-image.jpg" />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-teal-100 to-blue-50 text-gray-800 overflow-x-hidden">
        {/* Navigation Bar */}
        <nav className="sticky top-0 bg-white shadow-md z-50">
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4">
            {/* Top-Left Tag */}
            <div className="text-teal-600 font-bold text-lg sm:text-xl whitespace-nowrap">
              Saisreenadh (Sreenadh) Yandapalli
            </div>

            {/* Navigation Links */}
            <div className="space-x-4 sm:space-x-6 text-gray-800 font-medium">
              <a href="/" className="hover:text-teal-500 transition-colors">
                Home
              </a>
              <a
                href="/projects"
                className="hover:text-teal-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="hover:text-teal-500 transition-colors"
              >
                Experience
              </a>
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
            © 2024 Saisreenadh Yandapalli. Built with ❤️ using Next.js and
            TailwindCSS.
          </p>
        </footer>
      </body>
    </html>
  );
}