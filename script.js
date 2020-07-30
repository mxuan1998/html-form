// Email field
let passwordIsStrong = false;
const inputEmail = document.getElementById('inputEmail');

inputEmail.addEventListener('change', (e) => {
    const emailError = document.getElementById('emailError');
    if (emailIsValid(inputEmail.value)) {
        inputEmail.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAABHVBMVEVHcEwrnxsAAAArnxsroBsAgAAqnhornxsrnxsnnRQroBspnhopnxsrnxosoBwrnxwroBsroBsomhsrnxsamRoroBssoBwrnxwrnxwrgAAonRspnBkqoBssnxwgnxAsoBsmnhcnmxcsoBssnxwrnxselg8qoBsooBkrnxssoBwpnxopnRkroBsroBsrnBUroBsroBsqnxornhopnxornxwsnxwrnxwnnRoroBsmnxoroBsrnxsnnRkrnxgqnhwrnxwXixcrnhspnxwrnxornxwsnxsrnxsrnxwsnxwroBwrnxosnxosnxssoBsroBwrnBgrnhwAmQAolBssnhoqoBwrnxsroBomlxMonxgrnxUrnxsonhgrnxsrnxssoBwRNBgaAAAAXnRSTlMAvwGi2QJPjcQN/kQ4WO6ts6smvQrz9uelBjk+c+8Q/CIh+/DaEUMzrMFQUcOZJLGDbWxFd8DtJ44ovuA0NTfCC0IlmveYgrBA5lp116PxNoEFE5FukGsbIBhyP/Kyd2TKDQAAAjRJREFUOMuNldd64jAQhccs8aYYiE1NKKETQg3pvfe6vZ/3f4wdC4htLDnoBuno/+QzBYnIO0JGP6OFk8mwlukbIQoaC500XCPdWVCiy234RtuQosWY2E31cpFst5uN5HopIcSKEgdR3pg39YQjJXRznsWoz8v6CsvxxqTciLO8su4Vv7CW12Xu9DxvfXMrX1kIW/KwrTBvus7eYA9bBVWSClvs5M13kWMLF9TZL/DZ0XFOOGd5K6hWFvuOjWrBnvTAwpLOyLKYcd3i9M7gDLZFdFyLhpL6NMo3V2eDfy8AU8nOzW4OJyZwwT2ZDnA8Nwtsjl2nQ3Z4qUQAi4/DPknZIfaBm/dZohugTxng9xQs5YAMaUBkCpYigEZcyuwULGW5JSgJdMfCjyUlS10gacPno/XPg8UlFUvnwF+XjV8HwIj2s/THtuEEOPMBI1rCDgPk1OXIS8vYYequgR556M8ylnrANRnucgs6KWPtchuikdbIQ0tYWhONRB1glby0n6VVoGNfRdz8hx5awh5y84s/+Amw79JnZK2yD5yICYfoci0d7BjGm5/KThC7U3HiKvElU62p2VqVL5nSeFUvA00lXWsC5bqzHrCn6p6c3eNzMXAruyxUWjK2xX6x69W+sxNoR5PoETclyoNJub5tPxOx1qkjnbbEM7Nd93+vZIq2uPz3cH9rWbf3D4uXQjBL0lCOm/6nrXmszOjZ1Z2bvLs6Cyxs6OX1Kf74/PwYf3p9mXyO/wMZP5uqB2YqxQAAAABJRU5ErkJggg==)";
        inputEmail.style.backgroundRepeat = "no-repeat";
        inputEmail.style.backgroundPosition = "95% 50%";
        inputEmail.style.backgroundSize = "22px 22px";
        inputEmail.style.outline = "none";
        inputEmail.style.border = "1px solid var(--border-color)";
        inputEmail.style.boxShadow = "none";
        emailError.textContent = "";
        emailError.style.height = "auto";
        emailError.style.visibility = "hidden";
    }
    else {
        inputEmail.style.background = "url('data:image/png;base64,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')";
        inputEmail.style.backgroundRepeat = "no-repeat";
        inputEmail.style.backgroundPosition = "95% 50%";
        inputEmail.style.backgroundSize = "22px 22px";
        inputEmail.style.outline = "none";
        inputEmail.style.border = "1px solid var(--error-color)";
        inputEmail.style.boxShadow = "0 0 10px var(--error-color)";
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.height = "auto";
        emailError.style.visibility = "visible";
        emailError.style.minHeight = "20px";
        emailError.style.marginTop = "5px";
        emailError.style.marginBottom = "5px";
        emailError.style.lineHeight = "1.2em";
        emailError.style.fontSize = "1.2rem";
    }
});

