export interface Talk {
  watchedAt: string;
  rate: number;
}
export interface Talker {
  name: string;
  age: number;
  id: number;
  talk: Talk;
}


