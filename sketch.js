const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    
    Engine.update(engine);

    // write code to display time in correct format here
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch{"abbreviation":"IST","client_ip":"42.60.235.227","datetime":"2021-07-05T08:14:42.558270+05:30","day_of_week":1,"day_of_year":186,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1625453082,"utc_datetime":"2021-07-05T02:44:42.558270+00:00","utc_offset":"+05:30","week_number":27}

    // write code slice the datetime
    hour = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";  
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
