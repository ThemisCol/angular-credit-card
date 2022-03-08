# Angular Credit Cards

A slick credit card component for Angular.

![demo](https://raw.githubusercontent.com/amarofashion/react-credit-cards/master/docs/media/rccs.gif)

## Installation

1. You can install **_angular-credit-card_** using npm

```
npm install angular-credit-cards --save
```

2. You will also need to install and include `payment.js` library in your application (it is a peer dependency of this library, more info can be found in the official `payment.js` [documentation](https://github.com/jessepollak/payment#readme))

```
npm install payment --save
```

3. Import the `NgCreditCardModule` in your app main module:

```typescript
import { NgCreditCardModule } from "angular-credit-card";

// In your App's module:
imports: [NgCreditCardModule];
```

## Props

- `name` {string}: Name on card. \*
- `number` {string}: Card number. \*
- `expiry` {string}: Card expiry date. `10/20` or `012017` \*
- `cvc` {string}: Card CVC/CVV. \*
- `focused` {string}: Focused card field. `name|number|expiry|cvc`
- `i18n` {object}: placeholder text (e.g. `{ name: 'YOUR NAME HERE', valid: 'valid thru', }`
- `acceptedCards` {array}: If you want to limit the accepted cards. (`['visa', 'mastercard', ,'amex' 'visaelectron', 'unionpay', 'maestro', 'jcb', 'hipercard', 'elo', 'discover', 'dinersclub']`

## Usage

Use `<ng-credit-card>` in your component html.

```
 <ng-credit-card [name]="name" [number]="number" [cvc]="cvc" [expiry]="expiry"></ng-credit-card>
```

## SCSS options

**Credit Card sizing**

- `$rccs-card-ratio`: Card ratio. Defaults to `1.5858`
- `$rccs-size`: Card width. Defaults to `290px`

**Credit Card fonts**

- `$rccs-name-font-size`: Defaults to `17px`
- `$rccs-name-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-number-font-size`: Defaults to `17px`
- `$rccs-number-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-valid-font-size`: Defaults to `10px`
- `$rccs-expiry-font-size`: Defaults to `16px`
- `$rccs-expiry-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-cvc-font-size`: Defaults to `14px`
- `$rccs-cvc-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-cvc-color`: Defaults to `#222`

**Credit Card styling**

- `$rccs-shadow`: Defaults to `0 0 20px rgba(#000, 0.2)`
- `$rccs-light-text-color`: Card text color for dark cards. Defaults to `#fff`
- `$rccs-dark-text-color`: Card text color for light cards. Defaults to `#555`
- `$rccs-stripe-bg-color`: Stripe background color in the back. Defaults to `#2a1d16`
- `$rccs-signature-background`: Signature background in the back. Defaults to `repeating-linear-gradient(0.1deg, #fff 20%, #fff 40%, #fea 40%, #fea 44%, #fff 44%)`
- `$rccs-default-background`: Default card background. Defaults to `linear-gradient(25deg, #939393, #717171)`
- `$rccs-unknown-background`: Unknown card background. Defaults to `linear-gradient(25deg, #999, #999)`
- `$rccs-background-transition`: Card background transition. Defaults to `all 0.5s ease-out`
- `$rccs-animate-background`: Card background animation. Defaults to `true`

**Credit Card brands**

- `$rccs-amex-background`: Defaults to `linear-gradient(25deg, #308c67, #a3f2cf)`
- `$rccs-dankort-background`: Defaults to `linear-gradient(25deg, #ccc, #999)`
- `$rccs-dinersclub-background`: Defaults to `linear-gradient(25deg, #fff, #eee)`
- `$rccs-discover-background`: Defaults to `linear-gradient(25deg, #fff, #eee)`
- `$rccs-mastercard-background`: Defaults to `linear-gradient(25deg, #e8e9e5, #fbfbfb)`
- `$rccs-visa-background`: Defaults to `linear-gradient(25deg, #0f509e, #1399cd)`
- `$rccs-elo-background`: Defaults to `linear-gradient(25deg, #211c18, #aaa7a2)`
- `$rccs-hipercard-background`: Defaults to `linear-gradient(25deg, #8b181b, #de1f27)`

## Contributing

this package is built for angular based on the package [react-credit-cards](https://www.npmjs.com/package/react-credit-cards)

## LICENSE

This project is licensed under the [MIT License](LICENSE.md).
