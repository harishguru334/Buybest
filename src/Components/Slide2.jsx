import image1 from './image/client_1.png.webp';
import image2 from './image/client_2.png.webp';
import image3 from './image/client.png.webp';
import { useState } from 'react';


function Slide2() {
    let imagesData = [
        {
            id: 1,
            image1: image1,
            text1: "Working in conjunction with humanitarian aid agencise, we have supported programmes to help alleviate human suffering.",
            text2: "micky mouse",
        },
        {
            id: 2,
            image1: image2,
            text1: "Working in conjunction with humanitarian aid agencise, we have supported programmes to help alleviate human suffering.",
            text2: "micky mouse",
        },
        {
            id: 3,
            image1: image3,
            text1: "Working in conjunction with humanitarian aid agencise, we have supported programmes to help alleviate human suffering.",
            text2: "micky mouse",
        },
    ];
    let [Data, setData] = useState()

    function Leftslide() {

        if (Data > 0) {
            setData(Data - 1);
        }
        if (Data == 0) {
            setData(2)
        }
    }
    function Righslide() {

        if (Data < 2) {
            setData(Data + 1);
        }
        if (Data == 2) {
            setData(0)
        }
    }
    return (
        <>  <div className="Slider2">
            {imagesData && imagesData.map((item, i) => {
                return (<>
                    <div className={`${i == Data ? "active" : "none"}`}>
                        <div className="containt2">
                            <img src={item.image} alt="" width={"100%"} height={"500px"} />
                            <div className={`${i == 1 ? "cntnt-1" : "cntnt-2"} `}>
                                <h2 className="style-1">{item.text1}</h2>
                                <h2 className="style-2">{item.text2}</h2>
                                <p>{item.text3}</p>
                            </div>

                            <button className="Left-1" onClick={Leftslide}><i class="fa-solid fa-less-than"></i></button>
                            <button className="Right-1" onClick={Righslide}><i class="fa-solid fa-greater-than"></i></button>

                        </div>
                    </div>
                </>)

            })
            }
        </div>
        </>
    )
};
export default Slide2;