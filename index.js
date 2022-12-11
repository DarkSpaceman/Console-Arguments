#!/usr/bin/env node

const process = require('process');
let arr = process.argv;

let r = arr[arr.length - 1];
let t = arr[arr.length - 2];
let y = arr[arr.length - 3];

let date = new Date;

let lastDay = getLastDayOfMonth() + Number(date.getDate())

if (r == '-y' || r == '--year') {
    console.log(date.getFullYear());
} else if (r == '-m' || r == '--month') {
    console.log(date.getMonth() + 1);
} else if (r == '-d' || r == '--date') {
    console.log(date.getDate());
} else if (t == '-d' && y == 'add' || t == '--date' && y == 'add') {
    console.log(Number(date.getDate()) + Number(r))
} else if (t == '-m' && y == 'add' || t == '--month' && y == 'add') {
    if (Number(r) + 12 <= 12)
        console.log(Number(date.getMonth() + 1) + Number(r));
    else {
        while (Number(r) > 12) {
            r -= 12;
        }
        console.log(Number(r) + 1)
    }
} else if (t == '-d' && y == 'sub' || t == '--date' && y == 'sub') {
    if (Number(r) < Number(date.getDate())) {
        console.log(Number(date.getDate()) - Number(r));
    } else {
        console.log(lastDay - Number(r));
    }
} else if (t == '-m' && y == 'sub' || t == '--month' && y == 'sub') {
    if (Number(r) < Number(date.getMonth())) {
        console.log(Number(date.getMonth() + 1) - Number(r));
    } else {
        console.log(Number((date.getMonth() + 1) + 12) - Number(r));
    }
}

function getLastDayOfMonth() {
    let lastDate = new Date(date.getFullYear(), date.getMonth(), 0);
    return Number(lastDate.getDate());
}