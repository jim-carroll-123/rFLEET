import { apiHandler } from '@lib/api';
import { shipEngineController } from '@controllers/shipEngine';
import { ValidateAddressesTypes } from 'shipengine';

/**
 * @swagger
 * /api/shipengine/validate-addresses:
 *   post:
 *     description: Validate Addresses
 *     requestBody:
 *       description: Rates Estimate Request
 *     responses:
 *       200:
 *         description:  Successful
 */

module.exports = apiHandler({
    POST: validateAddresses
});

async function validateAddresses(req: Request) {

    const body = await req.json();

    const response = await shipEngineController.validateAddresses(body as ValidateAddressesTypes.Params);

    return { response };
}