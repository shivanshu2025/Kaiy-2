import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { calendarDays, type CalendarStatus } from "../../lib/fitnessDashboard";
import { cn } from "../../lib/utils/cn";
import { GlassPanel } from "./GlassPanel";

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const statusStyles: Record<CalendarStatus, string> = {
  plain: "text-white/92 hover:bg-white/8",
  done: "bg-[#ffe159] text-[#171923] shadow-[0_10px_26px_rgba(255,225,89,0.35)]",
  current: "border border-white/25 bg-transparent text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]",
  scheduled: "bg-[radial-gradient(circle_at_34%_30%,rgba(255,245,175,0.32),rgba(50,54,48,0.94)_62%)] text-white shadow-[0_8px_20px_rgba(0,0,0,0.22)]",
};

export function TrainingCalendar() {
  return (
    <GlassPanel tone="dark" delay={0.12} className="min-h-[300px] p-6 sm:p-7 lg:min-h-[324px] [@media(max-height:950px)]:min-h-[292px] [@media(max-height:950px)]:p-5 [@media(max-height:760px)]:min-h-[268px] [@media(max-height:760px)]:p-4">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-black tracking-[-0.03em] text-white">Your Training Days</h2>
        <button className="flex items-center gap-1 text-xs font-medium text-white/70 hover:text-white">
          June
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-7 grid grid-cols-7 gap-x-2 gap-y-4 text-center sm:gap-x-3 [@media(max-height:950px)]:mt-5 [@media(max-height:950px)]:gap-y-2.5 [@media(max-height:760px)]:mt-4 [@media(max-height:760px)]:gap-y-2">
        {weekDays.map((day, index) => (
          <span key={`${day}-${index}`} className="text-[12px] font-medium text-white/65">
            {day}
          </span>
        ))}

        {calendarDays.map((calendarDay, index) => (
          <motion.button
            key={`${calendarDay.day}-${index}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.18 + index * 0.014 }}
            style={calendarDay.gridColumnStart ? { gridColumnStart: calendarDay.gridColumnStart } : undefined}
            className={cn(
              "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold transition-all duration-300 [@media(max-height:950px)]:h-8 [@media(max-height:950px)]:w-8",
              statusStyles[calendarDay.status],
            )}
          >
            {calendarDay.day}
          </motion.button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] font-semibold text-white/88 [@media(max-height:950px)]:mt-4 [@media(max-height:760px)]:mt-3">
        <span className="flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-full border border-white/35" />
          Current day
        </span>
        <span className="flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-full bg-[#ffe159]" />
          Done
        </span>
        <span className="flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-full bg-[#6c7068]" />
          Scheduled
        </span>
      </div>
    </GlassPanel>
  );
}
