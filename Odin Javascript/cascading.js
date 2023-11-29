var usersData=[{firstName: "tommy", lastName: "MalCom", email: "test@test.com", id: 102},
{firstName: "Peter", lastName: "breCht", email: "test2@test2.com", id: 103},
{firstName: "RoHan", lastName: "sahu", email: "test3@test3.com", id: 104}
];

function titleCaseName(str){
    return str.replace(/\w\S*/g,function(txt){
        return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
    });
}

//object with chainable method
var userController= {
    currentUser: "",
    findUser: function (userEmail) {
        var arrayLength=usersData.length,i;
        for (i=arrayLength-1;i>=0;i--){
            if (usersData[i].email===userEmail){
                this.currentUser=usersData[i];
                break;
            }
        }
        return this;
    },
    createLayout:function(){
        if(this.currentUser){
            this.currentUser.viewData="";
            +" ID:"+this.currentUser.id+""+"Email: "+this.currentUser.email+"";
        }
        return this;
    },
    displayUser: function(){
        if (!this.currentUser) return ;
        $(".members-wrapper").append(this.currentUser.viewData);
    }
};


var aUser = userController.findUser("test@test.com");
var formatUserName =  aUser.formatName();
var layoutHTML =  formatUserName.createLayout();
userController.displayUser(layoutHTML);
