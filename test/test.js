let expect = require("chai").expect;
let thoughts = require("../");

describe("Thoughts", function() {

    it("should allow the user to click on the login button to enter login credentials", function() {
        expect(Thoughts("login button")).to.equal("login popup");
    });

    it("should give the user access once the user has been verified", function() {
        expect(Thoughts("login")).to.equal("Lynn Smith");
    });

    it("should not give user access to login if the user has not been verified", function() {
        expect(Thoughts("login")).to.equal("Access Denied");
    });

    it("should show the user their profile once they have been verified", function() {
        expect(Thoughts("Lynn Smith")).to.equal("User Dashboard");
    });

    it("should give the user the option to choose Creative thought button", function() {
        expect(Thoughts("Creative Button")).to.equal("Creative Thought");
    });

    it("should give the user the option to choose Business thought button", function() {
        expect(Thoughts("Business Button")).to.equal("Business Thought");
    });

    it("should give the user the option to enter two thoughts", function() {
        expect(Thoughts("Options")).to.equal("two thoughts");
    });

    it("should give the user the option to enter four thoughts", function() {
        expect(Thoughts("Options")).to.equal("four thoughts");
    });

    it("should give the user the option to enter fourty two thoughts", function() {
        expect(Thoughts("Options")).to.equal("fourty-two thoughts");
    });

    it("should highlight the user's creative thoughts with the color blue", function() {
        expect(Thoughts("creative thoughts")).to.equal("blue");
    });

    it("should highlight the user's business thoughts with the color yellow", function() {
        expect(Thoughts("business thoughts")).to.equal("yellow");
    });

    it("should hightlight the user's important thoughts with the color red", function() {
        expect(Thoughts("important thoughts")).to.equal("red");
    });

    it("should give the user the choice to archive their thoughts", function() {
        expect(Thoughts("choice to archive")).to.equal("archive thought");
    });

    it("should give the user the choice to retrieve their thoughts", function() {
        expect(Thoughts("choice to retrieve")).to.equal("thought retrieval");
    });

});
