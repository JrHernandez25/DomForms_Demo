'use strict'

const header = document.getElementById('header');
const title = document.createElement('h1');
title.textContent = 'Dom Forms';
header.appendChild(title);

const form = document.createElement('form');
const lable = document.createElement('lable');
const input = document.createElement('input');
const submit = document.createElement('input');
const main = document.getElementById('main');


lable.textContent = 'userName';
input.type = 'text';
input.id= 'name'
submit.type = 'submit';

main.appendChild(form);
form.appendChild(lable);
form.appendChild(input);
form.appendChild(submit);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const name = event.target.name.value;
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const nameArea = document.getElementById('div')
    nameArea.appendChild(h2);
}