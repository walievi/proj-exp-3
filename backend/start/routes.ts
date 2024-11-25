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
const PatrimonyController = () => import('#controllers/patrimonies_controller')

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
    router.delete('/:id', [EquipamentController, 'destroy'])
  })
  .prefix('/equipament')

  router
  .group(() => {
    router.get('/', [PatrimonyController, 'index'])
    router.post('/', [PatrimonyController, 'store'])
    router.get('/:id', [PatrimonyController, 'show'])
    router.put('/:id', [PatrimonyController, 'update'])
    router.delete('/:id', [PatrimonyController, 'destroy'])
  })
  .prefix('/patrimony')
