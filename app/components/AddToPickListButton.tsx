'use client';

import { usePickList } from "./PickListContext";

 
type AddToPickListButtonProps = {
  itemId: number;
  outOfStock: boolean;
};



export default function AddToPickListButton({ itemId, outOfStock }: AddToPickListButtonProps){
    usePickList(); // Ensure the hook is called within a PickListProvider

    const { addToPickList, removeFromPickList, isInList } = usePickList();
    const inList = isInList(itemId);

    const handleClick = () => {
        if (inList) {
            removeFromPickList(itemId);
        } else {
            addToPickList(itemId);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={outOfStock}
            className={`px-4 py-2 rounded ${outOfStock ? "bg-gray-400 cursor-not-allowed" 
                : inList ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
            {inList ? "Remove from Pick List" : "Add to Pick List"}
        </button>
    );
}
//className="rounded px-3 py-1 bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"