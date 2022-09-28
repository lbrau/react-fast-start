import React, { memo, useState, useEffect } from "react";
import { InfoButton } from "../Elements/StyledButton";

const Header = memo(({ hello }) => {
    const tmp = 'world';

    const [state, setState] = useState({
        theme: 'light',
        hello: hello ?? tmp
    });

    useEffect((tmp) => {
        tmp = 'coco';
        console.log('Header use effect');
    })

    const display = ({ hello }) => {
        console.log(hello);
        return 'block';
    }

    return (
        <>
            <h2>Hello header</h2>
            <p>Description du header</p>
            <InfoButton hide={display(state.hello)} color="green">Hello header</InfoButton>
        </>
    );
});

export default Header;