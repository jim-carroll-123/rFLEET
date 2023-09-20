import { apiHandler } from '../../../../lib/api';
import { shipEngineController } from '../../../../controllers/shipEngine';

module.exports = apiHandler({
    GET: getAll,
});

async function getAll() {
    return await shipEngineController.listCarriers();
}