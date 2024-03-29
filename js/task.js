// Task-01-dən Task-06-ya qədər While ilə yazılmalıdır!

// Task-01
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.

// let userNum=+prompt("iki reqemli eded qeyd edin:");
// while (userNum<=100){
//     userNum+=7
// }
// console.log(userNum);


// Task-02
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let n=+prompt("bir eded qeyd edin:");
// let i=0;
// while(i<n){
//     console.log("I know how to use cycles");
//     i++;
// }

// Task-03
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// let i=100;
//     while(i<1000){
//         if(i%10==0){
//         console.log(i)
//         }
//         i++;
// }

// Task-04
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// let i=10
// let total=0
// while(i<=99){
//     if(i%2==1){
//         total+=i;
//     }

//     i++
// }
// console.log(total);

// Task-05
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// let userNum=+prompt("eded daxil edin");
// let i=100;
// let total=0;
// while(i<1000){
//     if (i%userNum==0){
//         total+=i;
//     }
//     i++;
// }
// console.log(total);

// Task-06
// Sadə ədədləri çıxaran proqram yazın.
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.

// let num=prompt("eded daxil edin:")
// while(num>0){
//     let start=num;
//     let count=0
//     while(start>0){
//         if(num%start===0){
//             count++;
//         }
//         start--;
//     }
//     if (count===2){
//         console.log("sade ededdir",num)
//     }
//     num--;
// }



// Task-07-dən Task-10-a qədər for ilə yazılmalıdır!
// Task-07
// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.

// let hasil = 1
// for (let j = 1; j<=10; j++) {
//     hasil=hasil*j;
// }
// hasil++;

// console.log(hasil);

// Task-08
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.
// let text=prompt("metn daxil edin:");
// let bos=text.split(" ");
// let userText=


// console.log();




// Task-09
// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// Task-10 (isNaN)
// Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
// olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.