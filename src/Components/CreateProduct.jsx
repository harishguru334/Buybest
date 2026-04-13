import { useState } from "react";
import axios from "axios";
import Admin from "./Admin";
import toast, { Toaster } from "react-hot-toast";


function ProductInfo() {

  const [Loading , setLoading] = useState(false)
  const [Data, setData] = useState("")
  const [image, setImage] = useState("")
  // console.log(image)
  const onchangeData = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Funcin runnn");
    const fdata = new FormData();
    // fdata.append("Id",Data.id );
    fdata.append("image", image);
    fdata.append("Title", Data.Title);
    fdata.append("catagory", Data.catagory);
    fdata.append("Rate", Data.Rate);
    fdata.append("Reating", Data.Reating);
    fdata.append("Brand", Data.Brand);
    fdata.append("discription", Data.discription);

    setLoading(true)
    const sendata = await axios.post("http://localhost:8000/product/createproduct", fdata).then((res) => {
      if (res.data.status == true) {
        toast.success("Product saved Successfully")
        console.log(res.data.status)
        window.location.reload(true);
      } else {
        toast.error("something went wrong");
        setLoading(false)
      }
    });
  }

  return (

    <>
    <Toaster />
    <div className="Page"
    style={{
      display:"flex",
      // justifyContent:"space-between"
    }}>
      <Admin />
      
      <form action="" onSubmit={handleSubmit} enctype="multipart/form-data"
        style={{
          width:"100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#ccc",
        }}>

        <div className="log"
          style={{
            width: "30%",
            textAlign: 'left',
            border: "1px solid",
            borderRadius: "10px",
            backgroundColor: "White",
            padding: "50px",
            margin: "20px 0",
            paddingBottom: "50px"
          }}>

          <div className="Info"
            style={{
              border: "none",
              borderRadius:"10px ",
              display: "flex",
              justifyContent: "center",
              width: "382px",
              marginLeft:"-50px",
              marginTop:"-50px",
             backgroundColor: "rgb(45, 129, 238)"

            }}>

            <h2
              style={{
                marginLeft: "0",
                lineHeight: "0",
                // textAlign:"center",
                marginTop: "30 px",
                marginBottom: "30px",
                // width:"100%"

              }}> Add New Products </h2>

          </div>

          <input type="file" name="image" placeholder="image" onChange={(e) => setImage(e.target.files[0])}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />
          <input type="text" name="Title" placeholder="Title" onChange={onchangeData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />

          <input type="text" name="catagory" placeholder="catagory" onChange={onchangeData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />

          <input type="text" name="Rate" placeholder="Rate" onChange={onchangeData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />
          <input type="text" name="Reting" placeholder="Reting" onChange={onchangeData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />
          <input type="text" name="Brand" placeholder="Brand" onChange={onchangeData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />
          <input type="discription" name="discription" placeholder="discription" onChange={onchangeData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />


          <button type="submit"
            style={{
              padding: "8px 97px",
              marginLeft: "35px",
              marginTop: "20px",
              backgroundColor: "#097ce7"
            }}>
            Submit
          </button>


        </div>

      </form></div>      
    </>
  );

}

export default ProductInfo;