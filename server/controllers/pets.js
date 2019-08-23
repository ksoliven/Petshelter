const Pet = require('mongoose').model("Pet");

class PetController {
    getAll(req, res){
        Pet.find({}).sort('type')
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    create(req, res){
        let pet = new Pet(req.body);
        // if(pet.name == req.body.name){
        //     return res.json({ errors : { name: { message: "This pet is in the database."}}})
        // }
        // else
        // {
            pet.save()
            .then(() => res.json(pet))
            .catch(err => res.json(err));
    } 
    update(req, res){
        Pet.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    remove(req, res){
        Pet.findOneAndRemove({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }

    // likePet(req, res){
    //     Pet.findByIdAndUpdate({ _id: req.params.id }, { $inc: { "likes": 1 } })
    //         .then(likes => res.json(likes))
    //         .catch(err => res.json(err))
    // }

}


module.exports = new PetController();