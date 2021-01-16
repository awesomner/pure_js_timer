var mins = document.getElementById("time");
var secs = mins * 60;
var finished_sesions = 0;
var cur_session = 'session'; // 'break'

function countdown() {
	if (cur_session == 'session') {
        mins = document.getElementById("time").value;
        secs = mins * 60;
        interval = setInterval(Timedown, 1000);
        document.querySelector('input.btn').disabled = true;

	} else if (cur_session == 'break') {
        mins = 5;
        secs = mins * 60;
        interval = setInterval(Timedown, 1000);
        document.querySelector('input.btn').disabled = false;
	} 	
}

function Timedown() {
    m = document.getElementById('minutes');
    s = document.getElementById('seconds');

    if (s < 59) {
        s.value = secs;
    } else {
        m.innerHTML = '<h1>' + getminutes() + '</h1>';
        s.innerHTML = '<h1>' + getseconds() + '</h1>';
    }
    
    if (mins < 0) {
        m.innerHTML = '<h1>' + 00 + '</h1>';
        s.innerHTML = '<h1>' + 00 + '</h1>';
        if (cur_session == 'session') {
            cur_session = 'break';
            finished_sesions++;
            document.getElementById('finished_sessions').innerHTML = "<p>Session number: " + finished_sesions + "/4</p>";
            clearInterval(interval);
            break_time();
        } else {
            cur_session = 'session';
            clearInterval(interval);
            session_time();
        }
    }
    else {
        secs--;
    }
}
function session_time() {
    document.getElementById('title').innerHTML = '<h1>Session</h1>';
	timer.classList.remove('clock-break');
    timer.classList.add('clock'); 
    timer.classList.add('clock-animation');
}

function break_time() {
    document.getElementById('title').innerHTML = '<h1>Break</h1>';
    timer = document.getElementById('timer');
    timer.classList.remove('clock');
    timer.classList.add('clock-break');
    countdown();
}

function getminutes() {
    mins = Math.floor(secs / 60);
    if (mins < 10) {
        return "0" + String(mins);
    } else {
        return mins;
    }
}

function getseconds() {
    seconds = secs - Math.round(mins * 60);
    if (seconds < 10) {
        return "0" + String(seconds);
    } else {
        return seconds;
    }
}