// app/providers.tsx
"use client";

import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}) {
  return (
    <NextThemesProvider
  attribute="data-theme"
  defaultTheme="system"
  enableSystem
  themes={["light", "dark", "ocean", "ocean-dark"]}
>
  {children}
</NextThemesProvider>
  );
}