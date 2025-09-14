export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  image: string;
  url: string;
  created: string;
  location: {
    name: string;
  };
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IResponseCharacter {
  results: ICharacter[];
  info: IInfo;
}
