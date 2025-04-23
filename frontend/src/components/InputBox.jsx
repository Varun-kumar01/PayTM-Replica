export function InputBox(props){
    return <div className='self-start w-full block px-10 pb-5'>
      <span className='block font-medium text-lg text-left  pb-1'>{props.title}</span>
      <input className='w-full border rounded-sm   p-2' type="text" placeholder={props.inside} />
    </div>
}