import { useEffect, useState } from 'react'
import { CheckIcon, TrashIcon, XMarkIcon} from '@heroicons/react/24/solid'

const UseState = (props) => {

  const [codeSecure, setCodeSecure] = useState('')
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  
  useEffect(()=>{
    if(!!loading && codeSecure.length>2){
      setTimeout(() => {
        setCheck(true)
        setLoading(false)
      }, 2000)
    }else if(!!loading && codeSecure.length <= 2){
      setTimeout(() => {
        setError(true)
        setLoading(false)
      }, 500);
    }
  },[loading])

  return (
    <div className='w-[80%] h-auto p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
      {!loading && check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Código Correcto </p>}
      {loading && <p className='text-blue-700'>Comprobando ...</p>}
      {error  && !!!check && !!!loading && <p className='text-red-700'>ingresa un código que sea correcto <XMarkIcon className='w-12 h-12 inline'/></p>}

      <h2>  Eliminar {props.name}<TrashIcon className='w-12 h-12 inline'/> </h2>
      <p>Por favor escribe el codigo de seguridad.</p>
      <input type="text" value={codeSecure} placeholder='Codigo de seguridad' onChange={(e)=>setCodeSecure(e.target.value.trim())}/>
      <button onClick={()=>{
        setLoading(true)
        setCheck(false);
      }}>Comprobar</button>
    </div>
  )

}

export {UseState}