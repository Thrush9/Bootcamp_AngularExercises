var funTest=require('../Solutions/sample')
var assert=require('assert')
var expect=require('chai').expect;

describe('To Test Multiplication Function',function()
{
    it('Mulitiply only +ve numbers', function()
    {
        var ans=funTest(10,20);
        //assert.equal(funTest(10,20),200);
       expect(ans).equal(200);
    })
});
