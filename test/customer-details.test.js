import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import { LocalizeMixin, localize } from '@lion/localize';

describe('customer details', () => {
  it(' Click', async () => {
    const el = await fixture(
      html`<customer-details><lion-button></lion-button></customer-details>`
    );

    const myFunctionStub = stub(el, '_toEmidetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(0);
  });

  it('can check for an exiting css class', async () => {
    const el = await fixture(`<div class='container'></div>`);
    expect(el).to.have.class('container');
  });

  it('Trail and error test case', async () => {
    const el = await fixture(html`<customer-details></customer-details>`);
    const inputElement = el.shadowRoot.querySelector('lion-input');
    expect(inputElement.type).to.equal('text');
   });


  it('should contain valid characters in FirstName', async()=>{
    const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });



  it('should contain valid characters in LastName', async()=>{
    const el=await fixture(html`<lion-input label="${localize.msg('change-language:lastname')}"></lion-input>`);
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });

   it('should contain valid characters in Email', async()=>{
    const el=await fixture(html`<lion-input-email label="${localize.msg('change-language:email')}"></lion-input-email>`);
    await expect(el.label).to.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/);
 });

 
 it('should contain valid characters in mobile', async()=>{
   const el= await fixture(html`<lion-input label="${localize.msg('change-language:mobilenumber')}"></lion-input>`);
    await expect(el.label).to.match(/6|7|8|9|/); 
});

it('should contain the amount field',async()=>{
 const el=await fixture(html`<lion-input-amount label="${localize.msg('change-language:monthlysalary')}"></lion-input-amount>`);
 await expect(el.label).to.equal('Monthly Salary');
});


it('should contain the amount field',async()=>{
 const el=await fixture(html`<lion-input-amount label="${localize.msg('change-language:previousemi')}"></lion-input-amount>`);
 await expect(el.label).to.equal('Previous EMIs Amount');
});
});
