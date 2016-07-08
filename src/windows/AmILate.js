module.exports.getNextAppointment = function(success, error, args) {
    if (args.length == 0 || args[0] < 0) {
        // Invalid call to the plugin, so return an error condition
        error('Invalid value for minutes argument');
        return;
    }

    /**
        Code to retrieve name, time of next appointment goes here
    **/

    var foundAppointment = true;
    var appointmentTitle = 'Windows Test';
    var appointmentDate = 'Right now!';

    if (foundAppointment) {
        result = {
                'title': appointmentTitle,
                'date' : appointmentDate
                };
        success(result);
    } else {
        // Empty string to indicate no appointment
        success('');
    }
}