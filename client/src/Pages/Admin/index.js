import PageTitle from "../../Components/PageTitle";
import { Tabs } from "antd";
import MoviesList from "./MoviesList";

export default function Admin() {
  return (
    <div>
      <PageTitle title="Admin" />

      <Tabs defaultActiveKey="movies">
        <Tabs.TabPane tab="Movies" key="movies">
          <MoviesList />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Theatres" key="theatres">
          Theatre List
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
