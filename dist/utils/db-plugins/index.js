"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginatePlugin = paginatePlugin;
// import { search } from './search';
const paginate_1 = require("./paginate");
function paginatePlugin(schema) {
    schema.statics.paginate = paginate_1.pagination;
}
// export function searchPlugin(schema: Schema) {
//   schema.statics.search = search;
// }