// Phone field
const inputPhone = document.getElementById('inputPhone');
inputPhone.addEventListener('keydown', enforceFormat);
inputPhone.addEventListener('keyup', formatToPhone);
const phoneError = document.getElementById('inputPhone');
const verifyPhone = document.getElementById('verifyPhone');

inputPhone.addEventListener('change', (e) => {
    if (phoneIsValid(inputPhone.value)) {
        phoneError.textContent = "Standard call, messaging or data rates may apply.";
        phoneError.style.color = "#444";
        inputPhone.style.background = "url('data:image/png;base64,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')";
        inputPhone.style.backgroundRepeat = "no-repeat";
        inputPhone.style.backgroundPosition = "95% 50%";
        inputPhone.style.backgroundSize = "22px 22px";
        inputPhone.style.outline = "none";
        inputPhone.style.border = "1px solid var(--border-color)";
        inputPhone.style.boxShadow = "none";
    }
    else {
        phoneError.textContent = "Please enter a valid phone number including area code";
        phoneError.style.color = "var(--error-color)";
        inputPhone.style.background = "url('data:image/png;base64,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')";
        inputPhone.style.backgroundRepeat = "no-repeat";
        inputPhone.style.backgroundPosition = "95% 50%";
        inputPhone.style.backgroundSize = "22px 22px";
        inputPhone.style.outline = "none";
        inputPhone.style.border = "1px solid var(--error-color)";
        inputPhone.style.boxShadow = "0 0 10px var(--error-color)";
        verifyPhone.style.visibility = "hidden";
        verifyPhone.style.height = "0";
    }
});

