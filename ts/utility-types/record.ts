type Algo = Record<string, number>;

const algo: Algo = {
  id: 3,
  sample: 1
}

const coordianates = ["x", "y"];
type Coordinate = typeof coordianates[number];

type Coordinates = Record<Coordinate, number>;
