function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	four.value = four.value.replace(/\s+/g, "");
	five.value = five.value.replace(/\s+/g, "");
	six.value = six.value.replace(/\s+/g, "");
	
	
	if (one.value == "for(intx=0;x<=400;x+=60)"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：for(int x=0; x<=400; x+=60)";
	}

	if (two.value == "random(0,102)"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：random(0,102)";
	}

	if (three.value == "random(0.25,1.0);"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：random(0.25, 1.0);";
	}

	if (four.value == "voidface(intx,inty,intc,floats)"){
		text4.innerHTML = "正解";
	}else{
		text4.innerHTML = "不正解　解答：void face(int x, int y, int c, float s)";
	}

	if (five.value == "translate(x,y);"){
		text5.innerHTML = "正解";
	}else{
		text5.innerHTML = "不正解　解答：translate(x, y);";
	}

	if (six.value == "scale(s);"){
		text6.innerHTML = "正解";
	}else{
		text6.innerHTML = "不正解　解答：scale(s);";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");

//解答欄4
var textBox4 = document.getElementById("four");
const text4 = document.getElementById("text4");

//解答欄5
var textBox5 = document.getElementById("five");
const text5 = document.getElementById("text5");

//解答欄6
var textBox6 = document.getElementById("six");
const text6 = document.getElementById("text6");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);