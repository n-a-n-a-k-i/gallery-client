import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {FormControl, FormLabel, Grid, ToggleButton, Typography} from "@mui/material";
import {MONTH_NAME} from "../../utility/format";

interface FilterMonthProps {
    months: number[]
    setMonths: (month: number) => void
}

const FilterMonth: FC<FilterMonthProps> = ({months, setMonths}) => {

    const {totalMonths} = useTypedSelector(state => state.photo)

    return (
        <FormControl
            fullWidth
        >
            <FormLabel>
                Месяц
            </FormLabel>
            <Grid
                container
                spacing={1}
                mt={1}
            >
                {totalMonths.map(totalMonth => (
                    <Grid
                        item
                        key={totalMonth.value}
                        xs={3}
                        sm={2}
                        md={1}
                    >
                        <ToggleButton
                            value={totalMonth.value}
                            fullWidth
                            sx={{
                                flexDirection: 'column'
                            }}
                            selected={months.includes(totalMonth.value)}
                            onChange={() => setMonths(totalMonth.value)}
                        >
                            <Typography>
                                {MONTH_NAME[totalMonth.value - 1].slice(0, 3)}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="secondary"
                            >
                                {totalMonth.total}
                            </Typography>
                        </ToggleButton>
                    </Grid>
                ))}
            </Grid>
        </FormControl>
    )

}

export default FilterMonth
