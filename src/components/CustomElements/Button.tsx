import React from 'react';
import {ButtonProps} from "@chakra-ui/react";

const Button : React.FC<ButtonProps> = ({onClick,children,className}) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;