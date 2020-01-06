import React, {useState} from "react";
import './Rating.css'

const Rating = (props) => {
    const [rating, setRating] = useState(props.rating * 2 - 1);
    const [tempRating, setTempRating] = useState(props.rating * 2 - 1);

    console.log(tempRating);

    const mouseoverHandler = (rating) => {
        setRating(rating);
    };

    const mouseoutHandler = () => {
        setRating(tempRating)
    };

    const rate = (rating) => {
        setRating(rating);
        setTempRating(rating);

        props.changeRating((rating + 1) / 2)
    };


    const stars = [];

    for (let i = 0; i < 10; i++) {
        if (rating >= i) {
            stars.push((
                <div
                    onMouseOver={() => mouseoverHandler(i)}
                    onClick={() => rate(i)}
                    // onMouseOut={mouseoutHandler}
                    style={{
                        direction: (i % 2 === 0) ? "ltr" : "rtl"
                    }}
                    className="star"
                >
                    {props.fullSymbol}
                </div>
            ))
        } else {
            stars.push((
                <div
                    onMouseOver={() => mouseoverHandler(i)}
                    onClick={() => rate(i)}
                    // onMouseOut={mouseoutHandler}
                    style={{
                        direction: (i % 2 === 0) ? "ltr" : "rtl"
                    }}
                    className="star"
                >
                    {props.emptySymbol}
                </div>
            ))
        }
    }


    return (
        <div className="wrapper" onMouseLeave={mouseoutHandler}>
            {stars}
        </div>
    );
};

export default Rating;
