const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

var Publishable_Key = 'pk_test_51Iw15pSC9A4EY2uAoJ9Haidej5Mst4EcQYi0j15xi09VJOXddytumfOaglEqzOIiK7oklYQ8jxHQC0p8WCLUTeZO00fHqknbb4'
var Secret_Key = 'sk_test_51Iw15pSC9A4EY2uATOUABX0YaO3njU1BcNYFjEqXqluc1jvX3qtTMQvPeVCHkEYKqDKSkV63MpYnQ88T1xHSV1Ij002aXntEKS'

const stripe = require('stripe')(Secret_Key)

const port = process.env.PORT || 3001

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('index', {
	key: Publishable_Key
	})
})

app.post('/create_account', async(req,res) => {
	try{
	const account = await stripe.accounts.create({
		type: 'standard',
		country: 'IN',
		email: 'ashutosh@example.com',
		// capabilities: {
		//   card_payments: {requested: true},
		//   transfers: {requested: true},
		// },
	  });
	  console.log(account);
	}catch(e){
		console.log(e);
	}
});

app.get('/retirve_accounts', async(req,res) => {

	try{
		const accounts = await stripe.accounts.list({
			limit: 3,
		  });
		console.log(accounts);
	}catch(e){
		console.log(e);
	}
});

app.post('/pay', async(req,res) => {
	try{
  const accountLinks = await stripe.accountLinks.create({
	account: 'acct_1Iw15pSC9A4EY2uA',
	refresh_url: 'http://localhost:3001/refresh',
	return_url: 'http://localhost:3001/return',
	type: 'account_onboarding',
  })
  console.log(accountLinks);
}catch(e){
	console.log(e);
}
});

  app.get('/refresh', async(req,res) => {
	  try{
		const paymentIntent = await stripe.paymentIntents.create({
			payment_method_types: ['card'],
			amount: 1000,
			currency: 'usd',
			application_fee_amount: 123,
			transfer_data: {
			  destination: 'acct_1Iw15pSC9A4EY2uA',
			},
		  });
		  res.send(paymentIntent)
	  }catch(e){
		  res.send(e)
	  }
  });

  app.get('/return', (req,res) => {
	  res.send(" return url")
  });
  


app.post('/payment', function(req, res){

	// Moreover you can take more details from user
	// like Address, Name, etc from form
	stripe.customers.create({
		email: req.body.stripeEmail,
		source: req.body.stripeToken,
		name: 'prateek',
		address: {
			line1: 'TC 9/4 Old MES colony',
			postal_code: '452331',
			city: 'Indore',
			state: 'Madhya Pradesh',
			country: 'India',
		}
	})
	.then((customer) => {

		return stripe.charges.create({
			amount: 2500,	 // Charing Rs 25
			description: 'Web Development Product',
			currency: 'INR',
			customer: customer.id
		});
	})
	.then((charge) => {
		res.send("Success") // If no error occurs
	})
	.catch((err) => {
		res.send(err)	 // If some error occurs
	});
})

app.listen(port, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})