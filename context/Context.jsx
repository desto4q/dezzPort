import { createContext } from "react";


export let userContext = createContext()


let Context = ({child}) => {

    let values = {}
    return (
        <userContext.Provider value={values}>
            {child}
        </userContext.Provider>
    )
}
export default Context