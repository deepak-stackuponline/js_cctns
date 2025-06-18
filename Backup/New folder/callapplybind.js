//Call Apply Bind

const student1 = {
    name: "Student 1",
    getName(age, location){
        console.log(`${this.name} - ${age} - ${location}`);
    }
}
const student2 = {
    name:"Student 2"

}
//function borrowing
student1.getName.call(student2, 10,'Kochi');
student1.getName.apply(student2, [25, 'Alappuzha']);

//for passing extra parameters there is a change


//Bind Function
const bindFn = student1.getName.bind(student2, 10,'Kochi');
bindFn();