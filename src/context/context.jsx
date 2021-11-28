import React, {useState} from 'react';

export const Context = React.createContext(
    {hover: null,
    setHover: ()=>{}
    }
);


const ContextProvider = (props) => {

    const[hover, setHover] = useState(false);

    const hoverHandler = (type) => {
        setHover(type)
    }


    return (
        <Context.Provider value={{hover: hover, setHover: hoverHandler}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
