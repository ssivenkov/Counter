import React, { ChangeEvent } from "react";
import s from "./SetValueRangeFields.module.css";
import fieldStyle from "../InputNumber/InputNumber.module.css"
import { InputNumber } from "../InputNumber/InputNumber";

type SetValueRangeFieldsType = {
    maxValue: number
    startValue: number
    checkMaxValue: (eventNumber: number) => void
    checkStartValue: (eventNumber: number) => void
    maxValueInputRed: boolean
    startValueInputRed: boolean
}

export function SetValueRangeFields(props: SetValueRangeFieldsType) {
    const checkMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        const eventNumber = Number(event.currentTarget.value)
        props.checkMaxValue(eventNumber)
    }
    const checkStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        const eventNumber = Number(event.currentTarget.value)
        props.checkStartValue(eventNumber)
    }

    return (
        <div className={s.fieldsContainer}>
            <div className={s.field}>
                <div className={s.text}>max value:</div>
                <InputNumber type={"number"}
                             value={props.maxValue}
                             onChange={checkMaxValue}
                             className={props.maxValueInputRed ? fieldStyle.inputRed : ""}
                />
            </div>
            <div className={s.field}>
                <div className={s.text}>start value:</div>
                <InputNumber type={"number"}
                             value={props.startValue}
                             onChange={checkStartValue}
                             className={props.startValueInputRed ? fieldStyle.inputRed : ""}
                />
            </div>
        </div>
    );
}