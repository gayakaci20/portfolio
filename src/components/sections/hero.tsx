"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Avatar avec animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Image 
              src={mounted && theme === 'dark' ? "/logo_dark.svg" : "/logo_light.svg"} 
              alt="Gaya KACI" 
              width={100} 
              height={100} 
            />
          </motion.div>

          {/* Nom et titre */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              Gaya KACI
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Étudiant en Cybersécurité
            </h2>
            <div className="flex justify-center items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span>Paris, France</span>
              <span className="mx-2">•</span>
              <span>22 ans</span>
            </div>
          </motion.div>

          {/* Bio courte avec badges */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 max-w-3xl mx-auto"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Passionné par la cybersécurité et les technologies cloud, je développe mes compétences 
              à travers des projets pratiques et des certifications professionnelles. 
              Actuellement à la recherche d'une alternance pour approfondir mon expertise.
            </p>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            
            <div className="flex gap-2">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/gayakaci20"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/gayakaci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a
                  href="mailto:gaya.kaci2002@hotmail.fr"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center"
            >
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
              </div>
            </motion.div>
            <p className="text-xs text-muted-foreground mt-6">Scroll pour découvrir</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 