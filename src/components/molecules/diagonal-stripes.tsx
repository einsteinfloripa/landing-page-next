import Image from "next/image";

const DiagonalStripes = () => {
    return (
      <>
        <div className="hidden absolute h-[82px] xl:flex items-center justify-center gap-16 top-[80%] left-0 w-full transform -rotate-6 text-center text-2xl text-gray-700 bg-white py-2 whitespace-nowrap">
          {[...Array(8)].map((_, index) => (
            <Image key={index} src='/pipefy.svg' alt="Logo da Pipefy" width={100} height={100}/>
          ))}
        </div>
        <div className="hidden h-[82px] absolute xl:flex items-center justify-center gap-16 top-[80%] left-0 w-full transform rotate-6 text-center text-2xl text-gray-700 bg-gray-300 py-2 whitespace-nowrap">
        {[...Array(8)].map((_, index) => (
            <Image key={index} src='/pipefy.svg' alt="Logo da Pipefy" width={100} height={100}/>
          ))}
        </div>
        <div className="hidden absolute h-[82px] lg:flex xl:hidden items-center justify-center gap-16 top-[90%] left-0 w-full transform text-center text-2xl text-gray-700 bg-gray-300 py-2 whitespace-nowrap">
            {[...Array(6)].map((_, index) => (
            <Image key={index} src='/pipefy.svg' alt="Logo da Pipefy" width={100} height={100}/>
          ))}
        </div>

        <div className="flex absolute h-[82px] lg:hidden items-center justify-center gap-16 top-[80%] left-0 w-full transform text-center text-2xl text-gray-700 bg-gray-300 py-2 whitespace-nowrap">
            {[...Array(2)].map((_, index) => (
            <Image key={index} src='/pipefy.svg' alt="Logo da Pipefy" width={100} height={100}/>
          ))}
        </div>
        
      </>
    );
  };
  
  export default DiagonalStripes;