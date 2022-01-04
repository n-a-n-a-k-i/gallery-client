import React, {FC} from 'react';
import {Avatar, Box, Container, IconButton, Typography} from "@mui/material";
import SignInForm from "./SignInForm";

const SignIn: FC = () => {

    return (
        <Container
            maxWidth="xs"
            sx={{
                pt: 2
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <IconButton
                    onClick={() => window.location.reload()}
                    sx={{
                        p: 0
                    }}
                >
                    <Avatar
                        src="logo40.png"
                        alt="logo40.png"
                    />
                </IconButton>
                <Typography
                    variant="h6"
                    my={2}
                >
                    Галерея
                </Typography>
                <SignInForm/>
            </Box>
        </Container>
    )

}

export default SignIn
