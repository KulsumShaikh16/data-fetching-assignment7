


interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
  }


    const Server = async () => {
      const response = await fetch("https://simple-books-api.glitch.me/books/");
      const books = await response.json();
     
   

  return (
    <div>
      
     
      <div className="flex justify-center  tracking-[2px]  font-extrabold text-[18px] sm:text-[35px] bg-gray-100">
          <h1>DATA FETCHED SUCSSESFULLY</h1>
        </div>
     
      
      <div className='text-center flex flex-col lg:flex-row gap-5 w-60 mx-auto lg:w-full lg:grid lg:grid-cols-3 lg:mt-20 ' >
        {books.map((books:Books ) => (
          <div key={books.id} className='border border-gray-200 shadow-md rounded my-6 px-3 lg:w-80 lg:mx-auto  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
'>
            <p className='text-[28px] font-bold text-black text-center pt-4'>{books.name}</p>
            <p className='text-[25px] font-normal text-gray-600 text-center'>{books.type}</p>
            <p className='text-xl font-normal text-rose-400 text-center '>{books.available ? "Available" : "Not Available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Server;





