import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './WareHouse.css'
import { useDispatch, useSelector } from 'react-redux';
import { setNewValue } from '../actions';

export default function WareHouse() {
    const history=useHistory()
    const location = useLocation();
    const index=useSelector(state => state.index)
    const old = useSelector(state => state.old)
    const dispatch = useDispatch()
    const [editCity, seteditCity] = useState(true)
    const [cityname, setcityname] = useState(location.state.warehouse.city)
    const [editName, seteditName] = useState(true)
    const [name, setname] = useState(location.state.warehouse.name)
    const [editCluster, seteditCluster] = useState(true)
    const [cluster, setcluster] = useState(location.state.warehouse.cluster)
    const [editSpace, seteditSpace] = useState(true)
    const [space, setspace] = useState(location.state.warehouse.space_available)
    const [status, setstatus] = useState(location.state.warehouse.is_live)
    const submitChanges=()=>{
        seteditName(true)
        seteditCity(true)
        seteditCluster(true)
        seteditSpace(true)
        let data=old
        data[index].name=name
        data[index].city=cityname
        data[index].cluster=cluster
        data[index].space_available=space
        data[index].is_live=status
        console.log(index)
        dispatch(setNewValue(data))
        history.push("/")
    }
    return (
        <div className="warehouseContainer">
            <h2 className="header">{name}</h2>
            <div className="details">
            {/* setting name */}
            <div className="field" style={{display:"flex"}}>
            <p className="fieldname"><strong>Name:</strong></p> 
            
            {
                editName?
                <><p>{name}</p></>:<input className="editInput" onChange={(e)=>{
                    setname(e.target.value)
                }} value={name}></input>
            }
            <FontAwesomeIcon  onClick={()=>{seteditName(false)}} icon={faEdit}/>
            </div>
            {/* setting city */}
            <div className="field" style={{display:"flex"}}>
            <p className="fieldname"><strong>City:</strong></p> 
            {
                editCity?
                <><p>{cityname}</p></>:<input className="editInput" onChange={(e)=>{
                    setcityname(e.target.value)
                }} value={cityname}></input>
            }
            <FontAwesomeIcon  onClick={()=>{seteditCity(false)}} icon={faEdit}/>
            </div>
            {/* setting cluster */}
            <div className="field" style={{display:"flex"}}>
            <p className="fieldname"><strong>Cluster:</strong></p> 
            {
                editCluster?
            <><p>{cluster}</p></>:<input className="editInput" onChange={(e)=>{
                    setcluster(e.target.value)
                }} value={cluster}></input>
            }
            <FontAwesomeIcon  onClick={()=>{seteditCluster(false)}} icon={faEdit}/>
            </div>
            {/* setting space Available */}
            <div className="field" style={{display:"flex"}}>
            <p className="fieldname"><strong>Space Available:</strong></p> 
            {
                editSpace?
                <><p>{space}</p></>:<input className="editInput" onChange={(e)=>{
                    setspace(e.target.value)
                }} value={space}></input>
            }
            <FontAwesomeIcon  onClick={()=>{seteditSpace(false)}} icon={faEdit}/>
            </div>
            <div className="field" style={{display:"flex"}}>
            <p className="fieldname"><strong>Live Status:</strong></p>
            {
                
                <><p>{status?"Yes":"No"}</p></>
            }
            <FontAwesomeIcon  onClick={()=>{setstatus(!status)}} icon={faEdit}/>
            </div>
            <button onClick={()=>submitChanges()}>SUBMIT</button>
            </div>
        </div>
    )
}
