import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from './Action/index'

export const Search = () => {
    const dispatch = useDispatch()
    const fruits = useSelector((state) => state.MainReducer.list)
    const newData = useSelector((state) => state.MainReducer.filterData)
    const [data, setData] = useState()

    const filterData = (e) => {
        dispatch(searchFilter(e.target.value))
    }

    return (
        <>
            <h1>Search</h1>
            <input type="text" value={data} onChange={filterData} />
            {
                newData.length === 0 ?
                    fruits.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <h2> {item}</h2>
                            </React.Fragment>
                        )
                    }) :
                    newData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <h2> {item}</h2>
                            </React.Fragment>
                        )
                    })

            }
        </>
    )
}
