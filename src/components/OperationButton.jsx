import { ACTIONS } from "../App"



const OperationButton = ({ dispatch,  operation}) => {
  return (
    <button
        className="operator-btn"
        onClick={() =>
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
        }
    >
      {operation}
    </button>
  )
}

export default OperationButton