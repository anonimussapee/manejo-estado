import { useEffect, useReducer, useState } from 'react'
import { CheckIcon, TrashIcon, XMarkIcon} from '@heroicons/react/24/solid'

const codeVerify = 'useReducer'

const UseReducer = (props) => {

  // const [codeSecure, setCodeSecure] = useState('')
  // const [check, setCheck] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  const initialState = {codeSecure:'' , check:false , loading:false , error:false , delete:false, deleteDefinitive:false}
  // const [state, setState] =  useState(initialState);

  const actionType ={
    coincidence : 'COINCIDENCE',
    error : 'ERROR',
    changeValue : 'CHANGE_VALUE',
    check : 'CHECK',
    delete : 'DELETE',
    reset : 'RESET',
    definitiveDelete : 'DEFINITIVE_DELETE',
  }
  const reducerObj = (state , action) => ({
    [actionType.coincidence] : {...state, check: true, loading: false },
    [actionType.error] : { ...state , error : true, loading : false },
    [actionType.changeValue]: { ...state , codeSecure: action.payload },
    [actionType.check] : { ...state , loading: true, check : false, error : false},
    [actionType.delete] : { ...state, delete : true },
    [actionType.reset] : { ...state , delete: false, check : false, codeSecure: '' },
    [actionType.definitiveDelete] : { ...state, deleteDefinitive :  true  }

  })

  const reducer = (state, action) =>{
    return reducerObj(state, action)[action.type] || {...state}
  }

 

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const onCoincidence = () => dispatch({type: actionType.coincidence})
  const onError = () => dispatch({type: actionType.error})
  const onCheck = () => dispatch({type: actionType.check})
  const onDelete = () => dispatch({type: actionType.delete})
  const onReset = () => dispatch({type: actionType.reset})
  const onDefinitiveDelete = () => dispatch({type: actionType.definitiveDelete})

  const onChangeValue = ({target:{value}}) => {
    dispatch({type: actionType.changeValue, payload:value})
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
        <input className='border-[2px] border-black rounded-lg p-2' type="text" value={state.codeSecure} placeholder='Codigo de seguridad' onChange={onChangeValue}/>
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={onCheck}>Comprobar</button>
      </div>
    )
  }else if(state.check && !state.delete){
    return (
      <div className='w-[80%] h-[90vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {!state.loading && state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Código Correcto </p>}
  
        <h2>  Eliminar {props.name}<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>¿Estas seguro de eliminar {props.name}?, si lo haces aun tendras una oportunidad para deshacer</p>
        
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={onDelete}>Eliminalo de todas formas</button>
         <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={onReset}>No borrar</button>
      </div>
    )
  }else if(state.check && state.delete && !state.deleteDefinitive){
    return (
      <div className='w-[80%] h-[70vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
  
        <h2>  {props.name} ha sido eliminado<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>¿Quieres deshacer y recuperar {props.name}?</p>
        
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={onReset}>Deshacer</button>
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={onDefinitiveDelete}>Borrar Definitivamente</button>
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


// reducer switch

  // const reducer = (state, action) => {
  //   switch(action.type){
  //     case 'COINCIDENCE':
  //       return {
  //         ...state, check: true, loading:false
  //       }
  //     case 'ERROR':
  //       return {
  //         ...state, error: true , loading: false
  //       }  
  //     case 'CHANGE_VALUE':
  //       return {
  //         ...state, codeSecure: action.newValue
  //       }  
  //     case 'CHECK':
  //       return {
  //         ...state, loading:true, check:false, error: false
  //       }  
  //     case 'DELETE':
  //       return {
  //         ...state , delete: true
  //       }   
  //     case 'RESET': 
  //       return {
  //         ...state, delete : false, check : false, codeSecure: ''
  //       }  
  //     case 'DEFINITIVE_DELETE':
  //       return {
  //         ...state, deleteDefinitive : true
  //       }  
  //     default :
  //       return {...state} 
  //   }
  // }

// reducer if else


  // const reducer = (state, action,) => {
  
  //   if(action.type === 'COINCIDENCE'){
  //     return {...state, check:true, loading:false}
  //   }else if(action.type === 'ERROR'){
  //     return {...state, error:true, loading:false}
  //   }else if(action.type === 'CHANGE_VALUE'){
  //     return {...state, codeSecure: action.newValue}
  //   }else if(action.type === 'CHECK'){
  //     return {...state, loading:true, check:false, error:false}
  //   }else if(action.type === 'DELETE'){
  //     return {...state, delete:true}
  //   }else if(action.type === 'RESET'){
  //     return {...state, delete:false, check:false, codeSecure:''}
  //   }else if(action.type === 'DEFINITIVE_DELETE'){
  //     return {...state, deleteDefinitive:true}
  //   }else{
  //     return state
  //   }
  
  // }


export {UseReducer}