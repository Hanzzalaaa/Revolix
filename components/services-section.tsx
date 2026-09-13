
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { ParallaxSection } from './parallax-section'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Workflow,
  Code2,
  Cloud,
  Palette,
  ShoppingCart,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

const FloatingParticles = dynamic(
  () => import('./floating-particles').then((m) => m.FloatingParticles),
  { ssr: false }
)

const services = [
  {
    icon: Bot,
    title: 'AI Systems & Agents',
    description:
      'Production AI agents, RAG pipelines, voice AI, and intelligent chat systems integrated into real business workflows.',
    href: '/ai-agents',
    color: 'from-violet-500/20 to-indigo-500/20',
    glow: 'group-hover:shadow-violet-500/10',
  },
  {
    icon: Workflow,
    title: 'CRM & Marketing Automation',
    description:
      'GoHighLevel setup, workflow automation, CRM integrations, and lead management systems.',
    href: '/gohighlevel',
    color: 'from-emerald-500/20 to-green-500/20',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Scalable web applications, mobile apps, APIs, and backend systems tailored to your business.',
    href: '/custom-software',
    color: 'from-blue-500/20 to-cyan-500/20',
    glow: 'group-hover:shadow-blue-500/10',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'modern DevOps and cloud engineering practices used to build, test, and run reliable software applications efficiently.',
    href: '/devops',
    color: 'from-sky-500/20 to-blue-500/20',
    glow: 'group-hover:shadow-sky-500/10',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Modern user interfaces, product design, wireframes, and responsive frontend experiences.',
    href: '/uiux',
    color: 'from-sky-500/20 to-indigo-500/20',
    glow: 'group-hover:shadow-indigo-500/10',
    gridClass: 'lg:col-start-2',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description:
      'Shopify, WordPress, WooCommerce, custom themes, and business integrations.',
    href: '/e-commerce',
    color: 'from-orange-500/20 to-orange-500/20',
    glow: 'group-hover:shadow-orange-500/10',
    gridClass: 'lg:col-start-3',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <FloatingParticles count={20} />

      {/* Top Left Glowing Orb */}
      <ParallaxSection
        speed={0.2}
        direction="down"
        className="absolute top-20 left-10 w-64 h-64 opacity-15"
      >
        <div className="w-full h-full rounded-full bg-primary blur-3xl animate-pulse-glow" />
      </ParallaxSection>

      {/* Bottom Right Glowing Orb */}
      <ParallaxSection
        speed={0.25}
        rotateOnScroll
        className="absolute bottom-20 right-20 w-48 h-48 opacity-10"
      >
        <div className="w-full h-full rounded-full bg-accent blur-3xl animate-pulse-glow" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <ScrollReveal direction="scale">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />

              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                What We Do
              </span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">
              Our Services
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, rank, and grow your digital presence
              with confidence.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <ScrollReveal
                key={service.title}
                delay={index * 75}
                direction="scale"
                className={service.gridClass || ''}
              >
                <Link
                  href={service.href}
                  className="group block h-full"
                >
                  <motion.div
                    className={`
                      relative
                      h-full
                      min-h-[310px]
                      p-7
                      rounded-3xl
                      bg-card/70
                      backdrop-blur-xl
                      border
                      border-border/60
                      overflow-hidden
                      transition-all
                      duration-500
                      shadow-lg
                      ${service.glow}
                      hover:border-primary/40
                      hover:bg-card/90
                      hover:shadow-2xl
                    `}
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 22,
                    }}
                  >

                    {/* Top Hover Accent */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                      initial={{ opacity: 0, scaleX: 0.3 }}
                      whileHover={{
                        opacity: 1,
                        scaleX: 1,
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Background Glow */}
                    <motion.div
                      className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`
                        relative
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-br
                        ${service.color}
                        border
                        border-white/5
                        flex
                        items-center
                        justify-center
                        mb-7
                        overflow-hidden
                        shadow-lg
                      `}
                      whileHover={{
                        scale: 1.08,
                        rotate: -3,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <Icon className="w-7 h-7 text-primary relative z-10" />

                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                        whileHover={{
                          translateX: '200%',
                        }}
                        transition={{
                          duration: 0.7,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="relative z-10 mt-7 pt-5 border-t border-border/40">
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0.55 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          Explore service
                        </span>

                        <motion.div
                          className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                          whileHover={{
                            rotate: 45,
                            scale: 1.1,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 15,
                          }}
                        >
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Bottom Corner Glow */}
                    <motion.div
                      className="absolute -bottom-24 -left-24 w-40 h-40 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />

                  </motion.div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
