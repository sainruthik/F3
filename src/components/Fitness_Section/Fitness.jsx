import React from 'react';
import './fitness_a.css';
import { useHistory } from 'react-router';
import { useQuery } from 'react-query'
import axios from 'axios'
import { CircularProgress } from "@mui/material";

export default function Fitness() {

    const getCategories = () => {
        const url = `${process.env.REACT_APP_OURAPI}/fitness/categories/`

        return axios.get(url)
    }
    const { data, isLoading } = useQuery("query", getCategories)

    let history = useHistory();



    return (

        <div className="fitness_main" >
            <div className="container">
                <div className="cc">
                    <div className="heading"><p> Fitness</p>
                    </div>
                </div>
                {!isLoading ?
                    <div className="info">
                        {data?.data.map(item => (
                            <div className="info_1" key={item.id}>
                                <div className="heading_2">
                                    <h1>{item.name}</h1>
                                </div>
                                <div className="p1">
                                    <p>{item.description}</p>
                                </div>
                                <div className="button">
                                    {item.sections.map(i => (
                                        <button className="b1" key={i.id} onClick={() => history.push("/home/fitness/" + i.id)}><p>{i.name}</p></button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    : <div style={{ width: '80vw', display: 'grid', placeItems: 'center', paddingTop: '15%' }}><CircularProgress color='secondary' /></div>}
            </div>
        </div >
    )
}