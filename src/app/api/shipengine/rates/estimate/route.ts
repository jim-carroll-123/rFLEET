import { GetRatesWithShipmentDetailsTypes } from 'shipengine/esm/get-rates-with-shipment-details';
import { apiHandler } from '../../../../../lib/api';
import { cookies } from 'next/headers';
import joi from 'joi';
import { shipEngineController } from '../../../../../controllers/shipEngine';

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

getRateEstimates.schema = joi.object({
    rateOptions: joi.object({
        carrierIds: joi.array().required()
    }).required(),
    shipmentId: joi.string(),
    shipment: joi.object({
        shipTo: joi.object().required(),
        packages: joi.array().required()
    })
})