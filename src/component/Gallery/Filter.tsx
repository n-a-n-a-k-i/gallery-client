import React, {FC, useEffect, useState} from 'react';
import {useAction} from "../../hook/use-action";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider} from "@mui/material";
import FilterDateColumn from "./FilterDateColumn";
import FilterOrderDirection from "./FilterOrderDirection";
import FilterMonth from "./FilterMonth";
import FilterYear from "./FilterYear";
import FilterDay from "./FilterDay";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {DateColumn, OrderDirection} from "../../store/photo/photo.type";

interface SearchProps {
    isOpen: boolean
    onClose: () => void
}

const Filter: FC<SearchProps> = ({isOpen, onClose}) => {

    const {years, months, days, orderDirection, dateColumn, limit} = useTypedSelector(state => state.photo)
    const {photoFindTotal, photoFindTotalDate, photoSetParams} = useAction()
    const [selectedYears, setSelectedYears] = useState<number[]>(years)
    const [selectedMonths, setSelectedMonths] = useState<number[]>(months)
    const [selectedDays, setSelectedDays] = useState<number[]>(days)
    const [selectedOrderDirection, setSelectedOrderDirection] = useState<OrderDirection>(orderDirection)
    const [selectedDateColumn, setSelectedDateColumn] = useState<DateColumn>(dateColumn)

    useEffect(() => {

        (async () => {

            await photoFindTotalDate(dateColumn)

        })()

    }, [dateColumn])

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="md"
            sx={{
                '& .MuiDialog-paper': {
                    width: '100%'
                }
            }}
        >
            <DialogTitle>
                Фильтрация
            </DialogTitle>
            <DialogContent
                dividers
            >
                <FilterYear
                    years={selectedYears}
                    setYears={(year: number) => setSelectedYears(selectedYears.includes(year)
                        ? selectedYears.filter(value => value !== year)
                        : [...selectedYears, year]
                    )}
                />
                <Divider
                    sx={{
                        my: 4
                    }}
                />
                <FilterMonth
                    months={selectedMonths}
                    setMonths={(month: number) => setSelectedMonths(selectedMonths.includes(month)
                        ? selectedMonths.filter(value => value !== month)
                        : [...selectedMonths, month]
                    )}
                />
                <Divider
                    sx={{
                        my: 4
                    }}
                />
                <FilterDay
                    days={selectedDays}
                    setDays={(day: number) => setSelectedDays(selectedDays.includes(day)
                        ? selectedDays.filter(value => value !== day)
                        : [...selectedDays, day]
                    )}
                />
                <Divider
                    sx={{
                        my: 4
                    }}
                />
                <FilterOrderDirection
                    orderDirection={selectedOrderDirection}
                    setOrderDirection={(value: OrderDirection) => setSelectedOrderDirection(
                        value
                    )}
                />
                <Divider
                    sx={{
                        my: 4
                    }}
                />
                <FilterDateColumn
                    dateColumn={selectedDateColumn}
                    setDateColumn={(value: DateColumn) => setSelectedDateColumn(
                        value
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                >
                    Назад
                </Button>
                <Button
                    autoFocus
                    onClick={async () => {

                        const years = selectedYears
                        const months = selectedMonths
                        const days = selectedDays
                        const dateColumn = selectedDateColumn
                        const orderDirection = selectedOrderDirection

                        photoSetParams({years, months, days, dateColumn, orderDirection, limit})
                        await photoFindTotal({years, months, days, dateColumn})
                        onClose()

                    }}
                >
                    Применить
                </Button>
            </DialogActions>
        </Dialog>
    )

}

export default Filter
