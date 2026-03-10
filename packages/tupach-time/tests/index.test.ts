import { describe, it, expect } from 'vitest'
import { tupachTime, fromTupachTime, TUPACH, tupacTime, fromTupacTime, MAKAVELI_LEXICON } from '../src/index'

describe('tupac-time', () => {
  it('should export the correct TUPACH', () => {
    expect(TUPACH).toBe(842655780000) // 1996-09-13T23:03:00.000Z
  })

  it('should calculate tupachTime correctly for a given date', () => {
    const testDate = new Date('2026-03-10T00:00:00.000Z')
    const expected = testDate.getTime() - TUPACH
    expect(tupachTime(testDate)).toBe(expected)
  })

  it('should calculate tupachTime correctly for current time', () => {
    const now = new Date()
    const result = tupachTime()
    // Allow a small delta for execution time
    const expected = now.getTime() - TUPACH
    expect(Math.abs(result - expected)).toBeLessThan(100)
  })

  it('should parse tupachTime back into a Date object correctly', () => {
    const msSinceTupac = 1000000
    const expectedDate = new Date(TUPACH + msSinceTupac)
    expect(fromTupachTime(msSinceTupac).getTime()).toBe(expectedDate.getTime())
  })

  it('should encode and decode a Makaveli Cipher correctly', () => {
    const testDate = new Date('2026-03-10T00:00:00.000Z')
    const cipher = tupacTime(testDate)
    expect(typeof cipher).toBe('string')

    // Test that the decoding correctly reconstructs the exact timestamp millisecond precision
    const decoded = fromTupacTime(cipher)
    expect(decoded.getTime()).toBe(testDate.getTime())
  })

  it('should correctly handle the epoch zero value for Makaveli Cipher', () => {
    const epochDate = new Date(TUPACH)
    const cipher = tupacTime(epochDate)
    expect(cipher).toBe(MAKAVELI_LEXICON[0])
    expect(fromTupacTime(cipher).getTime()).toBe(epochDate.getTime())
  })

  it('should encode and decode a Makaveli Cipher before Tupacs death', () => {
    const testDate = new Date('1972-01-01T00:00:00.000Z')
    const cipher = tupacTime(testDate)
    expect(cipher.startsWith('rearview')).toBe(true)

    const decoded = fromTupacTime(cipher)
    expect(decoded.getTime()).toBe(testDate.getTime())
  })

  it('should format impactful moments natively through algorithm logic', () => {
    const tupacDeath = new Date('1996-09-13T23:03:00.000Z')
    const biggieDeath = new Date('1997-03-09T09:15:00.000Z')
    
    // Test Tupac's Death
    expect(tupacTime(tupacDeath)).toBe('makaveli')
    
    // Test Biggie's Death natively generating sequential string without hardcoding branches
    expect(tupacTime(biggieDeath)).toBe('rest in peace notorious biggie makaveli')
    expect(fromTupacTime('rest in peace notorious biggie makaveli').getTime()).toBe(biggieDeath.getTime())
  })
})
