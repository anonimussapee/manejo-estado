import { FaceSmileIcon } from '@heroicons/react/24/solid';
import { ClassState } from '../../Components/ClassState';
import { UseState } from '../../Components/UseState';
import './index.css'
import { UseReducer } from '../../Components/UseReducer';

const App = () => {


  return (
    <>
     <h1 className='text-[2rem] fixed top-0 z-10 w-[100%] h-[3.3rem] bg-gray-500 text-center text-white'>Manejo profesional del estado<FaceSmileIcon className='w-12 h-12 inline'/> </h1>
    <section className='w-[100%] h-[100%] bg-gray-200 text-center mt-[3rem] '>

    
    <div className='w-[100%] flex flex-col justify-center items-center'>
      <UseState name=" UseState "/>
      <div className='w-[100%] h-1 bg-gray-800'></div>
      <ClassState name=" ClassState "/>
      <div className='w-[100%] h-1 bg-gray-800'></div>
      <UseReducer name='UseReducer'/>
    </div>
    
    </section>
    </>
   
  );

}

export {App}