
export function Users({picture, userId}){
    return <div className="flex justify-between mt-7 mx-10 ">
        <div className="">
            <h1 className="font-medium "><button className="border border-gray-300 rounded-full p-2 pl-4 pr-4 mr-5 font-small bg-gray-300">{picture}</button>{userId}</h1>
        </div>
        <div className="">
            <button className="border border-black p-3 rounded-md font-bold bg-black text-white">Send Money</button>
        </div>
    </div>
}