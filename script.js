$(".calc").click(function () {

    $(".calc").addClass('clicked');

    setTimeout(function () {
        $(".calc").removeClass('clicked');
    }, 200);

    var amt = $('#mortgage-amount').val();
    var t = $('#mortgage-term').val();
    var r = $('#mortgage-rate').val();
    var type = $('input[name="mortgageType"]:checked').val();

    console.log(amt);
    console.log(t);
    console.log(r);
    console.log(type);

    if (amt === "") {
        $('.input1').addClass('input-empty');
        $('.mortgage .empty').removeClass("hide");
    }
    if (t === "") {
        $('.input2').addClass('input-empty');
        $('.term .empty').removeClass("hide");
    }
    if (r === "") {
        $('.input3').addClass('input-empty');
        $('.rate .empty').removeClass("hide");
    }
    if (type === undefined) {
        $('.type .empty').removeClass("hide");
    }

    if (amt != "" && t != "" && r != "" && type != undefined) {
        $('.card2-empty').addClass('hide');
        $('.card2-result').removeClass('hide');

        amt=Number(amt);
        t=Number(t) * 12;
        r=Number(r)/(1200);

        if (type === "interest") {
            var mnth = amt * r;
            var total = mnth * t + amt;
            $('.month-amnt').text("€" + mnth.toFixed(2));
            $('.total-amnt').text("€" + total.toFixed(2));
        } 
        else if (type === "repayment") 
        {
            var mnth = amt * r * Math.pow(1+r,t) / (Math.pow(1+r,t) - 1);
            var total = mnth * t;
            $('.month-amnt').text("€" + mnth.toFixed(2));
            $('.total-amnt').text("€" + total.toFixed(2));
        }
    }
})

$('#mortgage-amount').click(function () {
    $('.input1').removeClass("input-empty");
    $('.mortgage .empty').addClass("hide");
})

$('#mortgage-amount').blur(function () {
    var amt = $('#mortgage-amount').val();

    if (amt === "") {
        $('.input1').addClass('input-empty');
        $('.mortgage .empty').removeClass("hide");
    } else {
        $('.input1').removeClass("input-empty");
        $('.mortgage .empty').addClass("hide");
    }
})

$('#mortgage-term').click(function () {
    $('.input2').removeClass("input-empty");
    $('.term .empty').addClass("hide");
})

$('#mortgage-term').blur(function () {
    var t = $('#mortgage-term').val();

    if (t === "") {
        $('.input2').addClass('input-empty');
        $('.term .empty').removeClass("hide");
    } else {
        $('.input2').removeClass("input-empty");
        $('.term .empty').addClass("hide");
    }
})

$('#mortgage-rate').click(function () {
    $('.input3').removeClass("input-empty");
    $('.rate .empty').addClass("hide");
})

$('#mortgage-rate').blur(function () {
    var t = $('#mortgage-rate').val();

    if (t === "") {
        $('.input3').addClass('input-empty');
        $('.rate .empty').removeClass("hide");
    } else {
        $('.input3').removeClass("input-empty");
        $('.rate .empty').addClass("hide");
    }
})

$('input[name="mortgageType"]').change(function () {
    var type = $('input[name="mortgageType"]:checked').val();
    if (type === undefined) {
        $('.type .empty').removeClass("hide");
    } else {
        $('.type .empty').addClass("hide");
    }
});

$('.clear').click(function () {
    $('#mortgage-amount').val("");
    $('#mortgage-term').val("");
    $('#mortgage-rate').val("");
    $('input[name="mortgageType"]:checked').prop('checked', false);

    $('.input1').removeClass('input-empty');
    $('.mortgage .empty').addClass("hide");
    $('.input2').removeClass('input-empty');
    $('.term .empty').addClass("hide");
    $('.input3').removeClass("input-empty");
    $('.rate .empty').addClass("hide");
    $('.type .empty').addClass("hide");

    $('.card2-empty').removeClass('hide');
    $('.card2-result').addClass('hide');
})