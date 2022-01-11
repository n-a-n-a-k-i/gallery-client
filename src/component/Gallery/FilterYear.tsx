import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {FormControl, FormLabel, Grid, ToggleButton, Typography} from "@mui/material";

interface FilterYearProps {
    years: number[]
    setYears: (year: number) => void
}

const FilterYear: FC<FilterYearProps> = ({years, setYears}) => {

    const {totalYears} = useTypedSelector(state => state.photo)

    return (
        <FormControl
            fullWidth
        >
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
                        xs={3}
                        sm={2}
                        md={1}
                    >
                        <ToggleButton
                            value={totalYear.value}
                            fullWidth
                            sx={{
                                flexDirection: 'column'
                            }}
                            selected={years.includes(totalYear.value)}
                            onChange={() => setYears(totalYear.value)}
                        >
                            <Typography>
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
