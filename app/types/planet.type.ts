export type Planet = {
  name: string;
  population: string;
  terrain: string;
  climate: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

//template literal string

export type PlanetResponse = {
  count: number;
  next: null | `https://${string}`;
  previous: null | `https://${string}`;
  results: Planet[];
};
