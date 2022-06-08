import React from 'react'
import CardStar from './CardStar'

const PrintCards = ({arreglo}) => {
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