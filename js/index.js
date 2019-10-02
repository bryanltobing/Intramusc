$('#masukan').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
      fields: {
        namalengkap:{
            validators:{
                notEmpty:{
                    message: 'Isi Nama Lengkap Anda'
                },
                stringLength:{
                    min:10,
                    message: 'Isi Minimal 10 karakter'
                }
            }
        },
        email: {
                validators: {
                    notEmpty: {
                        message: 'Isi E-mail Anda'
                    },
                    emailAddress: {
                        message: 'Isi E-mail Anda Dengan Benar'
                    }
                }
            },
        remember:{
                validators:{
                    notEmpty:{
                        message:'Checklist untuk menyetujui pengiriman'
                    }
                }
        },
        telepon: {
                validators: {
                     stringLength: {
                        min: 11,
                        message: 'Nomor Telepon Minimal 11 Angka'
                    },
                    notEmpty: {
                        message: 'Isi Nomor Telepon Anda'
                    }
                }
            }
       
        }
});