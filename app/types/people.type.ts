export type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
};

export type PeopleResponse = {
  count: number;
  next: null | `https://${string}`;
  previous: null | `https://${string}`;
  results: People[];
};