// Warning message if user clicks the phone field but leaves it empty
inputPhone.addEventListener('blur', (e) => {
    if (!inputPhone.value) {
        phoneError.textContent = "We strongly recommend adding a phone number.";
        phoneError.style.color = "var(--warning-color)";
        inputPhone.style.background = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAGPklEQVRYCc2Z229UVRTGv3Nm2opGQBOjtBClCvrGg5BqYooieCMFBCE+8OCTiTESKu3gv0AvFqJPPvlAYsJFa4kaKTYCJtqgDz6KChLoVGNiwcRLL3OO37dn1ulumdKZaWtnJzNrX9Ze63f2WWefvfcJMLcUXMugKQywlWYaA6A+5k9SZpnPMp+VZPFSFOOTlR0YzDdJo/xEe+WnoTZsDkLsZudtCHBfWRZi/MoL6IsjHG/owpmy+lK5LOBrbXg8TKGDnZ4o11ExfYJ/FeWQWdmFr4u1F6srCfhKKxpratAZBNg53Ugc4x8a6Wf9uSjAUDCBbC5yIYBUyBBJoz6M0cD2ZgJuoY0lRWx8OD6O9vt7cGl62/TyrMDu9qdwjIp3JZ1jkBMneVuPBn+iv/49/J203SKTfRW3x0sJHWIv7e3i/U38095InMOe2cIk6VDMz1A73uAD1UOzKa99IJ5Apr4b33l1ZWezB/BokEYHO25KOsfI8cFsbejEO0ndtMyMwNkMjvD27TN9Dul1jugrHIGPrW4+JO/gdo74+/S13OxxtI/UH8J+K/uyKDBh99HAEVOkgYvROFpWvo2LVjef8tqbWBvW4BRh1prdKMK+YiN9E/BQBltC4DMLA47s2dEx7Fh9GNfN2ELIy/uxvK4WvRyojc6+wiPCc9Njegqwmw1q8S0r3QOmkR0dRdNCw9oAOOg6DNpI0//I+BjW+7NH2pQl3dRlsIzZaAIt5cIOt2NjFGKF7IURhld04qzypST5Yni0hGlCM6Y1cGJi313Wn3c/n/RSoFIyz+oBqyRm4wBv0egH+ilv9kuV8infpi8msVk5AdYbzCopB+Z7NvBsz5ot+B4wRZ/NAetB4/DnX7d6KXCeNeXFko6BLPIvNjEq74BZsVsFJWqcnOtLIW9pbv9iEItZMUYBM0zQYg163Vp+saXPUmAMQgb0Yxxzt0R0CxmuDRYb1PxrnSImVyajWEMG9AumQPDTpS5kkj4LmHEsZDIXYlVINFoF5TkvXxXZIMZ5D6SRi7H8dkaVDHJtZaoqaY1tQGLl2noSWItva6wW6TOJdcoI206hWmDF4TO5EZ4Cl9YcXWXJZ+KLRCGRhEEqyi9aqgmZqzN3ZCAmrk2GFRIJsDaM1QQrFlv5KS/WtEbY4qCwu1VbxYlb6Je5mayTgSCF0YoNFTo6pgKgWNOcy372IreZet1zcfLgIdyYS/8ifcWUT2TlGhufTpaxRVtxKy+2dMcCPMswDrGG7qyLx0eq5CpoCfeuz5hCJXL4IJ7PHkQ/f73cPayrxEbShyyOSRVkFKtezVxfoC9RCrA3yZeZudqKh2irlyG3mb/tqRp8zrqbTnpKNuuxFBhjAYPLuONmhO/undzmr7dyOZKATQSt9frcyyOYNV655KwYxGIdjNEBayvNYc4vMnh8RKf+dsn6zCpz4xjkSIx5ir8hhx+9cslZx1A4yhKbbfcdsKwwoCe3RQGe4hXuKNl6QXFVD36iox2EPsOY6+MFPMu6/Hq2DGPONxmsi89G+5OJD8oJVtiW+gbPuZoaOvDDpMbC57h3e5hvMx16L5M3XvxJHlu9ZJ6TEVbFWA7tVBgpNC4j/Kkrr3mnltZrgaR8ySfNG+yImHx3U4Af6MJljqo2pBNSYjCvqVmK3v8DWj7kSz4LgBNiEVOh7MQUYNVwrvtCR56mxCturrkTgzwefcTq5lvKtnzIl9kWg1isbPImYDUwbt9laPSYkq6aZ7nfZNvwotXNl5RN2fZGVnHbI4ZiPnhRMyceaL8ehjhMDf8M7ksGTGZFNy7M3HP2luED2ECrmj6f9LQVBq0zwUrvlsBS4Getp3kbjnEE7lbZpfwng484Fx79HTi9rgt/WdOt5PdtuOMe8NWvTwbeOZ76cK79g9PXnmJh4NucFVjKv7RhdW3Ir0fB5PRiRnj7/qWRfo7MebYP5XJcrhY+yvA9Wp9K8cMMP8rwopu5ANcr+zbra5LtJ8YiZKY/YNbuy5KArcPVNjQRQJ+9kofD2iqRvNhzvMDMqi4375Zkoixgs8gTmE2c3Pfw28Q21rmzYGsrQQ5zXdDHO3KM3+cGStCfolIRsGchuJrBBsJvpaFG/mb8dMvRdJ9uV3W4h5XFytJ/770Df/c+4P4AAAAASUVORK5CYII=')";
        inputPhone.style.backgroundRepeat = "no-repeat";
        inputPhone.style.backgroundPosition = "95% 50%";
        inputPhone.style.backgroundSize = "22px 22px";
        inputPhone.style.outline = "none";
        inputPhone.style.border = "1px solid var(--warning-color)";
        inputPhone.style.boxShadow = "0 0 10px var(--warning-color)";
        verifyPhone.style.visibility = "hidden";
        verifyPhone.style.height = "0";
    }

    // On blur, if phone is invalid, hide verify checkbox
    if (!phoneIsValid(inputPhone.value)) {
        verifyPhone.style.visibility = "hidden";
        verifyPhone.style.height = "0";
    }
});

