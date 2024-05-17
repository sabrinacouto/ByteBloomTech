import React from 'react'; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header/Header';
import "./globals.css";
import Menu from '@/components/Menu/Menu';
import TextSizeProvider from '@/contexts/textContext/_app';
import { DaltonismProvider } from '@/contexts/daltonismContext/_app';
import { ImageProvider } from '@/contexts/imageContext/_app';
import { DarkModeProvider } from '@/contexts/contrastContext/_app';
import { LeitorDeTelaProvider } from '@/contexts/speechContext/_app';
import LeitorDeTela from '@/components/Leitor/leitor';
import Footer from '@/components/Footer/Footer';

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
        <Header/>
        <LeitorDeTelaProvider>
    
        <DarkModeProvider>
        <ImageProvider>
        <DaltonismProvider>
        <TextSizeProvider>
        {children} 
        <LeitorDeTela />
        <Footer></Footer>
   
        <Menu></Menu>
        </TextSizeProvider>
        </DaltonismProvider>
        </ImageProvider>
        </DarkModeProvider>
        </LeitorDeTelaProvider>
       
  
     
      </body>
    </html>
  );
}
