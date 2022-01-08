import React, {FC, useEffect} from 'react';
import {useAction} from "../../hook/use-action";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider} from "@mui/material";
import FilterDateColumn from "./FilterDateColumn";
import FilterOrderDirection from "./FilterOrderDirection";
import FilterMonth from "./FilterMonth";
import FilterYear from "./FilterYear";
import FilterDay from "./FilterDay";
import {useTypedSelector} from "../../hook/use-typed-selector";

interface SearchProps {
    isOpen: boolean
    onClose: () => void
}

const Filter: FC<SearchProps> = ({isOpen, onClose}) => {

    const {dateColumn} = useTypedSelector(state => state.photo)
    const {photoFindTotalDate} = useAction()

    useEffect(() => {

        (async () => {

            await photoFindTotalDate(dateColumn)

        })()

    }, [])

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
                <FilterYear/>
                <Divider
                    sx={{
                        mt: 2,
                        mb: 4
                    }}
                />
                <FilterMonth/>
                <Divider
                    sx={{
                        mt: 2,
                        mb: 4
                    }}
                />
                <FilterDay/>
                <Divider
                    sx={{
                        mt: 2,
                        mb: 4
                    }}
                />
                <FilterOrderDirection/>
                <Divider
                    sx={{
                        mt: 2,
                        mb: 4
                    }}
                />
                <FilterDateColumn/>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                >
                    Назад
                </Button>
                <Button
                    autoFocus
                    onClick={onClose}
                >
                    Применить
                </Button>
            </DialogActions>
        </Dialog>
    )

}

export default Filter
