import indigo from '@mui/material/colors/indigo';
import pink from '@mui/material/colors/pink';
import red from '@mui/material/colors/red';
import {deepmerge} from '@mui/utils';
import common from "./common";

const theme = deepmerge(common, {
    palette: {
        mode: 'dark',
        primary: indigo,
        secondary: pink,
        error: red,
        background: {
            default: '#313131',
        },
    },
});

export default theme;