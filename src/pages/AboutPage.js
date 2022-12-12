import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const AboutPage = () => {
    return (
        <div className="container min-w-full">
            <TopBar/>
            <div className="min-h-screen flex items-center mx-auto w-[75%]">
                <div className=" basis-1/2">
                    <img src={require('../image/logo.png')} className="w-48 h-48 "/>
                </div>
                <div>
                    <h1 className="text-4xl text-gray-800 pb-2">About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minus reiciendis recusandae aspernatur possimus reprehenderit velit aut asperiores numquam nulla quae illum hic, libero consequuntur rerum ullam fuga consequatur error!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minus reiciendis recusandae aspernatur possimus reprehenderit velit aut asperiores numquam nulla quae illum hic, libero consequuntur rerum ullam fuga consequatur error!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minus reiciendis recusandae aspernatur possimus reprehenderit velit aut asperiores numquam nulla quae illum hic, libero consequuntur rerum ullam fuga consequatur error!</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage;