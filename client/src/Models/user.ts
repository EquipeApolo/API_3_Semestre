export default class User{
    private name!: string;
    private email!: string;
    private password!: string;
    private typeUser!: string;

    constructor(name: string, email: string, password: string, typeUser: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.typeUser = typeUser;
    }

    set setName(value: string){
        this.name = value;
    }
    
    set setEmail(value: string) {
        this.email = value;
    }

    set setPassword(value: string) {
        this.password = value;
    }

    set setTypeUser(value: string) {
        this.typeUser = value;
    }

    get getName(): string { return this.name; }

    get getEmail(): string{ return this.email; }

    get getPassword(): string { return this.password; }

    get getTypeUser(): string { return this.typeUser; }
}