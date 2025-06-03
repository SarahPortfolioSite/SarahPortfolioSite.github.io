import { Stack } from "@mui/material"
import { useState } from "react";
import useIsMobile from "../common/useIsMobile";

const DesktopVersion = ({selectedTab, setSelectedTab}) => (
    <Stack
        className="bg-slate"
        direction={"row"}
        justifyContent={"space-between"}
        sx={{width: "100%", margin: "0px", paddingLeft: "50px"}}
    >
        <h1 className="text-white">
            {"Auntie's - Official Website"}
        </h1>
    </Stack>
);

const MobileVersion = ({selectedTab, setSelectedTab}) => (
    <Stack
        className="bg-slate"
        sx={{width: "100%", margin: "0px", paddingLeft: "50px"}}
    >
        <h3 className="text-white">
            {"Auntie's - Official Website"}
        </h3>
    </Stack>
);

const NavBar = () => {
    const isMobile = useIsMobile();
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        isMobile ?
        <MobileVersion 
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
        /> :
        <DesktopVersion
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
        /> 
    );
};

export default NavBar;