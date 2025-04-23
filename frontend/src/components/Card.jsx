

export function Card({children}){
    return <div className='bg-white rounded-lg h-auto w-[80%] sm:w-[50%] lg:w-[30%] text-center p-3 border border-white drop-shadow-2xl'>
        <div>
            {children}
        </div>
    </div>
}   