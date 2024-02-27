
interface Character {
  id: number;
  name: string
  description: string;
  reviews: string[];
  chapters: number[];
  isFavourite: boolean;
}

type CharacterPreview = Pick<Character, "id" | "name" | "isFavourite">;
type CharacterWhioutChapters = Omit<Character, "id" | "name" | "isFavourite" | "patata">;

const jaimeData: Character = {
  id: 1,
  name: "Jaime",
  chapters: [],
  description: "GoT",
  reviews: [],
  isFavourite: true,
}


const jaimePreviewData: CharacterPreview = {
  id: jaimeData.id,
  isFavourite: jaimeData.isFavourite,
  name: jaimeData.name,
}


export default {};
