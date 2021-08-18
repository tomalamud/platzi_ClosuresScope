const person = () => {
  var saveName = "Name";
  return {
      getName: () => {
          return console.log(saveName);
      },
      setName: (name) => {
          saveName = name;
      },
  };
};

let newPerson = person();
newPerson.getName();
newPerson.setName('Tomi');
newPerson.getName();
