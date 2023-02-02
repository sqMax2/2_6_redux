// ES 5 example code
// export function logging(store) {
//     return function (next) {
//         return function (action) {
//             console.log('MW');
//             return next(action);
//         };
//     };
// }

// ES 6 code
export const logging = store => next => action => {
    console.log(`Done: `, action);
    return next(action);
}