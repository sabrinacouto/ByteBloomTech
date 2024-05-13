'use client'
import React, { useEffect } from 'react';
import { useLeitorDeTela } from '@/contexts/speechContext/_app';

function LeitorDeTela() {
  const { ativo, texto } = useLeitorDeTela();

  useEffect(() => {
    const lerTexto = () => {
      if (texto.trim() !== '') {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
      }
    };

    if (ativo) {
      lerTexto();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [ativo, texto]);

  return null;
}

export default LeitorDeTela;
