import SupplierCard from "../components/SupplierCard";

const supplier = { name: "PackRight Ltd", city: "Manchester", phone: "0161 555 0199" };

export default function PracticePage(){
  return (
    <div>
      <h1 className="text-2xl font-bold">Practice Page</h1>
      <p className="text-sm text-gray-600">.</p>
      <div className="mt-4">
          <h2 className="text-lg font-bold">Two ways to pass props to SupplierCard</h2>
          <p className="mt-1 text-sm text-gray-600">
            Both examples render the same card. Pass props individually, or use spread operator to unpack every feild
            as a prop, when the object matches the component's props.
          </p>
          <div className="mt-2">
                {/* one by one */}
                <SupplierCard name={supplier.name} city={supplier.city} phone={supplier.phone} /> 
                {/* Spread operator: unpack every field of suplier as a prop */}
                <SupplierCard {...supplier} /> 
            </div>
        </div>    
    </div>
  );
}   