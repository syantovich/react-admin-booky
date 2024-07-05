import {TextField, TextFieldProps} from "react-admin";

const MyUrlField = (props: TextFieldProps) => {
    return <TextField emptyText='No value' {...props}/>
};

export default MyUrlField;