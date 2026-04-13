import { useEffect, useState } from "react";
import { Iphones } from "../Data";
import { useSearchParams } from "react-router-dom";
import MoreChild from "./props/Morechild";




function IphoneDetails() {
    const[IphoneId] = useSearchParams()
    let id = IphoneId.get("id")

    let [IphoneData, setIphoneData] = useState([])
    // console.log(IphoneData)


    function getProducts() {
        let newData = Iphones.find((item) => item.id == id)
        setIphoneData(newData)
        
    }
    useEffect(()=>{
        getProducts()
    },[]);
    return(
    <>
    <div className="main" style={{display:"flex", flexWrap:"wrap"}}>
        <MoreChild data={IphoneData}/>
    </div>
    
    </>)

}
export default IphoneDetails;