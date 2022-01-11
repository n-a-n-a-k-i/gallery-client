import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {FormControl, FormLabel, Grid, ToggleButton, Typography} from "@mui/material";

interface FilterDayProps {
    days: number[]
    setDays: (day: number) => void
}

const FilterDay: FC<FilterDayProps> = ({days, setDays}) => {

    const {totalDays} = useTypedSelector(state => state.photo)

    return (
        <FormControl
            fullWidth
        >
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
                        xs={3}
                        sm={2}
                        md={1}
                    >
                        <ToggleButton
                            value={totalDay.value}
                            fullWidth
                            sx={{
                                flexDirection: 'column'
                            }}
                            selected={days.includes(totalDay.value)}
                            onChange={() => setDays(totalDay.value)}
                        >
                            <Typography>
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
