import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';



const Home=()=>{
    return(
        <>
        {/* img section */}
    <div className="md:flex md:shrink-0">
  <img 
    className="w-full h-auto md:h-[300px] md:w-[8000px] lg:h-[400px] lg:w-[10000px] object-cover" 
    alt="Remy Sharp" 
    src="/src/assets/8.jpg" 
  />
</div>


<div className="flex flex-col lg:flex-row m-4 lg:m-16 gap-4 lg:gap-8 items-center justify-center">
    <div className="bg-zinc-100 p-6 rounded-3xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minima amet placeat necessitatibus optio, ex quis perspiciatis exercitationem excepturi numquam odio?
            Accusamus dolores harum voluptatibus saepe expedita laborum sit, tempora nostrum?</p>
        <div className="flex justify-end mt-8">
            <a className="bg-black rounded-lg p-2 text-white text-xs" href="#">LEARN MORE</a>
        </div>
    </div>

    <div className="bg-zinc-100 p-6 rounded-3xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima amet placeat necessitatibus optio, ex quis perspiciatis exercitationem excepturi numquam odio?
            Accusamus dolores harum voluptatibus saepe expedita laborum sit, tempora nostrum?</p>
        <div className="flex justify-end mt-8">
            <a className="bg-black rounded-lg p-2 text-white text-xs" href="#">LEARN MORE</a>
        </div>
    </div>
</div>
{/* services section */}

<div className="flex flex-wrap gap-4 p-12 bg-zinc-100"> 

  <div className="flex-1 w-8 min-w-[250px] bg-white p-4 rounded-2xl shadow m-4"> 
    <h1 className="text-xl font-bold m-2"> <i class="fas fa-certificate"></i> QUALITY FIRST</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus odio ratione recusandae ducimus,
       possimus fugiat atque eligendi optio reprehenderit dolorum ad iusto dolorem 
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Natus odio ratione recusandae ducimus, possimus fugiat atque eligendi optio 
      reprehenderit dolorum ad iusto dolorem tempore sapiente reiciendis quibusdam ex magni? Illum
       tempore sapiente reiciendis quibusdam ex magni? Illum?
       </p>
  </div>

  <div className="flex-1 min-w-[250px] bg-white p-4 rounded-2xl shadow m-4"> 
    <h1 className="text-xl font-bold m-2"> <i class="fas fa-hard-hat"></i> SAFETY</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Natus odio ratione recusandae ducimus, possimus fugiat atque eligendi optio 
      reprehenderit dolorum ad iusto dolorem tempore sapiente reiciendis quibusdam ex magni? Illum?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Natus odio ratione recusandae ducimus, possimus fugiat atque eligendi optio 
      reprehenderit dolorum ad iusto dolorem tempore sapiente reiciendis quibusdam ex magni? Illum</p>
  </div>

  <div className="flex-1 min-w-[250px] bg-white p-4 rounded-2xl shadow m-4"> 
    <h1 className="text-xl font-bold m-2"><i class="fas fa-check-circle "></i>  CERTIFIED</h1>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Natus odio ratione recusandae ducimus, possimus fugiat atque eligendi optio reprehenderit
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Natus odio ratione recusandae ducimus, possimus fugiat atque eligendi optio 
      reprehenderit dolorum ad iusto dolorem tempore sapiente reiciendis quibusdam ex magni? Illum
      dolorum ad iusto dolorem tempore sapiente reiciendis quibusdam ex magni? Illum?</p>
  </div>

</div>


{/* <h1 className="m-8 font-bold text-2xl text-center md:text-left">WHERE WE WORK</h1>
<div className="flex flex-col md:flex-row p-6 md:p-12 bg-zinc-100 m-10 rounded-3xl  md:gap-12">  

    <div className="flex-1 min-w-[250px] md:max-w-[400px] p-4 flex justify-center">
        <p className="text-center md:text-left relative left-[100px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque corporis iste nobis? Deserunt odio doloremque fugiat iure sint quis qui quasi delectus porro tempore, ullam cupiditate accusantium itaque alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque corporis iste nobis? Deserunt odio doloremque fugiat iure sint quis qui quasi delectus porro tempore, ullam cupiditate accusantium itaque alias.
        </p>
    </div> 

    <div className="flex-1 min-w-[250px] md:max-w-[400px] p-4  flex justify-center items-center">
        <img src="/src/assets/map.jpg" alt="Map" className="w-full h-auto relative left-[400px] rounded-lg shadow-md" />
    </div>

</div> */}

<h1 className="m-4 font-bold text-2xl text-center md:text-left">WHERE WE WORK</h1>
<div className="flex flex-col md:flex-row p-6 md:p-12 bg-zinc-100 m-4 md:m-10 rounded-3xl md:gap-12">  

    <div className="flex-1 min-w-[250px] md:max-w-[400px] p-4 flex justify-center md:justify-start">
        <p className="text-center text-2xl md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Qui doloremque corporis iste nobis? Deserunt odio dolyu
            oremque fugiat iure sint quis qui quasi delectus porro 
            tempore, ullam cupiditate accusantium itaque alias. Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque corporis iste nobis? Deserunt odio doloremque fugiat iure sint quis qui quasi delectus porro tempore, ullam cupiditate accusantium itaque alias.
        </p>
    </div> 

    <div className="flex-1 min-w-[250px] md:max-w-[400px] p-4 flex justify-center items-center">
        <img src="/src/assets/map.jpg" alt="Map" className="w-full h-auto rounded-lg shadow-md" />
    </div>

</div>



<footer className="bg-zinc-100 flex flex-col lg:flex-row items-center lg:justify-between p-5 lg:p-9">
    <p className="flex-1 font-bold text-xl lg:text-3xl mb-5 lg:mb-0 p-2 lg:p-5 text-center lg:text-left">
        LOOKING FOR A QUALITY PAVING AND <br /> CONCRETE EXPERT FOR YOUR NEXT PROJECT?
    </p>
    <p className="m-5 lg:m-10 text-center lg:text-left">
        <button className=" text-black  font-bold py-2 px-4 rounded hover:bg-blue-600 transition-all">
            Request an Estimate
        </button>
    </p>
   
</footer>
 
<div className="text-xl m-5 flex gap-4 justify-center lg:justify-start">
    <i className="fab fa-facebook bg-black text-white p-2 rounded-full"></i>
    <i className="fab fa-youtube bg-black text-white p-2 rounded-full"></i>
    <i className="fab fa-linkedin bg-black text-white p-2 rounded-full"></i>
    <i className="fab fa-twitter bg-black text-white p-2 rounded-full"></i>
</div>

        </>
    )
}

 
export default Home;