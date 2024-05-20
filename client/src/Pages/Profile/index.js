import { Tabs } from "antd";
import PageTitle from "../../Components/PageTitle";
import TheatreList from "./TheatreList";

export default function Profile() {
    return (
        <div>
            <PageTitle title='Profile' />

            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab='Bookings' key='1'>Bookings</Tabs.TabPane>
                <Tabs.TabPane tab='Apply for Theatre' key='2'>
                    <TheatreList />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}