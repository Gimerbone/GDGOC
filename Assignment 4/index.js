/*
#===================================================================================#
#===================================================================================#
#                                                                                   #
#                  Google Developer Go On Campus - Telkom University                #
#             Assignment 4 - Fungsi CRUD Dasar terhadap Array of Objects            #
#             Oleh: Muhammad Hafizh, Github: https://github.com/Gimerbone           #
#                                                                                   #
#===================================================================================#
#===================================================================================#
*/


let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "CRUD Sederhana terhadap Object Array",
    created_by: "Gimerbone",
    created_at: 1738419184549
  }
]

let id = 2;

const createNote = (note_heading, note_description) => {
  notes.push({
    id : id,
    heading: note_heading,
    description: note_description,
    created_by: "Gimerbone",
    created_at: Date.now()
  });

  id++;
};

const readNote = (note_id) => {
  if (note_id < 1 || note_id > notes.length) throw new Error("ID not found!");

  return notes[note_id-1]
};

const updateNote = (note_id, note_heading, note_description) => {
  if (note_id < 1 || note_id > notes.length) throw new Error("ID not found!");

  notes[note_id-1].heading = note_heading;
  notes[note_id-1].description = note_description;
  notes[note_id-1].created_at = Date.now();
};

const deleteNote = (note_id) => {
  if (note_id < 1 || note_id > notes.length) throw new Error("ID not found!");

  notes = [...notes.slice(0, note_id-1), ...notes.slice(note_id, notes.length)];

  for ( let i = note_id; i < notes.length; i++ )
  {
    notes[i].id--
  }

  id--
};