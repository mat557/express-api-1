const fs = require('fs');
const rawdata = fs.readFileSync('users.json');
const users = JSON.parse(rawdata);


module.exports.getAllusers = (req,res)=>{
    res.send(users);
}

module.exports.postUser = (req,res)=>{
    const data = req.body;
    users.push(data)
    res.send("Data pushed to the collection!")
}

module.exports.getSingleusers = (req,res)=>{
    const id = req.params.id;
    const user = users.find(user => user.id === Number(id));
    res.status(200).send(user);
}


module.exports.deleteSingleUser = (req,res)=>{
    const id = req.params.id;
    const user = users.filter(user => user.id !== Number(id));
    res.status(200).send(user);
}


module.exports.updateDocument = (req,res)=>{
    const id = req.params.id;
    const {name,gender,contact,address,image} = req.body;
    const user = users.find(user => user.id === Number(id));
    console.log(name,gender,contact,address,image)

    if(name){
        user.name = name;
    }

    if(gender){
        user.gender = gender;
    }

    if(contact){
        user.contact = contact;
    }

    if(address){
        user.address = address;
    }

    if(image){
        user.image = image;
    }

    res.status(200).send(user);
}

