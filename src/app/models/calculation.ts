export interface Calculation {
  id?: number;
  deviceName: string;
  watts: number;
  kilowatts: number;
  electricityCost: number;
  hourlyCost: number;
  dailyCost: number;
  weeklyCost: number;
  monthlyCost: number;
  yearlyCost: number;
  createdAt: Date;
}