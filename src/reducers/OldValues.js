import oldvalue from '../data/warehouses.json'
const oldValuesReducer=(state=oldvalue,action)=>{
    let value={
        old:state,
        new:undefined,
        index:0
    }
    switch(action.type){
        case 'SETVALUE':
            return value;
        case 'SETNEW':
            return {...state,
                new:action.payload};
        case 'SETINDEX':
            return {...state,
            index:action.payload}
        default:
            return value;
    }
}
export default oldValuesReducer;