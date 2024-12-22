export const FILTERS = {
  colors: {
    value: [],
    func: (item, value) => {
      if (!value.length) {
        return true;
      }

      return value.includes(item.color);
    }
  },
  search: {
    value: '',
    func: (item, value) => {
        return item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
    },
  },
};
