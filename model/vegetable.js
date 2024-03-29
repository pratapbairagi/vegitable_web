const mongoose = require("mongoose");

const veg = new mongoose.Schema({

    title : {
        type : String,
        required : [true, "Must be 3 characters atleast."]
    },
    category : {
        type : [String],
        required : [true, "Must be 3 characters atleast."]
    },
    description : {
        type : String,
        required : false
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : [true, "Maximum stock should not exceed 40 or 40kg."],
        default : 0
    },
    // rewiews : [
    //     {
    //         comment : {
    //             type : String
    //         },
    //         rating : {
    //             type : Number,
    //             default : 0
    //         },
    //         user : {
    //             type : mongoose.Schema.ObjectId,
    //             ref : "user"
    //         },
    //         name : {
    //             type : String
    //         },
    //         time : {
    //             type : Date,
    //             default : Date()
    //         }
    //     }
    // ],
    rating : {
        type : Number,
        default : 0
    },
    tags : {
        type : [String],
        required : [true, "Tag must have two charachters atlseat"]
    },
    features : [
        {
            feature : {
                type : String
            },
            value : {
                type : String
            },
            _id : {
                tpye : Number
            }
        }
    ],
    images : [
        {
            public_id : {
                type : String
            },
            url : {
                type : String
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now
    },
    sold : {
        type : Number,
        default : 0
    }
    // seller : {
    //    name: {
    //    type : mongoose.Schema.ObjectId,
    //     ref : "user"
    //    },
    //    id : {
    //     type : String
    //    }
    // }
});

const Vegetable = new mongoose.model("vegetable", veg)

module.exports = Vegetable