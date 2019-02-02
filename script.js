const method = 'GET'
const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
const isAsync = false
const second = 1000

const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour
const week = 7 * day
const month = 30 * day
const year = 365 * day

// const period =
// 	  12 * year
// 	+  3 * month
// 	+  1 * week
// 	+  2 * day
// 	+  3 * hour
// 	+ 45 * minute
// 	+ 55 * second

const periodUpdate =
	+  1 * hour
	+  5 * minute
	+ 10 * second


main8()

async function main1 () {
	const request = new XMLHttpRequest()

	request.open(method, url, isAsync)
	request.send()

	const data = JSON.parse(request.response)
	console.log(data)
}

async function main2 () {
	const request = jQuery.ajax({
		method,
		url,
	})

	request.done(data => {
		data = JSON.parse(data)
		console.log(data)
	})
}

async function main3 () {
	const request = jQuery.ajax({
		method,
		url,
	}).done(data => {
		data = JSON.parse(data)
		console.log(data)
	})
}

async function main4 () {
	const request = await jQuery.ajax({
		method,
		url,
	})

	const data = JSON.parse(request)
	console.log(data)
}

async function main5 () {
	const request = fetch(url, {
		method
	})

	const dataTransform = request.then(data => {
		return data.json()
	})

	dataTransform.then(data => {
		console.log(data)
	})
}

async function main6 () {
	const request = fetch(url, {
		method
	}).then(data => {
		return data.json()
	}).then(data => {
		console.log(data)
	})
}

async function main7 () {
	const answer = await fetch(url, {
		method
	})

	const data = await answer.json()
	console.log(data)
}

async function main8 () {
	setTimeout(main8, periodUpdate)

	const answer = await fetch(url, {
		method,
		cache: 'no-cache'
	})

	const data = await answer.json()
	console.log(data.Valute.EUR.Value)
}