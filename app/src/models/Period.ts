export default interface Period {
  id: number;

  start: Date;

  end?: Date;

  days: number;

  cycleDuration: number;

  symptoms?: string;
}
