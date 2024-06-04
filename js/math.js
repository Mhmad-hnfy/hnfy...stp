let icon = document.getElementsByClassName("icon")[0];
let ull = document.getElementById("ull")
// let but = document.getElementsByClassName("but")[0]
// let passwor = 1296085;
let passwor = "1000000";


icon.addEventListener("click", () => {
    ull.classList.add("ss");

})


document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault(); // يمنع إعادة تحميل الصفحة عند الضغط على زر الإرسال

    var password = document.getElementById("pass").value;

    // تحقق من صحة كلمة المرور
    if (password.length == 7) {
        // إذا كانت صحيحة، قم بتوجيه المستخدم إلى صفحة أخرى
        window.location.href = "html/math-2.html";
        return true; // سيتم إرسال النموذج إذا كانت بيانات الدخول صحيحة
    } else {
        // إذا كانت خاطئة، أظهر رسالة خطأ
        window.alert(" الكود الى ادخلته خطاء");
        document.getElementById("message").innerHTML = "كلمة المرور غير صحيحة. من فضلك حاول مرة أخرى.";
        return false; // لن يتم إرسال النموذج إذا كانت بيانات الدخول غير صحيحة
    }
});

