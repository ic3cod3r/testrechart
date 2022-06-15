import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

//this is what sets the position and size of the progress bar outline, and the actuall progress bar line
const Container = styled.div`
    progress[value] {
        width: ${props => props.width};
        height: ${props => props.height};
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
    const {value, max, color, width, height} = props
    return (
        <Container color={color} width={width} height={height}>
            <progress value={value} max={max} />
        </Container>

    )
}


//all below is also what position the bar and outline
ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

ProgressBar.defaultProps = {
    max: 100,
    color: '#ff7979',
    width: '100%',
    height: "100%"
}

export default ProgressBar

