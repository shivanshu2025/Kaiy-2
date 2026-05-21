'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "./DashboardHeader";
import { HabitsList } from "./HabitsList";
import { Sidebar } from "./Sidebar";
import { StepsCard } from "./StepsCard";
import { TrainingCalendar } from "./TrainingCalendar";
import { WeightLossPlan } from "./WeightLossPlan";
import { WorkoutResults } from "./WorkoutResults";
import { clearAuthenticated } from "../../lib/auth";

export function HealthDashboard() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    document.title = "Be.run Health Dashboard";
  }, []);

  const handleLogout = () => {
    clearAuthenticated();
    router.replace("/adminpanel/login");
    router.refresh();
  };

  return (
    <main className="min-h-dvh bg-gray-800">
      <motion.section
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col gap-7 overflow-hidden rounded-[34px] bg-[#f7f3ed] p-5 shadow-[0_42px_90px_rgba(69,62,52,0.22)] sm:rounded-[42px] sm:p-7 md:flex-row lg:p-8 [@media(max-height:950px)]:gap-5 [@media(max-height:950px)]:p-5 [@media(max-height:760px)]:p-4"
      >
        <Sidebar activeItem={activeItem} onItemChange={setActiveItem} onLogout={handleLogout} />

        <div className="min-w-0 flex-1 space-y-8 [@media(max-height:950px)]:space-y-5 [@media(max-height:760px)]:space-y-4">
          <DashboardHeader />

          <div className="grid gap-6 xl:grid-cols-[1.68fr_1fr] [@media(max-height:950px)]:gap-4">
            <WorkoutResults />
            <TrainingCalendar />
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.65fr] [@media(max-height:950px)]:gap-4">
            <div className="grid gap-6 [@media(max-height:950px)]:gap-4">
              <StepsCard />
              <WeightLossPlan />
            </div>
            <HabitsList />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
