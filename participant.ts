export class Participant {
    firstName : string
    lastName : string
    gender : string
    email : string
    password : string
    confirmPassword : string
    address : string  
    state : string
    zip : string
    check : string
    dob : Date

    constructor(firstName : string = "", lastName : string = "", gender : string = "", email : string = "", 
    password : string = "",confirmPassword : string = "", address : string = "", state : string = "", zip : string = "", check : string = "", dob : Date = new Date())
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.address = address;
        this.state = state;
        this.zip = zip;
        this.check = check;
        this.dob = dob
    }
}
