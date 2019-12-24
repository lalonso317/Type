import React from 'react'

const Main: React.FC = (props) => {

const handleClick = () =>{
    alert("you have been click")
}
    return(
        <div>
            <p>HELLO AGAIN SUNS OF BITCHES</p>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default Main