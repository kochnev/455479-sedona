var form = document.querySelector(".hostel-search-form");
var button = document.querySelector(".search-button");
var date_from = form.querySelector("[name=date-from]");
var date_to = form.querySelector("[name=date-to]");
var adults = form.querySelector("[name=adult]");
var kids = form.querySelector("[name=kids]");
var adults_count = form.querySelector(".adults-count");


var date_from_storage = localStorage.getItem("date_from");
var date_to_storage = localStorage.getItem("date_to");
var adults_storage = localStorage.getItem("adults");
var kids_storage = localStorage.getItem("kids");


button.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (date_from_storage) {
        date_from.value = date_from_storage;
    }
    if (date_to_storage) {
        date_to.value = date_to_storage;
    }
    if (adults_storage) {
        adults.value = adults_storage;
    }
    if (kids_storage) {
        kids.value = kids_storage;
    }
    form.classList.toggle("hostel-search-form-show");
});

form.addEventListener("submit", function(evt) {
    if (!date_from.value) {
        shake(evt, date_from);
    } else {
        localStorage.setItem("date_from", date_from.value);
    }
    if (!date_to.value) {
        shake(evt, date_to);
    } else {
        localStorage.setItem("date_to", date_to.value);
    }
    if (adults.value < 1) {
        shake(evt, adults);
    } else {
        localStorage.setItem("adults", adults.value);
    }

    if (kids.value < 0) {
        shake(evt, kids);
    } else {
        localStorage.setItem("kids", kids.value);
    }

});

function shake(evt, input_control) {
    evt.preventDefault();
    input_control.classList.remove("input-error");
    input_control.offsetWidth = date_to.offsetWidth;
    input_control.classList.add("input-error");
}
