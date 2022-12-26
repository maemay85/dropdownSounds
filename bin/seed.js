#!/usr/bin/env node

const {db, Key, Note, Chord} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

/*const allNotes = [c2, d2, e2, f2, g2, a2, b2]
notes.map(note => { await Promise.all(Note.create()
) }) */

  const [c2, d2, e2, f2, g2, a2, b2, c3, d3, e3, f3] = await Promise.all([Note.create({name: 'c2', audioUrl: './audio/c2.mp3'}), Note.create({name: 'd2', audioUrl: './audio/d2.mp3'}), Note.create({name: 'e2', audioUrl: './audio/e2.mp3'}), Note.create({name: 'f2', audioUrl: './audio/f2.mp3'}), Note.create({name: 'g2', audioUrl: './audio/g2.mp3'}), Note.create({name: 'a2', audioUrl: './audio/a2.mp3'}), Note.create({name: 'b2', audioUrl: './audio/b2.mp3'}), Note.create({name: 'c3', audioUrl: './audio/c3.mp3'}), Note.create({name: 'd3', audioUrl: './audio/d3.mp3'}), Note.create({name: 'e3', audioUrl: './audio/e3.mp3'}), Note.create({name: 'f3', audioUrl: './audio/f3.mp3'})]);

  const [cMaj, dMin, eMin, fMaj, gMaj, aMin, bDim] = await Promise.all([Chord.create({name: 'cMaj'}), Chord.create({name: 'dMin'}), Chord.create({name: 'eMin'}), Chord.create({name: 'fMaj'}), Chord.create({name: 'gMaj'}), Chord.create({name: 'aMin'}), Chord.create({name: 'bDim'})]);

  await cMaj.addNotes([c2, e2, g2])
  await dMin.addNotes([d2, f2, a2])
  await eMin.addNotes([e2, g2, b2])
  await fMaj.addNotes([f2, a2, c3])
  await gMaj.addNotes([g2, b2, d3])
  await aMin.addNotes([a2, c3, e3])
  await bDim.addNotes([b2, d3, f3])

  const cMajor = await Key.create({name: 'C Major'})



  await cMajor.addChords([cMaj, dMin, eMin, fMaj, gMaj, aMin, bDim])


  db.close()
  console.log(`

    Seeding successful!
    Time to blog!

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
