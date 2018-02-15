# seo-utils
check html for seo defects

# Import module

```
var demo = require("vbhvrn1988")
```

# Input

1) default input will be empty string as it will set the below string value for testing purpose.(which is only included to test in npmkit and should not be present in the production code)

```
<html><head><meta name='descriptions'></head><body><h1/><h1/><strong/><strong/><strong/><img/><img alt='test'/></body></html>
```

2) File path will be provided for the html file to be parsed
  ```
  demo.readFromFile(filePath);
  ```

## Rules defined
  1. Detect if any <img /> tag without alt attribute
  ```
  var rule1 = new demo.RuleImageWithoutAlt();
  ```

  2. Detect if any <a /> tag without rel attribute
     ```
     var rule2 = new demo.RuleAttributeWithoutRel();
     ```

  3. In <head> tag
    i. Detect if header doesn’t have <title> tag
    ii. Detect if header doesn’t have <meta name=“descriptions” ... /> tag
    iii. Detect if header doesn’t have <meta name=“keywords” ... /> tag

    ```
    var rule3 = new demo.RuleHeadWithMessyHead();
    ```
  4. Detect if there’re more than 15 <strong> tag in HTML (15 is a value should be configurable by user)
    ```
    var rule4 = new demo.RuleWithMoreStrong(2);
    ```

  5. Detect if a HTML have more than one <H1> tag.
     ```
     var rule5 = new demo.RuleWithMoreH1();
     ```

## Sample :
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
