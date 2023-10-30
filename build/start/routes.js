"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async (ctx) => {
    return ctx.view.render('welcome', { data: ctx });
});
Route_1.default.get('/request', async ({ view, request }) => {
    return view.render('welcome', { data: request.toJSON() });
});
Route_1.default.get('/response', async ({ view, response }) => {
    return view.render('welcome', { data: response });
});
Route_1.default.get('/session', async ({ view, session }) => {
    return view.render('welcome', { data: session.sessionId });
});
Route_1.default.get('/ip', async ({ view, request }) => {
    return view.render('welcome', { data: request.ip() });
});
Route_1.default.get('/user-agent', async ({ view, request }) => {
    return view.render('welcome', { data: request.header('user-agent') });
});
Route_1.default.get('/host', async ({ view, request }) => {
    return view.render('welcome', { data: request.hostname() });
});
//# sourceMappingURL=routes.js.map