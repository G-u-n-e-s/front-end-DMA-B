// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın
// let name="Deniz"
// let name_2="Gunes"
// let name_3="Adel"
// function welcome(param){
//     console.log(`${param}is active now`);
// }
// welcome(name);
// welcome(name_2);
// welcome(name_3);


// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın



// let a=18
// let b=8
// let c=7
//     function numbers(num1,num2,num3){
//         let big
//         if(num1>num2&&num1>num3){
//         big=num1
//         }else if(num2>num1&&num2>num3){
//             big=num2
//         }else if(num3>num2&&num3>num1)
//         big=num3
//         return big
//     }
//     console.log(numbers(a,b,c));

// 
// Task-03
// Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// function convertFunc(usd,rubl){
// let balance=(usd*75)+rubl;
// console.log(balance,"rubl");
// }
// convertFunc(20,1200)


// Task-04
// Klaviaturadan 1-dən 99-da daxil olmaqla daxil edilmiş ədədi mətnlə ​​yazan funksiya tərtib edin.
// İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
// onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
// Birdən ona qədər rəqəmin daxil edilməsi zamanı boşluqsuz bir söz göstərilir.(bir ,iki, üç və.s)
// Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
// məsələn, "iyirmi bir".
// let num=prompt();
// function onluq (param){
//     switch(param){
//         case "1":
//             return "On"
//         case "2":
//             return "Iyirmi"
//         case "3":
//             return "Otuz"
//         case "4":
//             return "Qırx"
//         case "5":
//             return "Əlli"
//         case "6":
//             return "Altmış"
//         case "7":
//             return "Yetmiş"
//         case "8":
//             return "Səksən"
//         case "9":
//             return "Doxsan"
//     }

// }

// function teklik (param){
//     switch(param){
//         case "1":
//             return "Bir"
//         case "2":
//             return "İki"
//         case "3":
//             return "Üç"
//         case "4":
//             return "Dörd"
//         case "5":
//             return "Beş"
//         case "6":
//             return "Altı"
//         case "7":
//             return "Yeddi"
//         case "8":
//             return "Səkkiz"
//         case "9": 
//             return "Doqquz"
//     }

// }

// function numberToText(){
//     if(num.length===1){
//         console.log(teklik(num));
//     }else if(num.length===2 && num[1]==="0"){
//         console.log(onluq(num[0]));
//     }else if (num.length===2 && num[1]!=="0"){
//         console.log(onluq(num[0]),teklik(num[1]));
//     }

// }

// numberToText();

// Task-05
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.
// function min(param1,param2){
//     if(param1>param2){
//         console.log(param2);
//     }else if(param1<param2){
//         console.log(param1);
//     }
// }
// min(25,19);

// Task-06
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// function calc(a,b,c){
//     switch(c){
//         case "+":
//             console.log(a+b);
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "*":
//             console.log(a+b);
//             break;
//         case "/":
//             console.log(a+b);
//             break;
//         default:
//             console.log("Yalnis deyer")

//     }
// }
// calc(25,10,"+");

// Task-07
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq

// function isLucky(num){
//     let strNum=String(num);
//     if (+strNum[0]+ +strNum[1]+ +strNum[2]===+strNum[3]+ +strNum[4]+ +strNum[5]){
//         return true
//     }
//     return false
// }
// console.log(isLucky(234801));


// ((((((((((((((((((Task-08
// capitalizeWords funksiyasını yazın.
// Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
// Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
// Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.))))))))))))))))))

// Task-09
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven () funksiyasını yazın.

// function isEven(num){
//     if (num%2!==0){
//         console.log("tək")
//     }else if(num%2===0){
//         console.log("cüt")
//     }
// }
// isEven(20);
    


// Task-10
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +71234567890

// function isvalidnumber(telnum){
//     if(telnum[0]==="+" && telnum.length===13){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }
// isvalidnumber(+7123456789989);

// Task-11
// Mətni parametr kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.
// "15263538479359486()-="';:!@#$%^&*()"
// REGEX()

// let sy="1234567890()-_=+*&^%$ #@.,<>/?{}[]!``~\"|"
// let txt="lorem 6327163.,/#^&+ ejkGun$%*e#2l"
// let result=""
// for(let i=0; i<txt.length;i++){
//     if(!sy.includes(txt[i])){
//         result+=txt[i]
//     }
// }
// console.log(result.length);


