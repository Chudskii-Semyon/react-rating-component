import React, {useState} from 'react';
import './App.css';
import Rating from "./components/UI/Rating/Rating";
import IosStar from "react-ionicons/lib/IosStar"
import IosStarOutline from "react-ionicons/lib/IosStarOutline"

function App() {
    const [rating, setRating] = useState(3.5);


    const changeRatingHandler = (value) => {
        setRating(value);
    };

    return (
        <div className="App">
            <p>Rating: {rating}</p>
            <Rating
                rating={rating}
                changeRating={changeRatingHandler}
                emptySymbol={<IosStarOutline fontSize='60px' color="#EFEF75"/>}
                fullSymbol={<IosStar fontSize='60px' color="#EFEF75"/>}
            />
        </div>

    );
}

export default App;
