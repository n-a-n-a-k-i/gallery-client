import React, {ChangeEvent, FC} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {OrderDirection} from "../../store/photo/photo.type";

interface FilterOrderDirectionProps {
    orderDirection: OrderDirection
    setOrderDirection: (orderDirection: OrderDirection) => void
}

const FilterOrderDirection: FC<FilterOrderDirectionProps> = ({orderDirection, setOrderDirection}) => {

    return (
        <FormControl
            fullWidth
        >
            <FormLabel>
                Порядок сортировки
            </FormLabel>
            <RadioGroup
                row
                name="order-direction"
                value={orderDirection}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setOrderDirection(
                    event.target.value as OrderDirection
                )}
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
