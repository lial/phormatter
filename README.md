# PHormatter
Phone numbers formatter (Node.js module)

### Description
This Node.JS module was ported from php library (https://github.com/mrXCray/PhoneCodes)
It formats phone number in pretty, more readable string, depends on country code and length of phone number.

### Installation
```
$ npm install phormatter
```

### Using

Module has only one function *format*

```
/**
 * Format phone number
 *
 * @param String phone Input phone number
 * @param Char divider Divider in number between digit blocks (Default is minus: 123-45-67)
 * @param Bool plusForce Is plus sign before number obligatory or as in input string (true - force plus)
 * @param Bool convertCharNumber Convert chars to digit in numbers (Eg: 1-800-APPLE will converted to 1-800-27753)
 *
 * @return string
 */
format(phone, divider, plusForce, convertCharNumber) {
  ...
};
```

Example of using:

```
var phormatter = require('phormatter');
var phone;

phone = '74991234567';
phone = phormatter.format(phone);
console.log(phone); //Output 7 (499) 123-45-67

phone = phormatter.format(phone, ' ', true);
console.log(phone); //Output +7 (499) 123 45 67

phone = '001-800-APPLEGO';
phone = phormatter.format(phone);
console.log(phone); //Output +1 (800) 277-53-46

phone = '+44 (0) 870 770 5370';
phone = phormatter.format(phone);
console.log(phone); //Output +44 (0870) 770-53-70
```

### Support or Contact
Having questions? Contact me using email dev@instup.com
