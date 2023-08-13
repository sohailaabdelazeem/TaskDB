const mongodb=require("mongodb")
const mongoClint=mongodb.MongoClient
const connectionUrl='mongodb://127.0.0.1:27017'

const dbname="TaskDB"
mongoClint.connect(connectionUrl,(error,res)=>{
    if(error){
        console.log("error Has Occures")
    }
    console.log("All Prefect")
    const db=res.db(dbname)

    ///////////InsertOne_Two Doument//////////
    db.collection("User").insertOne({
        name:"Isalm",
        age:20
    },(error,data)=>{
        if(error){
            console.log("Error !")
        }
        console.log(data.insertedId)
    })
    db.collection("User").insertOne({
        name:"Osama",
        age:24
    },(error,data)=>{
        if(error){
            console.log("Error !")
        }
        console.log(data.insertedId)
    })
     ///////////InsertMany//////////
     db.collection("User").insertMany(
        [
            {
                name:"Mohamed",
                age:27
            },
            {
                name:"Reem",
                age:22
            },
            {
                name:"Hager",
                age:20
            },
            {
                name:"Sara",
                age:27
            },
            {
                name:"Hala",
                age:27
            },
            {
                name:"Ahmed",
                age:27
            },
            {
                name:"Alia",
                age:30
            },
            {
                name:"Yassof",
                age:21
            },
            {
                name:"Fatem",
                age:33
            },
            {
                name:"Ali",
                age:27
            },
        ],(error,data)=>{
            if(error){
                console.log("Error !")
            }
            console.log(data.insertedCount)
        }
     )

     ///////////////////Find (age==27)/////////
     db.collection("User").find({age:27}).toArray((error,data)=>{
        if(error){
            console.log("Error !")
        }
        // console.log(data)
     })
     ///////////////////////////////////////
    //   db.collection("User").find({age:27}).limit(3).toArray((error,data)=>{
    //     if(error){
    //         console.log("Error !")
    //     }
    //     console.log(data)
    //  })
     ////////////////////// $set  name 4////////////////////
     db.collection("User").updateOne({_id:mongodb. ObjectId("64d82cfbdef11640b3e64765")},{
        $set:{name:"Mohamed"}
     }) 
     db.collection("User").updateOne({_id:mongodb. ObjectId("64d82d268f7354bf364776c6")},{
        $set:{name:"Mohamed"}
     }) 
     db.collection("User").updateOne({_id:mongodb. ObjectId("64d82d268f7354bf364776c7")},{
        $set:{name:"Mohamed"}
     }) 
     db.collection("User").updateOne({_id:mongodb. ObjectId("64d82e6eec126e323c8ef81c")},{
        $set:{name:"Mohamed"}
     }) 
     //////////////////updateOne  for 1    inc  20//////////////////////////////
     db.collection("User").updateOne({age:20},{
        $set:{name:"Mohamed"}
     }).then((data)=>{console.log(data.modifiedCount)})
     .catch((error)=>{console.log(error)})
     ////////////////// updateMany  inc  age  10////////////////////////////////
     db.collection("User").updateMany({},{
        $inc:{age:10}
     }).then((data)=>{console.log(data.modifiedCount)})
     .catch((error)=>{console.log(error)})
     ////////////////////deleteOne ////////////////////////////////////////////////
    db.collection("User").deleteOne({_id:mongodb. ObjectId("64d82cfbdef11640b3e64765")})
    . then((data)=>{console.log(data.deletedCount)})
    .catch((error)=>{console.log(error)})
    //////////////////////////deleteMany   age  35/////////////////////////////////
    db.collection("User").deleteOne({age:35}).
    then((data)=>{console.log(data.deletedCount)})
    .catch((error)=>{console.log(error)})



})

  