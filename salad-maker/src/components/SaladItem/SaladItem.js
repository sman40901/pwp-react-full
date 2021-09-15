import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';


const useStyles = createUseStyles({
    add: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    favorite: {
        fontSize: 20,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    image: {
        fontSize: 80
    },
    wrapper: {
        border: 'lightgrey solid 1px',
        margin: 20,
        padding: 25,
        position: 'relative',
        textAlign: 'center',
        textTransform: 'capitalize',
        width: 200,
    }
});

// 'image' and 'name' are deconstructed parameters/props
export default function SaladItem({ image, name }) {
    const user = useContext(UserContext);
    const classes = useStyles();
    const favorite = user.favorites.includes(name);
    return (
        // stylesheet
        <div className={classes.wrapper}>
            <h3>
                {name}
            </h3>
            {/* // stylesheet */}
            <span className={classes.favorite}
                //   conditional label
                aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
                {favorite ? '😋' : ''}
            </span>
            {/* // stylesheet*/}
            <button className={classes.add}>
                <span className={classes.image} role="img" aria-label={name}>{image}</span>
            </button>
        </div>
    )
}


// weak enforcement for parameters, prototypes in JS
SaladItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}