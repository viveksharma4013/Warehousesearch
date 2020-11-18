export const setNewValue=(data)=>{
    return dispatch=>{
        dispatch({
            type:'SETNEW',
            payload:data
        })
    }
}

export const indexSelected=(index)=>{
    return dispatch=>{
        dispatch({
            type:'SETINDEX',
            payload:index
        })
    }
}