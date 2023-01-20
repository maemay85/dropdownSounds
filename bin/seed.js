#!/usr/bin/env node

const {db, Note, Key, Chord, KeyNotes} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

// define all notes:

const allNotes = ['cFlat', 'c', 'cSharp', 'dFlat', 'd', 'dSharp', 'eFlat', 'e', 'eSharp', 'f', 'fSharp', 'gFlat', 'g', 'gSharp', 'aFlat', 'a', 'aSharp', 'bFlat', 'b', 'bSharp'];

//  define the key of C for starters:

const musicalKeys = [
  {
    name: 'c',
    keyNotes: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  }
]

// add the keys with flats
for(let i=0; i<6; ++i){
  let notes = [...musicalKeys[i].keyNotes];
  notes[notes.length-1] += 'Flat'
  let left = notes.slice(3)
  let right = notes.slice(0, 3)
  let newKey = {
    name: `${notes[3]}`,
    keyNotes: [...left, ...right]
  }
  musicalKeys.push(newKey)
 }

// add the keys with sharps:

for(let i=7; i<14; ++i){
  let notes = []
  //handle the first key with sharps by referring back to C
  if(i===7){
    notes = [...musicalKeys[0].keyNotes]
  } else {
    notes = [...musicalKeys[i-1].keyNotes];
  }
  notes[3] += 'Sharp'
  let left = notes.slice(4)
  let right = notes.slice(0, 4)
  let newKey = {
    name: `${notes[4]}`,
    keyNotes: [...left, ...right]
  }
  musicalKeys.push(newKey)
 }

//adding triads and seventh chords to musicalKeys:
const triadsTemplate = ['Maj', 'Min', 'Min', 'Maj', 'Maj', 'Min', 'Dim']

const triadify = (num) => {
  return musicalKeys[num].keyNotes.map((note, idx) => `${note}${triadsTemplate[idx]}`)
  }

const seventhChordsTemplate = ['Maj7', 'Min7', 'Min7', 'Maj7', '7', 'Min7', 'Min7Flat5']

const seventhChordify = (num) => {
  return musicalKeys[num].keyNotes.map((note, idx) => `${note}${seventhChordsTemplate[idx]}`)
}

musicalKeys.forEach((item, idx) => {
 musicalKeys[idx].triads = triadify(idx)
 musicalKeys[idx].seventhChords = seventhChordify(idx)
})

// define chordNotes function:


const chordNotes = (array, startIdx, complexity) => {
  let shifted = [...array.slice(startIdx), ...array.slice(0, startIdx)]
  let sorted = [...shifted.filter((a,b)=>b%2===0),...shifted.filter((a,b)=>b%2!==0)]

  return sorted.slice(0, complexity)
  }

// make all the triads:

const triadsMaker = (num, complexity) =>
    musicalKeys[num].triads.map((chord, idx) => {
      let keyChord =
          {
            name: `${chord}`,
            complexity: 'triad',
            degree: idx+1,
            musicalKey: `${musicalKeys[num].name}`,
            chordNotes: chordNotes(musicalKeys[num].keyNotes, idx, complexity)
          };
        return keyChord
      }
    )

  let allTriads = []

  for(let i=0; i<musicalKeys.length; ++i){
    allTriads.push(triadsMaker(i, 3))
  }

// and all the seventh chords:

const seventhChordsMaker = (num, complexity) =>
    musicalKeys[num].seventhChords.map((chord, idx) => {
      let keyChord =
          {
            name: `${chord}`,
            complexity: '7th',
            degree: idx+1,
            musicalKey: `${musicalKeys[num].name}`,
            chordNotes: chordNotes(musicalKeys[num].keyNotes, idx, complexity)
          };
        return keyChord
      }
    )

  let allSeventhChords = []

  for(let i=0; i<musicalKeys.length; ++i){
    allSeventhChords.push(seventhChordsMaker(i, 4))
  }


//-----------------------------------------------------------------
// AND NOW THE MODELS WILL BE CREATED:
//-----------------------------------------------------------------

//first octave notes:
const [c1, dFlat1, d1, eFlat1, e1, eSharp1, f1, gFlat1, g1, aFlat1, a1, bFlat1, b1] = await Promise.all(allNotes.map((note) => Note.create({name: `${note}`, audioUrl: `./audio/${note}1.mp3`, octave: 1})
));

//second octave notes:
const [c2, dFlat2, d2, eFlat2, e2, eSharp2, f2, gFlat2, g2, aFlat2, a2, bFlat2, b2] = await Promise.all(allNotes.map((note) => Note.create({name: `${note}`, audioUrl: `./audio/${note}2.mp3`, octave: 2})
));

//third octave notes:
const [c3, dFlat3, d3, eFlat3, e3, eSharp3, f3, gFlat3, g3, aFlat3, a3, bFlat3, b3] = await Promise.all(allNotes.map((note) => Note.create({name: `${note}`, audioUrl: `./audio/${note}3.mp3`, octave: 3})
));

//musical keys:
const [keyOfC, keyOfF, keyOfBFlat, keyOfEFlat, keyOfAFlat, keyOfDFlat, keyOfG, keyOfD, keyOfA, keyOfE, keyOfB, keyOfFSharp] = await Promise.all(musicalKeys.map((key, idx) => Key.create(musicalKeys[idx])));

//triads:
const triadCreator = (num) => Promise.all(allTriads[num].map((key, idx) => Chord.create(allTriads[num][idx])))

//seventh chords:
const seventhChordCreator = (num) => Promise.all(allSeventhChords[num].map((key, idx) => Chord.create(allSeventhChords[num][idx])))


for(let i=0; i<14; ++i){
  await triadCreator(i)
  await seventhChordCreator(i)
}


// associations:




  db.close()
  console.log(`

    Seeding successful!

    Magic Methods: \n
  KeyNotes: \n
  `, Object.keys(KeyNotes.prototype), "Notes: ", Object.keys(Note.prototype), "Chords: ", Object.keys(Chord.prototype))
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
