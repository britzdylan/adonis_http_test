/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async (ctx) => {
  return ctx.view.render('welcome', { data: ctx })
})

Route.get('/request', async ({ view, request }) => {
  return view.render('welcome', { data: request.toJSON() })
})

Route.get('/ip', async ({ view, request }) => {
  return view.render('welcome', { data: request.ip() })
})

Route.get('/user-agent', async ({ view, request }) => {
  return view.render('welcome', { data: request.header('user-agent') })
})

Route.get('/host', async ({ view, request }) => {
  return view.render('welcome', { data: request.hostname() })
})
