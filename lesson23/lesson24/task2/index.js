// функция принимае массив объектов
// getMounth  имя загушить в масив сообтветствующего месяца
// getDate  массив отсортировать по дате

const studentsBirthDays = (students) => {
  const result = {
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    Jun: [],
    Jul: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  };
  students
    .sort(
      (a, b) =>
        new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
    )
    .map(({ name, birthDate }) => {
      console.log(name);
      const monthStud = new Date(birthDate).toLocaleString("en", {
        month: "short",
      });
      result[monthStud].push(name);
      console.log(result);
      console.log(new Date(birthDate).getDate());
    });
  console.log(students);
};

studentsBirthDays([
  { name: "Tom", birthDate: "09/15/2010" },
  { name: "Ben", birthDate: "10/17/2008" },
  { name: "Sam", birthDate: "12/15/2010" },
]);
