import React from 'react'; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from '@/components/Menu/Menu';
import TextSizeProvider from '@/contexts/textContext/_app';
import { DaltonismProvider } from '@/contexts/daltonismContext/_app';
import { ImageProvider } from '@/contexts/imageContext/_app';
import { DarkModeProvider } from '@/contexts/contrastContext/_app';
import { LeitorDeTelaProvider } from '@/contexts/speechContext/_app';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import Libras from '@/components/VLibras/VLibras';
import Cookies from '@/components/Cookies/Cookies';

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
        <Navbar/>
        <LeitorDeTelaProvider>
        <Libras/>
    
        <DarkModeProvider>
        <ImageProvider>
        <DaltonismProvider>
        <TextSizeProvider>
        {children} 
        <Cookies />

        <Footer/>
  
        <Menu/>
        </TextSizeProvider>
        </DaltonismProvider>
        </ImageProvider>
        </DarkModeProvider>
        </LeitorDeTelaProvider>
       
  
     
      </body>
    </html>
  );
}
