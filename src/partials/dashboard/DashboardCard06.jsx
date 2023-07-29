import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import {PieChart, Pie, ResponsiveContainer,Legend,Label,Cell} from 'recharts';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  // const chartData = {
  //   labels: ['Musafir Kleak', 'Imanuel Bahu', 'Sobat Kristus'],
  //   datasets: [
  //     {
  //       label: 'Pendapatan Terbanyak',
  //       data: [
  //         35, 30, 35,
  //       ],
  //       backgroundColor: [
  //         tailwindConfig().theme.colors.indigo[500],
  //         tailwindConfig().theme.colors.blue[400],
  //         tailwindConfig().theme.colors.indigo[800],
  //       ],
  //       hoverBackgroundColor: [
  //         tailwindConfig().theme.colors.indigo[600],
  //         tailwindConfig().theme.colors.blue[500],
  //         tailwindConfig().theme.colors.indigo[900],
  //       ],
  //       hoverBorderColor: tailwindConfig().theme.colors.white,
  //     },
  //   ],
  // };
    const data01 = [
        { name: "Active Campagins", value: 90 },
        { name: "Inactive Campagins", value: 25 },
        { name: "ICPs with no campagins", value: 10 }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const Bullet = ({ backgroundColor, size }) => {
        return (
            <div
                className="CirecleBullet"
                style={{
                    backgroundColor,
                    width: size,
                    height: size
                }}
            ></div>
        );
    };

    const CustomizedLegend = (props) => {
        const { payload } = props;
        return (
            <ul className="LegendList">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`}>
                        <div className="BulletLabel">
                            <Bullet backgroundColor={entry.payload.fill} size="10px" />
                            <div className="BulletLabelText">{entry.value}</div>
                        </div>
                        <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
                    </li>
                ))}
            </ul>
        );
    };

    const CustomLabel = ({ viewBox, labelText, value }) => {
        const { cx, cy } = viewBox;
        return (
            <g>
                <text
                    x={cx}
                    y={cy}
                    className="recharts-text recharts-label"
                    textAnchor="middle"
                    dominantBaseline="central"
                    alignmentBaseline="middle"
                    fontSize="15"
                >
                    {labelText}
                </text>
                <text
                    x={cx}
                    y={cy + 20}
                    className="recharts-text recharts-label"
                    textAnchor="middle"
                    dominantBaseline="central"
                    alignmentBaseline="middle"
                    fill="#0088FE"
                    fontSize="26"
                    fontWeight="600"
                >
                    {value}
                </text>
            </g>
        );
    };



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Pendapatan Terbanyak</h2>
      </header>

      <ResponsiveContainer>
          <PieChart>
              <Pie
                  data={data01}
                  dataKey="value"
                  cx={200}
                  cy={200}
                  innerRadius={80}
                  outerRadius={100}
              >
                  {data01.map((entry, index) => (
                      <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                      />
                  ))}
                  <Label
                      content={<CustomLabel labelText="Gereja" value={15} />}
                      position="center"
                  />
              </Pie>
              <Legend content={<CustomizedLegend />} />
          </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardCard06;
