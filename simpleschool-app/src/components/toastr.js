import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export function addMessage(title, message, type) {
    toastr[type](message, title)
}

export function errorMessage(message) {
    toastr['error'](message, 'Error')
}

export function successMessage(message) {
    toastr['success'](message, 'Success')
}

export function warningMessage(message) {
    toastr['warning'](message, 'Warning')
}