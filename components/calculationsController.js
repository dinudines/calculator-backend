const Calculation = require("./Calculation"); 

const calculationsController = {
    getAll: async (req, res) => {
        try {
            const calculations = await Calculation.find();
            res.json({ status: true, calculations });
        } catch (e) {
            res.json({ status: false, error: e });
        }
    },
    createOne: async (req, res) => {
        try {
            const { id, input, output } = req.body;
            const calculation = new Calculation({id, input, output});
            await calculation.save();
            res.json({ status: true});
        } catch (e) {
            res.json({ status: false, error: e });
        }
    },
    clearAll: async (req, res) => {
        try {
            await Calculation.deleteMany();
            res.json({ status: true});
        } catch (e) {
            res.json({ status: false, error: e });
        }
    },
};

module.exports = calculationsController;