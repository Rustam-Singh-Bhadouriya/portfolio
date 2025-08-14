
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const controls = useAnimation();

  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "Data Visualization", level: 92 },
    { name: "Statistical Analysis", level: 88 },
    { name: "SQL & Database", level: 85 },
    { name: "Big Data (Spark, Hadoop)", level: 80 },
    { name: "Cloud Computing (AWS, GCP)", level: 78 }
  ];

  const toolsSkills = [
    { name: "Jupyter Notebook", level: 95 },
    { name: "Scikit-Learn", level: 92 },
    { name: "TensorFlow/PyTorch", level: 85 },
    { name: "Pandas/NumPy", level: 95 },
    { name: "Tableau/Power BI", level: 88 },
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 75 },
    { name: "Airflow", level: 70 }
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Team Collaboration", level: 92 },
    { name: "Critical Thinking", level: 93 },
    { name: "Project Management", level: 85 },
    { name: "Time Management", level: 88 },
    { name: "Adaptability", level: 90 },
    { name: "Attention to Detail", level: 92 }
  ];

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [activeTab, controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getSkillsForTab = () => {
    switch (activeTab) {
      case "technical":
        return technicalSkills;
      case "tools":
        return toolsSkills;
      case "soft":
        return softSkills;
      default:
        return technicalSkills;
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
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
            My Expertise
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Professional <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeIn}
            className="max-w-2xl mx-auto text-foreground/70"
          >
            With a strong foundation in data science and analytics, I've developed a diverse set of skills that enable me to tackle complex data challenges and deliver valuable insights.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Tabs
            defaultValue="technical"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/50 backdrop-blur-sm border border-muted">
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-foreground"
                >
                  Technical Skills
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-foreground"
                >
                  Tools & Frameworks
                </TabsTrigger>
                <TabsTrigger
                  value="soft"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-foreground"
                >
                  Soft Skills
                </TabsTrigger>
              </TabsList>
            </div>

            <motion.div
              animate={controls}
              initial={{ opacity: 0, y: 20 }}
            >
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {getSkillsForTab().map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3
            variants={fadeIn}
            className="text-2xl font-bold text-center mb-8"
          >
            Data Science Workflow
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Data Collection",
                description: "Gathering and sourcing relevant data from various channels and databases."
              },
              {
                step: "2",
                title: "Data Cleaning",
                description: "Processing and transforming raw data into a clean, analysis-ready format."
              },
              {
                step: "3",
                title: "Analysis & Modeling",
                description: "Applying statistical methods and machine learning algorithms to extract insights."
              },
              {
                step: "4",
                title: "Visualization & Reporting",
                description: "Creating compelling visualizations and actionable reports from findings."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index}
                className="relative"
              >
                <Card className="gradient-border bg-background h-full">
                  <CardContent className="pt-6">
                    <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-semibold mt-4 mb-2">{item.title}</h4>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 text-blue-500">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
