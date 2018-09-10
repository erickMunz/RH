import React from "react";
import PropTypes from "prop-types";


const MensError = ({texto}) =>(
    <span style={{color: "#ae5856"}}>
        {texto}
    </span>
);
MensError.proptypes = {
    text: PropTypes.string.isRequired
}

export default MensError;