import { useState, createContext } from 'react';

export const CityContext = createContext();

const CityProvider = (props) => {
    const [city, setCity] = useState('');

    const value = {
        state: city,
        setState: setCity,
    };

    return (
        <CityContext.Provider value={value}>
            {props.children}
        </CityContext.Provider>
    );
};

export default CityProvider;