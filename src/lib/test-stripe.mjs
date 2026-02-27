import Stripe from 'stripe';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

console.log('Procurando .env em:', envPath);
console.log('Chave encontrada?', !!process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

async function testStripe() {
  try {
    console.log('--- Verificando Produtos no Stripe ---');
    const products = await stripe.products.list({ limit: 3 });
    
    if (products.data.length === 0) {
      console.log('Nenhum produto encontrado na sua conta Stripe.');
    } else {
      for (const product of products.data) {
        const prices = await stripe.prices.list({ product: product.id });
        const price = prices.data[0];
        const amount = price ? price.unit_amount / 100 : 'N/A';
        const currency = price ? price.currency.toUpperCase() : '';
        
        console.log(`Produto: ${product.name}`);
        console.log(`Descrição: ${product.description}`);
        console.log(`Preço: ${currency} ${amount}`);
        console.log(`ID do Preço: ${price?.id}`);
        console.log('-----------------------------------');
      }
    }
  } catch (error) {
    console.error('Erro ao conectar com Stripe:', error.message);
  }
}

testStripe();
