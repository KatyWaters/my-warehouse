'use client';
import { useState } from "react";
import { PickListContext } from "./PickListContext";

export const PickListProvider = ({ children }: { children: React.ReactNode }) => {
  const [ids, setIds] = useState<number[]>([]);

  const addToPickList = (itemId: number) => {
    setIds((prevIds) => prevIds.includes(itemId) ? prevIds : [...prevIds, itemId]);
  };

  const removeFromPickList = (itemId: number) => {
    setIds((prevIds) => prevIds.filter((id) => id !== itemId));
  };

  const isInList = (itemId: number) => {
    return ids.includes(itemId);
  };

  return (
    <PickListContext.Provider value={{ ids, addToPickList, removeFromPickList, isInList, count: ids.length }}>
      {children}
    </PickListContext.Provider>
  );
}