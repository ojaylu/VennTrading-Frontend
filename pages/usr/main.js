import { Typography } from "antd";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { useRouter } from "next/router";
import { interpolateRainbow } from "d3-scale-chromatic";
import { Doughnut } from 'react-chartjs-2';
import { generateColors } from "utils/colorGenerator";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const { colors, borderColors } = generateColors(6, interpolateRainbow)

console.log("colors:", colors);
console.log("borders:", borderColors);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 1
    }
  ]
}

export default function Main() {
  const router = useRouter();
  console.log("main rerendered");
  return (
    <LoggedInLayout style={{padding: "5"}}>
      <Typography.Title>Asset</Typography.Title>
      <div style={{width: "50%"}}>
        <Doughnut 
          data={data} 
          options={{
            plugins: {
              title: {
                  display: true,
                  text: 'Custom Chart Title'
              }
            }
          }}
        />
      </div>
      
    </LoggedInLayout>
  )
}