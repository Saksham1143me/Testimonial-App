import reviews from './data';
import './App.css';
import Testimonial from './components/testimonial';
function App() {
  return (
    <div className="App flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-gray-200">
     <div className='text-center'><h1 className='text-4xl font-bold'>Our Testimonials</h1>
     <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
     <Testimonial reviews={reviews}></Testimonial>
     </div>
    </div>
  );
}

export default App;
