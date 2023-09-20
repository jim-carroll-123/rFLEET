import ShipEngine from 'shipengine'

export const shipEngineController = {
    listCarriers
};

const shipengine = new ShipEngine(process.env.SHIPENGINE_API_KEY || '');

async function listCarriers() {
    return shipengine.listCarriers()
}
