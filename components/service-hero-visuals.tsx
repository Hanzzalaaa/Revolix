import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  LayoutDashboard,
  LineChart,
  Megaphone,
  MessageSquare,
  Network,
  Palette,
  PlugZap,
  Search,
  Server,
  Settings2,
  ShoppingBag,
  Smartphone,
  Workflow,
} from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { TiltCard } from "@/components/interactive/page"

/* -------------------------------------------------------------------------- */
/* Shared Revolix service-hero frame                                          */
/* -------------------------------------------------------------------------- */

function ServiceHeroFrame({
  children,
  badgeLabel,
  badgeValue,
}: {
  children: ReactNode;
  badgeLabel: string;
  badgeValue: string;
}) {
  return (
    <ScrollReveal delay={150} className="hidden lg:block">
      <TiltCard className="mx-auto w-full max-w-xl">
        <div className="relative mx-auto w-full max-w-xl">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-primary/15 blur-3xl" />

          {/* Main Browser Widget */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-2xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              {/* Browser Header */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />

                <div className="ml-3 flex h-7 flex-1 items-center rounded-md border border-border bg-muted/50 px-3">
                  <span className="text-[10px] text-muted-foreground">
                    revolix.tech / services
                  </span>
                </div>
              </div>

              {/* Service-specific visual: fixed footprint across every service */}
              <div className="h-[430px] overflow-hidden p-5">{children}</div>
            </div>
          </div>

          {/* Small Floating Badge */}
          <motion.div
            className="absolute -right-3 top-10 rounded-xl border border-border bg-background/90 px-3 py-2 shadow-xl backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-[10px] font-medium text-muted-foreground">
              {badgeLabel}
            </p>
            <p className="text-xs font-semibold text-primary">{badgeValue}</p>
          </motion.div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}

function MiniLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-primary/60" />
      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

function MiniTitle({ lines = 2 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-7 rounded-lg ${
            index === 0 ? "w-full bg-primary/15" : "w-4/5 bg-primary/10"
          }`}
        />
      ))}
    </div>
  );
}

function MiniCopy({ width = "w-full" }: { width?: string }) {
  return (
    <div className="mt-4 space-y-2">
      <div className={`h-2.5 rounded-full bg-muted ${width}`} />
      <div className="h-2.5 w-5/6 rounded-full bg-muted" />
      <div className="h-2.5 w-3/5 rounded-full bg-muted/80" />
    </div>
  );
}

function MiniButton({ width = "w-28" }: { width?: string }) {
  return <div className={`mt-5 h-9 rounded-lg bg-primary/25 ${width}`} />;
}

function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-muted/30 p-4 ${className}`}
    >
      {children}
    </div>
  );
}

function StatusChip({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-md border border-primary/10 bg-primary/5 px-2 py-1 text-[9px] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
      {children}
    </div>
  );
}

function IconTile({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/10 bg-primary/5">
      <Icon className="h-4 w-4 text-primary/80" />
    </div>
  );
}

function Connector({ vertical = false }: { vertical?: boolean }) {
  return vertical ? (
    <div className="mx-auto h-4 w-px bg-border" />
  ) : (
    <div className="h-px flex-1 bg-border" />
  );
}

/* -------------------------------------------------------------------------- */
/* 1. Web Development                                                        */
/* -------------------------------------------------------------------------- */

export function HeroWebDev() {
  return (
    <ServiceHeroFrame badgeLabel="Responsive" badgeValue="Web Experience">
      <div className="mb-8 flex items-center justify-between">
        <div className="h-5 w-24 rounded-md bg-primary/25" />
        <div className="flex gap-2">
          <div className="h-2 w-10 rounded-full bg-muted" />
          <div className="h-2 w-10 rounded-full bg-muted" />
          <div className="h-2 w-10 rounded-full bg-muted" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col justify-center">
          <MiniLabel>Page structure</MiniLabel>
          <MiniTitle />
          <MiniCopy />
          <MiniButton />
        </div>

        <Surface>
          <div className="mb-3 flex items-center justify-between">
            <div className="h-3 w-20 rounded-full bg-primary/20" />
            <StatusChip>Desktop</StatusChip>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-14 rounded-lg bg-primary/10" />
            <div className="h-14 rounded-lg bg-muted" />
            <div className="h-14 rounded-lg bg-primary/10" />
          </div>
          <div className="mt-3 h-16 rounded-lg bg-muted/70" />
        </Surface>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-3">
        <div className="h-12 rounded-xl border border-border bg-muted/40" />
        <div className="h-12 rounded-xl border border-primary/10 bg-primary/5" />
        <div className="h-12 rounded-xl border border-border bg-muted/40" />
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Backend Development                                                     */
/* -------------------------------------------------------------------------- */

export function HeroBackendDev() {
  return (
    <ServiceHeroFrame badgeLabel="System Core" badgeValue="Backend Services">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Request flow</MiniLabel>
          <div className="text-sm font-semibold">API → services → data</div>
        </div>
        <StatusChip>Healthy</StatusChip>
      </div>

      <div className="grid grid-cols-3 items-center gap-3">
        <Surface className="p-3">
          <IconTile icon={Globe2} />
          <div className="mt-3 h-2 w-16 rounded-full bg-muted" />
          <div className="mt-2 h-2 w-12 rounded-full bg-muted/80" />
        </Surface>

        <div className="flex items-center gap-2">
          <Connector />
          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary/50" />
          <Connector />
        </div>

        <Surface className="p-3">
          <IconTile icon={Server} />
          <div className="mt-3 h-2 w-16 rounded-full bg-muted" />
          <div className="mt-2 h-2 w-12 rounded-full bg-muted/80" />
        </Surface>
      </div>

      <div className="my-4 flex justify-center">
        <div className="flex flex-col items-center">
          <ArrowDown className="h-4 w-4 text-primary/45" />
        </div>
      </div>

      <Surface>
        <div className="flex items-center gap-3">
          <IconTile icon={Database} />
          <div className="flex-1">
            <div className="h-2.5 w-24 rounded-full bg-primary/15" />
            <div className="mt-2 h-2 w-40 rounded-full bg-muted" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            <span className="h-2 w-2 rounded-sm bg-primary/35" />
            <span className="h-2 w-2 rounded-sm bg-primary/20" />
            <span className="h-2 w-2 rounded-sm bg-muted" />
          </div>
        </div>
      </Surface>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <StatusChip>Auth</StatusChip>
        <StatusChip>Logic</StatusChip>
        <StatusChip>Data</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. AI & Machine Learning                                                    */
/* -------------------------------------------------------------------------- */

export function HeroAIML() {
  return (
    <ServiceHeroFrame badgeLabel="Intelligence" badgeValue="Model Workflow">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Learning pipeline</MiniLabel>
          <div className="text-sm font-semibold">Data → model → output</div>
        </div>
        <StatusChip>Training</StatusChip>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Surface className="flex min-h-[116px] flex-col justify-center p-3">
          <IconTile icon={Database} />
          <div className="mt-3 h-2.5 w-14 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
        </Surface>

        <div className="flex items-center justify-center">
          <div className="flex w-full items-center gap-2">
            <Connector />
            <ArrowRight className="h-4 w-4 text-primary/50" />
            <Connector />
          </div>
        </div>

        <Surface className="flex min-h-[116px] flex-col justify-center p-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
            <Brain className="h-5 w-5 text-primary/80" />
          </div>
          <div className="mt-3 h-2.5 w-16 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
        </Surface>
      </div>

      <Surface className="mt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/10 bg-primary/5">
            <LineChart className="h-4 w-4 text-primary/75" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-2.5 w-32 rounded-full bg-primary/15" />
            <div className="h-2 w-full rounded-full bg-muted" />
          </div>
          <StatusChip>Output</StatusChip>
        </div>
      </Surface>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="h-10 rounded-xl border border-border bg-muted/40" />
        <div className="h-10 rounded-xl border border-primary/10 bg-primary/5" />
        <div className="h-10 rounded-xl border border-border bg-muted/40" />
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. AI Automation                                                            */
/* -------------------------------------------------------------------------- */

export function HeroAIAutomation() {
  return (
    <ServiceHeroFrame badgeLabel="Automation" badgeValue="Hands-Off Flow">
      <div className="mb-6">
        <MiniLabel>Automated workflow</MiniLabel>
        <div className="text-sm font-semibold">Trigger → actions → outcome</div>
      </div>

      <Surface>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 bg-primary/5">
            <Workflow className="h-4.5 w-4.5 text-primary/80" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="h-2.5 w-28 rounded-full bg-primary/15" />
            <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
          </div>
          <StatusChip>Trigger</StatusChip>
        </div>
      </Surface>

      <div className="my-4 flex items-center gap-2">
        <Connector />
        <ArrowRight className="h-4 w-4 text-primary/45" />
        <Connector />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Surface className="p-3">
          <IconTile icon={Settings2} />
          <div className="mt-3 h-2.5 w-20 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-16 rounded-full bg-muted" />
        </Surface>
        <Surface className="p-3">
          <IconTile icon={PlugZap} />
          <div className="mt-3 h-2.5 w-20 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-16 rounded-full bg-muted" />
        </Surface>
      </div>

      <div className="my-4 flex justify-center">
        <ArrowDown className="h-4 w-4 text-primary/45" />
      </div>

      <div className="flex items-center justify-between rounded-xl border border-primary/10 bg-primary/5 px-4 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Outcome
          </div>
          <div className="mt-1 text-xs font-semibold">Task completed</div>
        </div>
        <StatusChip>Auto</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. AI Agents                                                                */
/* -------------------------------------------------------------------------- */

export function HeroAIAgents() {
  return (
    <ServiceHeroFrame badgeLabel="Agent Loop" badgeValue="Conversation + Action">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Agent interaction</MiniLabel>
          <div className="text-sm font-semibold">Talk → decide → act</div>
        </div>
        <StatusChip>Active</StatusChip>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
        <Surface>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/10 bg-primary/5">
              <MessageSquare className="h-4 w-4 text-primary/75" />
            </div>
            <div>
              <div className="h-2.5 w-24 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-16 rounded-full bg-muted" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="ml-auto h-8 w-3/4 rounded-xl bg-muted" />
            <div className="h-10 w-5/6 rounded-xl border border-primary/10 bg-primary/5" />
          </div>
        </Surface>

        <Surface>
          <div className="flex items-center gap-3">
            <IconTile icon={Bot} />
            <div>
              <div className="h-2.5 w-20 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-16 rounded-full bg-muted" />
            </div>
          </div>
          <div className="my-4 flex flex-col items-center">
            <ArrowDown className="h-4 w-4 text-primary/45" />
          </div>
          <div className="rounded-lg border border-border bg-background/60 px-3 py-2">
            <div className="h-2 w-16 rounded-full bg-muted" />
            <div className="mt-2 h-2.5 w-24 rounded-full bg-primary/10" />
          </div>
        </Surface>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <StatusChip>Context</StatusChip>
        <StatusChip>Decision</StatusChip>
        <StatusChip>Tool call</StatusChip>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-primary/10 bg-primary/5 px-4 py-2 mt-10">
        <div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Outcome
          </div>
          <div className="mt-1 text-xs font-semibold">Task completed</div>
        </div>
        <StatusChip>Auto</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. GoHighLevel                                                              */
/* -------------------------------------------------------------------------- */

export function HeroGoHighLevel() {
  return (
    <ServiceHeroFrame badgeLabel="CRM Flow" badgeValue="Leads → Booking">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>GoHighLevel workflow</MiniLabel>
          <div className="text-sm font-semibold">Lead pipeline + automation</div>
        </div>
        <StatusChip>Pipeline</StatusChip>
      </div>

      <Surface>
        <div className="grid grid-cols-4 gap-2">
          {([
            ["New", 3],
            ["Contacted", 2],
            ["Booked", 2],
            ["Won", 1],
          ] as const).map(([label, count], index) => (
            <div key={label} className="min-w-0">
              <div className="mb-2 flex items-center justify-between gap-1">
                <span className="truncate text-[9px] text-muted-foreground">{label}</span>
                <span className="text-[9px] text-primary/60">{count}</span>
              </div>
              <div className="space-y-2">
                {Array.from({ length: count }).map((_, item) => (
                  <div
                    key={item}
                    className={`h-12 rounded-lg border ${
                      index === 2
                        ? "border-primary/10 bg-primary/5"
                        : "border-border bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Surface>

      <div className="mt-5 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/10 bg-primary/5">
          <Workflow className="h-4 w-4 text-primary/75" />
        </div>
        <Connector />
        <StatusChip>Follow-up</StatusChip>
        <Connector />
        <StatusChip>Booking</StatusChip>
      </div>

      {/* <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="h-10 rounded-xl border border-border bg-muted/40" />
        <div className="h-10 rounded-xl border border-primary/10 bg-primary/5" />
        <div className="h-10 rounded-xl border border-border bg-muted/40" />
      </div> */}
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. SEO                                                                      */
/* -------------------------------------------------------------------------- */

export function HeroSEO() {
  return (
    <ServiceHeroFrame badgeLabel="Search Ready" badgeValue="SEO Structure">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Search visibility</MiniLabel>
          <div className="text-sm font-semibold">Content + technical structure</div>
        </div>
        <StatusChip>Indexed</StatusChip>
      </div>

      <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
        <Surface>
          <div className="flex items-center gap-3">
            <IconTile icon={Search} />
            <div>
              <div className="h-2.5 w-24 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-14 rounded-full bg-muted" />
            </div>
          </div>
          <div className="mt-5 h-20 rounded-xl border border-border bg-background/60 p-3">
            <div className="h-2.5 w-4/5 rounded-full bg-primary/10" />
            <div className="mt-2 h-2 w-full rounded-full bg-muted" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-muted" />
          </div>
        </Surface>

        <Surface>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2.5 w-20 rounded-full bg-primary/15" />
            <span className="ml-auto text-[9px] text-muted-foreground">On-page</span>
          </div>
          <div className="space-y-3">
            {[
              ["Title", "w-5/6"],
              ["Heading", "w-2/3"],
              ["Schema", "w-1/2"],
            ].map(([label, width]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-12 text-[9px] text-muted-foreground">{label}</span>
                <div className={`h-2 rounded-full bg-muted ${width}`} />
                <span className="ml-auto h-2 w-2 rounded-full bg-primary/50" />
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <StatusChip>Technical</StatusChip>
        <StatusChip>Content</StatusChip>
        <StatusChip>Internal links</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. Digital Marketing                                                       */
/* -------------------------------------------------------------------------- */

export function HeroDigitalMarketing() {
  return (
    <ServiceHeroFrame badgeLabel="Campaign System" badgeValue="Channel → Page">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Campaign structure</MiniLabel>
          <div className="text-sm font-semibold">Channels connected to conversion</div>
        </div>
        <StatusChip>Live</StatusChip>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Surface className="p-3">
          <IconTile icon={Megaphone} />
          <div className="mt-3 h-2.5 w-16 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
        </Surface>
        <Surface className="p-3">
          <IconTile icon={LineChart} />
          <div className="mt-3 h-2.5 w-16 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
        </Surface>
        <Surface className="p-3">
          <IconTile icon={LayoutDashboard} />
          <div className="mt-3 h-2.5 w-16 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
        </Surface>
      </div>

      <div className="my-4 flex items-center gap-2">
        <Connector />
        <ArrowRight className="h-4 w-4 text-primary/45" />
        <Connector />
      </div>

      <Surface>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/10 bg-primary/5">
            <Globe2 className="h-4 w-4 text-primary/75" />
          </div>
          <div className="flex-1">
            <div className="h-2.5 w-28 rounded-full bg-primary/15" />
            <div className="mt-2 h-2 w-40 rounded-full bg-muted" />
          </div>
          <StatusChip>Landing page</StatusChip>
        </div>
      </Surface>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="h-10 rounded-xl border border-border bg-muted/40" />
        <div className="h-10 rounded-xl border border-primary/10 bg-primary/5" />
        <div className="h-10 rounded-xl border border-border bg-muted/40" />
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 9. UI/UX Design                                                             */
/* -------------------------------------------------------------------------- */

export function HeroUIUXDesign() {
  return (
    <ServiceHeroFrame badgeLabel="Design System" badgeValue="Wireframe → UI">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Interface composition</MiniLabel>
          <div className="text-sm font-semibold">Structure, hierarchy, interaction</div>
        </div>
        <StatusChip>Figma-ready</StatusChip>
      </div>

      <div className="grid gap-4 sm:grid-cols-[0.72fr_1.28fr]">
        <Surface>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              Wireframe
            </span>
            <Palette className="h-3.5 w-3.5 text-primary/55" />
          </div>
          <div className="space-y-2">
            <div className="h-5 rounded-md bg-muted" />
            <div className="h-14 rounded-lg border border-border bg-background/60" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 rounded-lg bg-muted/70" />
              <div className="h-16 rounded-lg bg-muted/50" />
            </div>
          </div>
        </Surface>

        <Surface>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-20 rounded-full bg-primary/20" />
            <div className="ml-auto h-2 w-8 rounded-full bg-muted" />
          </div>
          <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
            <div className="h-3 w-24 rounded-full bg-primary/20" />
            <div className="mt-3 h-2.5 w-full rounded-full bg-muted" />
            <div className="mt-2 h-2.5 w-4/5 rounded-full bg-muted" />
            <div className="mt-4 h-8 w-24 rounded-lg bg-primary/20" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-lg bg-muted" />
            <div className="h-10 rounded-lg bg-muted/70" />
            <div className="h-10 rounded-lg bg-muted" />
          </div>
        </Surface>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <StatusChip>Layout</StatusChip>
        <StatusChip>Components</StatusChip>
        <StatusChip>Interaction</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 10. E-Commerce                                                              */
/* -------------------------------------------------------------------------- */

export function HeroEcommerce() {
  return (
    <ServiceHeroFrame badgeLabel="Storefront" badgeValue="Browse → Checkout">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Commerce flow</MiniLabel>
          <div className="text-sm font-semibold">Catalog, cart and checkout</div>
        </div>
        <StatusChip>Store</StatusChip>
      </div>

      <Surface>
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-primary/20" />
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background/60">
            <ShoppingBag className="h-3.5 w-3.5 text-primary/70" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-xl border border-border bg-background/50 p-2">
              <div className="h-16 rounded-lg bg-muted/70" />
              <div className="mt-2 h-2.5 w-4/5 rounded-full bg-primary/10" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-muted" />
            </div>
          ))}
        </div>
      </Surface>

      <div className="my-4 flex items-center gap-2">
        <StatusChip>Product</StatusChip>
        <Connector />
        <ArrowRight className="h-4 w-4 text-primary/45" />
        <Connector />
        <StatusChip>Cart</StatusChip>
      </div>

      <div className="rounded-xl border border-primary/10 bg-primary/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              Checkout
            </div>
            <div className="mt-1 h-2.5 w-24 rounded-full bg-primary/15" />
          </div>
          <div className="h-8 w-20 rounded-lg bg-primary/20" />
        </div>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 11. Cloud & DevOps                                                          */
/* -------------------------------------------------------------------------- */

export function HeroCloudDevOps() {
  return (
    <ServiceHeroFrame badgeLabel="Delivery" badgeValue="Build → Deploy">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Deployment pipeline</MiniLabel>
          <div className="text-sm font-semibold">Code flowing into infrastructure</div>
        </div>
        <StatusChip>Deploy</StatusChip>
      </div>

      <div className="flex items-center gap-2">
        <Surface className="flex-1 p-3">
          <IconTile icon={Code2} />
          <div className="mt-3 h-2.5 w-14 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
        </Surface>
        <ArrowRight className="h-4 w-4 text-primary/45" />
        <Surface className="flex-1 p-3">
          <IconTile icon={GitBranch} />
          <div className="mt-3 h-2.5 w-14 rounded-full bg-primary/15" />
          <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
        </Surface>
      </div>

      <div className="my-4 flex justify-center">
        <ArrowDown className="h-4 w-4 text-primary/45" />
      </div>

      <Surface>
        <div className="flex items-center gap-3">
          <IconTile icon={Cloud} />
          <div className="flex-1">
            <div className="h-2.5 w-24 rounded-full bg-primary/15" />
            <div className="mt-2 h-2 w-40 rounded-full bg-muted" />
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-primary/55" />
            <span className="h-2 w-2 rounded-full bg-primary/25" />
            <span className="h-2 w-2 rounded-full bg-muted" />
          </div>
        </div>
      </Surface>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <StatusChip>Build</StatusChip>
        <StatusChip>Test</StatusChip>
        <StatusChip>Deploy</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 12. Custom Software                                                         */
/* -------------------------------------------------------------------------- */

export function HeroCustomSoftware() {
  return (
    <ServiceHeroFrame badgeLabel="Custom Build" badgeValue="Modules → Product">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Software architecture</MiniLabel>
          <div className="text-sm font-semibold">Modular product structure</div>
        </div>
        <StatusChip>Flexible</StatusChip>
      </div>

      <div className="grid grid-cols-[0.8fr_1.2fr] gap-3">
        <Surface className="p-3">
          <div className="mb-3 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            Modules
          </div>
          <div className="space-y-2">
            <div className="h-10 rounded-lg border border-primary/10 bg-primary/5" />
            <div className="h-10 rounded-lg border border-border bg-background/50" />
            <div className="h-10 rounded-lg border border-border bg-background/50" />
          </div>
        </Surface>

        <Surface>
          <div className="mb-3 flex items-center gap-3">
            <IconTile icon={Network} />
            <div>
              <div className="h-2.5 w-24 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-16 rounded-full bg-muted" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-muted/60" />
            <div className="h-12 rounded-lg border border-primary/10 bg-primary/5" />
            <div className="h-12 rounded-lg bg-muted/60" />
          </div>
          <div className="mt-3 h-16 rounded-lg border border-border bg-background/50" />
        </Surface>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <StatusChip>Business logic</StatusChip>
        <Connector />
        <StatusChip>Integrations</StatusChip>
        <Connector />
        <StatusChip>Admin</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* 13. Mobile App Development                                                  */
/* -------------------------------------------------------------------------- */

export function HeroMobileAppDev() {
  return (
    <ServiceHeroFrame badgeLabel="Mobile Product" badgeValue="App Experience">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <MiniLabel>Mobile interface</MiniLabel>
          <div className="text-sm font-semibold">App flow across key screens</div>
        </div>
        <StatusChip>iOS + Android</StatusChip>
      </div>

      <div className="grid gap-5 sm:grid-cols-[0.72fr_1.28fr]">
        <div className="mx-auto w-full max-w-[150px] rounded-[1.6rem] border border-border bg-card p-2 shadow-xl">
          <div className="rounded-[1.25rem] border border-border bg-background p-3">
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-muted" />
            <div className="h-6 w-16 rounded-md bg-primary/20" />
            <div className="mt-4 h-24 rounded-xl bg-primary/5" />
            <div className="mt-3 h-3 w-4/5 rounded-full bg-primary/15" />
            <div className="mt-2 h-2.5 w-full rounded-full bg-muted" />
            {/* <div className="mt-4 h-8 rounded-lg bg-primary/20" /> */}
          </div>
        </div>

        <Surface>
          <div className="flex items-center gap-3">
            <IconTile icon={Smartphone} />
            <div>
              <div className="h-2.5 w-24 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-16 rounded-full bg-muted" />
            </div>
          </div>
          <div className="my-4 flex flex-col items-center">
            <ArrowDown className="h-4 w-4 text-primary/45" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 rounded-lg border border-border bg-background/50" />
            <div className="h-16 rounded-lg border border-primary/10 bg-primary/5" />
          </div>
          <div className="mt-3 h-10 rounded-lg bg-muted/70" />
        </Surface>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <StatusChip>Screen flow</StatusChip>
        <StatusChip>Navigation</StatusChip>
        <StatusChip>API</StatusChip>
      </div>
    </ServiceHeroFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* Optional alias names                                                       */
/* -------------------------------------------------------------------------- */

export const HeroWebDevelopment = HeroWebDev;
export const HeroBackendDevelopment = HeroBackendDev;
export const HeroAIAndMachineLearning = HeroAIML;
export const HeroAIAndAutomation = HeroAIAutomation;
export const HeroAIAgent = HeroAIAgents;
export const HeroGHL = HeroGoHighLevel;
export const HeroDigitalMarketingService = HeroDigitalMarketing;
export const HeroECommerce = HeroEcommerce;
export const HeroCloudAndDevOps = HeroCloudDevOps;
export const HeroMobileAppDevelopment = HeroMobileAppDev;

/* -------------------------------------------------------------------------- */
/* Optional lookup map                                                        */
/* -------------------------------------------------------------------------- */

export const SERVICE_HERO_MAP = {
  "web-development": HeroWebDev,
  "backend-development": HeroBackendDev,
  "ai-machine-learning": HeroAIML,
  "ai-automation": HeroAIAutomation,
  "ai-agents": HeroAIAgents,
  "gohighlevel": HeroGoHighLevel,
  seo: HeroSEO,
  "digital-marketing": HeroDigitalMarketing,
  "ui-ux-design": HeroUIUXDesign,
  ecommerce: HeroEcommerce,
  "cloud-devops": HeroCloudDevOps,
  "custom-software": HeroCustomSoftware,
  "mobile-app-development": HeroMobileAppDev,
} as const;
