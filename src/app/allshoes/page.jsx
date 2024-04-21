

const AllShoes = async() => {

    const res=await fetch('http://localhost:5000/shoes',{
        cache:"no-store"
    });
    const allShoes=await res.json();
    
    return (
        <>
             <div className="grid lg:grid-cols-4 gap-4 m-3">
        {allShoes?.map((v, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {v.title}
                <div className="badge badge-secondary">Price :{v?.price}</div>
              </h2>
              <p>{v?.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline btn-sm text-black btn btn-primary">
                  Buy Now
                </div>
                <div className="badge badge-outline text-black btn-sm btn btn-primary">
                  Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </>
    );
};

export default AllShoes;