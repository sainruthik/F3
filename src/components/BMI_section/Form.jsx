import React, { useRef, useState, useEffect } from 'react'
import './Form.css';
import { useOurContext } from '../../Context/Context';

const Form = ({ handleModal }) => {

    const { bmi_section } = useOurContext()
    const { values, setValues } = bmi_section
    const [age, setAge] = useState(values.age)
    const [weight, setWeight] = useState(values.weight)
    const [height, setHeight] = useState(values.height)
    const [al, setAl] = useState(values.al)
    const [goal, setGoal] = useState(values.goal)

    const Gen = useRef(values.gender)


    function handleForm() {
        const uinfo = {
            height: height,
            weight: weight,
            age: age,
            gender: Gen.current,
            al: al,
            goal: goal

        }
        window.localStorage.setItem('uinfo', JSON.stringify(uinfo))
        setValues(uinfo)
        handleModal()
    }



    function forGen() {
        if (Gen.current === 'male') {

            document.getElementById('female').setAttribute("style", "background-color: white;");
            document.getElementById('male').setAttribute("style", "background-color: rgba(235, 72, 120, 0.507);");
        }

        else {
            document.getElementById('male').setAttribute("style", "background-color: white;");
            document.getElementById('female').setAttribute("style", "background-color: rgba(235, 72, 120, 0.507);");
        }

    }


    function handle(e) {



        if (e.target.id === 'Male') {
            if (Gen.current !== 'male') {
                Gen.current = 'male'
                document.getElementById('female').style['background-color'] = "white"
                document.getElementById('male').style['background-color'] = 'rgba(235, 72, 120, 0.507)'
            }

        }

        else {
            if (Gen.current !== 'female') {
                Gen.current = 'female'
                document.getElementById('male').style['background-color'] = "white"
                document.getElementById('female').style['background-color'] = 'rgba(235, 72, 120, 0.507)'

            }
        }



    }

    function decrement1() {
        if (age >= 2) {
            setAge(age - 1)
        }

    }

    function increment1() {
        setAge(parseInt(age) + 1)

    }

    function decrement2() {

        if (weight >= 2) {
            setWeight(weight - 2)
        }

    }

    function increment2() {
        setWeight(parseInt(weight) + 1)
    }

    function decrement3() {
        if (height >= 2) {
            setHeight(height - 1)
        }

    }

    function increment3() {
        setHeight(parseInt(height) + 1)
    }

    useEffect(() => {
        forGen()


    }, [])

    return (
        <>
            <div className="style2">
                <h3>First, let us know you</h3>
                <div className="close" onClick={handleModal}></div>

            </div>

            <div className="grid">
                <div className="grid11">
                    <h4>Gender</h4>
                </div>

                <div className="grid12" onClick={(e) => { handle(e) }}>
                    <div className="male" id="male" >
                        <div className="image" id="Male"></div>

                    </div>
                    <div className="female" id="female" >
                        <div className="image" id="Female" ></div>
                    </div>
                </div>
                <div className="gridm1">
                    <h4>:</h4>
                </div>

                <div className="grid21">
                    <h4>Age</h4>
                </div>
                <div className="grid22">
                    <i className="fas fa-minus" onClick={decrement1}> </i>
                    <input type="number" onChange={(e) => { setAge(e.target.value) }} id="Input1" value={age} min="1"></input>
                    <i className="fas fa-plus" onClick={increment1}> </i>
                </div>
                <div className="gridm2">
                    <h4>:</h4>

                </div>

                <div className="grid31">
                    <h4>Weight (Kg)</h4>
                </div>
                <div className="grid32">
                    <i className="fas fa-minus" onClick={decrement2}> </i>
                    <input type="number" id="Input2" onChange={(e) => { setWeight(e.target.value) }} value={weight} min='1'></input>
                    <i className="fas fa-plus" onClick={increment2}> </i>

                </div>
                <div className="gridm3">
                    <h4>:</h4>
                </div>

                <div className="grid41">
                    <h4>Height (cm)</h4>
                </div>
                <div className="grid42">
                    <i className="fas fa-minus" onClick={decrement3}> </i>
                    <input type="number" id="Input3" onChange={(e) => { setHeight(e.target.value) }} value={height} min='1'></input>
                    <i className="fas fa-plus" onClick={increment3}> </i>
                </div>
                <div className="gridm4">
                    <h4>:</h4>
                </div>

                <div className="grid51">
                    <h4>Activity Level</h4>
                    <select onChange={(e) => { setAl(e.target.value) }} value={al}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="grid52">
                    <h4>Goal</h4>
                    <select onChange={(e) => { setGoal(e.target.value) }} value={goal}>
                        <option>weightlose</option>
                        <option>weightgain</option>
                        <option>maintain</option>
                    </select>

                </div>

                <div className="grid61">
                    <div> 1.BMI </div>
                    <div>2.Sedentary:little or no exercise </div>
                    <div>3.Exercise 1-3 times/Week </div>
                    <div>4.Exercise 4-5 times/Week </div>
                    <div>5.Daily or intense exercise 3-4 times/Week </div>

                </div>






            </div>

            <div className="style3">
                <button onClick={handleForm} disabled={(!(age)) || (!(height)) || (!(weight))}>save</button>
            </div>

        </>
    )
}



export default Form
