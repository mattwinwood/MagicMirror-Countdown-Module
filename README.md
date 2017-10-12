# MagicMirror-Countdown-Module
Counts down from one or many dates set in the future.

##Example
{
    module: 'countdown',
    position: 'top_left',
    config : {
        date : new Date('01/02/2049'),
        description: ' ',
        dates : [
            { date: new Date('05/19/2018'), description : "Vacation" },
            { date: new Date('06/03/2018'), description : "Trip to Disney World" }
            
        ]
    }
},
