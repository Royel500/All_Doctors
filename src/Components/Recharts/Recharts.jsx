import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Custom wave-style bar shape
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`
);

const CustomBarShape = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <path d={getPath(x, y, width, height)} fill={fill} stroke="none" />
  );
};

// Main chart component
const Recharts = ({ data }) => {
  return (
    <div className="flex justify-center my-10">
      <ResponsiveContainer width="90%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="fee"
            fill="#8884d8"
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
