import React, {ChangeEvent} from 'react';
import s from './InputNumber.module.css'

type InputNumberType = {
    type: string
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    className?: string
    disabled?: boolean
}

export function InputNumber(props: InputNumberType) {
    return (
        <input type={props.type}
               value={props.value}
               onChange={props.onChange}
               className={`${props.className} ${s.input}`}
               disabled={props.disabled}
        />
    )
}