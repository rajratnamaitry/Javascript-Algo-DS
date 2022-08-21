import { describe, it, expect, xit } from 'vitest'
import { capitalizeFirst } from '../../src/others/recursive/capitalize-first'
import { capitalizeWords } from '../../src/others/recursive/capitalize-words'
import { collectOddValues } from '../../src/others/recursive/collect-odds'
import { factorial } from '../../src/others/recursive/factorial-recursive'
import { flatten } from '../../src/others/recursive/flatten-write'
import { isPalindrome } from '../../src/others/recursive/is-palindrome'
import { power } from '../../src/others/recursive/power'
import { recursiveRange } from '../../src/others/recursive/recursive-range'
import { reverse } from '../../src/others/recursive/reverse'
import { someRecursive } from '../../src/others/recursive/some-recursive'
import { collectStringsPureRecursive } from '../../src/others/recursive/collect-strings'
import { nestedEvenSum } from '../../src/others/recursive/nested-even-sum'
import { productOfArray } from '../../src/others/recursive/product-array'
import { stringifyNumbers } from '../../src/others/recursive/stringify-numbers'

describe('Recursive',()=>{
    it('Capitalize first',()=>{
        expect(capitalizeFirst(['raj','ramesh', 'maitry'])).toEqual(['Raj','Ramesh', 'Maitry'])
    })
    it('Capitalize words',()=>{
        expect(capitalizeWords(['raj','ramesh', 'maitry'])).toEqual(['RAJ', 'RAMESH', 'MAITRY'])
    })
    it('Collect odds',()=>{
        expect(collectOddValues([1,2,3,4,5])).toEqual([1,3,5])
    })
    it('Collect strings',()=>{
        expect(collectStringsPureRecursive({ name: 'raj',data:{ call:'22' , jam: 'jam' } , phone : 'phone'}))
        .toEqual(['raj', '22', 'jam', 'phone'])
    })
    it('Factorial for 4 is 24',()=>{
        expect(factorial(4)).toEqual(24)
    })
    it('Flatten',()=>{
        expect(flatten([1, 2, 3, [4, 5] ])).toEqual([1, 2, 3, 4, 5])
    })
    it('Is palindrome',()=>{
        expect(isPalindrome('tacocat')).toEqual(true)
    })
    it('Power',()=>{
        expect(power(2,4)).toEqual(16)
    })
    it('Recursive range',()=>{
        expect(recursiveRange(10)).toEqual(55)
    })
    it('Reverse string',()=>{
        expect(reverse('awesome')).toEqual('emosewa')
    })
    it('Some recursive',()=>{
        expect(someRecursive([12,43,25,20], (a)=> a > 10 )).toEqual(true)
    })
})