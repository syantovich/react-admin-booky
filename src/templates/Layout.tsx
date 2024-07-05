import {Layout, LayoutProps} from "react-admin";
import BookyAppBar from "./AppBar";

const BookyLayout = ({children}: LayoutProps) => {
    return <Layout appBar={BookyAppBar}>
        {children}
    </Layout>
}

export default BookyLayout