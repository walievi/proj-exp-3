/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const CategoryController = () => import('#controllers/category_controller')

router
  .group(() => {
    router.get('/', [CategoryController, 'index'])
    router.post('/', [CategoryController, 'store'])
  })
  .prefix('/category')
