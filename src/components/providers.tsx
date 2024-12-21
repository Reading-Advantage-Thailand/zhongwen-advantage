"use client";

import { useEffect } from "react";
import { initFirebase } from "@/lib/firebase";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Firebase when the app starts
    const app = initFirebase();
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
}
