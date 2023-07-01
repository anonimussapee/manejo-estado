import { ClassState } from '../../Components/ClassState';
import { UseState } from '../../Components/UseState';

const App = () => {


  return (
    <section className='w-[100%] h-[100vh] bg-gray-200 flex flex-col justify-center items-center'>

    <h1>Manejo del estado profesional</h1>
    <UseState/>
    <ClassState/>
    </section>
  );

}

export {App}