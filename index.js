// Створити змінні для року народження, імені другої дитини, робочого телефону.
//     Бажано одинм рядком, використовуючи деструктуризацію.


"use strict"

const user = {
    id:1,
    privateInfo:{
        fname:"Brad",
        sname:"Pitt",
        bday:{
            day:18,
            month:12,
            year:1963,
        },
        children:['Helen','Alex','Georg','Anna'],
    },
    contactInfo:{
        phone:{
            work:'123-12-45',
            mobile:'005-002-003',
        },
        adress:{
            town:'ZP',
            street:'12Avenu',
            house:45,
        },
        mail:'brad@gmail.com'
    },
    profession:'actor'
}

const {
    privateInfo: {bday:{year:userYearBorn}, children:userChildrenName},
    contactInfo: { phone:{mobile:userMobilePhone}}
} = user;


console.log(userYearBorn);
console.log(userMobilePhone);
console.log(userChildrenName[1]);