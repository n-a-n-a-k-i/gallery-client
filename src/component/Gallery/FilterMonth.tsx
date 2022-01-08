import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {Grid, ToggleButton, Typography} from "@mui/material";
import {MONTH_NAME} from "../../utility/format";

const FilterMonth: FC = () => {

    const {totalMonths} = useTypedSelector(state => state.photo)

    return (
        <Grid
            container
            spacing={1}
        >
            {totalMonths.map(totalMonth => (
                <Grid
                    key={totalMonth.value}
                    item
                    xs={4}
                    sm={3}
                    md={2}
                >
                    <ToggleButton
                        value={totalMonth.value}
                        fullWidth
                        sx={{
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            width="100%"
                            overflow="hidden"
                        >
                            {MONTH_NAME[totalMonth.value - 1]}
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
    )

}

export default FilterMonth
