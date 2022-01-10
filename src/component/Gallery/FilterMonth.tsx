import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {FormControl, FormLabel, Grid, ToggleButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import {MONTH_NAME} from "../../utility/format";

const FilterMonth: FC = () => {

    const {totalMonths} = useTypedSelector(state => state.photo)

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <FormControl>
            <FormLabel>
                Месяц
            </FormLabel>
            <Grid
                container
                spacing={1}
                mt={1}
            >
                {totalMonths.map(totalMonth => {

                    const month: string = MONTH_NAME[totalMonth.value - 1]

                    return (
                        <Grid
                            item
                            key={totalMonth.value}
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
                                    {isSmall ? month.slice(0, 3) : month}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="secondary"
                                >
                                    {totalMonth.total}
                                </Typography>
                            </ToggleButton>
                        </Grid>
                    )

                })}
            </Grid>
        </FormControl>
    )

}

export default FilterMonth
