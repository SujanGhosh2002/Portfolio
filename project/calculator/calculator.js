function div() {
    var a = 0, b = 0;
    a = sujan.ghosh.value;
    b = a.charAt(a.length - 1);
    if (b == '/' || b == '*' || b == '-' || b == '+') {
        sujan.ghosh.value = a.substring(0, a.length - 1);
        sujan.ghosh.value += '/';
    }
    else {
        sujan.ghosh.value += '/';
    }
}
function mul() {
    var a = 0, b = 0;
    a = sujan.ghosh.value;
    b = a.charAt(a.length - 1);
    if (b == '/' || b == '*' || b == '-' || b == '+') {
        sujan.ghosh.value = a.substring(0, a.length - 1);
        sujan.ghosh.value += '*';
    }
    else {
        sujan.ghosh.value += '*';
    }
}
function sub() {
    var a = 0, b = 0;
    a = sujan.ghosh.value;
    b = a.charAt(a.length - 1);
    if (b == '/' || b == '*' || b == '-' || b == '+') {
        sujan.ghosh.value = a.substring(0, a.length - 1);
        sujan.ghosh.value += '-';
    }
    else {
        sujan.ghosh.value += '-';
    }
}
function add() {
    var a = 0, b = 0;
    a = sujan.ghosh.value;
    b = a.charAt(a.length - 1);
    if (b == '/' || b == '*' || b == '-' || b == '+') {
        sujan.ghosh.value = a.substring(0, a.length - 1);
        sujan.ghosh.value += '+';
    }
    else {
        sujan.ghosh.value += '+';
    }
}
function cut() {
    var a = 0;
    a = sujan.ghosh.value;
    sujan.ghosh.value = a.substring(0, a.length - 1);
}