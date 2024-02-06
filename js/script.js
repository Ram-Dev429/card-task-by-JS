const courses = [
    {   courseId : 4001, 
        courseName : "html&css", 
        Image : "html&css.jpeg", 
        Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta debitis, reiciendis est, iusto nesciunt, totam id libero mollitia voluptatum consequuntur. Esse deserunt dolores, corrupti possimus nihil atque quia eligendi!", 
        courseFee : 8000,
        Duration : "30Days"        
    },

    {   courseId : 4002, 
        courseName : "JavaScript", 
        Image : "js.jpeg", 
        Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta debitis, reiciendis est, iusto nesciunt, totam id libero mollitia voluptatum consequuntur. Esse deserunt dolores, corrupti possimus nihil atque quia eligendi!", 
        courseFee : 15000,
        Duration : "50Days"        
    },

    {   courseId : 4003, 
        courseName : "React JS", 
        Image : "react.jpeg", 
        Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta debitis, reiciendis est, iusto nesciunt, totam id libero mollitia voluptatum consequuntur. Esse deserunt dolores, corrupti possimus nihil atque quia eligendi!", 
        courseFee : 20000,
        Duration : "60Days"        
    },

    {   courseId : 4004, 
        courseName : "MySQL", 
        Image : "mysql.jpeg", 
        Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta debitis, reiciendis est, iusto nesciunt, totam id libero mollitia voluptatum consequuntur. Esse deserunt dolores, corrupti possimus nihil atque quia eligendi!", 
        courseFee : 25000,
        Duration : "75Days"        
    },

    {   courseId : 4005, 
        courseName : "Python", 
        Image : "python.jpeg", 
        Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta debitis, reiciendis est, iusto nesciunt, totam id libero mollitia voluptatum consequuntur. Esse deserunt dolores, corrupti possimus nihil atque quia eligendi!", 
        courseFee : 30000,
        Duration : "90Days"        
    },
    
    {   courseId : 4006, 
        courseName : "PhotoShop", 
        Image : "photoshop.jpeg", 
        Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta debitis, reiciendis est, iusto nesciunt, totam id libero mollitia voluptatum consequuntur. Esse deserunt dolores, corrupti possimus nihil atque quia eligendi!", 
        courseFee : 32000,
        Duration : "100Days"        
    }
]

let txt = "";
for(let i=0; i<courses.length; i++){
    txt += `
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 b-primary mb-3">
                <div class="card">
                    <img src="./images/${courses[i].Image}" alt="">
                    <div class="card-body">
                        <h3 class="h3 card-title text-center text-warning">${courses[i].courseName}</h3>
                        <p class="p card-text">${courses[i].Content}</p>
                        <a href="" class="card-link btn btn-primary text-center mb-2">
                            Read more...</a>
                        <br>
                        <button class="btn btn-success mb-2">
                            Course Fee: ${courses[i].courseFee}</button>
                        <button class="btn btn-warning text-white"> Duration: ${courses[i].Duration}</button>
                    </div>
                </div>
            </div>
    `
}

document.getElementById("crc").innerHTML = txt;