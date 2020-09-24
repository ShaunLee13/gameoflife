import React from 'react'

function About(props) {
    return (
        <div className='aboutContainer'>
            <h2>Conway's Game of Life</h2>
            <p>In 1970, British Mathematician John Conway came up with a cellular automaton which became known as "The Game of Life". The premises for his experiments stemmed from the definition of creation that a being was able to reproduce itself and simulate a Turing Machine.</p>
            <p>With that criteria in place, he set out making his project based on the following ruleset:</p>
            <ol>
                <li>Any living cell with 2 or 3 neighbors survives.</li>
                <li>And dead cell that has 3 living neighbors will become a living cell.</li>
                <li>Any other living cells will die, simulating over/underpopulation.</li>
            </ol>
            <p>This is my implementation of Conway's Game of Life experiment.</p>
        </div>
    )
}

export default About