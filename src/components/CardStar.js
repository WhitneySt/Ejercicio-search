import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

const CardStar = ({name, image}) => {
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt={name} src={image}/>}
            >
                <Meta title={name}/>
            </Card>
        </div>
    )
}

export default CardStar