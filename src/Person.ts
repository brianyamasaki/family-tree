export type PersonCsv = {
  id:string;
  first_name: string;
  last_name: string;
  middle_name: string;
  family_kanji: string;
  kanji: string;
  sex: string;
  father: string;
  mother: string;
}

export type PersonNode = {
  id:number;
  fname: string;
  lname: string;
  mname: string;
  kanji: string;
  sex: string;
  parentM: number;
  parentF: number;
}

export enum Sex {
  Male,
  Female
};

export class Person {
  private id:number;
  private m_firstName: string;
  private m_lastName: string;
  private m_middleName: string;
  private m_kanji: string;
  private m_sex: Sex;
  private parentM: number;
  private parentF: number;
  private m_children: number[];

  constructor(csv: PersonCsv) {
    this.id = parseInt(csv.id, 10) || 0;
    this.m_firstName = csv.first_name;
    this.m_lastName = csv.last_name;
    this.m_middleName = csv.middle_name;
    this.m_kanji = csv.kanji;
    this.m_sex = csv.sex.toUpperCase() === 'M' ? Sex.Male : Sex.Female;
    this.parentM = parseInt(csv.father, 10) || -1;
    this.parentF = parseInt(csv.mother, 10) || -1;
    this.m_children = [];
  }

  get idnum() {
    return this.id;
  }
  get firstName() {
    return this.m_firstName;
  }
  get lastName() {
    return this.m_lastName;
  }
  get middleName() {
    return this.m_middleName;
  }
  get kanji() {
    return this.m_kanji;
  }
  get motherId() {
    return this.parentF;
  }
  get fatherId() {
    return this.parentM;
  }
  get children() {
    return this.m_children;
  }

  addChild(id:number) {
    this.m_children.push(id);
  }

  details() {
    return {
      id: this.id,
      firstName: this.m_firstName,
      lastName: this.m_lastName,
      middleName: this.m_middleName,
      kanji: this.m_kanji,
      sex: this.m_sex === Sex.Male ? "M" : "F",
      children: this.children.length
    }
  }
}