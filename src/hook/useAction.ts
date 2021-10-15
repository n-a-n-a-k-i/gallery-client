import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreator from '../store/action-creator/user'
import * as TodoActionCreator from '../store/action-creator/todo'

const actionCreators = {
    ...UserActionCreator,
    ...TodoActionCreator
}

export const useAction = () => {

    const dispatch = useDispatch()

    return bindActionCreators(actionCreators, dispatch)

}
