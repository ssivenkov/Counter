import React from "react";
import s from "./Button.module.css";

type ButtonPropsType = {
    value: string
    className?: string
    onClick: () => void
    disabled?: boolean
}

export function Button(props: ButtonPropsType) {
    return (
        <button type="button"
                value={props.value}
                className={`${props.className} ${s.Button}`}
                onClick={props.onClick}
                disabled={props.disabled}
        >
            {props.value}
        </button>
    )
}