"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Shield, Target, Calendar } from "lucide-react"

export function AboutSection() {
  const educationData = [
    {
      school: "ESGI Paris",
      degree: "Bachelor Cybersécurité",
      period: "2024 - Présent",
      description: "Formation spécialisée en sécurité informatique, réseaux et systèmes"
    },
    {
      school: "Université d'Orléans",
      degree: "Licence Informatique",
      period: "2022 - 2024",
      description: "Fondamentaux de l'informatique et de la programmation"
    },
    {
      school: "Université Mouloud Mammeri",
      degree: "Licence Informatique",
      period: "2021 - 2022",
      description: "Première approche des sciences informatiques"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes motivations et ma passion pour la cybersécurité
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Présentation personnelle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <CardTitle>Ma passion pour la cybersécurité</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Fasciné par les enjeux de sécurité informatique dans notre monde numérique, 
                  j'ai orienté mes études vers la cybersécurité pour contribuer à la protection 
                  des systèmes d'information.
                </p>
                
                <p className="text-muted-foreground">
                  Mon approche combine théorie académique et pratique hands-on à travers des 
                  projets personnels, des CTF et des laboratoires de sécurité.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Objectif</div>
                    <div className="text-sm text-muted-foreground">Expert en cybersécurité</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Recherche</div>
                    <div className="text-sm text-muted-foreground">Alternance 3 sem/1 sem</div>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2">Domaines d'intérêt :</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Ethical Hacking</Badge>
                    <Badge variant="secondary">Network Security</Badge>
                    <Badge variant="secondary">Cloud Security</Badge>
                    <Badge variant="secondary">SIEM</Badge>
                    <Badge variant="secondary">Incident Response</Badge>
                    <Badge variant="secondary">DevSecOps</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Parcours éducatif */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <CardTitle>Formation académique</CardTitle>
                </div>
                <CardDescription>
                  Mon parcours éducatif en informatique et cybersécurité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-8 border-l-2 border-primary/20 last:border-l-0"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="font-semibold">{edu.school}</h4>
                          <Badge variant="outline" className="w-fit">{edu.period}</Badge>
                        </div>
                        <p className="text-sm font-medium text-primary">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 