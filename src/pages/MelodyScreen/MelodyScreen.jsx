import React from "react";
import MelodyPlayListTitle from "./MelodyPlayListTitle";
import MelodyImageDisplayer from "./MelodyImageDisplayer";
import MelodyPlayerMenu from "./MelodyPlayerMenu/MelodyPlayerMenu";

const MelodyScreen = () => {

    return (
        <>
            <div className="MelodyScreen ScreenContent">
                <MelodyPlayListTitle playListName={'Летний день на даче'} />
                <MelodyImageDisplayer imagePath={"../../assets/images/melody-image.png"} />
                <MelodyPlayerMenu />
            </div>

            {/* <MelodyFooter /> */}
        </>
    )
}
export default MelodyScreen;