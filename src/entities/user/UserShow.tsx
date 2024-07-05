import {
    EmailField,
    ReferenceField,
    Show,
    SimpleShowLayout,
} from "react-admin";
import AdminTextField from "../../fields/AdminTextField";

export const UserShow = () => {
    return <Show>
        <SimpleShowLayout>
            <AdminTextField source="id" label='users.labels.id'/>
            <AdminTextField source="last_name" label='users.labels.lastName'/>
            <AdminTextField source="first_name" label='users.labels.firstName'/>
            <ReferenceField source="client_id" reference="clients" label='users.labels.client'>
                <AdminTextField source='name'/>
            </ReferenceField>
            <AdminTextField source="login" label='users.labels.login'/>
            <EmailField source="email" label='users.labels.email'/>
        </SimpleShowLayout>
    </Show>
};