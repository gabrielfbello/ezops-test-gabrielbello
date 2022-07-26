export class NewMovie {
  _id?: any;
  referenceId?: number;
  title: string;
  year: number;
  runtime: number;
  genres: Array<string>;
  director?: string;
  actors?: string;
  plot?: string;
  posterUrl?: string;
}
