import Express from 'express';
import Stripe from 'stripe';
const  stripeInstance = Stripe('pk_test_51HSEnlBEWwoyTtivTdyoB2cae9vFdjeXfXGWjV2QuQuufoh5GdfMjkgx5Gei2eySkWUdCaLcGIOSw4bIXqJSO3dh00weOrlHGp')
const Router  = Express().Router()