import React, {FC} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {OrderDirection} from "../../store/photo/photo.type";

const FilterOrderDirection: FC = () => {

    return (
        <FormControl>
            <FormLabel>
                Порядок сортировки
            </FormLabel>
            <RadioGroup
                row
                name="order-direction"
                defaultValue={OrderDirection.DESC}

            >
                <FormControlLabel
                    label="По возрастанию"
                    value={OrderDirection.ASC}
                    control={<Radio />}
                />
                <FormControlLabel
                    label="По убыванию"
                    value={OrderDirection.DESC}
                    control={<Radio />}
                />
            </RadioGroup>
        </FormControl>
    )

}

export default FilterOrderDirection
