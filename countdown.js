/* Magic Mirror Module: Countdown Timer
 * v1.0 - October 2017
 *
 * By Matt Winwood <mattwinwood@gmail.com>
 * Beer Licensed (meaning, if you like this module, feel free to have a beer on me, or send me one.)
 */

Module.register("countdown", {
	// Module config defaults.
	defaults: {
		updateInterval: 3,	
		type: 'weeks', // weeks, days	
        dates: [
            { date: new Date('05/19/2018'), description : "Tough Mudder" },
            { date: new Date('06/03/2018'), description : "IRONMAN 70.3"}
        ]
	},
	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, this.config.updateInterval * 1000);
	},
	/* showRemaining()
	 * Take a date in the future, return weeks/days until date.
	 * return string - days remaining.
	*/
    showRemaining : function() {
            // Build DOM element 
            var container = document.createElement("div");
            container.className = "countdownContainer";
            
            // Build List
            var eventContainerElement = this.buildEventList();

            // Append to the parent DOM element (DIV)
            container.append(eventContainerElement);
            return container;
    },

    buildEventList : function() {
            var eventContainerElement = document.createElement("ul");
    
            for (var i = 0; i < this.config.dates.length; i++) {
                // Get this event
                var thisDate = this.config.dates[i].date;
                var thisDateDescription = this.config.dates[i].description;
                
                // Create new DOM Elements for this Event.
                var eventElement = document.createElement("li");
                var eventDate = document.createElement("span");
                var eventDesc = document.createElement("span");
                
                // Calculate Remaining
                var remaining = this.calculateRemaining(thisDate);

                // Classes for this event.
                eventDate.className = " countdown_date bright medium light";
                eventDesc.className = " countdown_description bright medium light";
                
                // Plug-in the values.
                eventDate.innerHTML = remaining;
                eventDesc.innerHTML = " " + this.config.type + " until " + thisDateDescription;
                
                // Append to the DOM element
                eventElement.appendChild(eventDate);
                eventElement.appendChild(eventDesc);
                
                // Append to the parent DOM element (UL)
                eventContainerElement.appendChild(eventElement);
            }
            
            return eventContainerElement;
    },
    calculateRemaining : function(thisDate) {
        // Type
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var _week = _day * 7;

        var type = this.config.type;

        // Get/Set Type
        switch (this.config.type) {
            case "weeks":
                type = _week;
                break;
            case "days":
                type = _day;
                break;
        }

        var now = new Date();
        var end = thisDate;
        var distance = end - now;
        var remaining = Math.floor(distance / type);

        return remaining;
    },

	// Override dom generator.
	getDom: function() {
            var timer = this.showRemaining();
            return timer;
	}
});


