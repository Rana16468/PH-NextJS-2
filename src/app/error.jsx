"use client"

const error = ({error,reset}) => {

  
    return (
        <>
            <h1 className='text-xl text-red-500'>Some thing went Wrong</h1>
            <h1>{error?.message}</h1>
            <button className="btn btn-outline btn-primary btn-sm" onClick={()=>reset()}>Try Again</button>
          
        </>
    );
};

export default error;