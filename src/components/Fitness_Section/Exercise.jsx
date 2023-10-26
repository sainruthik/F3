import React from "react";
import './exercise_a.css';
import { useParams } from "react-router-dom"; //eslint-disable-line
import { useHistory } from 'react-router';
import { useQuery } from 'react-query'
import { CircularProgress } from "@mui/material";
import axios from 'axios'
import Carousel from "../../utils/carousel/Carousel";

export default function Exercise() {

    const getworkouts = () => {
        const url = `${process.env.REACT_APP_OURAPI}/fitness/categories/${fid}`
        return axios.get(url)
    }

    const history = useHistory();

    const { data, isLoading } = useQuery("a_1", getworkouts)

    const { fid } = useParams();

    return (
        <div className="exercise_main">
            <div className="container">

                <div className="heading">
                    <p> Fitness</p>
                </div>
                {!isLoading ?
                    <div className="info">
                        {data?.data.map(i => (
                            <div key={i.name}>
                                <div className="row_heading">
                                    <div className="heading_1">
                                        <button className="back" onClick={() => history.push("/home/fitness")}></button>
                                        <div className="heading_2">
                                            <h1>{i.name}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="vedios">
                                    <Carousel list={i.items} />
                                </div>
                            </div>
                        ))}
                    </div>
                    : <div style={{ width: '100vw', display: 'grid', placeItems: 'center', marginTop: '10%' }}><CircularProgress color='secondary' /></div>}
            </div>
        </div>
    )
}
