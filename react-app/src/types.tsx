interface Game {
  id: number;
  name: string;
  yearReleased?: number;
  developers: Developer[];
}

interface Developer {
  id: number;
  name: string;
}
