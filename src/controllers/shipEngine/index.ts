import { GetRatesWithShipmentDetailsTypes } from 'shipengine/esm/get-rates-with-shipment-details';
import ShipEngine from 'shipengine'

export const shipEngineController = {
    listCarriers,
    getRateEstimates
};

const shipengine = new ShipEngine(process.env.SHIPENGINE_API_KEY || '');

async function listCarriers() {
    return shipengine.listCarriers()
}

async function getRateEstimates(params: GetRatesWithShipmentDetailsTypes.Params) {
    try {
      const result = await shipengine.getRatesWithShipmentDetails(params);

      return result;
    } catch (e: any) {
      throw "Error creating rates: " + e.message;
    }
}