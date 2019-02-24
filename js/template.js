/*

For completion from Javascript code snippets use half name + toolbar

ex:  

con tab    constructor
clg tab    console.log()

Others

imp→	imports entire module import fs from 'fs';
imn→	imports entire module without module name import 'animate.css'
imd→	imports only a portion of the module using destructing import {rename} from 'fs';
ime→	imports everything as alias from the module import * as localAlias from 'fs';
ima→	imports only a portion of the module as alias import { rename as localRename } from 'fs';
rqr→	require package require('');
mde→	default module.exports module.exports = {};
enf→	exports name function export const log = (parameter) => { console.log(parameter);};
edf→	exports default function export default (parameter) => { console.log(parameter);};
ecl→	exports default class export default class Calculator { };
ece→	exports default class by extending a base one export default class Calculator extends BaseClass { };
Class helpers
Trigger	Content
con→	adds default constructor in the class constructor() {}
met→	creates a method inside a class add() {}
pge→	creates a getter property get propertyName() {return value;}
pse→	creates a setter property set propertyName(value) {}
Various methods
Trigger	Content
fre→	forEach loop in ES6 syntax array.forEach(currentItem => {})
fof→	for ... of loop for(const item of object) {}
fin→	for ... in loop for(const item in object) {}
anfn→	creates an anonymous function (params) => {}
nfn→	creates a named function const add = (params) => {}
dob→	destructing object syntax const {rename} = fs
dar→	destructing array syntax const [first, second] = [1,2]
sti→	set interval helper method setInterval(() => {});
sto→	set timeout helper method setTimeout(() => {});
prom→	creates a new Promise return new Promise((resolve, reject) => {});
thenc→	adds then and catch declaration to a promise .then((res) => {).catch((err) => {});

*/


