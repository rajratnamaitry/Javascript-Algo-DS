import { describe, it, expect } from 'vitest'
import { findAllDuplicates } from '../../src/others/frequency/find-all-duplicates';
import { constructNote } from '../../src/others/frequency/construct-note';
import { sameFrequency } from '../../src/others/frequency/frequency-counter';
import { isValidAnagram } from '../../src/others/frequency/is-valid-anagram';
describe('Frequency',()=>{
    describe('Find all duplicate',()=>{
        it('Find from [4,3,2,7,8,2,3,1] return should be [2, 3]',()=>{
            expect(findAllDuplicates([4,3,2,7,8,2,3,1])).toEqual([2, 3])
        })
        it('Find from [4, 3, 2, 1, 0] return should be []',()=>{
            expect(findAllDuplicates([4, 3, 2, 1, 0])).toEqual([])
        })
        it('Find from [4, 3, 2, 1, 0, 1, 2, 3] return should be [1,2,3]',()=>{
            expect(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])).toEqual([1,2,3])
        })
    })
    describe('Construct note',()=>{
        it('Check aa and abc to be false',()=>{
            expect(constructNote('aa','abc')).toEqual(false)
        })
        it('Check abc and dcba to be false',()=>{
            expect(constructNote('abc', 'dcba')).toEqual(true)
        })
        it('Check aabbcc and bcabcaddff to be false',()=>{
            expect(constructNote('aabbcc','bcabcaddff')).toEqual(true)
        })
    })
    describe('Frequency counter',()=>{
        it('Check 182 and 281 to be true',()=>{
            expect(sameFrequency(182,281)).toEqual(true)
        })
        it('Check 32 and 13 to be false',()=>{
            expect(sameFrequency(32,13)).toEqual(false)
        })
    })
    describe('Is Valid Anagram',()=>{
        it('Check put and tup to be true',()=>{
            expect(isValidAnagram('put','tup')).toEqual(true)
        })
    })
})