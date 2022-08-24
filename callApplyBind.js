let person = {
  firstname: "Prashant",
  lastname: "Kumar",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      "from" +
      " " +
      hometown +
      "," +
      state
  );
};

printFullName.call(person, "Jamshedpur", "Jharkhand");

let person2 = {
  firstname: "Indu",
  lastname: "Kumari",
};

printFullName.call(person2, "Sitamarhi", "Bihar");

printFullName.apply(person2, ["Sitamarhi", "Bihar"]);

let printMyName = printFullName.bind(person2, "Sitamarhi", "Bihar");

console.log(printMyName);

printMyName();
