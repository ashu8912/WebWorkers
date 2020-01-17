"use strict";

var curNum = 0;


self.onmessage=onMessage;
function onMessage(evt){
	
	 getNextfib();
}
function getNextfib(){
	 let fibNum=fib(curNum);
	 self.postMessage({idx:curNum,fib:fibNum})
	 curNum++;
	 getNextfib();
}
function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
