"use client";

import { Button, useTheme } from "@heroui/react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={resolvedTheme === "light" ? "primary" : "secondary"}
        onPress={() => setTheme("light")}
      >
        Light
      </Button>

      <Button
        variant={resolvedTheme === "dark" ? "primary" : "secondary"}
        onPress={() => setTheme("dark")}
      >
        Dark
      </Button>
    </div>
  );
}