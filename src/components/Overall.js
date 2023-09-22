import './Main.js'
import Main from './Main.js';
import Footerr from './Footerr';


function Overall(){
    return(
        <div className="bg-fig flex justify-center align-middle test  sm:w-2/4  md:w-1/3 h-min-screen">
            <img src='./assets/images/Rectangle.svg' alt='knw' className=" object-cover w-full"/>
            <Main/>
           
            <Footerr />
        </div>
    )
}

//

export default Overall;