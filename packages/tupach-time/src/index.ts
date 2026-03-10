/**
 * Epoch timestamp of Tupac Shakur's death (September 13, 1996, 4:03 PM PDT) in milliseconds.
 * 1996-09-13T23:03:00.000Z
 */
export const TUPACH = 842655780000

/**
 * Returns the number of milliseconds elapsed since Tupac's death.
 *
 * @param date - Optional Date object. Defaults to current time.
 * @returns Milliseconds elapsed since Tupac's death.
 */
export function tupachTime(date: Date = new Date()): number {
  return date.getTime() - TUPACH
}

/**
 * Parses a given tupac-time value back into a JavaScript Date object.
 *
 * @param ms - Milliseconds elapsed since Tupac's death.
 * @returns Date object representing the parsed time.
 */
export function fromTupachTime(ms: number): Date {
  return new Date(TUPACH + ms)
}

export const MAKAVELI_LEXICON = [
  'makaveli',
  'life',
  'outlaw',
  'thug',
  'ridah',
  'eyez',
  'world',
  'changes',
  'passion',
  'dreams',
  'heaven',
  'hell',
  'in',
  'judge',
  'rest',
  'california',
  'love',
  'picture',
  'tears',
  'pain',
  'faith',
  'mary',
  'streetz',
  'death',
  'glory',
  'ambitionz',
  'heartz',
  'men',
  'soul',
  'spirit',
  'troubles',
  'struggle',
  'hustle',
  'enemies',
  'friends',
  'peace',
  'homies',
  'brother',
  'sister',
  'game',
  'player',
  'bullet',
  'gun',
  'blood',
  'sweat',
  'time',
  'day',
  'night',
  'sun',
  'ghetto',
  'block',
  'city',
  'pac',
  'shakur',
  'biggie',
  'poetic',
  'notorious',
  'against',
  'rollin',
  'pray',
  'hail',
  'keep',
  'live',
  'die',
] as const

/**
 * Encodes a specific moment in time into a unique String of Tupac lyrics.
 * The Makaveli Cipher represents any moment in time exclusively. No two moments
 * down to the millisecond share the same lyrical string.
 *
 * @param date - Optional Date object. Defaults to current time.
 * @returns A lyrical string representing the exact time.
 */
export function tupacTime(date: Date = new Date()): string {
  let ms = tupachTime(date)
  let isBefore = false

  if (ms < 0) {
    isBefore = true
    ms = Math.abs(ms)
  }

  if (ms === 0) return MAKAVELI_LEXICON[0]

  const words: string[] = []
  while (ms > 0) {
    const rem = ms % 64
    words.unshift(MAKAVELI_LEXICON[rem])
    ms = Math.floor(ms / 64)
  }

  if (isBefore) {
    words.unshift('rearview')
  }

  return words.join(' ')
}

/**
 * Decodes a Makaveli Cipher string back into a JavaScript Date object.
 *
 * @param cipher - The lyrical string.
 * @returns Date object representing the decoded moment in time.
 */
export function fromTupacTime(cipher: string): Date {
  const words = cipher.trim().split(/\s+/)
  let isBefore = false

  if (words[0]?.toLowerCase() === 'rearview') {
    isBefore = true
    words.shift()
  }

  let ms = 0
  for (const word of words) {
    const index = MAKAVELI_LEXICON.indexOf(word.toLowerCase() as any)
    if (index === -1) {
      throw new Error(`Invalid Makaveli Cipher word: ${word}`)
    }
    ms = ms * 64 + index
  }

  if (isBefore) {
    ms = -ms
  }

  return fromTupachTime(ms)
}
