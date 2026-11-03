import PickListView from "../components/PickListView";

export default function PickListPage() {   
return (
    <div>
        <h1 className="text-2xl font-bold">Pick List Page here</h1>
        <PickListView /> 
        {/* ///using a client component here instead of makeing the whole page to be a client side. */}
    </div>
  );
}     