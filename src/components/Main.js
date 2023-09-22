function Main(){
    return(
        <div className="bg-mane text-center">
            <h1 className="text-white font-bold tracking-wider text-xl pt-4 pb-1">laura smith</h1>
            <p className="text-orange-300 tracking-widest ">Frontend Developer</p>
            <p className="text-white mb-2">laurasmith.website</p>
            <div className="btn grid grid-cols-2 px-4  mb-3">
                <div className="flex justify-center px-6  mr-1 bg-white rounded-md align-middle text-center" >
                    <img className="mr-2" src="./assets/fonts/mail.svg"/>
                    <p>Email</p>
                </div>
                <div className="flex align-middle justify-center rounded-md ml-1 px-3 bg-blue-400 ">
                        <img className=" mr-2 " src="./assets/fonts/mail.svg"/>
                        <p className="">Linkedin</p>
                </div>
            </div>
            <div className=" px-4 pb-10">
                <h2 className="text-left mt-2 text-base text-white ">About</h2>
                <p className="text-left text-sm md:text-base text-gray-400 mb-2 leading-4">
                    i am a frontend developer with a particular interest in making things simple and automating daily tasks.i try to keep
                    with security and best practices and i'm always looking for new things to learn
                </p>
                <h2 className="text-left mt-2 text-lg text-white mb-1">Interests</h2>
                <p className="text-left md:text-base text-sm text-gray-400 leading-4">
                    Lead guitar expert. lover of beautiful women, entrepreneur, lover of memes,, travel geek.
                </p>
                
            </div>

        </div>
    )
}

export default Main