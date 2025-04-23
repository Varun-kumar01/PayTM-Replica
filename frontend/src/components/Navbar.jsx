export function Navbar(){
    return <div className="w-full relative flex justify-between items-center shadow px-3  sm:px-4"> 
        <div className="font-bold text-xl sm:2xl ">
            PayTm App
        </div>
        <div className="flex justify-between items-center relative">
            <div>
                <h1 className="font-medium text-xl">Varun </h1>
            </div>
            <div className="rounded-full h-12 w-12 flex justify-center items-center bg-slate-300 ml-2 my-1">
                <img
                    src={`https://api.dicebear.com/9.x/initials/svg?seed=V`}
                    className="h-[90%] w-[90%] rounded-full"
                />
            </div>
        </div>
    </div>
}