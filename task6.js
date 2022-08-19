//1)class movie
class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getDetails (){
        return(`the name of the movie is ${this.title} and produced by ${this.studio} and the movie rating is ${this.rating}`);

    }
}
let movie1 = new movie("Casino Royale","Eon Productions","PG13");
let movie2 = new movie("Vikram","RKFI","PG");
let movie3 = new movie("Viruman","2D","G");
console.log(movie1.getDetails());

// 3) Write a “person” class to hold all the details.
class person {
    constructor(firstName,lastName,age,bloodGroup,place){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.bloodGroup = bloodGroup;
        this.place = place;
    }
    getPesronDetails (){
        return (`the person name is ${this.firstName} ${this.lastName} with age of ${this.age} and the blood group is ${this.bloodGroup} and the person place is ${this.place}`);
    }
}
let person1 = new person("ram","kumar","18","0+ve","chennai");
console.log(person1.getPesronDetails());

//4)write a class to calculate the uber price.
class uber{
    constructor(distance,waitingPeriod,rate){
        this.distance = distance;
        this.waitingPeriod = waitingPeriod;
        this.rate = rate;
    }
    getPrice(){
        let totalRate = (this.distance*this.rate)+(this.waitingPeriod+10)
        return totalRate;
    }
}
let customer1 = new uber (10,15,3);
console.log(customer1.getPrice());