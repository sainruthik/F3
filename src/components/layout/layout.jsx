import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Landing from '../LandingPage/Landing'
import Bmi from '../BMI_section/Bmi'
import CalorieCalc from '../Cal_calc_Section/CalorieCalc'
import Nutrition from '../Nutrition_section/Nutrition'
import Fitness from '../Fitness_Section/Fitness'
import Exercise from '../Fitness_Section/Exercise'


import '../../App.css';
export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="container"  >
                <Route exact path='/home' component={Landing} />
                <Route path='/home/bmi' component={Bmi} />
                <Route path='/home/cal_calc' component={CalorieCalc} />
                <Route path='/home/nutrition' component={Nutrition} />
                <Route exact path='/home/fitness' component={Fitness} />
                <Route path='/home/fitness/:fid' component={Exercise} />
            </div>
        </>
    )
}
