import React from "react";
import s from "./ButtonsContainer.module.css";

export const ButtonsContainer: React.FC = ({children}) => {
    return (
        <div className={s.ButtonsContainer}>
            <div className={s.Buttons}>
                {children}
            </div>
        </div>
    );
}