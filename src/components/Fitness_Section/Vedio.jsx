import React from "react";
import './video.css'

function Vedio({ item }) {
    return (
        <div className="video">
            <iframe src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Vedio;