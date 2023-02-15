import { ACTIONS } from "../App"



const FunctionButton = ({dispatch, func}) => {
  return (
    <button className='function-btn'
                onClick={()=>{
                    dispatch({type:ACTIONS.CHO0SE_FUNCTION, payload:{func}})
                }
            }>
            {func}</button>
  )
}

export default FunctionButton