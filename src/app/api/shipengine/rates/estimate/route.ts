import { GetRatesWithShipmentDetailsTypes } from 'shipengine/esm/get-rates-with-shipment-details';
import { apiHandler } from '@lib/api';
import joi from 'joi';
import { shipEngineController } from '@controllers/shipEngine';

/**
 * @swagger
 * /api/shipengine/rates/estimate:
 *   post:
 *     description: Rates Estimate
 *     responses:
 *       200:
 *         description:  Successful
 */

module.exports = apiHandler({
    POST: getRateEstimates
});

async function getRateEstimates(req: Request) {

    const body = await req.json();

    const { rateOptions, shipmentId, shipment } = body;

    const result = await shipEngineController.getRateEstimates({
        rateOptions,
        shipmentId,
        shipment
    } as GetRatesWithShipmentDetailsTypes.Params);

    return result;
}

// getRateEstimates.schema = joi.object({
//     rateOptions: joi.object({
//         carrierIds: joi.array().required()
//     }).required(),
//     shipmentId: joi.string(),
//     shipment: joi.object({
//         shipTo: joi.object().required(),
//         packages: joi.array().required()
//     })
// })