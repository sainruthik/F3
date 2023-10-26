import React, { useEffect, useState } from 'react'
import './bmr.css'
import { useOurContext } from '../../Context/Context'
import { FormControl, Select, MenuItem } from '@mui/material'
import axios from 'axios'
import Pie from './Pie'

export default function BMR({ setToggleSection }) {
    const { bmi_section } = useOurContext()
    const { values } = bmi_section
    const [data, setData] = useState()
    const [type, setType] = useState('1')
    const [pie, setPie] = useState()

    const fetchBMR = async (signal) => {
        var options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
            params: {
                age: values.age,
                gender: values.gender,
                height: values.height,
                weight: values.weight,
                activitylevel: values.al,
                goal: values.goal
            },
            headers: {
                'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
                'x-rapidapi-key': `${process.env.REACT_APP_BMRKEY}`
            }
        };
        await axios.request(options, signal)
            .then(data => setData(data.data.data))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        fetchBMR(signal)
        return () => controller.abort()
    }, [values])//eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (data) {
            switch (type) {
                case '1': setPie(data.balanced)
                    break;
                case '2': setPie(data.highprotein)
                    break;
                case '3': setPie(data.lowcarbs)
                    break;
                case '4': setPie(data.lowfat)
                    break;
                default: setPie(data.balanced)

            }
        }
    }, [type, data])

    return (
        <div className='bmr'>
            <div className="content">
                <button className="back" onClick={() => setToggleSection(false)}><i className="fas fa-arrow-left"></i></button>

                <div className="section">
                    <div className="dropdown">
                        <FormControl style={{ width: '12rem', marginTop: '25%' }}>

                            <Select
                                style={{ background: 'white' }}
                                size='small'
                                value={type}
                                color='secondary'
                                onChange={(e) => { setType(e.target.value) }}
                            >
                                <MenuItem value='1'>balanced</MenuItem>
                                <MenuItem value='2'>highprotein</MenuItem>
                                <MenuItem value='3'>lowcarbs</MenuItem>
                                <MenuItem value='4'>lowfat</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="pie">
                        {data && pie ?
                            <>
                                <div className="title">Calories required per day based on ur goal</div>
                                <div className="cols">
                                    <div className='calo'>Total Calories: {Math.round(data.calorie)} kcal</div>
                                    <Pie pieData={pie} />
                                </div>
                            </> : ''}
                    </div>
                </div>
            </div>

        </div>
    )
}
