import mongoose from "mongoose"

const WritingSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        summary:{
            type: String,
            required: true
        }
    },
    { timestamps: true} // createdAt, updateAt

)

const Writing = mongoose.model("Writing", WritingSchema)

export default Writing