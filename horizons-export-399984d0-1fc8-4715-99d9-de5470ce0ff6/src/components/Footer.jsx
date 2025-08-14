
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Rustam S. Bhadouriya</h3>
            <p className="text-foreground/70 max-w-md">
              Transforming data into actionable insights and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Rustam-Singh-Bhadouriya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:rustambhadouriya7@gmail.com"
                className="text-foreground/70 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-foreground/50">
              &copy; {currentYear} Rustam Singh Bhadouriya. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted text-center">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#home" className="text-sm text-foreground/70 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-sm text-foreground/70 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-foreground/70 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
