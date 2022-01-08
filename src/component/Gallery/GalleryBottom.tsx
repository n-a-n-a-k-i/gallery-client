import React, {FC} from 'react';
import ToolbarBottom from "../common/ToolbarBottom";
import SettingsOpen from "./SettingsOpen";
import FilterOpen from "./FilterOpen";

const GalleryBottom: FC = () => {

    return (
        <ToolbarBottom>
            <SettingsOpen/>
            <FilterOpen/>
        </ToolbarBottom>
    )

}

export default GalleryBottom
