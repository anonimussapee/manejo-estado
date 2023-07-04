import { useEffect, useState } from 'react'
import { CheckIcon, TrashIcon, XMarkIcon} from '@heroicons/react/24/solid'

const codeVerify = 'useState'

const UseState = (props) => {

  // const [codeSecure, setCodeSecure] = useState('')
  // const [check, setCheck] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  const [state, setState] =  useState({codeSecure:'' , check:false , loading:false , error:false , delete:false, deleteDefinitive:false})

  const onCoincidence = () => {
    setState({...state, check:true, loading:false})
  } 

  const onError = () => {
    setState({...state, error:true, loading:false})
  }

  const onChangeValue = (newValue) => {
    setState({...state, codeSecure: newValue})
  } 

  const onCheck = () => {
    setState({...state, loading:true, check:false, error:false})
  }

  const onDelete = () => {
    setState({...state, delete:true})
  }

  const onReset = () => {
    setState({...state, delete:false, check:false, codeSecure:''})
  }
 
  const onDefinitiveDelete = () => {
    setState({...state, deleteDefinitive:true})
  }


  useEffect(()=>{
    if(!!state.loading && state.codeSecure === codeVerify){
      setTimeout(() => {
        // setCheck(true)
        // setLoading(false)
        onCoincidence()
      }, 2000)
    }else if(!!state.loading && state.codeSecure !== codeVerify){
      setTimeout(() => {
        // setError(true)
        // setLoading(false)
        onError()
      }, 2000);
    }
  },[state.loading])

  if(!state.check && !state.delete){
    return (
      <div className='w-[80%] h-[70vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {state.loading && <p className='text-blue-700'>Comprobando ...</p>}
        {state.error  && !state.check && !state.loading && <p className='text-red-700'>ingresa un código que sea correcto <XMarkIcon className='w-12 h-12 inline'/></p>}
  
        <h2>  Eliminar {props.name}<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>Por favor escribe el codigo de seguridad.</p>
        <input className='border-[2px] border-black rounded-lg p-2' type="text" value={state.codeSecure} placeholder='Codigo de seguridad' onChange={(e)=>onChangeValue(e.target.value.trim())}/>
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          // setLoading(true)
          // setCheck(false)
          // setError(false)
          onCheck()
        }}>Comprobar</button>
      </div>
    )
  }else if(state.check && !state.delete){
    return (
      <div className='w-[80%] h-[90vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {!state.loading && state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Código Correcto </p>}
  
        <h2>  Eliminar {props.name}<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>¿Estas seguro de eliminar {props.name}?, si lo haces aun tendras una oportunidad para deshacer</p>
        
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          // setLoading(true)
          // setCheck(false)
          // setError(false)
          onDelete()
        }}>Eliminalo de todas formas</button>
         <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          // setLoading(true)
          // setCheck(false)
          // setError(false)
          onReset()
        }}>No borrar</button>
      </div>
    )
  }else if(state.check && state.delete && !state.deleteDefinitive){
    return (
      <div className='w-[80%] h-[70vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
  
        <h2>  {props.name} ha sido eliminado<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>¿Quieres deshacer y recuperar {props.name}?</p>
        
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          // setLoading(true)
          // setCheck(false)
          // setError(false)
          onReset()
        }}>Deshacer</button>
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          // setLoading(true)
          // setCheck(false)
          // setError(false)
          onDefinitiveDelete()
        }}>Borrar Definitivamente</button>
      </div>
    )
  }else{
    return (
      <div className='w-[80%] h-[70vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {!state.loading && state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Eliminado con éxito </p>}
        <h2>  {props.name} ha sido eliminado Definitivamente<TrashIcon className='w-12 h-12 inline'/> </h2>
     
      </div>
    )
  }
 

}

export {UseState}