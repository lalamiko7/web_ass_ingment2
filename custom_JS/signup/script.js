let uname, uid, email, password, address, zip, country, sex, lang;
let approved_list = new Array(9).fill(false);
let upper_lower = [];
let numbers = [];

window.onload = function() {
    uname = document.getElementById("name");
    uid = document.getElementById("UID");
    email = document.getElementById("email");
    password = document.getElementById("password");
    address = document.getElementById("address");
    zip = document.getElementById("zip");
    country = document.getElementById("country");
    sex = document.getElementById("sex");
    lang = document.getElementById("lang");
    document.getElementById("signin").addEventListener("submit", e => {
        if(!validate()) {
            e.preventDefault();
        } else {
            showAlert();
        }
    }, true);
    for(let i = 0; i < 26; i++) {
        upper_lower.push(i + 65);
        upper_lower.push(i + 97);
    }
    for(let i = 0; i < 10; i++) {
        numbers.push(i + 48);
    }

    uname.addEventListener('blur', e => {
        let rval = false;
        if(uname.value.trim().length > 0) {
            rval = true;
            document.getElementById("namelabel").innerText = "* Name: valid";
        } else {
            document.getElementById("namelabel").innerText = "* Name: Letters Only";
        }
        for(let i = 0; i < uname.value.trim().length; i++) {
            if(!upper_lower.includes(uname.value.trim().charCodeAt(i))) {
                rval = false;
            }
        }
        approved(uname, rval, 0);
    });
    uid.addEventListener('blur', e => {
        let rval = false;
        if(uid.value.charCodeAt(0) >= 65 && uid.value.charCodeAt(0) < 91 
            && uid.value.length < 13 && uid.value.length >= 5 
            && !upper_lower.includes(uid.value.charCodeAt(uid.value.length - 1))) {
            rval = true;
            document.getElementById("uidlabel").innerText = "* User ID: valid";
        } else {
            document.getElementById("uidlabel").innerText = "* User ID: length between 5 and 12.";
        }
        approved(uid, rval, 1);
    });
    email.addEventListener('blur', e => {
        let rval = false;
        if(email.value.split("@").length == 2 
            && email.value.split("@")[0].length > 0
            && email.value.split("@")[1].split(".").length == 2 
            && email.value.split("@")[1].split(".")[0].length > 0
            && email.value.split("@")[1].split(".")[1].length > 0) {
            rval = true;
            document.getElementById("emailspan").innerText = "*";
        } else {
            document.getElementById("emailspan").innerText = "* Invalid email";
        }
        approved(email, rval, 2);
    });
    password.addEventListener('blur', e => {
        let rval = false;
        if(password.value.length >= 12) {
            rval = true;
            document.getElementById("passwordlabel").innerText = "* Valid password";
        } else {
            document.getElementById("passwordlabel").innerText = "* Minimal length of 12, 14 is better.";
        }
        approved(password, rval, 3);
    });
    address.addEventListener('blur', e => {
        approved(address, true, 4);
    });
    zip.addEventListener('blur', e => {
        let rval = false;
        if(zip.value.trim().length >= 6) {
            rval = true;
            for(let i = 0; i < 4; i++) {
                if(!numbers.includes(zip.value.trim().charCodeAt(i))) {
                    rval = false;
                }
            }
            for(let i = -2; i < 0; i++) {
                if(!upper_lower.includes(zip.value.trim().charCodeAt(zip.value.trim().length + i))) {
                    rval = false;
                }
            }
        }
        if(rval) {
            document.getElementById("ziplabel").innerText = "* Valid zip code";
        } else {
            document.getElementById("ziplabel").innerText = "* Dutch postal code as ZIP Code. ";
        }
        approved(zip, rval, 5);
    });
    country.addEventListener('blur', e => {
        let rval = false;
        if(country.value.trim() != "") {
            rval = true;
        }
        approved(country, rval, 6);
    });
    sex.addEventListener('blur', e => {
        let rval = false;
        if(sex.value.trim() != "") {
            rval = true;
        }
        approved(sex, rval, 7);
    });
    lang.addEventListener('blur', e => {
        let rval = false;
        if(lang.value.trim() != "") {
            rval = true;
        }
        approved(lang, rval, 8);
    });
}

function approved(element, bool, i) {
    approved_list[i] = bool;
    element.style.border = "none";
    if(bool) {
        element.style.outline = "1px solid lightgreen";
    } else {
        element.style.outline = "1px solid red";
    }
}

function validate() {
    let rval = true;
    for(let i = 0; i < approved_list.length; i++) {
        rval = rval && approved_list[i];
    }
    return rval;
}

function showAlert() {
    alert("username" + uname.value.trim() + "\nUser ID" + uid.value.trim())

}