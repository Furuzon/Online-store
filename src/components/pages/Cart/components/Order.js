import React from 'react'
import Delivery from './Delivery'
import Total from './Total'
import Cost from './Cost'
import Button from './Button'

export default function Order() {
    return (
        <div className="row">
            <Delivery/>
            <Total/>
            <Cost/>
            <Button/>
        </div>
    )
}
