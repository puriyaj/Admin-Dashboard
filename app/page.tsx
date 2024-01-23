import Card from "./component/dashboard/card";
import Charts from "./component/dashboard/charts";
import Slidebar from "./component/dashboard/sidebar"
import Transaction from "./component/dashboard/transaction";

export default function Home() {
  return (
   <> 
   <div className="flex ">
   
    <div className="w-full h-full">
         <div className="flex gap-4 ">
  <Card/>   
  <Card/> 
  <Card/>      
    </div>
   <Transaction/>

    <Charts/>

   
    </div>
 
   </div>

   </>
  );
}
