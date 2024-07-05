import {defaultTheme} from 'react-admin';

const theme = {
    ...defaultTheme,
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    components: {
        ...defaultTheme.components,
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    minWidth: 150,
                    maxWidth: 600
                },
            },
            defaultProps: {
                variant: 'outlined' as const,
            },
        },
        MuiInputBase: {},
        MuiFormControl: {
            defaultProps: {
                variant: 'outlined' as const,
            },
        },
    },
};

export default theme;