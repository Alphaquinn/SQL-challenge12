const db = require("./db/connection");
const table = require ("console.table");
const {prompt} = require ("inquirer"); 



function employerOption() {
    prompt([
        {
            type:"list",
            message: "Welcome, what would you like to do?",
            name:"list",
            choices:[
                "view All Departments",
                "view all roles",
                "view all employees",
                "add Departments",
                "add employees",
                "add role",
                "quit",
            ],
        },
    ]).then((answers)=>{
        if (answers.list==="view All Departments"){
            viewAllDepartments();
        }else if (answers.list==="view all roles"){
            viewAllroles();
           
        }else if (answers.list==="view all employees"){
            viewAllEmployees();
        }else if (answers.list ==="add Department"){
            addDepartment();
            
        }else if (answer.list==="add Employees"){
            addEmployee();


        }else if (answer.list === "add role"){
            allowedNodeEnvironmentFlags();
        }else if (answer.list ==="quit"){
            db.end();
        }
        
    })
}

//addds a department
function addDepartment(){
    prompt([
        {
            name:"name",
            type:"input",
            message: "What department are you looking for?",

        },

    ]).then(function(answer){
        db.query("insert department set?", [answer],function(err){
            if (err)throw err;
            console.log("success");
            employerOption();
        });
    });
}