'use client'
import React, { ReactNode } from 'react';
import VLibras from "react-vlibras";

interface ProvidersProps {
  children?: ReactNode; // Tornando children opcional
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <VLibras safeInit />
      {children}
    </>
  );
}
