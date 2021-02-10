const Queue = require('./queue.js');

const menu = [
    {'name':'cheese burger', 'time': 30},
    {'name':'chicken burger', 'time': 50},
    {'name':'double burger', 'time': 60}
];

function randomOrder() {
    return menu[Math.floor(Math.random()*3)];
}

let max = 0;

const ordered = new Queue();
for(let time = 0; time <= 60*60; time++) {
    if (time%15 === 0) {
        // 15초에 한번씩 주문한다
        let order = randomOrder();
        let finishTime = time + order['time'];
        console.log(finishTime);
        ordered.enqueue([order, finishTime]);
    }

    while (ordered.peek()[1] <= time) { // === 으로 할 경우 먼저 주문한 사람보다 나중에 주문한 사람음식이 더 빨리 완성된 경우가 해결되지 않는다
        // 주문한 음식이 나왔다
        let clear = ordered.dequeue();
        console.log(clear);
    }

    if (ordered.list.length > max) max = ordered.list.length
}

console.log(ordered);
console.log(max);

// 가게 영업시간은 1시간
// 15초마다 1명씩 주문을 한다
// 햄버거를 만드는 사람은 한명이다
// 주문한 메뉴를 받을 다음 고객은 대기실에서 나와서 대기한다

