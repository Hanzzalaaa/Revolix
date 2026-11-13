"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Globe,
  Users,
  MessageSquare,
  CalendarCheck,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Building,
  Phone,
  Mail,
} from "lucide-react"

type StageId = "enquiry" | "crm" | "followup" | "booked"

interface StageConfig {
  id: StageId
  number: string
  label: string
  subtitle: string
  icon: typeof Globe
}

const STAGES: StageConfig[] = [
  {
    id: "enquiry",
    number: "01",
    label: "Web Enquiry",
    subtitle: "Lead captured",
    icon: Globe,
  },
  {
    id: "crm",
    number: "02",
    label: "CRM Record",
    subtitle: "Instant ingestion",
    icon: Users,
  },
  {
    id: "followup",
    number: "03",
    label: "AI Follow-Up",
    subtitle: "24s speed-to-lead",
    icon: MessageSquare,
  },
  {
    id: "booked",
    number: "04",
    label: "Booked Job",
    subtitle: "Calendar synced",
    icon: CalendarCheck,
  },
]

export function HeroOperationsWidget() {
  const [activeStage, setActiveStage] = useState<StageId>("enquiry")
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [demoProgress, setDemoProgress] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Demo auto-runner
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    const stageOrder: StageId[] = ["enquiry", "crm", "followup", "booked"]
    let currentIdx = stageOrder.indexOf(activeStage)
    if (currentIdx === -1 || currentIdx === stageOrder.length - 1) {
      currentIdx = 0
      setActiveStage("enquiry")
    }

    const interval = setInterval(() => {
      currentIdx++
      if (currentIdx < stageOrder.length) {
        setActiveStage(stageOrder[currentIdx])
        setDemoProgress(((currentIdx + 1) / stageOrder.length) * 100)
      } else {
        setIsPlaying(false)
        setDemoProgress(100)
        clearInterval(interval)
      }
    }, 2600)

    timerRef.current = interval

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, activeStage])

  const handleStartDemo = () => {
    setActiveStage("enquiry")
    setDemoProgress(25)
    setIsPlaying(true)
  }

  const handleSelectStage = (id: StageId) => {
    setIsPlaying(false)
    setActiveStage(id)
    const stageOrder: StageId[] = ["enquiry", "crm", "followup", "booked"]
    const idx = stageOrder.indexOf(id)
    setDemoProgress(((idx + 1) / stageOrder.length) * 100)
  }

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0a0f1d]/95 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
      {/* Top Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Small Business Operations Simulator
          </span>
        </div>

        {/* Demo Button */}
        <button
          onClick={isPlaying ? () => setIsPlaying(false) : handleStartDemo}
          className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-300 transition-all hover:border-teal-500/60 hover:bg-teal-500/20 active:scale-95"
          aria-label={isPlaying ? "Pause simulation" : "Run simulation demo"}
        >
          {isPlaying ? (
            <>
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
              <span>Simulating...</span>
            </>
          ) : activeStage === "booked" ? (
            <>
              <RotateCcw className="h-3 w-3" />
              <span>Replay Demo</span>
            </>
          ) : (
            <>
              <Play className="h-3 w-3 fill-current" />
              <span>Run Live Demo</span>
            </>
          )}
        </button>
      </div>

      {/* 4 Stage Pills Navigation */}
      <div className="my-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STAGES.map((stage) => {
          const isActive = activeStage === stage.id
          const Icon = stage.icon
          return (
            <button
              key={stage.id}
              onClick={() => handleSelectStage(stage.id)}
              className={`group relative flex flex-col items-start rounded-xl border p-2.5 text-left transition-all sm:p-3 ${
                isActive
                  ? "border-teal-400/50 bg-teal-500/10 shadow-lg shadow-teal-500/5"
                  : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span
                  className={`font-mono text-[10px] font-bold ${
                    isActive ? "text-teal-300" : "text-muted-foreground"
                  }`}
                >
                  {stage.number}
                </span>
                <Icon
                  className={`h-3.5 w-3.5 transition-transform group-hover:scale-110 ${
                    isActive ? "text-teal-300" : "text-muted-foreground/70"
                  }`}
                />
              </div>
              <p
                className={`mt-1 text-xs font-semibold ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {stage.label}
              </p>
              <p className="text-[10px] text-muted-foreground/70">
                {stage.subtitle}
              </p>

              {/* Active Underline Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeStageGlow"
                  className="absolute -bottom-px left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400"
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Stage Interface Canvas */}
      <div className="relative min-h-[310px] overflow-hidden rounded-xl border border-white/10 bg-[#070b14] p-4 sm:p-5">
        <AnimatePresence mode="wait">
          {activeStage === "enquiry" && (
            <motion.div
              key="enquiry"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-semibold text-teal-300">
                    Stage 01: Client Submits Web Form
                  </span>
                </div>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  Timestamp: 10:41 AM
                </span>
              </div>

              {/* Simulated Customer Submission Form */}
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    Inbound Lead Source: HVAC Service Funnel
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" /> Form Validated
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="rounded-md bg-white/[0.03] p-2.5 border border-white/5">
                    <span className="block text-[10px] text-muted-foreground">Customer Name</span>
                    <span className="text-xs font-medium text-foreground">Marcus Vance</span>
                  </div>
                  <div className="rounded-md bg-white/[0.03] p-2.5 border border-white/5">
                    <span className="block text-[10px] text-muted-foreground">Business / Facility</span>
                    <span className="text-xs font-medium text-foreground">Vance Mechanical Corp</span>
                  </div>
                </div>

                <div className="rounded-md bg-white/[0.03] p-2.5 border border-white/5">
                  <span className="block text-[10px] text-muted-foreground">Service Required</span>
                  <p className="mt-0.5 text-xs text-foreground/90">
                    &ldquo;Need commercial HVAC maintenance &amp; 24/7 emergency dispatch setup for 3 locations.&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-muted-foreground">Phone: (307) 555-0194</span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300">
                    <span>Routing to CRM</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeStage === "crm" && (
            <motion.div
              key="crm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-semibold text-cyan-300">
                    Stage 02: Ingested Into GoHighLevel CRM
                  </span>
                </div>
                <span className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                  Lead ID #REV-8921
                </span>
              </div>

              {/* CRM Pipeline Card */}
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3.5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
                      MV
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">Marcus Vance</p>
                      <p className="text-[10px] text-muted-foreground">Vance Mechanical Corp • Sheridan, WY</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-teal-300">
                    Pipeline: High-Intent Lead
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-[10px]">
                  <div className="rounded-md border border-white/5 bg-white/[0.02] p-2">
                    <span className="block text-muted-foreground">Est. Value</span>
                    <span className="font-semibold text-teal-300">$4,800/yr</span>
                  </div>
                  <div className="rounded-md border border-white/5 bg-white/[0.02] p-2">
                    <span className="block text-muted-foreground">Lead Score</span>
                    <span className="font-semibold text-emerald-400">96 / 100</span>
                  </div>
                  <div className="rounded-md border border-white/5 bg-white/[0.02] p-2">
                    <span className="block text-muted-foreground">SLA Target</span>
                    <span className="font-semibold text-cyan-300">&lt; 1 Min</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-md bg-teal-500/5 p-2 text-xs border border-teal-500/15">
                  <div className="flex items-center gap-1.5 text-teal-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-medium">Triggering NeverLoseLead Speed-to-Lead</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">Dispatch: 0.8s</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeStage === "followup" && (
            <motion.div
              key="followup"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-300">
                    Stage 03: Automated AI Follow-Up Dispatched
                  </span>
                </div>
                <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                  Response in 24 seconds
                </span>
              </div>

              {/* Message Simulation */}
              <div className="space-y-2.5 rounded-lg border border-white/10 bg-white/[0.02] p-3.5">
                {/* Outbound SMS/WhatsApp */}
                <div className="flex gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-[10px] font-bold text-teal-300">
                    AI
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-teal-500/20 bg-teal-500/10 p-3 text-xs text-foreground/90 leading-relaxed">
                    <p className="font-semibold text-teal-300 text-[11px] mb-0.5">
                      NeverLoseLead Assistant • SMS Dispatch
                    </p>
                    Hi Marcus, thanks for contacting us regarding commercial HVAC maintenance. We can dispatch our lead technician tomorrow at 10:00 AM ET for a 20-min discovery call. Would that work for you?
                  </div>
                </div>

                {/* Customer Reply */}
                <div className="flex justify-end gap-2.5">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-white/15 bg-white/10 p-3 text-xs text-foreground leading-relaxed">
                    <p className="font-semibold text-muted-foreground text-[11px] mb-0.5 text-right">
                      Marcus Vance • 10:41 AM
                    </p>
                    Yes, 10:00 AM ET tomorrow is perfect. Let&apos;s lock it in!
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Two-way conversation established
                  </span>
                  <span className="font-medium text-teal-300">Auto-booking slot...</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeStage === "booked" && (
            <motion.div
              key="booked"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-300">
                    Stage 04: Appointment Confirmed &amp; Calendar Synced
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                  Booked &amp; Synced
                </span>
              </div>

              {/* Booking Confirmation Card */}
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <CalendarCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      20-Min Discovery Call Confirmed
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Marcus Vance • Vance Mechanical Corp
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 rounded-lg border border-white/5 bg-black/30 p-2.5 text-xs">
                  <div>
                    <span className="block text-[10px] text-muted-foreground">Date &amp; Time</span>
                    <span className="font-semibold text-foreground">Tomorrow, 10:00 AM ET</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">20 Minutes (Free Call)</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                    Calendar Invite &amp; SMS Reminder Active
                  </span>
                  <span className="font-semibold text-emerald-400">Total Cycle Time: 48 seconds</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Process Workflow Summary */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          End-to-End Workflow: Inbound &rarr; CRM &rarr; Follow-up &rarr; Booked
        </span>
        <span className="text-[10px] text-muted-foreground/80">
          Illustrative interactive simulation
        </span>
      </div>
    </div>
  )
}
