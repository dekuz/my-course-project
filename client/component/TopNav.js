import { Menu } from "antd";
import Link from "next/link";
import {
    AppstoreOutlined,
    LoginOutlined,
    UserAddOutlined
} from "@ant-design/icons";

// const {item} = Menu;

const TopNav=()=>{
    return(
        <Menu mode="horizontal">
            <Menu.Item icon={<AppstoreOutlined/>}>
                <Link href="/">
                    <a>App</a>
                </Link>
            </Menu.Item>
            <Menu.Item icon={<LoginOutlined/>}>
                <Link href="/login">
                    <a>login</a>
                </Link>
            </Menu.Item>
            <Menu.Item icon={<UserAddOutlined/>}>
                <Link href="/register">
                    <a>register</a>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default TopNav;




