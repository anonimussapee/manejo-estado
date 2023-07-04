import { FaceSmileIcon } from '@heroicons/react/24/solid';
import { ClassState } from '../../Components/ClassState';
import { UseState } from '../../Components/UseState';
import './index.css'

const App = () => {


  return (
    <>
     <h1 className='text-[2rem] fixed top-0 z-10 w-[100%] h-[3.3rem] bg-gray-500 text-center text-white'>Manejo del estado profesional<FaceSmileIcon className='w-12 h-12 inline'/> </h1>
    <section className='w-[100%] h-[100%] bg-gray-200 text-center mt-[3rem] overflow-y-scroll  '>

    
    <div className='w-[100%] flex flex-col justify-center items-center'>
      <UseState name=" UseState "/>
      <div className='w-[100%] h-1 bg-gray-800'></div>
      <ClassState name=" ClassState "/>
    </div>
    
    </section>
    </>
   
  );

}

export {App}