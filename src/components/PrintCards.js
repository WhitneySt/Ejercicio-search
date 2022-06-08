import React from 'react'
import CardStar from './CardStar'

const PrintCards = ({arreglo}) => {
    // const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json';
    // const [starWar, setStarWar] = useState([]);

    // useEffect(() => {
    //     cargar()
    // }, [])

    // const cargar = async () => {
    //     const resp = await GetData(url)
    //     setStarWar(resp)
    // }


    return (
        <div style={{ margin: '4em', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {arreglo &&
                arreglo.map(item => (
                    <CardStar key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default PrintCards