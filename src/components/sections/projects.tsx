"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Shield, Search, Bot, Lock } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "EcoDeli - Plateforme Livraison Collaborative",
      description: "Plateforme de livraison collaborative et écologique 🚚♻️ qui connecte les expéditeurs à des transporteurs effectuant déjà des trajets similaires. Next.js, React, Prisma ORM, MySQL, Google Maps API.",
      icon: Search,
      technologies: ["TypeScript", "Next.js", "Prisma", "MySQL", "Google Maps API"],
      category: "Web Development",
      githubUrl: "https://github.com/gayakaci20/ecodeli",
      liveUrl: "",
      status: "Actif"
    },
    {
      title: "LightChat - IA Chat App",
      description: "Application de chat moderne et minimaliste ✨ propulsée par l'API Google Gemini 🤖 pour générer des réponses intelligentes en temps réel. Interface fluide avec animations Framer Motion.",
      icon: Bot,
      technologies: ["TypeScript", "Next.js", "Google Gemini API", "Framer Motion"],
      category: "IA & Analyse Data",
      githubUrl: "https://github.com/gayakaci20/lightchat",
      liveUrl: "https://lightchat-beta.vercel.app",
      status: "Actif"
    },
    {
      title: "Network Scanner & Vulnerability Assessment", 
      description: "Outil complet de scan réseau pour découvrir les appareils connectés, analyser les ports et effectuer des vérifications de vulnérabilités de base. Développé en Python avec licence MIT.",
      icon: Shield,
      technologies: ["Python", "Network Security", "Vulnerability Assessment", "CLI"],
      category: "Cybersécurité",
      githubUrl: "https://github.com/gayakaci20/ntwork-scan",
      status: "Actif"
    },
    {
      title: "Git Token Checker",
      description: "Outil pour vérifier la validité des tokens API GitHub et GitLab. Récupère les informations utilisateur associées au token et affiche les résultats au format JSON.",
      icon: Shield,
      technologies: ["Python", "GitHub API", "GitLab API", "Token Validation"],
      category: "Outils DevOps",
      githubUrl: "https://github.com/gayakaci20/git_tokenchecker",
      status: "Terminé"
    },
    {
      title: "Car Price Predictor ML",
      description: "Application IA qui prédit les prix de voitures en utilisant le machine learning et s'intègre optionnellement avec l'IA Gemini de Google pour une précision améliorée.",
      icon: Bot,
      technologies: ["Python", "Machine Learning", "Gemini AI", "Data Analysis"],
      category: "IA & Analyse Data",
      githubUrl: "https://github.com/gayakaci20/car_price_predic",
      status: "Terminé"
    },
    {
      title: "Gestionnaire Stock Médical",
      description: "Application développée en C avec GTK pour la gestion de stock de médicaments et de fournisseurs pharmaceutiques. Inclut SQLite, export CSV et génération de données IA.",
      icon: Lock,
      technologies: ["C", "GTK3", "SQLite3", "libcurl", "Gemini API"],
      category: "Applications Desktop",
      githubUrl: "https://github.com/gayakaci20/med_stock_c",
      status: "Terminé"
    },
    {
      title: "Email Finder Web",
      description: "Application web qui aide à générer des adresses email professionnelles à partir de noms et d'un domaine d'entreprise ✉️🌍. Support multilingue et formats d'email multiples.",
      icon: Search,
      technologies: ["JavaScript", "Web App", "Email Generation", "Multilingual"],
      category: "Outils Web",
      githubUrl: "https://github.com/gayakaci20/email-finder-web",
      status: "Terminé"
    },
    {
      title: "PDF Compressor Web",
      description: "Application web pdfcmprs qui permet de compresser facilement vos fichiers PDF en ligne 📉, tout en conservant une bonne qualité ✨. Interface web intuitive.",
      icon: Lock,
      technologies: ["JavaScript", "PDF Processing", "Web Compression", "File Management"],
      category: "Outils Web",
      githubUrl: "https://github.com/gayakaci20/pdfcmprs-web",
      status: "Terminé"
    },
    {
      title: "PDF Compressor Shell",
      description: "Outil en ligne de commande pour compresser des fichiers PDF tout en maintenant une qualité raisonnable grâce à Ghostscript.",
      icon: Lock,
      technologies: ["Bash", "PDF Processing", "Web Compression", "File Management"],
      category: "Outils Shell",
      githubUrl: "https://github.com/gayakaci20/pdfcmprs",
      status: "Terminé"
    },
    {
      title: "Peaky - File Preview App",
      description: "Application Windows moderne qui fournit des aperçus de fichiers rapides et efficaces. Permet de prévisualiser images, fichiers texte et médias directement depuis l'explorateur.",
      icon: Search,
      technologies: ["C#", "Windows App", "File Preview", "Media Support"],
      category: "Applications Desktop",
      githubUrl: "https://github.com/gayakaci20/peaky",
      status: "Terminé"
    },
    {
      title: "Voronoï Diagram Viewer",
      description: "Visualiseur de diagramme de Voronoï implémenté en assembleur x86_64, utilisant X11 pour l'affichage graphique. Exploration de la géométrie computationnelle à bas niveau !",
      icon: Bot,
      technologies: ["Assembly x86_64", "X11", "Computational Geometry", "Low-level"],
      category: "Projets Académiques",
      githubUrl: "https://github.com/gayakaci20/voronoi-alt",
      status: "Terminé"
    },
    {
      title: "SpotBlock - Ad Blocker",
      description: "Script Bash cross-platform qui bloque les publicités Spotify en modifiant le fichier hosts de votre système. Fonctionne sur macOS et Windows !",
      icon: Shield,
      technologies: ["Bash", "Shell Scripting", "Cross-platform", "Ad Blocking"],
      category: "Scripts & Automation",
      githubUrl: "https://github.com/gayakaci20/spotblock",
      status: "Terminé"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif": return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "Terminé": return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "En développement": return "bg-orange-500/10 text-orange-700 dark:text-orange-400"
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-400"
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets & Réalisations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets de cybersécurité, développement et automatisation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 group-hover:shadow-lg border-2 group-hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Technologies :</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {(project as any).liveUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={(project as any).liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
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
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <Github className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Plus de projets sur GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Explorez tous mes dépôts et contributions sur ma page GitHub
              </p>
              <Button asChild>
                <a
                  href="https://github.com/gayakaci20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Voir sur GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 