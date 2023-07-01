import React from 'react';

class ClassState extends React.Component{
  render (){
    return (
      <div className='w-[80%] h-auto p-10 flex flex-col justify-center items-center'>

        <h2>Eliminar ClassState</h2>
        <p>por favor escribe el codigo de seguridad.</p>
        <input type="text" placeholder='Codigo de seguridad'/>
        <button>Comprobar</button>
      </div>
    );
  }
}

export {ClassState}