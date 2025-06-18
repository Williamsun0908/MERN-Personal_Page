import Writing from "../models/writing.js"

export async function getWriting(_, res) {
    try{
        const writings = await Writing.find().sort({createdAt:-1}) // newest first
        res.status(200).json(writings)

    } catch (error) {
        console.error("Error in getWriting controller", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export async function getWritingById(req,res){
    try{
        const writing = await Writing.findById(req.params.id)
        if(!writing) return res.status(404).json({message: "Writing not found"})
        res.json(writing)

    } catch (error) {
        console.error("Error in getWritingById controller", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}
export async function createWriting(req, res) {
    try {
        const {title,content,summary} = req.body
        const newWriting = new Writing({title, content, summary})

        await newWriting.save()
        res.status(201).json({ message: "Writing created successfully" })

    } catch (error) {
        console.error("Error in createWriting controller", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}
export async function updateWriting(req,res) {
    try {
        const {title,content} = req.body
        const updatedWriting = await Writing.findByIdAndUpdate(
            req.params.id, 
            {title, content, summary},
        {
            new: true,
        })
        if(!updatedWriting) return res.status(404).json({ message: "Writing not found"})
        res.status(200).json({updatedWriting})

    } catch (error) {
        console.error("Error in updateData controller", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}
export async function deleteWriting(req,res) {
    try {
        const deletedWriting = await Writing.findByIdAndDelete(req.params.id)

        if(!deletedWriting) return res.status(404).json({ message: "Writing not found"})
        res.status(200).json({deletedWriting})

    } catch (error) {
        console.error("Error in updateData controller", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}