import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import './Nutrition.css'
import Item from './Item'
import axios from 'axios'
import { CircularProgress } from '@mui/material'


export default function Nutrition() {
    const [id, setId] = useState('6146c553d65b61b05a4e337c')
    const [name, setName] = useState('Complex Carbs')
    const { data, isLoading } = useQuery([id], () => {
        const url = `${process.env.REACT_APP_OURAPI}/nutrition/category/${id}`
        return axios.get(url, { headers: { 'Access-Control-Allow-Origin': '*' } })
    })
    const setCategory = e => {
        const category = e.target.closest('.category')
        if (!category) return
        var btns = document.querySelectorAll('.left .category')
        btns.forEach(i => {
            i.classList.remove('active')
        })
        setName(category.innerText)
        setId(category.getAttribute('value'))
        category.classList.add('active')




    }
    useEffect(() => {
        const left = document.querySelector('.left')
        left.addEventListener('click', setCategory)
        return () => left.removeEventListener('click', setCategory)
    }, [])
    return (

        <div className="Nutrition" >
            <div className="sec_head" >Nutrition</div>
            <div className="content">
                <section className="left">
                    <div className="category active" value='6146c553d65b61b05a4e337c' >Complex Carbs</div>
                    <div className="category" value='6146c540d65b61b05a4e3378'>High Protien</div>
                    <div className="category" value='6146c549d65b61b05a4e337a'>Low Fat</div>
                    <div className="mcategory">Vitamins</div>
                    <div className="sub">
                        <div className="category" value='6146c57bd65b61b05a4e3380'>Vitamin A</div>
                        <div className="category" value='6146c580d65b61b05a4e3382' >Vitamin C</div>
                        <div className="category" value='6146c584d65b61b05a4e3384'>Vitamin D</div>
                        <div className="category" value='6146c589d65b61b05a4e3386'>Vitamin B</div>
                    </div>

                </section>
                <section className="right">
                    <div className="title">{name}</div>
                    <div className="content">
                        {!isLoading ?
                            <>
                                {data?.data[0].items.map(i => (
                                    <Item key={i.id} item={i} />
                                ))}
                            </>
                            : <div style={{ display: 'grid', placeItems: 'center' }}> <CircularProgress color='secondary' /></div>}
                    </div>
                </section>

            </div>
        </div>

    )
}
