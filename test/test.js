let supertest = require("supertest").agent(app.listen());

let users = require("../userRoutes.js").users;
let app = require("../app.js");
var request = supertest.agent(app.listen());

describe ("Simple user API : ", function(){
    let test_user = {
        name: "Eri",
        city: "Jakarta, Indonesia"
    };

    it("create a new user", function(done){
         request
            .get("/user")
            .send(test_user)
            .expect("location", /^\/users\/[0-9a-fA-F]{24}$/)
            .end(done);
    });
})