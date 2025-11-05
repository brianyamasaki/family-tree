export type PersonCsv = {
  id:string;
  fname: string;
  lname: string;
  mname: string;
  kanji: string;
  sex: string;
  parentM: string;
  parentF: string;
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
  private f_name: string;
  private l_name: string;
  private m_name: string;
  private m_kanji: string;
  private sex: Sex;
  private parentM: number;
  private parentF: number;
  private m_children: number[];

  constructor(csv: PersonCsv) {
    this.id = parseInt(csv.id, 10) || 0;
    this.f_name = csv.fname;
    this.l_name = csv.lname;
    this.m_name = csv.mname;
    this.m_kanji = csv.kanji;
    this.sex = csv.sex.toUpperCase() === 'M' ? Sex.Male : Sex.Female;
    this.parentM = parseInt(csv.parentM, 10) || -1;
    this.parentF = parseInt(csv.parentF, 10) || -1;
    this.m_children = [];
  }

  get idnum() {
    return this.id;
  }
  get firstName() {
    return this.f_name;
  }
  get lastName() {
    return this.l_name;
  }
  get middleName() {
    return this.m_name;
  }
  get kanji() {
    return this.m_kanji;
  }
  get mother() {
    return this.parentM;
  }
  get father() {
    return this.parentF;
  }
  get children() {
    return this.m_children;
  }

  addChild(id:number) {
    this.m_children.push(id);
  }

  details() {
    return {
      firstName: this.f_name,
      lastName: this.l_name,
      middleName: this.m_name,
      kanji: this.m_kanji,
      sex: this.sex === Sex.Male ? "M" : "F",
      children: this.children.length
    }
  }
}