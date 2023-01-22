import { useCallback } from 'react'
import { createSlice } from 'react-context-slices'

export const name = 'count'
const initialState = { value: 0 }
const SET = 'SET'
const reducer = (draft, { type, payload }) => {
    switch (type) {
        case SET:
            draft.value = payload
            break
        default:
            break
    }
}
export const { useValues, useActions, Provider } = createSlice(
    reducer,
    initialState,
    name,
    (useDispatch) => () => {
        const dispatch = useDispatch()
        const set = useCallback(
            (value) => dispatch({ type: SET, payload: value }),
            [dispatch]
        )
        return { [name]: { set } }
    }
)
