import React from "react";
import MelodyDisplayer from "./MelodyDisplayer/MelodyDisplayer";
import MelodyControl from "../MelodyControl/MelodyControl";

const MelodyPlayerMenu = () => {
    return (
        <div className="melody-player-menu">
            <MelodyDisplayer />
            <MelodyControl />
        </div>
    )
}

export default MelodyPlayerMenu;