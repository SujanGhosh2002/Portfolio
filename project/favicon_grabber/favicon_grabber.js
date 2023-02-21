function valid_url(string) {
    var syntax_url = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (syntax_url !== null)
}

function favicon_check_url() {

    var favicon_url = document.getElementById("favicon-url").value;

    if (favicon_url == "") {

        alert("Please Enter URL");

    }

    else if (favicon_url !== "" && valid_url(favicon_url) == true) {
        favicon_check_size();
    }

    else {
        alert("Please Enter Valid URL");
    }

}

function favicon_check_size() {
    var favicon_url = document.getElementById("favicon-url").value;
    var favicon_img = document.getElementById("favicon-img");
    var favicon_size = document.getElementById("favicon-size").value;
    var duckapi = "https://icons.duckduckgo.com/ip3/";
    var googleapi = "https://s2.googleusercontent.com/s2/favicons?domain=";
    if (favicon_size == "default") {
        var type1 = "https://";
        var type2 = "http://";

        favicon_url = favicon_url.replace(type1, "");
        favicon_url = favicon_url.replace(type2, "");

        favicon_img.src = duckapi + favicon_url + ".ico";
    }

    else if (favicon_size == "16") {

        favicon_img.src = googleapi + favicon_url + "&sz=16";
    }

    else if (favicon_size == "32") {

        favicon_img.src = googleapi + favicon_url + "&sz=32";
    }

    else if (favicon_size == "48") {

        favicon_img.src = googleapi + favicon_url + "&sz=48";
    }

    else if (favicon_size == "64") {

        favicon_img.src = googleapi + favicon_url + "&sz=64";
    }

    else if (favicon_size == "128") {

        favicon_img.src = googleapi + favicon_url + "&sz=128";
    }
}








// function valid_url(string) {
//     var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
//     return (res !== null)
// }
// function check_url()
// {
//     var favicon_url=document.getElementById("favicon_url").value
//     if (favicon_text!=="")
//     {
//         alert("Plesse Enter URL");
//     }
//     else if(favicon_url!=="" && mysize==valid_url(favicon_url))
//     {
//         checksize();
//     }
//     else
//     {
//         alert("Please Enter Valid URL");
//     }
// }
// function checksize()
// {
//     var googleapi="https://s2.googleusercontent.com/s2/favicons?domain=";
//     var duckapi="https://icons.duckduckgo.com/ip3/";
//     var favicon_img=document.getElementById("img");
//     var favicon_url=document.getElementById("favicon_url").value
//     var favicon_size=document.getElementById("size").value;
//     if (favicon_size=="default")
//     {
//         var type1="https://";
//         var type2="http://";
//         favicon_url=favicon_url.replace(type1,"");
//         favicon_url=favicon_url.replace(type2,"");
//         favicon_img.src=duckapi+favicon_url+".ico";
//     }
//     else if(favicon_size==16)
//     {
//         favicon_img.src=googleapi+favicon_url+"&sz=16";
//     }
//     else if(favicon_size==32)
//     {
//         favicon_img.src=googleapi+favicon_url+"&sz=32";
//     }
//     else if(favicon_size==48)
//     {
//         favicon_img.src=googleapi+favicon_url+"&sz=48";
//     }
//     else if(favicon_size==64)
//     {
//         favicon_img.src=googleapi+favicon_url+"&sz=64";
//     }
//     else if(favicon_size==128)
//     {
//         favicon_img.src=googleapi+favicon_url+"&sz=128";
//     }
// }