inputPhone.addEventListener('focus', (e) => {
    verifyPhone.style.visibility = "visible";
    verifyPhone.style.height = "auto";
});

// Password field
const passwordConfirmField = document.getElementById('confirmPassword');
const inputPassword = document.getElementById('inputPassword');
const passwordMessage = document.getElementById('passwordMessage');
const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');
const msg3 = document.getElementById('msg3');
const msg4 = document.getElementById('msg4');
const msg5 = document.getElementById('msg5');

inputPassword.addEventListener('keyup', (e) => {
    passwordMessage.style.height = "auto";
    inputPassword.style.outline = "none";
    inputPassword.style.border = "1px solid #9ecaed";
    inputPassword.style.boxShadow = "0 0 10px #9ecaed";
    inputPassword.style.background = "url(assets/password-lock-progress.png)";
    inputPassword.style.backgroundRepeat = "no-repeat";
    inputPassword.style.backgroundPosition = "95% 50%";
    inputPassword.style.backgroundSize = "22px 22px";

    // Check for number of characters and set msg1
    if (checkPasswordMsg1(inputPassword.value)) {
        passwordElementYes(msg1);
    // If not 8 characters
    } else { 
        passwordElementNo(msg1);
    }

    // Check for presence of both uppercase and lowercase characters
    if (checkPasswordMsg2(inputPassword.value)) {
        passwordElementYes(msg2);
    // Both case are not present
    } else {
        passwordElementNo(msg2);
    }

    // Check for numbers
    if (checkPasswordMsg3(inputPassword.value)) {
        passwordElementYes(msg3);
    } else {
        passwordElementNo(msg3);
    }

    // Check for symbol
    if (checkPasswordMsg4(inputPassword.value)) {
        passwordElementYes(msg4);
    } else {
        passwordElementNo(msg4);
    }

    // Check if all passes, if so, set for success
    if (checkPasswordMsg1(inputPassword.value) && checkPasswordMsg2(inputPassword.value) && checkPasswordMsg3(inputPassword.value) && checkPasswordMsg4(inputPassword.value)) {
        passwordStrongStyle(true);
        passwordIsStrong = true;
        passwordConfirmField.style.visibility = "visible";
        passwordConfirmField.style.height = "auto";
    } else {
        passwordStrongStyle(false);
        passwordIsStrong = false;
    }
});

function passwordStrongStyle(value) {
    // If password is strong
    if (value) {
        inputPassword.style.background = "url(assets/password-lock-success.png)";
        inputPassword.style.backgroundRepeat = "no-repeat";
        inputPassword.style.backgroundPosition = "95% 50%";
        inputPassword.style.backgroundSize = "22px 22px";
        msg5.textContent = "Your password is STRONG."
        msg5.style.color = "var(--pass-color)";
        msg5.style.fontSize = "1.2rem";
        msg5.style.lineHeight = "1.2";
        msg5.style.background = "none";
        msg5.style.visibility = "visible";
        msg1.style.visibility = "hidden";
        msg2.style.visibility = "hidden";
        msg3.style.visibility = "hidden";
        msg4.style.visibility = "hidden";
        msg1.style.height = 0;
        msg2.style.height = 0;
        msg3.style.height = 0;
        msg4.style.height = 0;
    // Password is not good
    } else {
        msg5.style.visibility = "hidden";
        msg1.style.visibility = "visible";
        msg2.style.visibility = "visible";
        msg3.style.visibility = "visible";
        msg4.style.visibility = "visible";
        msg1.style.height = "auto";
        msg2.style.height = "auto";
        msg3.style.height = "auto";
        msg4.style.height = "auto";
    }
}

