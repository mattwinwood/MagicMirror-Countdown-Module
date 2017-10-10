# MagicMirror-Countdown-Module
Counts down from one or many dates set in the future.

example config:

		{
			module: 'countdown',
			position: 'top_left',
			config : {
			    date : new Date('06/03/18'),
			    description: ' WEEKS UNTIL IRONMAN 70.3',
                dates : [
                    { date: new Date('05/19/2018'), description : "Tough Mudder" },
                    { date: new Date('06/03/2018'), description : "IRONMAN 70.3" }
                    
                ]
			}
		},:
