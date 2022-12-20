import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('errorButton Click', async()=>{

    const el = await fixture(html`<loan-success><lion-button></lion-button></loan-success>`)
  
    const myFunctionStub = stub(el, '_toHome');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(1);

  })


   





});

describe('error screen', () => {
  // Write test cases inside this block

  it('errorButton Click', async()=>{

    const el = await fixture(html`<loan-error><lion-button></lion-button></loan-error>`)
  
    const myFunctionStub = stub(el, '_toHome');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(1);

  })
});
