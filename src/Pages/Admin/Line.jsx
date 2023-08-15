import { Box } from "@mui/material";
import Title from "../../Components/Title";
import LineChart from "../../Components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Title title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
