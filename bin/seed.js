#!/usr/bin/env node

const {db, Key, Note, Chord} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

const allNotes = ['c', 'cSharp', 'dFlat', 'd', 'dSharp', 'eFlat', 'e', 'f', 'fSharp', 'gFlat', 'g', 'gSharp', 'aFlat', 'a', 'aSharp', 'bFlat', 'b'];

//  define the key of C for starters:

const musicalKeys = [
  {
    name: 'c',
    keyNotes: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  }
]

// add the keys with flats
for(let i=0; i<5; ++i){
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

for(let i=6; i<12; ++i){
  let notes = []
  //handle the first key with sharps by referring back to C
  if(i===6){
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

console.log("musical keys in all their glory: ", musicalKeys)

//seeding database with first octave notes:
const [c1, dFlat1, d1, eFlat1, e1, f1, gFlat1, g1, aFlat1, a1, bFlat1, b1] = await Promise.all(allNotes.map((note) => Note.create({name: `${note}`, audioUrl: `./audio/${note}1.mp3`, octave: 1})
));

//seeding database with second octave notes:
const [c2, dFlat2, d2, eFlat2, e2, f2, gFlat2, g2, aFlat2, a2, bFlat2, b2] = await Promise.all(allNotes.map((note) => Note.create({name: `${note}`, audioUrl: `./audio/${note}2.mp3`, octave: 2})
));

//seeding database with third octave notes:
const [c3, dFlat3, d3, eFlat3, e3, f3, gFlat3, g3, aFlat3, a3, bFlat3, b3] = await Promise.all(allNotes.map((note) => Note.create({name: `${note}`, audioUrl: `./audio/${note}3.mp3`, octave: 3})
));



//create triads in C
/*  const [cMaj, dMin, eMin, fMaj, gMaj, aMin, bDim] = await Promise.all(
 triads.filter((chord) => musicalKeys[0].triads.includes(chord)).map((chord, idx) => {
  Chord.create({name: `${chord}`, complexity: 'triad', degree: idx+1});
})); */


  /* await cMaj.addNotes([c2, e2, g2])
  await dMin.addNotes([d2, f2, a2])
  await eMin.addNotes([e2, g2, b2])
  await fMaj.addNotes([f2, a2, c3])
  await gMaj.addNotes([g2, b2, d3])
  await aMin.addNotes([a2, c3, e3])
  await bDim.addNotes([b2, d3, f3])

  const cMajor = await Key.create({name: 'C Major'})



  await cMajor.addChords([cMaj, dMin, eMin, fMaj, gMaj, aMin, bDim]) */


  db.close()
  console.log(`

    Seeding successful!


  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
