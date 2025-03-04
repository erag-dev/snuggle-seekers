
import logoPaypal from "assets/donate/paypal.png"
import logoGcash from "assets/donate/gcash.png"
import logoBpi from "assets/donate/bpi.png"

const DONATE_SAMPLES = [
    'Rescue and rehabilitate animals from neglect and abandonment',
    'Cover veterinary expenses, vaccinations, and spaying/neutering',
    'Provide food, shelter, and loving care for our pets while they wait for their forever homes',
    'Support community education and outreach programs to promote responsible pet ownership',
];

const DONATE_CHANNELS = [
    {
        img: logoPaypal,
        name: 'Snuggle Seeker',
        acc_num: '@snuggleseeker_paypal',
    },
    {
        img: logoGcash,
        name: 'TestName TestSurname',
        acc_num: '0912 123 1234',
    },
    {
        img: logoBpi,
        name: 'Snuggle Seeker Foundation',
        acc_num: '1234 0001 23',
    },
    {
        img: logoPaypal,
        name: 'Snuggle Seeker',
        acc_num: '@snuggleseeker_paypal',
    },
    {
        img: logoGcash,
        name: 'TestName TestSurname',
        acc_num: '0912 123 1234',
    },
    {
        img: logoBpi,
        name: 'Snuggle Seeker Foundation',
        acc_num: '1234 0001 23',
    },
];

export {
    DONATE_SAMPLES,
    DONATE_CHANNELS,
}