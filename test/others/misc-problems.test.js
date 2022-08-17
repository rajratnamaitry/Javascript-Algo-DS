import { describe, it, expect } from 'vitest'
import { cartesian } from '../../src/others/cartesian-product';
import { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwoBitWise } from '../../src/others/is-power-of-two';
import { isPrime, isPrimeOpt } from '../../src/others/is-prime';
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
})
