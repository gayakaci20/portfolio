"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      date: "2024",
      description: "Certification professionnelle en cybersécurité couvrant les fondamentaux de la sécurité informatique",
      credlyUrl: "https://www.credly.com/users/gaya-kaci2002",
      skills: ["Network Security", "Incident Response", "Risk Management", "SIEM"]
    },
    {
      name: "TryHackMe SOC Level 1",
      issuer: "TryHackMe",
      date: "2024",
      description: "Certification en Security Operations Center avec focus sur la détection et réponse aux incidents",
      credlyUrl: "https://www.credly.com/users/gaya-kaci2002",
      skills: ["SOC Operations", "Threat Detection", "Log Analysis", "Digital Forensics"]
    },
    {
      name: "Cisco Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco",
      date: "2024",
      description: "Parcours de certification en analyse de cybersécurité",
      credlyUrl: "https://www.credly.com/users/gaya-kaci2002",
      skills: ["Network Defense", "Ethical Hacking", "IoT Security"]
    },
    {
      name: "Cisco Ethical Hacker",
      issuer: "Cisco",
      date: "2024",
      description: "Certification en hacking éthique et tests de pénétration",
      credlyUrl: "https://www.credly.com/users/gaya-kaci2002",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Social Engineering"]
    },
    {
      name: "Cisco Network Defense",
      issuer: "Cisco",
      date: "2024",
      description: "Certification en défense réseau et sécurisation d'infrastructures",
      credlyUrl: "https://www.credly.com/users/gaya-kaci2002",
      skills: ["Network Security", "Firewall Management", "IDS/IPS"]
    },
    {
      name: "Cisco IoT Security",
      issuer: "Cisco",
      date: "2024",
      description: "Certification spécialisée en sécurité des objets connectés",
      credlyUrl: "https://www.credly.com/users/gaya-kaci2002",
      skills: ["IoT Security", "Device Management", "Threat Mitigation"]
    },
    {
      name: "Google Security Operations - Deep Dive",
      issuer: "Google",
      date: "2024",
      description: "Formation approfondie en opérations de sécurité et gestion des incidents",
      credlyUrl: "https://www.credly.com/users/gaya-kaci2002",
      skills: ["Security Operations", "Incident Management", "Threat Intelligence"]
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mes certifications professionnelles en cybersécurité et technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Voir sur Credly"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Compétences acquises :</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Voir tous mes badges</h3>
              <p className="text-muted-foreground mb-4">
                Consultez l'ensemble de mes certifications et badges professionnels sur ma page Credly
              </p>
              <Button asChild>
                <a
                  href="https://www.credly.com/users/gaya-kaci2002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir sur Credly
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 