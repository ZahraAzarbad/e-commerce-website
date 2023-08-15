import { Box } from "@mui/material";
import Title from "../../Components/Title";
import BarChart from "../../Components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Title title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
