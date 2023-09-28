import { apiHandler } from '@lib/api';
import { shipEngineController } from '@controllers/shipEngine';
import { CreateLabelFromShipmentDetailsTypes } from 'shipengine/esm/create-label-from-shipment-details';

/**
 * @swagger
 * /api/shipengine/create-label-from-shipment-details:
 *   post:
 *     description: Create Label From Shipment Details
 *     requestBody:
 *       description: Create Label From Shipment Details Request
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateLabelFromShipmentDetailsRequest'
 *     responses:
 *       200:
 *         description:  Successful
 */

module.exports = apiHandler({
    POST: createLabelFromShipmentDetails
});

async function createLabelFromShipmentDetails(req: Request) {

    const body = await req.json();

    const { shipment } = body;

    const response = await shipEngineController.createLabelFromShipmentDetails({
        shipment
    } as CreateLabelFromShipmentDetailsTypes.Params);

    return { response };
}