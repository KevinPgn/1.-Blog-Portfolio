export const AdminPostSection = () => {
  return <section className="flex flex-col lg:flex-row items-start gap-7 mb-20 mt-10">
   
   <div className="w-full lg:w-[50%] relative flex flex-col gap-4 shadow-[5px_10px_0px_10px_#000000] hover:shadow-[5px_10px_15px_10px_#1a1a1d] cursor-pointer border-4 border-black p-5 rounded-lg duration-300">        
    <div className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-[#1a1a1d] rounded-lg"></div>
        <h2 className="text-xl sm:text-2xl font-bold">Placeholder Title</h2>
        <p className="text-sm sm:text-base text-gray-500 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos    
        </p>       
   </div>
   
   <div className="w-full lg:w-[50%]">

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 py-5 cursor-pointer hover:bg-[#efeff1] p-5 rounded-md duration-75">
            <div className="w-full sm:w-[250px] h-[150px] bg-[#1a1a1d] rounded-md"></div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-sm sm:text-base">October 25, 2024</span>
                <h2 className="text-lg sm:text-xl font-bold max-w-full sm:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iste!</h2>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row border-t border-b border-black gap-4 sm:gap-7 py-5 cursor-pointer hover:bg-[#efeff1] p-5 duration-75">
            <div className="w-full sm:w-[250px] h-[150px] bg-[#1a1a1d] rounded-md"></div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-sm sm:text-base">October 25, 2024</span>
                <h2 className="text-lg sm:text-xl font-bold max-w-full sm:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iste!</h2>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 py-5 cursor-pointer hover:bg-[#efeff1] p-5 duration-75">
            <div className="w-full sm:w-[250px] h-[150px] bg-[#1a1a1d] rounded-md"></div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-sm sm:text-base">October 25, 2024</span>
                <h2 className="text-lg sm:text-xl font-bold max-w-full sm:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iste!</h2>
            </div>
        </div>
   </div>
  </section>
}