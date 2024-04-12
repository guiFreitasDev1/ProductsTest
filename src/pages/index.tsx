"use client";

import { Button } from "@/components";
import React from "react";
import HomeScreen from "./home/home";
import { CartProvider } from "@/context/cart";
export default function FirstScreen() {
  return (
    <>
      <CartProvider>
        <HomeScreen />
      </CartProvider>
    </>
  );
}
