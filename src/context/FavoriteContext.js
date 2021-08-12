import { useState, createContext } from 'react';

export const FavoriteContext = createContext();

const FavoriteProvider = (props) => {
    const [favorite, setFavorite] = useState([]);
    console.log(favorite)

    const value = {
        state: favorite,
        setState: setFavorite,
    };

    return (
        <FavoriteContext.Provider value={value}>
            {props.children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;