

export function Button(props){
    return <div>
      <button className=' cursor-pointer my-2 mt-5 py-2 px-5 bg-black font-bold text-white border-black  border rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-300'>
        {props.text}
      </button>
    </div>
}