const VALID_BLACK_KEYS = ["s", "d", "g", "h", "j"];
const VALID_WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = [
  "c",
  "csharp",
  "d",
  "dsharp",
  "e",
  "f",
  "fsharp",
  "g",
  "gsharp",
  "a",
  "asharp",
  "b",
];

export const notes = [
  { note: "a", name: "A" },
  { note: "asharp", name: "A#" },
  { note: "b", name: "B" },
  { note: "c", name: "C" },
  { note: "csharp", name: "C#" },
  { note: "d", name: "D" },
  { note: "dsharp", name: "D#" },
  { note: "e", name: "E" },
  { note: "f", name: "F" },
  { note: "fsharp", name: "F#" },
  { note: "g", name: "G" },
  { note: "gsharp", name: "G#" },
];
const NOTE_TO_KEY = {
  c: "z",
  csharp: "s",
  d: "x",
  dsharp: "d",
  e: "c",
  f: "v",
  fsharp: "g",
  g: "b",
  gsharp: "h",
  a: "n",
  asharp: "j",
  b: "m",
};

export const KEY_TO_NOTE1 = {
  z: "c",
  s: "c#",
  x: "d",
  d: "d#",
  c: "e",
  v: "f",
  g: "f#",
  b: "g",
  h: "g#",
  n: "a",
  j: "a#",
  m: "b",
};

const KEY_TO_NOTE = {
  z: "c",
  s: "csharp",
  x: "d",
  d: "dsharp",
  c: "e",
  v: "f",
  g: "fsharp",
  b: "g",
  h: "gsharp",
  n: "a",
  j: "asharp",
  m: "b",
};

export { NOTES, VALID_KEYS, NOTE_TO_KEY, KEY_TO_NOTE };
