import React, { createContext, useState } from "react";

const defaultData = {
    name: 'Humberto',
    age: 45,
    working: 'Si',
    state: 'happy'
}

const changedData = {
    name: 'Humberto',
    age: 45,
    working: 'No',
    state: "sad"
}
// se crea el context-------------------------------------------------------------
export const DataContext = createContext()

// funcion que provee el state y changeState--------------------------------------
function DataProvider({children}) {    

    const [data, setData] = useState(defaultData)

    // funcion que en el componente Button cambia la data-------------------------
    const changeState = () => {
       data === defaultData ? setData(changedData): setData(defaultData)
    }


    return (
        <DataContext.Provider value = {{
             data,
             setData,
             changeState
             }} >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider




