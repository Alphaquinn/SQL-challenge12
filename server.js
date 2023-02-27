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
            
        }else if (answers.list==="add Employees"){
            addEmployee();


        }else if (answers.list === "add role"){
            allowedNodeEnvironmentFlags();
        }else if (answers.list ==="quit"){
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

//adds new role  

function addrole(){
    db.query("select the id and name of the department",(err, department)=>{
        prompt([
            {
                name: "title",
                type:"input",
                message: "what is the title of the role that you would like to add", 
            },
            {
                name:"salary",
                type:"input",
                message: "what is the salary of this role?",


            },
            {
                name: "department_id",
                type: "list",
                choices: department.map(x=>({name: x.name, value: x.id})),
                message:"what would the department id  be for this added role?",
            },
        ]).then(function(answer){
            db.query("INSERT INTO role SET?",[answer], function(err){
                if (err) throw err;
                console.log("success");
                employerOption();
            });
        });
    })
}



// adds a neew employee

function addEmployee(){
    db.query("select the id, title from the role", (err, manager)=>{
        db.query("select id, last_name from employee", (err, manager)=>{
            prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "what is the first name of the employee that you wuld like to add",

                },
                {
                    name: "last_name",
                    type:"input",
                    message: "what is the last name of the employee that you would like to add",
                },
                {
                    name:"role_id",
                    type: "list",
                    choices: role.map(x=>({name:x.title,value:x.id})),
                    message: "what is the id if the role for this employee?",


                },
                {
                    name: "manager_id",
                    type:"list",
                    choices: manager.map(x=>({name: x.last_name, value: x.id})),
                    message: "what is the manager id for this new employee?",
                },
            ]).then(function(answer){
                db.query("INSERT INTO employee SET?",[answer], function(err){
                    if (err) throw err;
                    console.log("success");
                    employerOption();
                });
            });
        })
    })
}

function viewAllroles(){
   
    db.query( "SELECT role.title, role.salary, department.name, FROM fole LEFT JOIN department on role.department_id=department.id",
        function(err, res){
            if(err)throw err;
            console.table(res);
            employerOption
        }
    );
}


function viewAllDepartments(){
    db.query("SELECT * FROM department", function(err, res){
        if (err) throw err;
        console.table(res);
        employerOption
    });
}

function viewAllEmployees(){
    db.query( "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, manager.first_name AS 'manager_firstname',, manager.last_name AS 'manager_lastname' FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;",
        function(err,res){
            if (err)throw err;
            console.table(res);
            employerOption
        }
    );
}





employerOption();

db.connect((err)=>{
    if (err) throw err;
    console.log("successfully connected");

});