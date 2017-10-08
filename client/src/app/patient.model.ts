
export class Patient {
  public email: string;
  public firstname: string;
  public lastname: string;
  public age: number;
  public DOB: any;
  public gender: string;
  public phone: number;
  public freetext: string;
  public date:string;

  constructor(email: string, firstname: string, lastname: string,
                age: number, DOB: any, gender: string,
                phone: number, freetext: string, date: string
                ) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.DOB = DOB;
    this.gender = gender;
    this.phone = phone;
    this.freetext = freetext;
    this.date=date;
  }
}
