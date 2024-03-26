import { useContext } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ReadBooksContext } from "../../layouts/Root";
import NotListed from "../ListedBooksPage/NotListed";

const colors = [
  "#0D47A1",
  "#FBC02D",
  "#5E1675",
  "#EE4266",
  "#FFD23F",
  "#337357",
  "#D04848",
  "#F3B95F",
  "#FDE767",
  "#6895D2",
  "#FA7070",
  "#F6995C",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () => {
  const { readBooks } = useContext(ReadBooksContext);

  return readBooks.length ? (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={readBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <NotListed />
  );
};

export default Chart;
