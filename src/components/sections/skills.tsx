"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Cloud, Server, Database, Code, Settings, Monitor } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      id: "security",
      title: "Cybersécurité",
      icon: Shield,
      description: "Outils et techniques de sécurité informatique",
      skills: [
        "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Hydra", 
        "John The Ripper", "Snort", "Suricata", "SQLMap", "Aircrack-ng"
      ]
    },
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      icon: Server,
      description: "Technologies d'infrastructure et automatisation",
      skills: [
        "Docker", "Kubernetes", "Terraform", "pfSense", "Cisco Packet Tracer",
        "VMware", "Cisco Meraki", "Acronis", "Proxmox", "Active Directory", "Microsoft 365"
      ]
    },
    {
      id: "cloud",
      title: "Cloud & Services",
      icon: Cloud,
      description: "Plateformes cloud et services hébergés",
      skills: [
        "AWS", "Azure", "Proton Drive", "OVH", "Firebase", 
        "Convex", "Vercel", "Netlify"
      ]
    },
    {
      id: "databases",
      title: "Bases de données",
      icon: Database,
      description: "Systèmes de gestion de bases de données",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Oracle"
      ]
    },
    {
      id: "development",
      title: "Développement",
      icon: Code,
      description: "Langages et frameworks de programmation",
      skills: [
        "TypeScript", "JavaScript", "React", "Next.js", "Python", 
        "Bash", "C", "HTML5", "CSS3"
      ]
    },
    {
      id: "tools",
      title: "Outils & Automation",
      icon: Settings,
      description: "Outils de développement et d'automatisation",
      skills: [
        "Git", "GitHub Actions", "GitLab CI", "Bash", "Python"
      ]
    },
    {
      id: "systems",
      title: "Systèmes d'exploitation",
      icon: Monitor,
      description: "Environnements et systèmes maîtrisés",
      skills: [
        "Linux", "Windows", "macOS", "Android", "iOS"
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Compétences & Technologies</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Découvrez les technologies et outils que je maîtrise dans différents domaines
          </p>
        </motion.div>

        <Tabs defaultValue="security" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Version Desktop */}
            <TabsList className="hidden md:grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-3 h-auto"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-xs">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Version Mobile - Grille fixe */}
            <div className="md:hidden mb-12 mt-4">
              <TabsList className="grid grid-cols-2 gap-2 h-auto p-1 bg-transparent">
                {skillCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex flex-col items-center gap-1 p-2 h-auto text-xs"
                  >
                    <category.icon className="w-3 h-3" />
                    <span className="text-[10px] leading-tight text-center">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </motion.div>

          {skillCategories.map((category, categoryIndex) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card>
                  <CardHeader className="text-center p-4 md:p-6">
                    <div className="flex justify-center mb-3 md:mb-4">
                      <div className="p-2 md:p-3 bg-primary/10 rounded-full">
                        <category.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{category.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: skillIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="group"
                        >
                          <Badge 
                            variant="secondary" 
                            className="w-full justify-center p-2 md:p-3 text-xs md:text-sm cursor-default transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
} 