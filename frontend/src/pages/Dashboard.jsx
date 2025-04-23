import { Balance } from "../components/Balance";
import { Navbar } from "../components/Navbar";
import { SearchBox } from "../components/Searchbar";
import { Users } from "../components/Users";



export function Dashoard(){
    return <div>
        <Navbar></Navbar>
        <Balance balance="5000"/>
        <SearchBox />
        <Users picture="V" userId="User 1"/>
        <Users picture="V" userId="User 1"/>    
    </div>
}