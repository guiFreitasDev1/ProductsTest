"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { Poppins } from "next/font/google";

interface IContext {}

interface IProvider {
  children: React.ReactNode | React.JSX.Element;
}

export const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Context = React.createContext<IContext>({});

const Provider: React.FC<IProvider> = ({ children }) => {
  const value = React.useMemo(() => ({}), []);

  return (
    <Context.Provider value={value}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: PoppinsFont.style.fontFamily,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </Context.Provider>
  );
};

export { Provider, Context };
