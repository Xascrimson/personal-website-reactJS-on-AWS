import { AppBar as A, Card as C, Typography } from '@material-ui/core';
import styled from 'styled-components';


export const Title = styled(Typography)`
font-size: 14px;
`;

export const Card = styled(C)`
max-width:300px;
min-width: 200px;
`;

export const AppBar = styled(A)`
color: white;
`;

export const WritingArea = styled(C)`
    max-width:100%;
    display: flex;
    height: 50%;

`;