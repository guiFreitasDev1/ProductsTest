"use client";

import React from "react";
import { AppProps } from "next/app";
import { Provider as ProviderTheme } from "@/context";
import { MainLayout } from "@/components";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderTheme>
        <MainLayout>
          <style jsx global>{`
            .swiper-pagination-bullet {
              background-color: #999; /* Cor dos pontos quando não selecionados */
              width: 13px;
              height: 13px;
              opacity: 1;
            }

            .swiper-pagination-bullet-active {
              margin-top: 20px;
              background-color: #9024ff; /* Cor dos pontos quando selecionados */
            }
          `}</style>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderTheme>
    </QueryClientProvider>
  );
};

export default MyApp;
