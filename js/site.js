
$().ready(function() {


$( "#contact_form" ).validate({
  rules: {
    phone: {
      require_from_group: [1, ".contact-group"]
    },
    _replyto: {
      require_from_group: [1, ".contact-group"]
    }
  },
  messages: {
     name: {
        required: "Lütfen adınızı giriniz."
     },
     phone:{
        require_from_group: "E-posta yada telefon alanlarından birini doldurunuz."
     },
     _replyto:{
        email: "Lütfen geçerli bir e-posta adresi giriniz.",
        require_from_group: "E-posta yada telefon alanlarından birini doldurunuz."
     }
  },
  highlight: function(element) {
    $(element).closest('.form-group').addClass('has-error');
  },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }

});

});
