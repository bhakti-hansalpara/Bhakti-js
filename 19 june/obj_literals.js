  //name and objcet name is same then you only write same name and coma 
  let name="bhakti";
let feild="computer";
let obj={
    name,
    feild,
};
    console.log(obj);


    //without using . to call objects method

    var obj={
        age:18
    };
    console.log(obj['age']);

    var obj={
        name:"bhakti"
    };
    console.log(obj["name"]);

    //

    var n="name";
    let obj={
        [n]:"bhakti"
    };
    console.log(obj);

    var n="student";
    let obj={
        [n +""+"name"]:"bhakti",
        course:"bteach",
        detail: function(){
            return `${this.studentname} is student of ${this.course}`
        }
    };
    console.log(obj);
    console.log(obj.detail());

    //new funstion systex
    let obj={
        name:"bhakti",
        show(){
            console.log(this.name);
        }
    };
    obj.show();

    //short in function

    let n="student";
    var obj={
        [n +""+"name"]:"bhakti",
        course:"bteach",
        'details show'(){
            return `${this.studentname} is student of ${this.course}`
        }   
    };
    console.log(obj);
    console.log(obj['details show']());

    //

    let name="bhakti";
    let course="computer";
    function student(name,course) {
        return{name,course};
    }
    console.log(student(name,course));

    //return function to call value

    let lname="bhakti";
    let fname="patel";
    let course="computer";

    function student(lname,fname,course){
        let fullname= lname+" "+fname;
        return{fullname,course}
    } let s=student(fname, lname, course);
    console.log(s.fullname);
    console.log(s.course);

    