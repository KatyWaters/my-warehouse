
type SupplierCardProps = {
  name: string;
  city: string;
  phone: string;
};

export default function SupplierCard({ name, city, phone }: SupplierCardProps) {
    console.log("SupplierCard props:", { name, city, phone }); // Debugging line

    return (
        <div className="border rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-600">City: {city}</p>
            <p className="text-sm text-gray-600">Phone: {phone}</p> 
        </div>
    );
}   