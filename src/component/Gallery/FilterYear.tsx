import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {FormControl, FormLabel, Grid, ToggleButton, Typography} from "@mui/material";

const FilterYear: FC = () => {

    const {totalYears} = useTypedSelector(state => state.photo)

    return (
        <FormControl>
            <FormLabel>
                Год
            </FormLabel>
            <Grid
                container
                spacing={1}
                mt={1}
            >
                {totalYears.map(totalYear => (
                    <Grid
                        item
                        key={totalYear.value}
                        xs={4}
                        sm={3}
                        md={2}
                    >
                        <ToggleButton
                            value={totalYear.value}
                            fullWidth
                            sx={{
                                flexDirection: 'column'
                            }}
                        >
                            <Typography
                                width="100%"
                                overflow="hidden"
                            >
                                {totalYear.value}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="secondary"
                            >
                                {totalYear.total}
                            </Typography>
                        </ToggleButton>
                    </Grid>
                ))}
            </Grid>
        </FormControl>
    )

}

export default FilterYear
