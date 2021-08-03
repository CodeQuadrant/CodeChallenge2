$(document).ready(function() {

    $(":input").inputmask();

    $("#phone").inputmask({
        "mask": "(999) 999-9999"
    });

    $("#ssn").inputmask({
        "mask": "999-99-9999",
        "jitMasking": "true"
    });

    $("#ssn").keyup(function() {
        console.log($("#ssn").inputmask('unmaskedvalue'))
    });
});
