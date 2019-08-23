const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    img:{
        type: String,
        required: [true, "Give me a picture of your pet."]
    },
    name: {
        type: String,
        required: [true, "Give the pet a name."],
        minlength:[3, "Pet name is too short."]

    },
    type: {
        type: String,
        required: [true, "Animal Type is required"],
        minlength: [3, "Animal Type must be 3 characters or longer."]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or longer."]
    },
    likes: {
        type: Number,
        required: [true, "Do you like the pet?"],
        default : 0
    },
    skill_1: {
        type: String
    },
    skill_2: {
        type: String
    },
    skill_3: {
        type: String
    }
}, {timestamps: true});

mongoose.model("Pet", PetSchema);