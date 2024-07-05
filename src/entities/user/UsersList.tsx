import {Datagrid, List, ListProps, ReferenceField, SimpleList, SearchInput, TextInput} from "react-admin";
import {User} from "../../types/interfaces/user";
import AdminTextField from "../../fields/AdminTextField";
import {useMediaQuery, Theme} from "@mui/material";


const userFilters = [
    <TextInput name='email' source="email" label='users.labels.email' alwaysOn/>,
];

export const UsersList = (props: ListProps<User>) => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List {...props} filters={userFilters}>
            {isSmall ?
                <SimpleList
                    primaryText={(record) => `${record.last_name} ${record.first_name}`}
                    secondaryText={() => (
                        <ReferenceField source="client_id" reference="clients" label={'users.labels.client'}>
                            <AdminTextField source='name'/>
                        </ReferenceField>)
                    }
                    tertiaryText={() => <ReferenceField source="person_type_code" reference="person-type-codes"
                                                        label="users.labels.personType">
                        <AdminTextField source='name'/>
                    </ReferenceField>}

                /> :
                <Datagrid>
                    <AdminTextField source="id" label='users.labels.id'/>
                    <ReferenceField source="client_id" reference="clients" label='users.labels.client'>
                        <AdminTextField source='name'/>
                    </ReferenceField>
                    <AdminTextField source="last_name" label='users.labels.lastName' emptyText='--||--'/>
                    <AdminTextField source="first_name" label='users.labels.firstName' emptyText='--||--'/>
                </Datagrid>
            }
        </List>
    );
};
