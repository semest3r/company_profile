import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import TopBar from "../components/TopBar";


const GalleryPage = () => {
    return (
        <div className="container min-w-full">
            <TopBar />
            <div className="w-[90%] mx-auto">
                <h1 className='text-6xl font-semibold text-gray-800 pt-4'>Gallery</h1>
                <div className='flex justify-center align-center px-4'>
                    <form>
                        <input placeholder='Type Here' className=' w-48 sm:w-72 p-1 text-base border-2 border-gray-400 focus:outline-none focus:border-emerald-400'/>
                    </form>
                </div>
            </div>
            <div className="min-h-screen flex justify-center items-center flex-wrap gap-10 m-10 p-6" >
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
                <div className='w-60 h-72 border-2 box-border hover:box-content hover:scale-110 '>
                    <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    <h1 className='text-center'>name product</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default GalleryPage;


