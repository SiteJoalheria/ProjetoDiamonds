// const express = require('express');
// const exphbs = require('express-handlebars');
// const handlebars = require('handlebars');

// const app = express();

// // Configuração do Handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');




// /// Helper 'ifCond' para comparação condicional
// function ifCond(v1, operator, v2, options) {
//     switch (operator) {
//       case '==':
//         return v1 == v2 ? options.fn(this) : options.inverse(this);
//       case '===':
//         return v1 === v2 ? options.fn(this) : options.inverse(this);
//       case '!=':
//         return v1 != v2 ? options.fn(this) : options.inverse(this);
//       case '!==':
//         return v1 !== v2 ? options.fn(this) : options.inverse(this);
//       case '<':
//         return v1 < v2 ? options.fn(this) : options.inverse(this);
//       case '<=':
//         return v1 <= v2 ? options.fn(this) : options.inverse(this);
//       case '>':
//         return v1 > v2 ? options.fn(this) : options.inverse(this);
//       case '>=':
//         return v1 >= v2 ? options.fn(this) : options.inverse(this);
//       case '&&':
//         return v1 && v2 ? options.fn(this) : options.inverse(this);
//       case '||':
//         return v1 || v2 ? options.fn(this) : options.inverse(this);
//         default:
//         return options.inverse(this);
//     }
// }

// module.exports = {
//     ifCond: ifCond
// };

