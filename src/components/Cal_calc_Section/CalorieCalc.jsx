import './cal_cal.css';
import React from 'react';
import axios from 'axios';

import { useState } from 'react';
import { CircularProgress } from '@mui/material'

function CalorieCalc() {
    const [query, setquery] = useState("");
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState("");
    const [err, setErr] = useState(false);


    const fetchData = async (e) => {
        setLoading(true)
        e.preventDefault()
        var options = {
            method: 'GET',
            url: 'https://api.edamam.com/api/food-database/v2/parser',
            params: {
                app_id: 'f31fef05',
                app_key: `${process.env.REACT_APP_CALCKEY}`,
                ingr: query.trim()
            },
        }

        await axios.request(options)
            .then(result => { setErr(false); setInfo(result.data.parsed[0].food) })
            .catch(err => { setErr(true); setInfo(''); })

        setLoading(false)

    }


    return (
        <div className="calc_main">

            <div className="Heading">
                Calorie Calculator
            </div>

            <div className="content">
                <form>
                    <div className="searchbar">
                        <input
                            type="text"
                            className="calc_input"
                            placeholder="search for an ingredient.."
                            value={query}
                            onChange={(e) => setquery(e.target.value)}
                        />
                        <button className="calc_submit" type='submit' onClick={fetchData}><span className='fa fa-lg fa-search'></span></button>
                    </div>
                </form>
                {!loading ?
                    <div className='result'>
                        {info ?
                            <div className="infoTile">

                                <img className="img" src={info.image} alt="" /><br />
                                <div className="values">
                                    <h3 id="x">100g</h3>
                                    <h2 id="y">{info.label}</h2>

                                    <div className="calories">
                                        <p> Calories  {info.nutrients.ENERC_KCAL} KCal</p>

                                    </div>

                                    <div className="cal_item">
                                        <p id="a">Carbs   </p>
                                        <p id="a">Fats   </p>
                                        <p id="a">Fiber  </p>
                                        <p id="a">Protein  </p>
                                    </div>

                                    <div className="item_value">
                                        <p id="b">  {info.nutrients.CHOCDF}g </p>
                                        <p id="b">  {info.nutrients.FAT}g </p>
                                        <p id="b">  {info.nutrients.FIBTG}g </p>
                                        <p id="b"> {info.nutrients.PROCNT}g </p>
                                    </div>

                                </div>
                            </div>
                            : ''}


                        {err ?
                            <div className="error">
                                Item not found
                            </div>
                            : ''}
                    </div>
                    : <CircularProgress style={{ marginTop: '5vh' }} color='primary' />}
            </div>


        </div >




    );
}
export default CalorieCalc;
