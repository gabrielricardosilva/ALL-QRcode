import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/',PageController.home)
router.get('/pedidos',PageController.pedidos)
router.get('/historia',PageController.historia)
router.get('/cardapio',PageController.cardapio)
router.get('/pagamento',PageController.pagamento)
router.get('/sucessfull',PageController.sucessfull)
router.get('/pix',PageController.pix)
router.get('/pagueagora',PageController.pagueagora)
router.get('/dinheiro',PageController.dinheiro)


router.get('/search',SearchController.search)

export default router
