describe("a string with my name", function() {
    var myName;
    
    beforeEach(function() {
      myName = "Carson Hollands";  
    });
    
    it("is my name", function() {
      expect(myName).toEqual("Carson Hollands");
    });
  });