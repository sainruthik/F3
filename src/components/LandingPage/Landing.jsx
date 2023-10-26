import React from 'react'
import { useHistory } from 'react-router-dom'

import './landing.css'
// images
import bmi_img from '../../assets/bmi.jpg'
import calc_img from '../../assets/calc.jpg'
import nut_img from '../../assets/nutrition.jpg'
import fit_img from '../../assets/fitness.jpg'

export default function Landing() {


    return (
        <div className="landing">
            <div className="content">
                <h1>Care yourself</h1>
                <Sections />
                <footer>
                    <div className="dis">Disclaimer: This application gives only the suggestions and it is your sole responsibility to follow it or not </div>
                    <div className="cright">&copy; Fit-Fab-Fun 2021</div>
                </footer>
            </div>
        </div>
    )
}

export function Sections() {
    const history = useHistory()
    return (

        <div className="m_sections">
            <div className="card" onClick={() => { history.push('/home/bmi') }}>
                <img src={bmi_img} alt='a1' className="image" />
                <div className="title" data-title="BMI"
                    data-des="Your BMI is a measurement that is a ratio of your weight and height. It's a good way to gauge whether your weight is in healthy proportion to your height.">
                </div>
            </div>
            <div className="card" onClick={() => { history.push('/home/cal_calc') }} >
                <img src={calc_img} alt='a2' className="image" />
                <div className="title" data-title="calorie calculator"
                    data-des="The 'quality' of calories consumed is also important. There are different classifications of foods in terms of calories. This includes high-calorie foods, low-calorie foods, and empty calories."> </div>
            </div>
            <div className="card" onClick={() => { history.push('/home/nutrition') }} >
                <img src={nut_img} alt='a3' className="image" />
                <div className="title" data-title="Nutrition"
                    data-des="It is important to have a balanced diet rich in all nutrients to ensure that no deficiencies or hormonal imbalances are created in the body. Nutrition is also important for you to boost your immunity and give it the ability to fight against diseases."> </div>
            </div>
            <div className="card" onClick={() => { history.push('/home/fitness') }} >
                <img src={fit_img} alt='a4' className="image" />
                <div className="title" data-title="Fitness"
                    data-des="Physical fitness provides strong bones and muscles, leads to better health and well-being, prevents various health problems, reduces the risk of several diseases like blood pressure, diabetes, cancer, etc. and improves a better quality of life."> </div>
            </div>
        </div>
    )
}