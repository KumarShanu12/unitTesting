import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block

   it('calls language change function', async ()=>{

    const el = await fixture(
      html`<loan-header><header></header>
         </loan-header>`
    );

    const myFunctionStub = stub(el, 'localeChanged');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(1);
   })


   it('pass accessibilty test for EN', async ()=>{
    const el = await fixture(html `<loan-header></loan-header>`)
    const myVal = await el.shadowRoot.querySelector('button')
    await expect(myVal).to.be.accessible()
   })

   it('pass accessibilty test for NL', async ()=>{
    const el = await fixture(html `<loan-header></loan-header>`)
    const myVal = await el.shadowRoot.querySelector('button')
    await expect(myVal).to.be.accessible()
   })

  it('check for event handler button en' , async()=>{
    const el = await fixture(html `<loan-header></loan-header>`)
    await el.shadowRoot.querySelector('button').click()

  })

  it('check  for text' , async()=>{
    const el = await fixture(html `<loan-header></loan-header>`)
    const myvalue= await el.shadowRoot.querySelector('p').innerText
    expect(myvalue).to.be.equal('Apply Loan')

  })
});
