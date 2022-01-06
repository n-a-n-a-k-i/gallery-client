import React, {FC} from 'react';
import {Stack} from "@mui/material";

const ToolbarBottom: FC = ({children}) => {

    return (
        <Stack
            mb={1}
            position="fixed"
            right={0}
            bottom={0}
            left={0}
            zIndex={theme => theme.zIndex.speedDial}
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{
                pointerEvents: 'none',
                '& button': {
                    pointerEvents: 'auto'
                }
            }}
        >
            {children}
        </Stack>
    )

}

export default ToolbarBottom
