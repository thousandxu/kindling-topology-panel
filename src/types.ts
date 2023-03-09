type SeriesSize = 'sm' | 'md' | 'lg';
export type MetricType = 'latency' | 'calls' | 'errorRate' | 'sentVolume' | 'receiveVolume' | 'rtt' | 'retransmit' | 'packageLost' | 'connFail';

export interface SimpleOptions {
  layout: string;
  showLatency: boolean;
  normalLatency: number;
  abnormalLatency: number;
  showRtt: boolean;
  normalRtt: number;
  abnormalRtt: number;
  seriesCountSize: SeriesSize;
}

export interface DataPoint {
  Time: number;
  Value: number;
}
export interface DataSourceResponse {
  datapoints: DataPoint[];
}
