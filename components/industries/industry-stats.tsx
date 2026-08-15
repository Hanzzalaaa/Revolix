"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 35, suffix: "+", label: "Countries Reached" },
]

// export function IndustryStats() {
//   return (
//     <section className="py-24 bg-card relative overflow-hidden">
//       <ParallaxSection speed={0.15} className="absolute inset-0">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
//       </ParallaxSection>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <ScrollReveal>
//           <div className="text-center mb-16">
//             <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Impact</p>
//             <h2 className="text-3xl sm:text-4xl font-bold">Driving Results Across Industries</h2>
//           </div>
//         </ScrollReveal>
{/* 
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center p-6 rounded-2xl bg-background/50 border border-border">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
} */}
