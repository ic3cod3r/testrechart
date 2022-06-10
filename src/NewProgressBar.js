import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Container = styled.div`
    progress[value] {
        width: ${props => props.width};
        appearance: none;
        
        ::-webkit-progress-bar{
            height: 10px;
            border-radius: 20px;
            background-color: #8D918D;
        }
     

        ::-webkit-progress-value {
            height: 10px;
            border-radius: 20px;
            background-color: #000000;
        } 
    }
`;

const ProgressBar = props => {
    const {value, max, color, width } = props;
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max} />
        </Container>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
};

ProgressBar.defaultProps = {
    max: 100,
    color: '#ff7979',
    width: '100%',
};

export default ProgressBar;

