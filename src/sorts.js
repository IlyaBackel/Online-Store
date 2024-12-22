export const SORTS = {
    cheap: {
        name: "Cheap",
        func: (a, b) => a.price - b.price
    },
    dears: {
        name: "Dears",
        func: (a, b) => b.price - a.price
    },
    popular: {
        name: "Popular",
        func: (a, b) => b.rating - a.rating
    }
};
