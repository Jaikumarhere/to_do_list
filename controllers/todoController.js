const mongoose = require('mongoose');
const expressAsyncHandler = require('express-async-handler');

const Todo = require('../models/todo_models');

exports.createTodo = expressAsyncHandler(async (req, res) => {
    const {task,active } = req.body;
    const todoData = await Todo.create({task,active});
    res.status(201).json({
        success: true,
        data:todoData,
        message:`task is created success`
    });
})


exports.updateTask = expressAsyncHandler(async (req, res) => {
    const {task,active } = req.body;
    const exitTask = await Todo.findOne({ _id:req.params.id})
    if(exitTask)
    {
        exitTask.task = task;
        exitTask.active = active;
        const updateTask = await exitTask.save();
        res.status(200).json({
                success: true,
                data:updateTask,
                message:`task is created updated`
        })
    }
    else
    {
        res.status(401).json({
            success: false,
            data:null,
            message:`task is Not Found`
        })
    }
})

exports.deleteTask = expressAsyncHandler(async (req, res)=>{
    const existTask = await Todo.findOne({ _id:req.params.id})
    if(existTask){
        await existTask.remove();
        res.status(200).json({
            success: true,
            data:null,
            message:`task is removed`
        })
    }
    else
    {
        res.status(401).json({
            success: false,
            data:null,
            message:`task is Not Found`
        })
    }
})