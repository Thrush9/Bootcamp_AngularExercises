var dataFun = require('../Solutions/data_modelling_and_retrieval')
var assert = require('assert')
var expect=require('chai').expect;
var testArray = [
    { name: "Apple", color: "red", pricePerKg: 180 },
    { name: "Orange", color: "orange", pricePerKg: 100 },
    { name: "Banana", color: "yellow", pricePerKg: 40 }];


describe('Test - Data Modelling and Retrieval',function()
{
    it('Module Return Type - test case', function(done)
    {
       expect(typeof dataFun).to.deep.equal('function');
       done();
    })

    it('Function Input Null - test case',function()
    {
        var test = dataFun(testArray,null);
        assert.equal(test,'Invalid Input');
    })

    it('Function Input Array is Invalid - test case',function()
    {
        var test = dataFun("Test","Apple");
        assert.equal(test,'Invalid Input');
    })

    it('Function Success - test case',function()
    {
        var test = dataFun(testArray,"Apple");
        expect(test).to.deep.equal(
            {
            Apple: {name: "Apple", color: "red", pricePerKg: 180}
            }
       );
    })

    it('Function Success Object Properties - test case',function()
    {
        var test = dataFun(testArray,"Banana");
        expect(test.Banana).that.has.property('color').that.equals('yellow');
        expect(test.Banana).that.has.property('pricePerKg').that.equals(40);
    })

});