import React from "react";
import Box from "../Box/Box";
import BarChartLoaderComponent from "./BarChartLoader";
import CandleChartLoaderComponent from "./CandleChartLoader";
import LineChartLoaderComponent from "./LineChartLoader";

export default {
  title: "Components/Chart Loaders",
  component: BarChartLoaderComponent,
  argTypes: {},
};

export const BarChartLoader: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <BarChartLoaderComponent width={600} color="white" />
      </Box>
    </>
  );
};

export const CandleChartLoader: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <CandleChartLoaderComponent width={600} />
      </Box>
    </>
  );
};

export const LineChartLoader: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <LineChartLoaderComponent width={600} />
      </Box>
    </>
  );
};