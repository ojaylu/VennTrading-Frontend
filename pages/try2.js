import React from 'react';
import dynamic from 'next/dynamic';
const Plot = dynamic(import('react-plotly.js'), {
    ssr: false
  })

const data = [
  {
    x: ['alpha', 'beta', 'gamma', 'delta'],
    y: [0.1, 0.3, 0.2, 0.4],
    type: 'bar',
    marker: {
      color: 'blue'
    }
  }
];

const layout = {
  title: 'Shipley Values',
  xaxis: {
    title: 'Factor'
  },
  yaxis: {
    title: 'Shipley Value'
  }
};

function ShipleyPlot() {
  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
}

export default ShipleyPlot;