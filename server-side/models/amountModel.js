import mongoose from "mongoose";

const EarningSchema = new mongoose.Schema({
    amount: { type: Number, required: true }
}, {timestamps: true});

const Earning = mongoose.model("Earning", EarningSchema);

export default Earning;