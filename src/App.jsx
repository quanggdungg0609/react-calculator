import './App.css';


function App() {
    return (  
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">123.123 *</div>
                <div className="current-operand">123</div>
            </div>
            <button className='function-btn'>AC</button>
            <button className='function-btn'><sup>+</sup>&#8260;<sub>&#8722;</sub></button>
            <button className='function-btn'>%</button>
            <button className='operator-btn'>&#247;</button>
            <button className='number-btn'>7</button>
            <button className='number-btn'>8</button>
            <button className='number-btn'>9</button>
            <button className='operator-btn'>x</button>
            <button className='number-btn'>4</button>
            <button className='number-btn'>5</button>
            <button className='number-btn'>6</button>
            <button className='operator-btn'>-</button>
            <button className='number-btn'>1</button>
            <button className='number-btn'>2</button>
            <button className='number-btn'>3</button>
            <button className='operator-btn'>+</button>
            <button className="span-two number-0">0</button>
            <button className='number-btn'>,</button>
            <button className='operator-btn'>=</button>




            
        </div>
    );
}

export default App ;