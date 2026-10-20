export type Item = {
    id: number;
    sku: string; //SKU - Stock Keeping Unit, a unique identifier for each item in inventory
    name: string;
    category: string;
    quantity: number;
    location: string;
};

export const items: Item[] = [
  { id: 1, sku: "WH-1001", name: "Pallet Wrap", category: "Packaging", quantity: 120, location: "A1" },
  { id: 2, sku: "WH-1002", name: "Cardboard Box (Large)", category: "Packaging", quantity: 8, location: "A2" },
  { id: 3, sku: "WH-2001", name: "Safety Gloves", category: "Safety", quantity: 0, location: "B1" },
  { id: 4, sku: "WH-2002", name: "Hi-Vis Vest", category: "Safety", quantity: 45, location: "B2" },
  { id: 5, sku: "WH-3001", name: "Barcode Scanner", category: "Equipment", quantity: 5, location: "C1" },
  { id: 6, sku: "WH-3002", name: "Hand Truck", category: "Equipment", quantity: 0, location: "C2" },
];
// export const items: Item[] = [
//     {
//         id: 1,
//         sku: "SKU001",
//         name: "Pallet Wrap",
//         category: "Wrapping",
//         quantity: 120,
//         location: "Aisle 1, Shelf 1",   
//     },
//     {
//         id: 2,
//         sku: "SKU002",
//         name: "Cardboard Box (Large)",
//         category: "Adhesives",
//         quantity: 8,
//         location: "Aisle 2, Shelf 2",
//     },      
//     {
//         id: 3,
//         sku: "SKU003",
//         name: "Safety Gloves",
//         category: "Safety",
//         quantity: 0,
//         location: "Aisle 3, Shelf 3",
//     },
//     {
//         id: 4,
//         sku: "SKU004",
//         name: "Hi-Vis Vest",
//         category: "Safety",
//         quantity: 45,
//         location: "Aisle 3, Shelf 4",
//     },
//     {
//         id: 5,
//         sku: "SKU005",
//         name: "Barcode Scanner",
//         category: "Electronics",
//         quantity: 5,
//         location: "Aisle 4, Shelf 1",
//     },
//     {
//         id: 6,
//         sku: "SKU006",
//         name: "Hand Truck",
//         category: "Equipment",
//         quantity: 0,
//         location: "Aisle 5, Shelf 2",   
//     }
//     // {
//     //     id: 1,
//     //     sku: "SKU001",
//     //     name: "TF Portobello Oud N68 Difuser - 260ml",
//     //     category: "Senses",
//     //     quantity: 5,
//     //     location: "Aisle 1, Shelf 2",
//     // },
//     // {
//     //     id: 2,
//     //     sku: "SKU002",
//     //     name: "Ninety Six N16 Candle - 286g",
//     //     category: "Candles",
//     //     quantity: 0,
//     //     location: "Aisle 2, Shelf 3",
//     // },
//     // {
//     //     id: 3,
//     //     sku: "SKU003",
//     //     name: "TF Portobello Oud N68 Candle - 50ml",
//     //     category:  "Candles",
//     //     quantity: 15,
//     //     location: "Aisle 1, Shelf 1",
//     // },
// ];  

  