import React, {FC, useState} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {CircularProgress, Fab} from "@mui/material";
import FilterIcon from '@mui/icons-material/Filter';
import Filter from "./Filter";

const FilterOpen: FC = () => {

    const {isFindTotalDate} = useTypedSelector(state => state.photo)
    const {users, isFind} = useTypedSelector(state => state.user)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Fab
                disabled={isFindTotalDate || !users.length || isFind}
                onClick={() => setIsOpen(true)}
            >
                {isFindTotalDate || !users.length || isFind
                    ? <CircularProgress/>
                    : <FilterIcon/>
                }
            </Fab>
            <Filter
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )

}

export default FilterOpen
