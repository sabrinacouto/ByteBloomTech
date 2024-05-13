import React from 'react'; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header/header';
import "./globals.css";
import Menu from '@/components/Menu/Menu';
import { TbTextPlus } from 'react-icons/tb';
import TextSizeProvider from '@/contexts/textContext/TextSizeContext';
import { DaltonismProvider } from '@/contexts/daltonismContext/DaltonismContext';
import { ImageProvider } from '@/contexts/imageContext/ImageContext';
import { DarkModeProvider } from '@/contexts/contrastContext/DarkModeContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salesforce",
  description: "Um site desenvolvido pela ByteBloomTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <DarkModeProvider>
        <ImageProvider>
        <DaltonismProvider>
        <TextSizeProvider>
        {children} 
        <Menu></Menu>
        </TextSizeProvider>
        </DaltonismProvider>
        </ImageProvider>
        </DarkModeProvider>
       
  
     
      </body>
    </html>
  );
}
