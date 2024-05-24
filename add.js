let plus = function plus_fun() {
    let first_num = document.getElementById("one").value;
    first_num = Number(first_num);
    let second_num = document.getElementById('two').value;
    second_num = Number(second_num);
    alert(first_num+second_num);
}