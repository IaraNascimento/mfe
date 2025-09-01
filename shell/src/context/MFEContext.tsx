/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext } from "react";

export type MFEConfig = {
  name: string;
  url: string;
  bootstrap: string;
  execute: boolean;
  prefix: boolean;
  components: Array<string>;
  files: Array<string>;
};

type MFEContextType = {
  loadedMFEsComponents: any;
  loadMFE: (mfe: MFEConfig) => void;
};

const MFEContext = createContext<MFEContextType>({} as any);

export const MFEProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loadedMFEsComponents, setLoadedMFEsComponents] = useState({});

  const loadMFE = async (mfe: MFEConfig) => {
    try {
      if (mfe.name) {
        for (const file of mfe.files) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = `${mfe.url}/${file}`;
            script.onload = () => resolve();
            script.onerror = (err) => reject(err);
            document.body.appendChild(script);
          });
        }

        const mfeGlobal = (window as any)[`${mfe.bootstrap}`];

        if (mfe.execute) {
          mfeGlobal();
        }

        const componentsMap: any = {};
        mfe.components.forEach((Comp) => {
          componentsMap[Comp] = mfe.prefix ? () => mfeGlobal[Comp] : Comp;
        });

        setLoadedMFEsComponents((prev: any) => ({
          ...prev,
          [mfe.name]: componentsMap,
        }));
      }
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
