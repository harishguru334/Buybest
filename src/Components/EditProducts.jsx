import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


function EditProducts() {
    const { id } = useParams();
    const [Data, setData] = useState();
    const [image, setImage] = useState();

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
        fdata.append("image", image);
        fdata.append("Title", Data.Title);
        fdata.append("Rate", Data.Rate);
        const sendata = await axios.put(`http://localhost:8000//Update/${id}`, fdata).then((res) => {
            console.log("Products", res.data)
        });
        console.log(fdata)

    }

    return (<>
        <div>
            <form action="" onSubmit={handleSubmit} enctype="multipart/form-data"
                style={{
                    width: "100%",
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
                            borderRadius: "10px ",
                            display: "flex",
                            justifyContent: "center",
                            width: "428px",
                            marginLeft: "-50px",
                            marginTop: "-50px",
                            backgroundColor: "rgb(45, 129, 238)",


                        }}>

                        <h2
                            style={{
                                marginLeft: "0",
                                lineHeight: "0",
                                // textAlign:"center",
                                marginTop: "30 px",
                                marginBottom: "30px",
                                // width:"100%"

                            }}> Update Products </h2>

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
                    <input type="text" name="Rate" placeholder="Rate" onChange={onchangeData}
                        style={{
                            marginLeft: "35px",
                            width: "220px",
                            marginTop: "20px"
                        }} /> <br />


                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {/* <button type="button" onClick={() => setShowPopup(false)}>
                            Cancel
                        </button> */}
                        <button type="submit">Update</button>
                    </div>


                </div>

            </form>
        </div>
    </>)
}

export default EditProducts;