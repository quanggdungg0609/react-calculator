import { ACTIONS } from "../App"


const DigitButtons = ({dispatch, digit, number0=false}) => {
  return (
    !number0?  <button className='number-btn'
                    onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})
                }>
                    {digit}
                </button>:
                <button className="span-two number-0"
                        onClick={()=>{
                            dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})
                        }
                }>
                    {digit}
                </button>

  )
}

export default DigitButtons