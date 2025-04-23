import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
import { Users } from "../components/Users";




export function Send(){
    return <div className="h-screen bg-white flex justify-center items-center">
            <Card>
                <div flex flex-col>
                    <div>
                        <h1 className="font-bold text-2xl">Send Money</h1>
                    </div>
                    <div className="mt-10 px-10">
                        <div className="flex items-center">
                            <div className="flex justify-center items-center w-12 h-12 bg-white  rounded-full">
                                <img
                                src={`https://api.dicebear.com/9.x/initials/svg?seed=I`}
                                className="h-[90%] w-[90%] rounded-full"
                                />
                            </div>
                            <div className="font-bold text-xl  ml-3">Iverson</div>
                        </div>
                        <div>
                            <input type="text" placeholder="Enter amount" className="border border-gray-300 mt-2 px-2 py-3 rounded-lg w-full"/>
                        </div>
                    </div>
                    <button className="border-2 w-[60%] border-green-300 bg-green-400 font-bold  p-1 mt-10 rounded-3xl text-xl text-white cursor-pointer hover:bg-white hover:text-black hover:border-black shadow-2xl ">Send</button>
                </div>
            </Card>
    </div>
}