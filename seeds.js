var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[
    {
        name:"first",
        image:"https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"blah blah blah"
    },
    {
        name:"second",
        image:"https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"blah blah blah"
    },
    {
        name:"third",
        image:"https://images.unsplash.com/photo-1593782469547-eff713d4d7eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"blah blah blah"
    }
]

function seedDB() {
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("Removed campgrounds.");
              //Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added a campground..");
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish I had internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment.");
                                }
                            });
                    }
                });
            });
    });
   //Add a few comments
}
module.exports=seedDB;