import { mongooseConnect } from '@/lib/mongoose'
import { Order } from '@/models/Order'
const stripe = require('stripe')(process.env.STRIPE_SK)
import { buffer } from 'micro'

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  'whsec_1ef3869a1ba8b4e508ffb76fb2ac675eee089f0418e636793d387f82e615011c'

export default async function handler(req, res) {
  await mongooseConnect()
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    )
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`)
    return
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object
      // console.log(data, 'data')
      const orderId = data.metadata.orderId
      const paid = data.payment_status === 'paid'
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        })
      }
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }
  res.status(200).send('ok')
}

export const config = {
  api: { bodyParser: false },
}

/* wise-amity-laud-gentle */

/* acct_1NfS7JHReyjNsMkO */
/*  Your webhook signing secret is whsec_1ef3869a1ba8b4e508ffb76fb2ac675eee089f0418e636793d387f82e615011c  */
