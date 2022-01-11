import React, {ChangeEvent, FC} from 'react';
import {Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from "@mui/material";
import {DateColumn} from "../../store/photo/photo.type";

interface FilterDateColumnProps {
    dateColumn: DateColumn
    setDateColumn: (dateColumn: DateColumn) => void
}

const FilterDateColumn: FC<FilterDateColumnProps> = ({dateColumn, setDateColumn}) => {

    return (
        <FormControl
            fullWidth
        >
            <FormLabel>
                Параметр даты
            </FormLabel>
            <RadioGroup
                name="date-column"
                value={dateColumn}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setDateColumn(
                    event.target.value as DateColumn
                )}
            >
                <FormControlLabel
                    label="По умолчанию"
                    value={DateColumn.date}
                    control={<Radio/>}
                />
                <FormHelperText>
                    Запись в базе данных
                </FormHelperText>
                <Box
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                >
                    <FormControlLabel
                        label="Создана"
                        name="date-column"
                        value={DateColumn.createdAt}
                        control={<Radio/>}
                    />
                    <FormControlLabel
                        label="Изменена"
                        name="date-column"
                        value={DateColumn.updatedAt}
                        control={<Radio/>}
                    />
                </Box>
                <FormHelperText>
                    Файл
                </FormHelperText>
                <Box
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                >
                    <FormControlLabel
                        label="Открыт"
                        name="date-column"
                        value={DateColumn.atime}
                        control={<Radio/>}
                    />
                    <FormControlLabel
                        label="Создан"
                        name="date-column"
                        value={DateColumn.birthtime}
                        control={<Radio/>}
                    />
                    <FormControlLabel
                        label="Изменено содержимое"
                        name="date-column"
                        value={DateColumn.mtime}
                        control={<Radio/>}
                    />
                    <FormControlLabel
                        label="Изменено описание"
                        name="date-column"
                        value={DateColumn.ctime}
                        control={<Radio/>}
                    />
                </Box>
            </RadioGroup>
        </FormControl>
    )

}

export default FilterDateColumn