// If user leaves password field without a strong password
inputPassword.addEventListener('blur', (e) => {
    if (!passwordIsStrong) {
        inputPassword.style.background = "url(assets/password-lock-fail.png)";
        inputPassword.style.backgroundRepeat = "no-repeat";
        inputPassword.style.backgroundPosition = "95% 50%";
        inputPassword.style.backgroundSize = "22px 22px";
        inputPassword.style.outline = "none";
        inputPassword.style.border = "1px solid var(--error-color)";
        inputPassword.style.boxShadow = "0 0 10px var(--error-color)";
    // Password is strong
    } else {
        inputPassword.style.outline = "none";
        inputPassword.style.border = "1px solid var(--border-color)";
        inputPassword.style.boxShadow = "none";
    }
});

inputPassword.addEventListener('focus', (e) => {
    passwordMessage.style.visibility = "visible";
    passwordMessage.style.height = "auto";
});

function passwordElementYes(object) {
    object.style.background = "url(assets/password-validation-yes.png)";
    object.style.backgroundRepeat = "no-repeat";
    object.style.backgroundPosition = "0% 50%";
    object.style.backgroundSize = "10px 10px";
    object.style.color = "var(--pass-color)";
}

function passwordElementNo(object) {
    object.style.background = "url(assets/password-validation-no.png)";
    object.style.backgroundRepeat = "no-repeat";
    object.style.backgroundPosition = "0% 50%";
    object.style.backgroundSize = "10px 10px";
    object.style.color = "var(--error-color)";
}

// Password confirmation field
const inputPasswordConfirm = document.getElementById('inputConfirmPassword');
const PasswordConfirmMessage = document.getElementById('passwordConfirmationMessage');

// Passwords match
inputPasswordConfirm.addEventListener('keyup', (e) => {
    inputPasswordConfirm.style.background = "none";
    if (inputPasswordConfirm.value === inputPassword.value) {
        inputPasswordConfirm.style.outline = "none";
        inputPasswordConfirm.style.border = "1px solid var(--border-color)";
        inputPasswordConfirm.style.boxShadow = "none";
        inputPasswordConfirm.style.background = "url(assets/verify-true.png)";
        inputPasswordConfirm.style.backgroundRepeat = "no-repeat";
        inputPasswordConfirm.style.backgroundPosition = "95% 50%";
        inputPasswordConfirm.style.backgroundSize = "22px 22px";
        PasswordConfirmMessage.style.visibility = "hidden";
    }
});

inputPasswordConfirm.addEventListener('blue', (e) => {
    // If passwords don't match
    if (inputPasswordConfirm.value !== inputPassword.value) {
        inputPasswordConfirm.style.background = "url(assets/verify-false.png)";
        inputPasswordConfirm.style.backgroundRepeat = "no-repeat";
        inputPasswordConfirm.style.backgroundPosition = "95% 50%";
        inputPasswordConfirm.style.backgroundSize = "22px 22px";
        inputPasswordConfirm.style.outline = "none";
        inputPasswordConfirm.style.border = "1px solid var(--error-color)";
        inputPasswordConfirm.style.boxShadow = "0 0 10px var(error-color)";
        PasswordConfirmMessage.style.visibility = "visible";
    // If passwords match
    } else {
        inputPasswordConfirm.style.outline = "none";
        inputPasswordConfirm.style.border = "1px solid var(--border-color)";
        inputPasswordConfirm.style.boxShadow = "none";
    }
});

function checkPasswordMsg1(string) {
    return string.length > 7 ? true : false;
}

function checkPasswordMsg2(string) {
    const re = /(?=.*[a-z])(?=.*[A-Z])/;
    return re.test(string);
}

function checkPasswordMsg3(string) {
    const re = /(?=.*\d)/;
    return re.test(string);
}

function checkPasswordMsg4(string) {
    const re = /(?=.*[-+_!@#$%^&*.,?])/;
    return re.test(string);
}

function emailIsValid(string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(string);
}

function phoneIsValid(num) {
    const cleanNum = num.replace(/\D/g,'');
    return cleanNum.length === 10 ? true : false;
}