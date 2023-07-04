import { CheckIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const codeVerify = 'classState'



class ClassState extends React.Component{
  constructor (props){
    super(props);
    this.state={codeSecure:'',loading:false, error:false, check:false, delete:false, deleteDefinitive:false}
  
  }
  onCoincidence = () => {
    this.setState({check:true, 
      loading: false})
  } 
  
  onError = () => {
    this.setState({ error: true, loading: false})
  }
  
  onChangeValue = (newValue) => {
    this.setState({codeSecure:newValue})
  } 
  
  onCheck = () => {
    this.setState({check:false,loading:true, error:false})
  }
  
  onDelete = () => {
    this.setState({delete:true})
  }
  
  onReset = () => {
    this.setState({check:false, delete:false, codeSecure:''})
  }
  
  onDefinitiveDelete = () => {
    this.setState({deleteDefinitive:true})
  }

  componentDidUpdate(){
    if(!!this.state.loading && this.state.codeSecure === codeVerify){
      setTimeout(() => {
        this.onCoincidence()
      }, 2000)
    }else if(!!this.state.loading &&  this.state.codeSecure !== codeVerify){
      setTimeout(() => {
        this.onError()
      }, 2000);
    }
  }
  render (){
    if(!this.state.check && !this.state.delete){
      return (
        <div className='w-[80%] h-[70vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {!this.state.loading &&  this.state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Código Correcto </p>}
        {this.state.loading && <p className='text-blue-700'>Comprobando ...</p>}
        {this.state.error  && !this.state.check && !this.state.loading && <p className='text-red-700'>ingresa un código que sea correcto <XMarkIcon className='w-12 h-12 inline'/></p>}
        <h2>  Eliminar {this.props.name}<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>Por favor escribe el codigo de seguridad.</p>
        <input className='border-[2px] border-black rounded-lg p-2' type="text" value={this.state.codeSecure} placeholder='Codigo de seguridad' onChange={(e)=> this.onChangeValue(e.target.value.trim())}/>
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
         this.onCheck()
        }}>Comprobar</button>
      </div>
      );
    }else if(this.state.check && !this.state.delete){
      return (
        <div className='w-[80%] h-[90vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {!this.state.loading &&  this.state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Código Correcto </p>}
        
        <h2>  Eliminar {this.props.name}<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>¿Estas seguro de eliminar {this.props.name}?, si lo haces aun tendras una oportunidad para deshacer</p>
        
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          this.onDelete()
        }}>Eliminalo de todas formas</button>
         <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          this.onReset()
        }}>No borrar</button>
      </div>
      );
    }else if(this.state.check && this.state.delete && !this.state.deleteDefinitive){
      return (
        <div className='w-[80%] h-[70vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {!this.state.loading &&  this.state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Código Correcto </p>}
        
        <h2>  {this.props.name} ha sido eliminado<TrashIcon className='w-12 h-12 inline'/> </h2>
        <p>¿Quieres deshacer y recuperar {this.props.name}?</p>
        
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          this.onReset()
        }}>Deshacer</button>
        <button className='border-[2px] border-black rounded-lg p-2 bg-gray-300 hover:bg-gray-400' onClick={()=>{
          this.onDefinitiveDelete()
        }}>Borrar definitivamente</button>
      </div>
      );
    }else{
      return (
        <div className='w-[80%] h-[70vh] p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
        {!this.state.loading &&  this.state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Borrado con éxito</p>}
        
        <h2>  {this.props.name} ha sido eliminado definitivamente<TrashIcon className='w-12 h-12 inline'/> </h2>
        
      
      </div>
      );
    }
   
  }
}

export {ClassState}
