import Chance from "chance";
import { COLORS, CATEGORIES, IMG_URL } from "./arrays";

const chance = new Chance();

const NUM_OF_ITEMS = 100;
const MIN = 10;
const MAX = 9999;

export const generateItems = () => {
  const items = [];
  for (let i = 0; i < NUM_OF_ITEMS; i++) {
    items.push(generateItem());
  }
  return items;
};

const generateItem = () => ({
  name: chance.word({ length: 10 }),
  description: chance.sentence(),
  id: chance.integer({ min: 0, max: 1e8 }).toString(16),
  color: chance.pickone(Object.values(COLORS)), 
  category: chance.pickone(CATEGORIES), 
  price: chance.integer({ min: MIN, max: MAX }),
  rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
  imgUrl: chance.pickone(IMG_URL), 
});