export type Person = {
  id:number;
  firstName: string;
  lastName: string;
  middleName: string;
  kanji: string;
  family_kanji:string;
  sex: string;
  motherId: number;
  fatherId: number;
  children: number[];
  siblings: number[];
  spouses: number[];
  coparents: number[];
}

