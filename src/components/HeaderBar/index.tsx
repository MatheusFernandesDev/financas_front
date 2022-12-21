import React from "react";
import Header from "../Header";
import SideBar from "../Sidebar";

interface HeaderBarProps {
    setBarraLateral?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ setBarraLateral }) => {
    return (
        <>
            <Header/>
            <SideBar setBarraLateral={setBarraLateral}/>
        </>
    )
}

export default HeaderBar;