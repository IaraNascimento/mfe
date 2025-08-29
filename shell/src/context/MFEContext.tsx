/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext } from "react";

export type MFEConfig = {
  name: string;
  url: string;
  bootstrap: string;
  files: Array<string>;
  components: Array<string>;
};

type MFEContextType = {
  loadedMFEsComponents: Record<string, any> | undefined;
  loadMFE: (mfe: MFEConfig) => void;
};

const MFEContext = createContext<MFEContextType | undefined>(undefined);

export const MFEProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loadedMFEsComponents, setLoadedMFEs] = useState<any>(undefined);

  const loadMFE = async (mfe: MFEConfig) => {
    try {
      for (const file of mfe.files) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = `${mfe.url}/${file}`;
          script.type = "module";
          script.onload = () => resolve();
          script.onerror = (err) => reject(err);
          document.body.appendChild(script);
        });
      }

      (window as any)[mfe.bootstrap]();

      setLoadedMFEs((prev: any) => ({
        ...prev,
        [mfe.name]: mfe.components,
      }));
    } catch (err) {
      console.error(`Erro ao carregar MFE ${mfe.name}:`, err);
      throw err;
    }
  };

  return (
    <MFEContext.Provider value={{ loadedMFEsComponents, loadMFE }}>
      {children}
    </MFEContext.Provider>
  );
};

export const useMFEContext = () => {
  const context = useContext(MFEContext);
  if (!context)
    throw new Error("useMFEContext must be used within MFEProvider");
  return context;
};
