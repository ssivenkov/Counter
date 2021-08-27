import React from 'react';
import s from './SetValueRangeButton.module.css';
import {Button} from "../Button/Button";
import {ButtonsContainer} from "../ButtonsContainer/ButtonsContainer";

type SetValuesRangeButtonPropsType = {
    setButtonDisable: boolean
    setValuesLocalStorage: () => void
}

export function SetValuesRangeButton(props: SetValuesRangeButtonPropsType) {

    return (
        <ButtonsContainer>
            <Button value={"set"}
                    onClick={props.setValuesLocalStorage}
                    disabled={props.setButtonDisable}
            />
        </ButtonsContainer>
    );
}