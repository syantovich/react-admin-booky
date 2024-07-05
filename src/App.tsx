import {Admin, Resource} from 'react-admin';

import {authProvider} from './providers/authProvider';
import {dataProvider} from "./providers/dataProvider";
import {UsersList, UserShow, UserEdit} from "./entities/user";
import {darkTheme, lightTheme} from "./theme";
import BookyLayout from "./templates/Layout";
import i18nProvider from "./utils/i18n";


const App = () => (
    <Admin
        layout={BookyLayout}
        i18nProvider={i18nProvider()}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        authProvider={authProvider}
        dataProvider={dataProvider}
    >
        <Resource
            name="users"
            list={UsersList}
            show={UserShow}
            edit={UserEdit}
            // edit={PostEdit}
            // create={PostCreate}
            // icon={PostIcon}
        />
        {/*<Resource*/}
        {/*    name="users"*/}
        {/*    list={UserList}*/}
        {/*    show={ShowGuesser}*/}
        {/*    icon={UserIcon}*/}
        {/*    recordRepresentation="name"*/}
        {/*/>*/}
    </Admin>
);

export default App;
