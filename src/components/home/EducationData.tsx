export interface Education {
  degree: string;
  school: string;
  year: string;
  highlight?: string;
}

export const education: Education[] = [
  {
    degree: "BE Software Engineering",
    school: "School of Electrical Engineering and Computer Science (SEECS), National University of Sciences & Technology (NUST), Islamabad, Pakistan",
    year: "2019 - 2023",
    highlight: "CGPA: 3.28/4.0 | Washington Accord Accredited Program",
  },
  {
    degree: "Higher Secondary School Certificate (HSSC – FSc), Computer Science",
    school: "KIPS College for Girls, Faisalabad (BISE Faisalabad), Pakistan",
    year: "2017 - 2019",
    highlight: "93% (1023/1100) | Silver Medalist | Quaid-e-Azam Merit Scholarship",
  },
  {
    degree: "Secondary School Certificate (SSC – Matric), Science",
    school: "Masoomeen Foundation Girls High School, Chiniot (BISE Faisalabad), Pakistan",
    year: "2015 - 2017",
    highlight: "95% (1046/1100) | PEEF Merit Scholarship | Chief Minister Laptop Scheme Winner",
  },
];
