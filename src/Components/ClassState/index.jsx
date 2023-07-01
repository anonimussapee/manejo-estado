import { CheckIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

class ClassState extends React.Component{
  constructor (props){
    super(props);
    this.state={codeSecure:'',loading:false, error:false, check:false}
  }
  componentDidUpdate(){
    if(!!this.state.loading && this.state.codeSecure.length>2){
      setTimeout(() => {
        this.setState({check:true, 
        loading: false})
      }, 2000)
    }else if(!!this.state.loading && this.state.codeSecure.length <= 2){
      setTimeout(() => {
       this.setState({ error: true, 
        loading: false})
      }, 500);
    }
  }
  render (){
    return (
      <div className='w-[80%] h-auto p-10 flex flex-col justify-center items-center text-[2rem] gap-10'>
      {!this.state.loading &&  this.state.check && <p className='text-blue-700'><CheckIcon className='w-12 h-12 inline'/>Código Correcto </p>}
      {this.state.loading && <p className='text-blue-700'>Comprobando ...</p>}
      {this.state.error  && !!!this.state.check && !!!this.state.loading && <p className='text-red-700'>ingresa un código que sea correcto <XMarkIcon className='w-12 h-12 inline'/></p>}
      <h2>  Eliminar {this.props.name}<TrashIcon className='w-12 h-12 inline'/> </h2>
      <p>Por favor escribe el codigo de seguridad.</p>
      <input type="text" value={this.state.codeSecure} placeholder='Codigo de seguridad' onChange={(e)=>this.setState({codeSecure:e.target.value.trim()})}/>
      <button onClick={()=>this.setState({check:false,loading:true})}>Comprobar</button>
    </div>
    );
  }
}

export {ClassState}
