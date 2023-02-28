var forrasKepek = {
  mokus: {
    src: "./puzzle_kepek/mokus.png",
    kepek: {
      2: ["mokus-0.png", "mokus-1.png", "mokus-2.png", "mokus-3.png"],
      3: [
        "mokus-0.png",
        "mokus-1.png",
        "mokus-2.png",
        "mokus-3.png",
        "mokus-4.png",
        "mokus-5.png",
        "mokus-6.png",
        "mokus-7.png",
        "mokus-8.png",
      ],

      4: [
        "mokus-0.png",
        "mokus-1.png",
        "mokus-2.png",
        "mokus-3.png",
        "mokus-4.png",
        "mokus-5.png",
        "mokus-6.png",
        "mokus-7.png",
        "mokus-8.png",
        "mokus-9.png",
        "mokus-10.png",
        "mokus-11.png",
        "mokus-12.png",
        "mokus-13.png",
        "mokus-14.png",
        "mokus-15.png",
      ],
    },
  },

  papagaj: {
    src: "./puzzle_kepek/papagaj.png",
    kepek: {
      2: ["papagaj-0.png", "papagaj-1.png", "papagaj-2.png", "papagaj-3.png"],
      3: [
        "papagaj-0.png",
        "papagaj-1.png",
        "papagaj-2.png",
        "papagaj-3.png",
        "papagaj-4.png",
        "papagaj-5.png",
        "papagaj-6.png",
        "papagaj-7.png",
        "papagaj-8.png",
      ],
      4: [
        "papagaj-0.png",
        "papagaj-1.png",
        "papagaj-2.png",
        "papagaj-3.png",
        "papagaj-4.png",
        "papagaj-5.png",
        "papagaj-6.png",
        "papagaj-7.png",
        "papagaj-8.png",
        "papagaj-9.png",
        "papagaj-10.png",
        "papagaj-11.png",
        "papagaj-12.png",
        "papagaj-13.png",
        "papagaj-14.png",
        "papagaj-15.png",
      ],
    },
  },
  kenguru: {
    src: "./puzzle_kepek/kenguru.png",
  },
  krokodil: {
    src: "./puzzle_kepek/krokodil.png",
  },
  pingvin: {
    src: "./puzzle_kepek/pingvin.png",
  },
  tengericsillag: {
    src: "./puzzle_kepek/tengericsillag.png",
  },
};
for (const [key, value] of Object.entries(forrasKepek)) {
  console.log(`${key}: ${value}`);
}
const map = new Map(Object.entries(forrasKepek));
console.log(map);
