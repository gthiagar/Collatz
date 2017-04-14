

function collatz(n){
	var str = n;
	if(n != 1){
		if(n % 2 == 0){
			str += ", ";
			return str + collatz(n/2);
		}
		else if(n % 2 == 1){
			str += ", ";
			return str + collatz(3*n + 1);
		}
	}
	else {
		return str;
	}
}

function displaySequence(){
	var n = document.getElementById("number").value;
	var seqText = collatz(n);
	var seqTag = document.getElementById("sequence");
	seqTag.innerHTML = seqText;
}

