'use client'; //make it a client coponent
import { items } from "@/lib/items";
import { usePickList } from "./PickListContext";
import Link from "next/link";

export default function PickListView() {
    const { ids } = usePickList(); 
    //is a useContext hook that allows you to access the context value of the PickListContext. 
    // It returns an object with the ids array, which contains the IDs of the items in the pick list.
    const pickedItems = items.filter(item => ids.includes(item.id));
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Pick List</h1>
            {ids.length === 0 ? (
                <div>
                <p>Your pick list is empty.</p>
                <Link href="/inventory" className="text-blue-500 underline">Go to Inventory</Link>      
                </div>
            ) : (
                <ul className="list-disc pl-5">
                    {pickedItems.map((item) => (
                        <li key={item.id} className="mb-2">
                            <strong>{item.name}</strong> - SKU: {item.sku}, Category: {item.category}, Quantity: {item.quantity}, Location: {item.location}
                        </li>   
                    ))}
                </ul>
            )}
        </div>
    );
}   

