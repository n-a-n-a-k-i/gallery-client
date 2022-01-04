import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AccountAction from '../store/account/account.action'
import * as PhotoAction from '../store/photo/photo.action'

const action = {
    ...AccountAction,
    ...PhotoAction
}

export const useAction = () => {

    const dispatch = useDispatch()

    return bindActionCreators(action, dispatch)

}
