/*------------------税込関数------------------*/

function object($a) {
  var tax = 1.08;
  $sum = $a * tax;
  return $sum;
};
console.log(object(100));

/*------------------曜日に応じた数値関数------------------*/

function day($a){
  switch($a) {
    case $a = "月曜日":
      var num = 1;
      break;
    case $a = "火曜日":
      var num = 2;
      break;    
    case $a = "水曜日":
      var num = 3;
      break;
    case $a = "木曜日":
      var num = 4;
      break;
    case $a = "金曜日":
      var num = 5;
      break;
    case $a = "土曜日":
      var num = 6;
      break;
    case $a = "日曜日":
      var num = 7;
      break;
  };
  return num;
};
console.log(day("日曜日"));

/*------------------階乗関数------------------*/

function kaijo(na){
  if (na === 1) {
    return 1;
  } else {
    return na * kaijo(na - 1);
  }
};
console.log(kaijo(5));

/*------------------おみくじ関数------------------*/

function omikuji() {
  var omiNum = Math.floor(Math.random() * 6);
  if (omiNum == 0) {
    return "大吉です";
  } else if (omiNum == 1) {
    return "中吉です";
  } else if (omiNum == 2) {
    return "吉です"; 
  } else if (omiNum == 3) {
    return "末吉です";
  } else if (omiNum == 4) {
    return "凶です";
  } else {
    return "大凶です";
  } 
};
console.log(omikuji());

/*------------------昇順ソート関数------------------*/

function column(sort) {
  for(var i = 0; i < sort.length; i++) {
    for(var b = sort.length-1; b>i; b--) {
      if (sort[b] < sort[b-1]) {
        var t = sort[b];
        sort[b] = sort[b-i];
        sort[b-i] = t;    
      }
    }
  }
  return sort;
};
var sort = [1, 4, 22, 8, 5, 6];
console.log(column(sort));

/*------------------三ヶ月後の西暦関数------------------*/

function threeMAgo() {
  var today = new Date();    
  var three = 3;
  today.setMonth(today.getMonth() + three);
  return (today.getFullYear() + "/" +  (today.getMonth() + 1) + "/"+ today.getDate()  + "/" + today.getDay());
}
console.log(threeMAgo());

/*------------------ジャンケン関数------------------*/

function janken(){
  var myNum = document.getElementById("selected").selectedIndex;
  var opoNum = Math.floor(Math.random() * 3);
  if (opoNum == 0) {
    opoHand = "グー";
  }
  if (opoNum == 1) {
    opoHand = "チョキ";
  }
  if (opoNum == 2) {
    opoHand = "パー";
  }

  if (myNum - opoNum == -2) {
    judge = "出直してこい";
  }
  if (myNum - opoNum == -1) {
    judge = "あなたお強いですね、弟子にしてください";
  }
  if (myNum - opoNum == 0) {
    judge = "影真似の術";
  }
  if (myNum - opoNum == 1) {
    judge = "罰ゲームは唐辛子な";
  }
  if (myNum - opoNum == 2) {
    judge = "参りました";
  }

  document.getElementById("message1").textContent = "相手の選択は" + opoHand;
  document.getElementById("message2").textContent = "勝敗は「" + judge + "」";
};

/*------------------九九の関数------------------*/

function kuku() {
  document.write("<center>");
  document.write("<table>");
    for (var i = 1; i < 10; i++) {
        // 行なのでtr
        document.write("<tr>");
        // セルなのでtd
        for (var j = 1; j < 10; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
   document.write("</table>");
   document.write("</center>");
};
kuku();