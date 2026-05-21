'use client';

import { HealthDashboard } from '../components/health/HealthDashboard';
import { useRequireAuth } from '../hooks/useRequireAuth';

export default function DashboardPage() {
  const ready = useRequireAuth();

  if (!ready) {
    return null;
  }

  return <HealthDashboard />;
}
