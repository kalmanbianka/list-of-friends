export class Friend{
    name: string = '';
    nickname: string = '';
    gender: string = '';
    age: number = 0;
    
    constructor(name: string, gender: string, nickname: string, age: number){
        this.name = name;
        this.gender = gender;
        this.nickname = nickname;
        this.age = age;
    }
}