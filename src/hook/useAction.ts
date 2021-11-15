import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AccountActionCreator from '../store/action.creator/account.action.creator'
import * as PhotoActionCreator from '../store/action.creator/photo.action.creator'
import * as UserActionCreator from '../store/action.creator/user'
import * as TodoActionCreator from '../store/action.creator/todo'

const actionCreators = {
    ...AccountActionCreator,
    ...PhotoActionCreator,
    ...UserActionCreator,
    ...TodoActionCreator
}

export const useAction = () => {

    const dispatch = useDispatch()

    return bindActionCreators(actionCreators, dispatch)

}
