import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AccountActionCreator from '../store/action.creator/account.action.creator'
import * as PhotoActionCreator from '../store/action.creator/photo.action.creator'

const actionCreators = {
    ...AccountActionCreator,
    ...PhotoActionCreator
}

export const useAction = () => {

    const dispatch = useDispatch()

    return bindActionCreators(actionCreators, dispatch)

}
