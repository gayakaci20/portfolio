"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Calendar, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gaya.kaci2002@hotmail.fr",
      href: "mailto:gaya.kaci2002@hotmail.fr",
      description: "Pour toute question ou opportunité"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Paris, France",
      description: "Disponible pour du télétravail et présentiel"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "07 49 57 95 52",
      href: "tel:0749579552",
      description: "N'hésitez pas à m'appeler"
    },
    {
      icon: Calendar,
      label: "Disponibilité",
      value: "Recherche alternance",
      description: "Rythme : 3 semaines / 1 semaine"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/gayakaci20",
      description: "Mes projets et contributions open source",
      username: "@gayakaci20"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/gayakaci/",
      description: "Mon profil professionnel et réseau",
      username: "Gaya KACI"
    },
    {
      name: "Credly",
      icon: ExternalLink,
      url: "https://www.credly.com/users/gaya-kaci2002",
      description: "Mes badges et certifications",
      username: "Gaya KACI"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt pour de nouveaux défis en cybersécurité. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Informations de contact
                </CardTitle>
                <CardDescription>
                  Toutes les informations pour me joindre facilement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-primary hover:underline font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Status de recherche */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                      Disponible
                    </Badge>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Actuellement à la recherche d'une alternance en cybersécurité 
                    avec un rythme de 3 semaines en entreprise / 1 semaine à l'école.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-primary" />
                  Réseaux sociaux
                </CardTitle>
                <CardDescription>
                  Retrouvez-moi sur mes différentes plateformes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <social.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{social.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {social.username}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visiter ${social.name}`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {social.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Call to action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <Button size="lg" className="w-full" asChild>
                    <a href="mailto:gaya.kaci2002@hotmail.fr">
                      <Mail className="w-4 h-4 mr-2" />
                      Envoyez-moi un message
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 