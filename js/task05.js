// Task-01
// Qrup yoldaşları massivi yaradın və onun üzərində əməliyyatlar aparın.
// Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

// let nameGroup=["Potter", "Harmony","Ron"];
// nameGroup.push("Dambldor");
// nameGroup.shift();
// console.log(nameGroup);




// Task-02(rest-in istifadesi)
// Massiv üzərində əməliyyatlar aparın.
// 10 ədəddən ibarət massiv yaradın.
// İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.

// let num=[2,12,22,32,42,52,62,72,82,92];
// let [numone,numtwo,...other]=num
// console.log(other);



// Task-03
// Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// let arr=[5,10,15,17,66,53,2,31,78,12];
// let max=Math.max(...arr);
// console.log(max);



// Task-04
// Massivin bütün elementlərinin dəyərin ikiqat artırın.
// 5 rəqəmdən ibarət massiv yaradın.
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.

// let num=[3,4,5,6,7];
// let arr=[...num];
// arr.forEach(item=>console.log(item*2));
// console.log(num);





// Task-05
// Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın,
// hansıki proqramlaşma şöbəsinin işçilərini özündə saxlayacaq,
// yəni department özəlliyinin dəyəri «development» olan işçiləri.

// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
// ];
// let development=[]
// employees.forEach(item =>{
//     if(item[1]=="development"){
//     development.push(item[0])
// }
//     })
//     console.log(development);



// Task-06
// Elektron növbəni idarə etmək üçün proqram tərtib edin.
// İstifadəçidən məlumat tələb edən və növbəni yeniləyən proqram tərtib edin.
// - İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.
// - Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə, proqram müştərini növbənin sonuna əlavə edir.
// - İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və soyadını göstərir və onu növbədən çıxarır.
// - İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır.

// Task-07
// Tam ədədlər massivini artan sırada düzən funksiya yazın.
// Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri
// qaytaran sortArray funksiyasını yazın.

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// array.sort((a,b)=>{
//     return a-b
// });
// console.log(array);
// Task-08
// Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.

// let nums=[5,-5,12,6,-8,4,9,-6,2,-2]
// nums.forEach(item => {
//     if(item<0){
//         console.log(item);
//     } 
// });


// Task-09
// Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət ədədləri konsola çıxaran funksiya yazın.
// İterasiya üçün anonim funksiyadan istifadə edin.

// let nums=[5,-5,12,6,-8,4,9,-6,2,-2]
// nums.forEach(item => {
//     if(item>0){
//         console.log(item);
//     } 
// });

// Task-10
// Geri çağırış funksiyalarını yazın (callback) printWithDashes, printWithHearts, printWithIndex.
// Massiv verilmişdir. 3 geri çağırış funksiyası yazın (callback): printWithDashes, printWithHearts, printWithIndex, hansıki onlar belə çağırılan zamanı
// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);
// -array- const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];


// OUTPUT:
// kosnsolda çıxsın:
// -------------
// Michael
// -------------
// -------------
// Trevor
// -------------
// -------------
// Franklin
// -------------
// -------------
// Lamar
// -------------
// -------------
// Jimmy
// -------------
// <3<3<3<3 Michael <3<3<3<3
// <3<3<3<3 Trevor <3<3<3<3
// <3<3<3<3 Franklin <3<3<3<3
// <3<3<3<3 Lamar <3<3<3<3
// <3<3<3<3 Jimmy <3<3<3<3
// 0 - Michael
// 1 - Trevor
// 2 - Franklin
// 3 - Lamar
// 4 - Jimmy


// Task-11
// Kebab-case -də formatında olan mətni UPPER_CASE formatına çevirmək üçün funksiya yazın.
// Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper funksiyasını yazın.
// INPUT: console.log(kebabToUpper('first-user'));
// OUTPUT:  FIRST_USER

// MAP,FILTER,FIND
// Task-12
// Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// // Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];


// Task-13
// Massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın
// Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın.


// Task-14
// A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.
// Adlar massivi verilib. A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.

// Task-15
// ƏDV xaric qiymətlər saxlayan massivini qəbul edən və ƏDV daxil olmaqla olan qiymətlərdən ibarət yeni massiv qaytaran funksiya yazın.
// addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə
// qiymətlərin daxil olduğu massiv yaratın və onu konsola çıxarın. ƏDV 20% təşkil edir.

// Task-16
// Ədədlər massivindəki tək və cüt ədədləri saymaq üçün proqram yazın.
// Rəqəmlər massivini parametr kimi qəbul edən və massivdə neçə tək və cüt ədədin
// olması barədə məlumatıqaytaran countEvensAndOdds() funksiyasını yazın.
// Numune: Funksiya «Massivdə 4 cüt və 2 tək ədəd var» formasında mesaj qaytarır.