import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {FormControl, FormLabel, Grid, ToggleButton, Typography} from "@mui/material";

const FilterDay: FC = () => {

    const {totalDays} = useTypedSelector(state => state.photo)

    return (
        <FormControl>
            <FormLabel>
                День
            </FormLabel>
            <Grid
                container
                spacing={1}
                mt={1}
            >
                {totalDays.map(totalDay => (
                    <Grid
                        item
                        key={totalDay.value}
                        xs={4}
                        sm={3}
                        md={2}
                    >
                        <ToggleButton
                            value={totalDay.value}
                            fullWidth
                            sx={{
                                flexDirection: 'column'
                            }}
                        >
                            <Typography
                                width="100%"
                                overflow="hidden"
                            >
                                {totalDay.value}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="secondary"
                            >
                                {totalDay.total}
                            </Typography>
                        </ToggleButton>
                    </Grid>
                ))}
            </Grid>
        </FormControl>
    )

}

export default FilterDay
