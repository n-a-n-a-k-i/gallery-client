import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AccountActionCreator from '../store/account/account.action.creator'
import * as PhotoActionCreator from '../store/photo/photo.action.creator'

const actionCreators = {
    ...AccountActionCreator,
    ...PhotoActionCreator
}

export const useAction = () => {

    const dispatch = useDispatch()

    return bindActionCreators(actionCreators, dispatch)

}
