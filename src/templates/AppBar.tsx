import {AppBar, AppBarProps} from "react-admin";
import {Box} from '@mui/material';

import Logo from '../assets/logo.svg';

const BookyAppBar = (props: AppBarProps) => {
    return <AppBar color='secondary' {...props}>
        <Box flex="1"/>
        <Logo/>
        <Box flex="1"/>
    </AppBar>
}

export default BookyAppBar