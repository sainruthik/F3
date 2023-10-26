import React, { createContext, useContext, useState } from 'react'

const ourContext = createContext();

export const useOurContext = () => {
    return useContext(ourContext);
}

export function ContextProvider({ children }) {
    //LANDING PAGE SECTION
    const [title, setTitle] = useState('F3 Web App');
    const val = { title, setTitle }

    //----BMI SECTION----
    const [values, setValues] = useState(JSON.parse(window.localStorage.getItem('uinfo')) || {
        height: 185,
        weight: 68,
        age: 18,
        gender: 'male',
        al: 5,
        goal: 'weightlose'
    })

    const val1 = {
        values, setValues
    }

    //----CALORIE CALC SECTION----
    const [name2, setName2] = useState('');
    const val2 = { name2, setName2 }


    //----DIET AND NUTRITION SECTION----
    const [name3, setName3] = useState('');
    const val3 = { name3, setName3 }

    //----FITNESS----
    const [name4, setName4] = useState('');
    const val4 = { name4, setName4 }

    return (
        <ourContext.Provider
            value={{
                landing: val,
                bmi_section: val1,
                cal_section: val2,
                diet_section: val3,
                fit_section: val4
            }}>
            {children}
        </ourContext.Provider>
    )
}

