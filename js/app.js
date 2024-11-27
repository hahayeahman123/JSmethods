(()=>{ // various useful functions in JS "methods"


    // .FILTER with an array
    const names=['Tomas', 'Ignas', 'Lukas', 'Martynas', 'Domas', 'Valdimir III'];
    const resultNames=names.filter((names) => names.length>5); // filters a specific array or object by giving it a criteria
    console.log(resultNames);


    // .FILTER with an object
    const students=[
        {
            id: 1,
            name: 'Lukas',
            lastName: 'Sruoga',
            grade: 8.1
        }
        ,
        {
            id: 2,
            name: 'Melita',
            lastName: 'Roze',
            grade: 9.1
        }
        ,
        {
            id: 3,
            name: 'Domas',
            lastName: 'Dumblauskas',
            grade: 2
        }
        ,        
        {
            id: 4,
            name: 'Ignasvicius',
            lastName: 'Gubliauskas',
            grade: 7
        }
        ,
        {
            id: 5,
            name: 'Albertas',
            lastName: 'Kazimieravicius',
            grade: 7.6
        }
    ];

    const resultStudents=students.filter((students)=>students.grade>5); //"resultStudents" becomes a "shallow copy" of the thing its filtering, it gains all the things within the object
    console.log(resultStudents);
    //filter those, whose name is longer than 6 symbols and their grade is higher than 6
    const filteredStudents=students.filter((students)=> students.name.length>6 && students.grade>6);
    console.log(filteredStudents);

    // .MAP with an array
    const numbers =[1,4,6,9];
    const resultNumbers=numbers.map((x)=> x*2); // map uses maths and creates a new array
    console.log(resultNumbers);

    // .MAP with an object

    const upgradeGrades=students.map((students)=> {
        return {
            ...students,
            grade: (students.grade*1.1).toFixed(2)
        }
    });
    console.log(upgradeGrades);


    // Takes the name and removes the last letters until the name is 3 letters long using ".substring" which removes letters from the start and end, giving speciic numbers

    const nameRemover=students.map((students)=>{
        return{
            ...students,
            name: (students.name.substring(3, 0))
        }
    })
    console.log(nameRemover);

    // .SORT    
    let randomNumbers=[3,1,45,323,8];
    console.log(`Without sort: ${randomNumbers}`);
    randomNumbers.sort((a,b)=>{
        if(a<b)return -1;
        if(a>b)return 1;
        return 0;
    });
    console.log(`Sorted: ${randomNumbers}`);

    let userNames=['lukas', 'ieva', 'Domas'];
    console.log(userNames.sort());

    console.log(`Sorted students:`);
    const sortedStudents=students.sort((a,b)=>{
        if(a.grade<b.grade) return 1; // these two values matter if the sort is gonna give you an ascending or descending order
        if(a.grade>b.grade) return -1;
        return 0;
    });
    console.log(sortedStudents);

    // .MATH.MIN .MATH.MAX

    // find the student with the biggest grade and smallest
    console.log(`Studentas, kuriam nesiseka:`);
    let studentWBadGrade=Math.min(...students.map(students => students.grade)); // we find the lowest grade
    let grades=students.map((students)=>students.grade); // we put all the grades in an array
    let badStudent=students[grades.indexOf(studentWBadGrade)]; // we use our array "students" while searching for the bad grade in the []
    
    for(let key in students){ // the better option to find the worst student
        if(students[key].grade==studentWBadGrade)
            console.log(students[key]);
    }

    console.log(badStudent);

    let studentWGoodGrade=Math.max(...students.map(students => students.grade));
    let goodStudent=students[grades.indexOf(studentWGoodGrade)];

    console.log(goodStudent);


    // .REDUCE

    let arrayOfNumbers=[1,2,3,4,5,1,1,1,1,20];
    let sumNumbers=arrayOfNumbers.reduce((acc, cur)=>acc+cur,0);
    console.log(sumNumbers);

    //  figure out the class overall grade

    grades=students.map((students)=>students.grade); // we get the array of all grades
    let totalGrade=grades.reduce((acc, curr)=> acc+ curr,0); // add them to one number with .reduce
    let numberOfStud=students.length; // we get the number of students using .length
    console.log(totalGrade/numberOfStud); // simple division

})();