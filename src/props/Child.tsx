import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
    <div>
        {color}
        <button onClick={onClick}>Me clica pf</button>;
    </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({ children, color, onClick }) => {
    // React.FC = React.FunctionComponent
    // ChildExample pode ter as propriedades adicionais como propTypes e contextTypes
    // ChildExample vai receber um props com o tipo ChildProps
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Me clica pf</button>;
        </div>
        )
}