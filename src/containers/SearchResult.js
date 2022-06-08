import React, { useEffect, useState } from 'react'
import GetData from '../helpers/GetData';
import PrintCards from '../components/PrintCards';
import { AutoComplete } from 'antd';


const SearchResult = () => {
    const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json';
    const [starWar, setStarWar] = useState([]);
    const [options, setOption] = useState([])

    useEffect(() => {
        cargar()
    }, [])


    const cargar = async () => {
        const resp = await GetData(url)
        setStarWar(resp)

        const newOptions = resp.map((item) => {
            const obj = {
                label: item.name,
                value: item.name
            }

            return obj
        })

        setOption(newOptions)
    }


    const onSelect = (value) => {
        console.log(value)
        const newStarWar = starWar.filter((item) => {
            const resultFilter = item.name.toLowerCase().includes(value.toLowerCase())
            return resultFilter
        })
        setStarWar(newStarWar)
    }

    const onClear = async () => {
        await cargar()
    }

    const onChange = (value) => {
        if (value === '' || value.trim() === '') {
            cargar()
        }
    }



    return (
        <div>
            <AutoComplete
                onClear={onClear}
                allowClear
                filterOption
                options={options}
                style={{
                    width: 200,
                }}
                onChange={onChange}
                onSelect={onSelect}
                placeholder="Search"
            />
            <PrintCards arreglo={starWar} />
        </div>
    )
}

export default SearchResult