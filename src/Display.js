import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
    return (
        <div>
            <input type="text" value={props.value} disabled />
        </div>
    );
}

Display.propTypes = {
    value: PropTypes.string.isRequired
};

export default Display;