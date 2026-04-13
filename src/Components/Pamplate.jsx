import image from './image/hero_man.png.webp'

function Pamplate() {
    return (
        <>
            <div className="main-1">
                <div className="main-2">
                    <img src={image} alt="" />
                </div>
                <div className="main-3">
                    <h3>60% Discount</h3>
                    <h1>Winter <br /> Collection</h1>
                    <h4>Best cloth collection by 2025! </h4>
                    <button className='Shope-Now'>Shope Now</button>
                </div>
            </div>
        </>
    )
}
export default Pamplate;