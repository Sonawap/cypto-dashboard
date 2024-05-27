import { OpenOrderRowProps, StatType } from "@/components/layout";
import moment from 'moment';

export const StatData: StatType[] = [
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c57840f801568a14b04bfaa4611088d4dcd361a734d0491a068414ff76f75eac?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&',
    label: '24h change',
    value: '520.80 +1.25%',
    valueColor: '#10B981',
  },
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f00fefbf37c12918537f177eef666fa7fd678687ae9d650e5139b98378d0849e?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&',
    label: '24h high',
    value: '520.80 +1.25%',
    valueColor: '#FFFFFF',
  },
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3155a7fe8252b1e5c11a9b5d7d54f98b2a4720c5f11baaa5ad026941bc4163f7?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&',
    label: '24h low',
    value: '520.80 +1.25%',
    valueColor: '#FFFFFF',
  },
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0705c5760c3494e9308778f1e19ed90268fd57f8c22dd5aefc00b2686549e01?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&',
    label: '24h volume',
    value: '75.655.26',
    valueColor: '#FFFFFF',
  },
];

export const OrderData: OpenOrderRowProps[] = [
  
];

export const CartDataOptions = {
  chart: {
    height: 550,
    type: 'candlestick',
  },
  annotations: {
    xaxis: [
      {
        x: 'Oct 06 14:00',
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '12px',
            color: '#fff',
            background: '#00E396'
          },
          orientation: 'horizontal',
          offsetY: 7,
          text: 'Annotation Test'
        }
      }
    ]
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: function(val: string) {
        return moment(val, 'HH:mm').format('H:MM');
      }
    }
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  },
  theme: {
    mode: 'dark',
  },
  grid: {
    borderColor: '#444',
  },
};

// Define the series data
export const series = [
  {
    data: [
      {
        x: new Date('2024-01-01').getTime(),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      {
        x: new Date('2024-01-02').getTime(),
        y: [6832.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date('2024-01-03').getTime(),
        y: [6930.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date('2024-01-04').getTime(),
        y: [6300.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date('2024-01-05').getTime(),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date('2024-01-06').getTime(),
        y: [6930.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date('2024-01-07').getTime(),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date('2024-01-08').getTime(),
        y: [6230.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date('2024-01-09').getTime(),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date('2024-01-10').getTime(),
        y: [6330.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date('2024-01-12').getTime(),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date('2024-01-13').getTime(),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
    ],
  },
];
