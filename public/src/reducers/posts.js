import * as types from '../constants/actionTypes';

const initialState = {
    'list':[]
};

export default function posts(state = initialState, action = {})
{
    switch (action.type)
    {
        case types.GET_LATEST_LIST:
            return Object.assign({}, state, {
                'list': action.data
            });
        default:
            return state;
    }
}
