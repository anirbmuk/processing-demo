define([
'ojs/ojbutton'
],
function () {

    function SampleViewModel() {

        const self = this;

        self.process = function() {
            app.startProcessing();
            setTimeout(() => app.endProcessing(), 2000);
        };
    }

    return SampleViewModel;

});
