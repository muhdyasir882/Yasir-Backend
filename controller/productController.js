import {response} from "express";

import productmodel from "../model/productModel.js";

export const createproductcontroller = async (req, res) =>{
    try{
        const productDatas= req.body;
        const saveData= new productmodel(productDatas);
        saveData.save();

        res.status(201).json({
            status:true,
            message:" product created",
            response: saveData
        })
    } catch (error){
        res.status(500).json({
            status:false,
            message:" internal server error",
            response:error.message
        })

    }
}

     export const getproductControllers = async (req, res) => {
    try {

        const getdata = await productmodel.find();

        res.status(201).json({
            status: true,
            message: "getallproducts",
            response: getdata


        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "internal server error",
            response: error.message
        })
    }
}



  export const productupdate= async (req, res) => {
    try {
        
        const updatedData = req.body;

        const dataupdate = await productmodel.updatedData(
            
            updatedData,         
            {
                new: true,        
                runValidators: true
            }
        );

        if (!dataupdate) {
            return res.status(404).json({
                status: false,
                message: "Data not found",
            });
        }

        res.status(200).json({
            status: true,
            message: "Updated successfully",
            response: dataupdate
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
            response: error.message
        });
    }
};


export const deleteproduct = async (req, res) => {

    try {

        const deleteid = req.params.id;
        console.log(deleteid);


        await productmodel.deleteproduct(deleteid);
        res.status(200).json({
            status: true,
            message: "deleted sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "internal server error",
            response: error.message


        })
    }
}
