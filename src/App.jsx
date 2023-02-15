import { useReducer } from 'react';

import DigitButtons from './components/DigitButtons';
import FunctionButton from './components/FunctionButton';
import OperationButton from './components/OperationButton';
import './App.css';

export const ACTIONS={
    ADD_DIGIT:'add_digit',
    CLEAR:"clear",
    DEL_DIGIT:'del_digit',
    EVALUATE:'evaluate',
    CHOOSE_OPERATION:'choose_operation',
    CHOOSE_FUNCTION:'choose_function'
}

function reducer(state, {type, payload}) {
    switch (type){
    
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite){
                return {
                    ...state,
                    currentOperand:payload.digit,
                    overwrite:false,
                }
            }
            if (payload.digit==="0" && state.currentOperand==="0") {
                return state;
            }
            if (payload.digit==="." && state.currentOperand.includes('.')){
                return state;
            }
            return {
                ...state,
                currentOperand:`${state.currentOperand || ''}${payload.digit}`
            }

        case ACTIONS.CLEAR:
            return {};

        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state
            }
            if (state.previousOperand == null){
                return {
                    ...state,
                    operation:payload.operation,
                    previousOperand:state.currentOperand,
                    currentOperand:null
                }
            }
            if (state.currentOperand==null){
                return {
                    ...state,
                    operation:payload.operation
                }
            }
            return {
                ...state,
                previousOperand:evaluate(state),
                operation:payload.operation,
                currentOperand:null
            }
        case ACTIONS.EVALUATE:
            if (state.operation==null || state.currentOperand==null || state.previousOperand==null){
                return state;
            }
            return {
                ...state,
                overwrite:true,
                previousOperand:null,
                operation:null,
                currentOperand:evaluate(state)
            }
        default:
            console.log('Case invalide')
    }
}

function evaluate({currentOperand, previousOperand, operation}){
    const previous=parseFloat(previousOperand);
    const current=parseFloat(currentOperand);
    if(isNaN(previous)|| isNaN(current)){
        return "";
    }
    let computation=""
    switch (operation){
        case "+":
            computation = previous + current
            break
        case "-":
            computation = previous - current
            break
        case "x":
            computation = previous * current
            break
        case "÷":
            computation = previous / current
            break
        default:
            break;
    }
    return computation.toString()
}

function App() {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
        reducer,
        {}
    );


    return (  
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            {/* First Line */}
            <button className='function-btn' onClick={()=>dispatch({type: ACTIONS.CLEAR})}>AC</button>
            <FunctionButton func="±" dispatch={dispatch}/>
            <FunctionButton func="%" dispatch={dispatch}/>
            <OperationButton operation={"÷"}dispatch={dispatch}/>

            {/* Second Line */}
            <DigitButtons digit="7" dispatch={dispatch}/>
            <DigitButtons digit="8" dispatch={dispatch}/>
            <DigitButtons digit="9" dispatch={dispatch}/>
            <OperationButton operation="x" dispatch={dispatch}/>
            <DigitButtons digit="4" dispatch={dispatch}/>
            <DigitButtons digit="5" dispatch={dispatch}/>
            <DigitButtons digit="6" dispatch={dispatch}/>
            <OperationButton operation="-" dispatch={dispatch}/>
            {/* Fourth line */}
            <DigitButtons digit="1" dispatch={dispatch}/>
            <DigitButtons digit="2" dispatch={dispatch}/>
            <DigitButtons digit="3" dispatch={dispatch}/>
            <OperationButton operation="+" dispatch={dispatch}/>
            {/* Fifth line */}
            <DigitButtons digit="0" dispatch={dispatch} number0={true}/>
            <DigitButtons digit="," dispatch={dispatch}/>
            <button className='operator-btn' onClick={()=>dispatch({type: ACTIONS.EVALUATE})}>=</button>
            

        </div>
    );
}

export default App ;