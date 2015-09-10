describe("wordCounter", function(){
  it("It counts a word. Word: 'word'", function(){
    expect(wordCounter("word word")).to.eql({word: 2});
  });

  it("It counts a word. Word: 'word'", function(){
    expect(wordCounter("text size and - line-height A List Apart text size and line-height A List Apart")).to.eql({text: 2, size: 2, and: 2, lineheight: 2, a: 2, list: 2, apart:2});
  });

});
