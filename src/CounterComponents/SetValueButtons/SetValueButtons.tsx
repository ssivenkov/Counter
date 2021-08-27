import React from 'react';
import s from '../Button/Button.module.css';
import {Button} from "../Button/Button";
import {ButtonsContainer} from "../ButtonsContainer/ButtonsContainer";

type CounterButtonsType = {
    inc: () => void
    reset: () => void
    incDisable: boolean
    resetDisable: boolean
}

export function SetValueButtons(props: CounterButtonsType) {
    return (
        <ButtonsContainer>
            <Button onClick={ () => {props.inc()} }
                    value={"inc"}
                    disabled={props.incDisable}
            />
            <Button onClick={ () => {props.reset()} }
                    value={"reset"}
                    disabled={props.resetDisable}/>
        </ButtonsContainer>
    );
}