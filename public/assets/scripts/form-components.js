var FormComponents = function () {




    var handleDatePickers = function () {

        if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: App.isRTL(),
                todayHighlight: true,
                autoclose: true
            });
            $('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
        }
    }



    return {
        //main function to initiate the module
        init: function () {

            handleDatePickers();


        }
    };

}();