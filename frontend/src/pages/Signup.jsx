import { Card } from "../components/Card";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Warning } from "../components/Warning";
import { SubHeading } from "../components/SubHeading";



export function Signup(){
    return <div>
        <body>
            <div className="h-screen bg-white flex justify-center items-center">
                <Card>
                    <div className="flex flex-col">
                        <Heading heading="Sign Up"/>
                        <SubHeading subHeading="Enter your information to create an account"/>
                        <InputBox title="First Name" inside="LeBron"/>
                        <InputBox title="Last Name" inside="James "/>
                        <InputBox title="Email" inside="kingjames@gmail.com"/>
                        <InputBox title="Password" inside=""/>
                        <Button text="Sign Up" para="Already have an account?" to="/signin" buttonText="Sign in"/>
                        <Warning para="Already have an account?" to="/signin" buttonText="Sign in"/>
                    </div>
                </Card> 
            </div>
        </body>
    </div>
}