import React from "react";
import '../../css/Festivals.css';

const Festivals = ({images, speed}) => {
    return (
        <section id="festivals" className="section">
            <h2>Festivals</h2>
            <div className="inner">
                <div className="wrapper">
                    <section style={{ "--speed": `${speed}ms` }}>
                    {images.map(({ id, image }) => (
                        <div className="image" key={id}>
                        <img src={image} alt={id} />
                        {/* <h3>{festivalName}</h3> */}
                        {/* <h3 className="festival-name">{festivalName}</h3> */}
                        </div>
                    ))}
                    </section>
                    
                </div>
            </div>
            {/* <div className="content">

            </div> */}
        </section>
    )
}

export default Festivals;