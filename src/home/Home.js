import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { indexSelected } from '../actions'
import data from '../data/warehouses.json'
import Card from './card/Card'
import './Home.css'

export default function Home() {
    const dispatch = useDispatch()
    const history=useHistory()
    const newValues = useSelector(state => state.new)
    let list=newValues?newValues:data;
    const [search, setsearch] = useState("")
    const filterValues=(item)=>{
        let live=item.is_live?"Yes":"No";
        return item.name.toLowerCase().includes(search)||item.city.toLowerCase().includes(search)||item.cluster.toLowerCase().includes(search)||item.space_available.toString().toLowerCase().includes(search)||live.toString().toLowerCase().includes(search)
    }
    let filteredList=list.filter(item=>{return filterValues(item)})
    return (
        <div>
            <div className="inputContainer">
            <input value={search} onChange={(e)=>{setsearch(e.target.value.toLowerCase())}} placeholder="Search"/>
            </div>
            {
               filteredList.map((item,index)=>(
                    <div className="card" onClick={()=>{
                        history.push({
                            pathname:"/warehouse",
                            state:{warehouse:item,
                            index:index}
                        })
                        dispatch(indexSelected(index))
                    }}>
                    <Card warehouse={item}/>
                    </div>
                ))
            }
        </div>
    )
}
