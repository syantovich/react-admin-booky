import {
    BooleanInput,
    Edit,
    minLength,
    PasswordInput, ReferenceInput,
    required, SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";
import password from "../../utils/validations/password";

export const UserEdit = () => {
    return <Edit>
        <SimpleForm>
            <TextInput label='ID' name='id' disabled source='id'/>
            <TextInput label='Фамилия' name='last_name' source='last_name' validate={required()}/>
            <TextInput label='Имя' name='first_name' source='first_name' validate={required()}/>
            <TextInput label='Отчество' name='patronymic_name' source='patronymic_name'/>
            <TextInput label='Логин' name='login' source='login' validate={minLength(3)}/>
            <BooleanInput label="Пользователь заблокирован?" name='is_blocked' source='is_blocked'/>
            <ReferenceInput name='client_id' label="Client" reference="clients" source="client_id">
                <SelectInput source="name"/>
            </ReferenceInput>
            <PasswordInput label='Пароль' name='password' source='password' validate={password()}/>
            <ReferenceInput name='person_type_code' label="Client" reference="person-type-codes" source="person_type_code">
                <SelectInput source="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
}