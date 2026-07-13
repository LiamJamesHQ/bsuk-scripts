/* ============================================================
   BSUK — CANONICAL DEPOSIT COPY
   ------------------------------------------------------------
   Single source of truth for the £500 deposit promise.
   Edit the wording HERE and nowhere else. Any page that
   mentions the deposit should read from this file.

   {balance} is swapped for the real number automatically.
   ============================================================ */

const BSUK_DEPOSIT = {

  amount: 500,

  /* --- Used on the estimate (on screen and in the PDF) --- */
  heading: 'To secure your place in the queue',

  body: 'A £500 deposit reserves your build slot in the production queue. ' +
        'It comes off your total, so the balance due is {balance}. ' +
        'The final specification can still be adjusted at invoice stage — ' +
        'materials are only ordered once the final invoice is paid.',

  /* --- Used in the WhatsApp message. Same promise, shorter. --- */
  waHeading: 'Securing your slot',

  waBody: 'A £500 deposit reserves your place in the production queue. ' +
          'It comes off your total, so the balance would be {balance}. ' +
          'The spec can still be adjusted at invoice stage — materials ' +
          'are only ordered once the final invoice is paid.',

  /* --- Shopify deposit checkout link. --- */
  /* Leave empty and no link is sent. Paste the Shopify cart  */
  /* permalink here and it appears at the end of every        */
  /* WhatsApp estimate automatically.                          */
  payLink: ''   /* CONFIRM — Shopify cart permalink */

};
