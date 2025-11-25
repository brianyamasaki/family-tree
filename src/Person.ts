

export type PersonJson = {
  id:number;
  firstName: string;
  lastName: string;
  middleName: string;
  kanji: string;
  family_kanji:string;
  sex: string;
  motherId: number;
  fatherId: number;
  comment: string;
  children: number[];
  siblings: number[];
  spouses: number[];
  coparents: number[];
}

export class Person {
  json: PersonJson

  constructor(json: PersonJson) {
    this.json = json;
  }
  
  public get id() : number {
    return this.json.id;
  }
  
  public get firstName() : string {
    return this.json.firstName;
  }

  public get lastName() : string {
    return this.json.lastName;
  }

  public get middleName() : string {
    return this.json.middleName;
  }

  public get kanji(): string {
    return this.json.kanji;
  }
  
  public get family_kanji() : string {
    return this.json.family_kanji;
  }
  
  public get sex() : string {
    return this.json.sex;
  }

  public get motherId() : number {
    return this.json.motherId;
  }

  public get fatherId() : number {
    return this.json.fatherId;
  }
  
  public get comment() : string {
    return this.json.comment;
  }
  
  public get children() : number[] {
    return this.json.children;
  }
  
  public get siblings() : number[] {
    return this.json.siblings;
  }  

  public get spouses() : number[] {
    return this.json.spouses;
  }

  public get coparents() : number[] {
    return this.json.coparents;
  }
  
  public static isValidId = (id:number) => {
    return id < 1 ? false : true;
  }
  
}