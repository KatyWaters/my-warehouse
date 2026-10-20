import {Item} from "@/lib/items";

type ItemDetailProps = {
  id: number;
  sku: string;  //SKU - Stock Keeping Unit, a unique identifier for each item in inventory
  name: string;
  category: string;
  quantity: number;
  location: string;
};

export default function ItemCard({ id, sku, name, category, quantity, location }: ItemDetailProps) {
    return (
        <div className="border rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-600">SKU: {sku}</p>
            <p className="text-sm text-gray-600">Category: {category}</p>
            <p className="text-sm text-gray-600">
                <p className="text-sm text-gray-600">Quantity: {quantity}</p>    
                {quantity > 0 && quantity < 10 ? 
                 <span className="bg-red-500 text-xs text-white ml-2 px-2 py-1 rounded-full">
                    Low Stock
                </span> 
                : quantity === 0  ? 
                <span className="bg-gray-500 text-xs text-black ml-2 px-2 py-1 rounded-full">
                    Out of Stock
                </span>
                :
                 <span className="bg-green-500 text-xs text-white ml-2 px-2 py-1 rounded-full">
                   In Stock
                </span>}
                 

            </p>
            <p className="text-sm text-gray-600">Location: {location}</p>
        </div>
    );
}           
