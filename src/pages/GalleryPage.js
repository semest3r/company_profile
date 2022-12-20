import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import TopBar from "../components/TopBar";


const GalleryPage = () => {
    return (
        <div className="container min-w-full">
            <TopBar />
            <section className='pt-20 bg-gray-200'>
                <div className="w-[90%] mx-auto">
                    <h1 className='text-2xl sm:text-6xl font-semibold text-gray-800 pt-4'>Gallery</h1>
                    <div className='flex justify-center align-center px-4'>
                        <form>
                            <input placeholder='Type Here' className=' w-48 sm:w-72 p-1 text-base border-2 border-gray-400 focus:outline-none focus:border-emerald-400'/>
                        </form>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row-dense justify-items-center w-[80%] mx-auto py-10" >
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                        
                    </div>
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                        
                    </div>
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                        
                    </div>
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                        
                    </div>
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                        
                    </div>
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                        
                    </div>
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                        
                    </div>
                    <div className=''>
                        <img src={require('../image/default.jpg')} className="h-52 w-64"/>
                    </div>
                </div>
            </section>
           
            <Footer/>
        </div>
    )

}

export default GalleryPage;


