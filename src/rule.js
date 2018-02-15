function Rule() {
    this.data = {};
}

Rule.prototype.setData = function(data) {
    this.data = data;
}

Rule.prototype.apply = function() { }

//Rule to check for images without alt

RuleImageWithoutAlt.prototype = new Rule();
RuleImageWithoutAlt.prototype.constructor = RuleImageWithoutAlt;
function RuleImageWithoutAlt(){
}

RuleImageWithoutAlt.prototype.apply = function() {
    var ia = this.data("img:not([alt])").length;
    if(ia > 0){
      return "There are " + ia + " imgs tag without alt attribute\n";
    }
}

//Rule to check for <a/> tag without rel

RuleAttributeWithoutRel.prototype = new Rule();
RuleAttributeWithoutRel.prototype.constructor = RuleAttributeWithoutRel;
function RuleAttributeWithoutRel(){
}

RuleAttributeWithoutRel.prototype.apply = function() {
    var ia = this.data("a:not([rel])").length;
    if(ia > 0){
      return "There are " + ia + " <a/> tags without rel attribute\n";
    }
}

//Rule to check for head tag with MessyHead

RuleHeadWithMessyHead.prototype = new Rule();
RuleHeadWithMessyHead.prototype.constructor = RuleHeadWithMessyHead;
function RuleHeadWithMessyHead(){
}

RuleHeadWithMessyHead.prototype.apply = function() {
    var ia = this.data("head:not(:has(title))").length;
    var result = "";
    if(ia > 0){
      result += "There are " + ia + " head tags without title tags\n";
    }

    var md = this.data("head:not(:has(meta[name=descriptions]))").length;
    if(md > 0){
      result += "There are " + md + " head tags without meta tags having name descriptions\n";
    }

    var mk = this.data("head:not(:has(meta[name=keywords]))").length;
    if(mk > 0){
      result += "There are " + mk + " head tags without meta tags having keywords descriptions\n";
    }

    if(result!=""){
      return result;
    }
}

//Rule to check for <strong/> tag limit

RuleWithMoreStrong.prototype = new Rule();
RuleWithMoreStrong.prototype.constructor = RuleWithMoreStrong;
function RuleWithMoreStrong(limit){
    Rule.call(this);
    this.limit = limit;
}

RuleWithMoreStrong.prototype.apply = function() {
    var ia = this.data("strong").length;
    if(ia > this.limit){
      return "There are more than " + this.limit +  " <strong> tags\n";
    }
}

//Rule to check for <h1/> tag

RuleWithMoreH1.prototype = new Rule();
RuleWithMoreH1.prototype.constructor = RuleWithMoreH1;
function RuleWithMoreH1(){
}

RuleWithMoreH1.prototype.apply = function() {
    var ia = this.data("h1").length;
    if(ia > 1){
      return "The html have more than one <h1> tag\n";
    }
}

module.exports = {
    Rule: Rule,
    RuleImageWithoutAlt: RuleImageWithoutAlt,
    RuleAttributeWithoutRel: RuleAttributeWithoutRel,
    RuleHeadWithMessyHead: RuleHeadWithMessyHead,
    RuleWithMoreStrong: RuleWithMoreStrong,
    RuleWithMoreH1: RuleWithMoreH1
  };
