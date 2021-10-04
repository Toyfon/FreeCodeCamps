//Your function will be passed par and strokes arguments. Return the correct string according to this table which lists
// the strokes in order of priority; top (highest) to bottom (lowest):
/*Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"*/
//par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.



var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes === 1) return "Hole-in-one!";
    else if ((strokes - par) <= -2) return 'Eagle';
    else if ((strokes - par) === -1) return 'Birdie';
    else if (strokes === par) return 'Par';
    else if ((strokes - par) === 1) return 'Bogey';
    else if ((strokes - par) === 2) return 'Double Bogey';
    else return 'Go Home!';
}

golfScore(5, 4);