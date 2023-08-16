import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

interface ChartInterface {
  results: Record<string, string | number>[];
}

const Chart: FC<ChartInterface> = ({ results }) => {
  const [data, setData] = useState<Record<string, string | number>[]>();

  const computeData = () => {
    const ratingsArray = results.map((result) => result.rating);

    const map: Record<string, number> = {};
    const result = [];

    for (const num of ratingsArray) {
      if (`${num}` in map) {
        map[`${num}`] += 1;
      } else {
        map[`${num}`] = 1;
      }
    }

    for (const char in map) {
      const obj = { name: `${char} stars`, value: map[char] };
      result.push(obj);
    }

    setData(result);
  };

  useEffect(() => {
    computeData();
  }, []);

  return (
    <Container data-testid="chart">
      <PieChart width={200} height={200}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
`;
