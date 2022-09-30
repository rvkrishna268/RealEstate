import { createContext, useState } from "react";

const PropertyContext = createContext();

const PropertyProvider = ({children}) => {

    const [data, setData] = useState(0);

    const [formData, setFormData] = useState({
        toalArea: 0
    })

    const [helperProp, setHelperProp] = useState("");

    return (
        <PropertyContext.Provider value={{formData, setFormData, data, setData, helperProp, setHelperProp}}>
            {children}
        </PropertyContext.Provider>
    )
} 


export {PropertyProvider, PropertyContext};