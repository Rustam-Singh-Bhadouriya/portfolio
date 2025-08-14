
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Virtual Assistant - With Gemini",
      description: "Virtual assistant created using the Gemini API key for intelligent interactions and task automation.",
      tags: ["Python", "Gemini API", "AI", "NLP"],
      image: "ai-virtual-assistant-interface-with-glowing-brain-icon-and-chat-bubbles"
    },
    {
      title: "AI Virtual CLI Teacher .v1 - With Gemini",
      description: "Virtual Teacher created using the Gemini API key for intelligent interactions and Teaching finding and more but only CLI",
      tags: ["Python", "Gemini API", "AI", "NLP" , "AI Teacher"],
      image: "ai-virtual-assistant-interface-with-glowing-brain-icon-and-chat-bubbles"
    },
    {
      title: "Kirox Discord Bot",
      description: "A complex server management bot for Discord, designed to prevent abuse and manage various server functions.",
      tags: ["Python", "Discord.py", "Bot Development", "Server Management"],
      image: "discord-bot-interface-with-server-management-tools-and-user-list"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Used K-means clustering to segment customers based on purchasing behavior, helping a retail client optimize their marketing strategy.",
      tags: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
      image: "retail-customer-segmentation-dashboard-with-colorful-charts-and-customer-profiles"
    },
    {
      title: "Predictive Maintenance System",
      description: "Developed a machine learning model to predict equipment failures before they occur, reducing downtime by 35% for a manufacturing company.",
      tags: ["Python", "TensorFlow", "Time Series", "IoT"],
      image: "industrial-machinery-with-predictive-maintenance-system-showing-real-time-analytics-dashboard"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-blue-500 font-medium mb-2"
          >
            My Portfolio
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeIn}
            className="max-w-2xl mx-auto text-foreground/70"
          >
            Explore a selection of my data science projects that demonstrate my expertise in machine learning, data analysis, and visualization.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="project-card overflow-hidden border-muted bg-muted/30 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img  alt={project.title} class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" />
                  <div className="project-overlay absolute inset-0 flex items-center justify-center gap-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/40"
                      onClick={() => window.open("https://github.com/Rustam-Singh-Bhadouriya", "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/40">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
