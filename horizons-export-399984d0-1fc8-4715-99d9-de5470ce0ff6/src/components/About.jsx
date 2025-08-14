
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Brain, Database, LineChart } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { value: "Fresher", label: "No Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "3", label: "Research Papers" }
  ];

  const services = [
    {
      icon: <Brain className="h-10 w-10 text-blue-500" />,
      title: "Machine Learning",
      description: "Building predictive models and algorithms to extract insights from complex datasets."
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-500" />,
      title: "Data Visualization",
      description: "Creating interactive dashboards and visualizations to communicate data stories effectively."
    },
    {
      icon: <Database className="h-10 w-10 text-teal-500" />,
      title: "Data Engineering",
      description: "Designing robust data pipelines and infrastructure for efficient data processing."
    },
    {
      icon: <LineChart className="h-10 w-10 text-pink-500" />,
      title: "Statistical Analysis",
      description: "Applying statistical methods to uncover patterns and test hypotheses in data."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            About Me
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Passionate About <span className="gradient-text">Data Science</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img  alt="Data Scientist Portrait" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1593630363221-fd977445c8e7" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Turning Data into <span className="gradient-text">Actionable Insights</span>
            </h3>
            <p className="text-foreground/80 mb-6">
              With over 5 years of experience in the field of data science, I've developed a passion for extracting meaningful insights from complex datasets. My journey began with a strong foundation in statistics and programming, which evolved into expertise in machine learning and artificial intelligence.
            </p>
            <p className="text-foreground/80 mb-8">
              I believe that data is the most valuable asset in today's digital world, and my mission is to help organizations leverage their data to make informed decisions, optimize processes, and drive innovation. Whether it's building predictive models, creating interactive visualizations, or implementing end-to-end data solutions, I'm committed to delivering high-quality results that make a real impact.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <h4 className="text-3xl font-bold gradient-text number-counter">{stat.value}</h4>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          <motion.h3
            variants={fadeIn}
            className="text-2xl font-bold text-center mb-12"
          >
            My Services
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="data-card h-full bg-muted/50 border-muted hover:border-blue-500/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-foreground/70 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
