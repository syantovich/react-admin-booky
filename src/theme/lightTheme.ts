import {deepmerge} from "@mui/utils";
import common from "./common";

const theme = deepmerge(common, {
    palette: {
        mode: 'light',
        primary: { main: '#9055fd' },
        secondary: { main: '#A270FF' },
        background: { default: '#f0f1f6' },
        text: {
            primary: '#544f5a',
            secondary: '#89868D',
        },
    },
});

export default theme;