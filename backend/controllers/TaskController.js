const TaskModel=require("../Models/TaskModels")

module.exports.getTask=async(req,res)=>{
const tasks=await TaskModel.find()
res.send(tasks)
}

module.exports.SaveTask=(req,res)=>{
    const {task}= req.body


    TaskModel.create({task}).then((data)=>{
        console.log("saved successfully...");
        res.status(201).send(data)
    }).catch((err)=>{
        console.log(err)
        res.send({error:err,msg:"Something went wrong!"})
    })
    };


    module.exports.UpdateTask=(req,res)=>{
        const {id }= req.params
        const {task}=req.body

    
        TaskModel.findOneAndUpdate(id,{task}).then((data)=>{
            console.log("update successfully...");
            res.status(201).send(data)
        }).catch((err)=>{
            console.log(err)
            res.send({error:err,msg:"Something went wrong!"})
        })
        };

        module.exports.DeleteTask=(req,res)=>{
            const {id }= req.params
    
        
            TaskModel.findOneAndDelete(id).then((data)=>{
                console.log("Delete successfully...");
                res.status(201).send(data)
            }).catch((err)=>{
                console.log(err)
                res.send({error:err,msg:"Something went wrong!"})
            })
            };