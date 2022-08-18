import { describe, it, expect } from 'vitest'
import { cartesian } from '../../src/others/cartesian-product';
import { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwoBitWise } from '../../src/others/is-power-of-two';
import { isPrime, isPrimeOpt } from '../../src/others/is-prime';
import { climbingStaircase } from '../../src/others/climbing-staircase';
import { countUniqueValues } from '../../src/others/count-unique-values';
import { fibonacciSeries, fibonacciSeriesOpt , fibonacciSeriesOpt2 } from '../../src/others/fibonacci-series'
import { findLongestSubString } from '../../src/others/find-longest-sub-string'
import { maxSubArraySum , maxSubarraySumOpt } from '../../src/others/max-sub-array-sum'
import { minSubArraySum } from '../../src/others/min-sub-array-sum'
import { reverseInt } from '../../src/others/reverse-int'
import { sameNaive , sameNaiveFreq } from '../../src/others/same-naive-solution'
import { sumZero } from '../../src/others/sum-zero-naive'
describe('Misc Problems',()=>{
    describe('Cartesian Products',()=>{
        it('Normal',()=>{
            const A = [1 ,2];
            const B = [3 ,4];
            const AxB = [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ];
            expect(cartesian(A, B)).toEqual(AxB)
        })
    })
    describe('Prime number check',()=>{
        it('Normal',()=>{
            // expect(isPrime(1)).toEqual(false)
            // expect(isPrime(4)).toEqual(false)
            expect(isPrime(5)).toEqual(true)
        })
        it('Optimized',()=>{
            expect(isPrimeOpt(5)).toEqual(true);
        })
    })
    describe('Check Power Of Two',()=>{
        it('Normal',()=>{
           // expect(isPowerOfTwo(2)).toEqual(true)
            expect(isPowerOfTwo(5)).toEqual(false)
        })
        it('Alternative',()=>{
            expect(isPowerOfTwo2(5)).toEqual(false)
        })
        it('Bitwise',()=>{
            expect(isPowerOfTwoBitWise(5)).toEqual(false)
        })  
    })
    describe('Climbing Staircase',()=>{
        it('Normal',()=>{
            expect(climbingStaircase(5)).toEqual(8)
        })
    })
    describe('Count Unique values',()=>{
        it('Normal',()=>{
            expect(countUniqueValues([1,1,1,1,1,2,4,4])).toEqual(3)
        })
    })
    describe('Fibonacci Series',()=>{
        it('Normal',()=>{
            expect(fibonacciSeries(12)).toEqual(144)
        })
        it('Optimized',()=>{
            expect(fibonacciSeriesOpt(12)).toEqual(144)
        })
        it('Optimized Alternative',()=>{
            expect(fibonacciSeriesOpt2(12)).toEqual(144)
        })
    })
    describe('Find longest sub string',()=>{
        it('rithmschool to be 7',()=>{
            expect(findLongestSubString('rithmschool')).toEqual(7)
        })
        it('thisisawesome to be 6',()=>{
            expect(findLongestSubString('thisisawesome')).toEqual(6)
        })
        it('bbbbbb to be 1',()=>{
            expect(findLongestSubString('bbbbbb')).toEqual(1)
        })
        it('thecatinthehat to be 7',()=>{
            expect(findLongestSubString('thecatinthehat')).toEqual(7)
        })
        it('longestsubstring to be 8',()=>{
            expect(findLongestSubString('longestsubstring')).toEqual(8)
        })
    });
    describe('Max SubArray Sum',()=>{
        it('Normal',()=>{
            expect(maxSubArraySum([1,2,5,2,8,1,5],2)).toEqual(10)
        })
        it('Optimize',()=>{
            expect(maxSubarraySumOpt([1,2,5,2,8,1,5],4)).toEqual(17)
        })
    })
    describe('Min SubArray Sum',()=>{
        it('Normal',()=>{
            expect(minSubArraySum([2,3,1,2,4,3], 7)).toEqual(2)
        })
    })
    describe('Reverse Number',()=>{
        it('Math',()=>{
            expect(reverseInt(1231)).toEqual(1321)
        })
    })
    describe('Same naive solution',()=>{
        it('Normal',()=>{
            expect(sameNaive([1,2,3,2], [9,1,4,4])).toEqual(true)
        })
        it('Frequency pattern',()=>{
            expect(sameNaiveFreq([1,2,3,2], [9,1,4,4])).toEqual(true)
        })
    })
    describe('Sum Zero naive',()=>{
        it('Normal',()=>{
            expect(sumZero([-4,-3,-2,-1,0,1,2,5])).toEqual([-2,2])
        })
    })
})
