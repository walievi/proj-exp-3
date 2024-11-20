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
const EquipamentController = () => import('#controllers/equipament_controller')

router
  .group(() => {
    router.get('/', [CategoryController, 'index'])
    router.post('/', [CategoryController, 'store'])
  })
  .prefix('/category')

router
  .group(() => {
    router.get('/', [EquipamentController, 'index'])
    router.post('/', [EquipamentController, 'store'])
    router.get('/:id', [EquipamentController, 'show'])
    router.put('/:id', [EquipamentController, 'update'])
  })
  .prefix('/equipament')
