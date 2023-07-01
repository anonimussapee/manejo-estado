import { FaceSmileIcon } from '@heroicons/react/24/solid';
import { ClassState } from '../../Components/ClassState';
import { UseState } from '../../Components/UseState';
import './index.css'

const App = () => {


  return (
    <section className='w-[100%] h-[100vh] bg-gray-200 flex flex-col justify-center items-center relative'>

    <h1 className='text-[2.5rem] absolute top-4 '>Manejo del estado profesional<FaceSmileIcon className='w-12 h-12 inline'/> </h1>
    <UseState name=" UseState "/>
    <div className='w-[100%] h-1 bg-gray-800'></div>
    <ClassState name=" ClassState "/>
    </section>
  );

}

export {App}