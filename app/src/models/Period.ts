export default interface Period {
  id: number;

  start: Date;

  end?: Date;

  days: number;

  cycleDuration: number;

  symptoms?: string;

  daysDisconforts?: Disconfort[];
}

export interface Disconfort {
  id: number;

  date: Date;

  symptoms: string[];
}
