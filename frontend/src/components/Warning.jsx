import { Link } from "react-router-dom";

export function Warning({para, to, buttonText}){
    return <div>
        <p className='text-gray-700 py-2'>{para} <Link className="underline" to={to}>
        {buttonText}
        </Link></p>
  </div>
}