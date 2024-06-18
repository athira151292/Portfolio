import styled from "styled-components";
import { Button } from '@mui/material';


export const StyledButton = styled(Button)`
    && {
        color: #442c25;
        border: 2px solid #442c25;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            background-color: #442c25;
            color: #f2eee6;
        }
    }
`