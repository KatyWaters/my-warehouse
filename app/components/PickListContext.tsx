
'use client';

import { useState, createContext, useContext,ReactNode } from "react";

type PickListContextType = {
  ids: number[];
  addToPickList: (itemId: number) => void;
  removeFromPickList: (itemId: number) => void;
  isInList: (itemId: number) => boolean;  
  count: number;
};

export const PickListContext = createContext<PickListContextType | null>(null);

export function usePickList() {
  const context = useContext(PickListContext);
  if (!context) {
    throw new Error("usePickList must be used within a PickListProvider");
  }
  return context;
}

