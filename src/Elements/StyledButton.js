import Styled, { css } from "styled-components";

const SuccessButton = Styled.button`
    background: green;
    color: white;
    height: 30px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
`

export const InfoButton = Styled.button`
    background: blue;
    color: white;
    height: 30px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    ${props => props.color && css`
      background: ${props.color};
    `}  
    
    ${props => "true" === props.hide && css`
      display: none;
    `}
`
export const DropButton = Styled.button`
    background: red;
    color: white;
    height: 30px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
`

export const NewDropButton = Styled(DropButton)`
    background: orange;
    color: white;
    height: 90px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
`

export const DropButtonProps = Styled(DropButton)( props => ({
    background: props.background,
    color: props.color
}))

export const WarnButton = Styled.button`
    background: orange;
    color: white;
    height: 30px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
`

export default SuccessButton;