import { Card } from "../components/Card";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Warning } from "../components/Warning";
import { SubHeading } from "../components/SubHeading";



export function Signin(){
    return <div>
        <body>
            <div className="h-screen bg-white flex justify-center items-center">
                <Card>
                    <div>
                        <Heading heading="Sign In"  />
                        <SubHeading subHeading="Enter your credentials to access your account"/>
                        <InputBox title="Email" inside="kingjames@gmail.com"/>
                        <InputBox title="Password" inside=""/>
                        <Button text="Sign In"/>
                        <Warning para="Don't have an account?" to="/signup" buttonText="Sign Up"/>
                    </div>
                </Card> 
            </div>
        </body>
    </div>
}