import { items } from "@/lib/items";
import ItemCard from "@/app/components/ItemCard";


export default function InventoryPage() {
  return (
    <div>
        <h1 className="text-2xl font-bold">Stock Inventory : </h1>
        {items.map((item) => (
            <ItemCard key={item.id} {...item} />
        ))}

    </div>
  );
}
