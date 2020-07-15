var request = require('request')
var assert = require('assert')
var chai = require('chai')

var base_url = "https://nodejs-demo-pipeline.azurewebsites.net/"

// "https://ssgsnodedemo.azurewebsites.net/"

describe("Node Server", function () {
    describe("GET /", function () {

        it(" returns status code 200", function (done) {
            request.get(base_url, function (error, response, body) {
                assert.equal(200, response.statusCode)
                done()
            })
        })

        it("returns Hello World", function (done) {
            request.get(base_url, function (error, response, body) {
                chai.assert.include(body, "Hello World!")
                done()
            })
        })
    })
})