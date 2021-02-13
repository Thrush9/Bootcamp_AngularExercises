var scoreCard = require('../Solutions/students_result_card')
var assert = require('assert')
var expect=require('chai').expect;
var testArray = [
    {name: 'Ramesh', subjects: [{subject: 'Grammar', marks: 54}, {subject: 'Accounts', marks: 79}]},
    {name: 'Suresh', subjects: [{subject: 'Grammar', marks: 35}, {subject: 'Physics', marks: 100}]},
    {name: 'Naresh', subjects: [{subject: 'Grammar', marks: 88}, {subject: 'Accounts', marks: 98}]},
    {name: 'Mahesh', subjects: [{subject: 'Grammar', marks: 84}, {subject: 'Physics', marks: 98}]},
    {name: 'Umesh', subjects: [{subject: 'Grammar', marks: 100}, {subject: 'Physics', marks: 90}]}
]

describe('Test - Data Modelling and Retrieval',function()
{
    it('Module Return Type - test case', function(done)
    {
       expect(typeof scoreCard).to.deep.equal('function');
       done();
    })

    it('Function Input Array is Invalid - test case',function()
    {
        var test = scoreCard("Test");
        assert.equal(test,'');
    })

    it('Function Success - test case',function()
    {
        var test = scoreCard(testArray);
        expect(test).to.deep.equal(
            { Ramesh: 66.5,Suresh: 67.5, Naresh: 93, Mahesh: 91,Umesh: 95 }
       );
    })

    it('Function Success Object Properties- test case',function()
    {
        var test = scoreCard(testArray);
        expect(test).to.have.property('Ramesh',66.5);
    })

    it('Function Success with All Students- test case',function()
    {
        var test = scoreCard(testArray);
        expect(test).to.have.all.keys('Ramesh','Suresh','Umesh','Naresh','Mahesh');
    })

});