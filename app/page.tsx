"use client";

import { WindowProvider } from "@/components/hooks/useWindowContext";
import Desktop from "@/components/Desktop";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <WindowProvider>
        <Desktop />
      </WindowProvider>
    </PageTransition>
  );
}
