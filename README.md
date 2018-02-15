# seo-utils
check html for seo defects


Sample :
Go to the link https://npm.runkit.com/vbhvrn1988 and pase the below code snippet.

```
var demo = require("vbhvrn1988")

var main = new demo.Main();
var rule1 = new demo.RuleImageWithoutAlt();
var rule2 = new demo.RuleAttributeWithoutRel();
var rule3 = new demo.RuleHeadWithMessyHead();
var rule4 = new demo.RuleWithMoreStrong(2);
var rule5 = new demo.RuleWithMoreH1();

main.readFromFile("");

main.addRule(rule1);
main.addRule(rule2);
main.addRule(rule3);
main.addRule(rule4);
main.addRule(rule5);

main.execute();
main.printOnConsole();
```
