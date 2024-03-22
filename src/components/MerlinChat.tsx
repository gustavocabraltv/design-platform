// components/MerlinChat.tsx
'use client'
// components/MerlinChat.tsx

import React, { useEffect } from 'react';

const MerlinChat: React.FC = () => {
  useEffect(() => {
    const scriptMerlin = document.createElement('script');
    scriptMerlin.src = 'https://scripts.gomerlin.com.br/merlin.js';
    scriptMerlin.async = true;

    const scriptInitPopup = document.createElement('script');
    scriptInitPopup.innerHTML = `
      window.addEventListener("load", function() {
        Merlin.Popup.initFromSource("https://tools.gomerlin.com.br/popup/c0e7acb3-4b75-4496-bb37-b1a6b92812a3");
      });
    `;

    document.body.appendChild(scriptMerlin);
    document.body.appendChild(scriptInitPopup);

    return () => {
      document.body.removeChild(scriptMerlin);
      document.body.removeChild(scriptInitPopup);
    };
  }, []);

  return null;
};

export default MerlinChat;
