import * as yup from 'yup';

const choosePriceSchema = yup.object().shape({
  price: yup
    .number('Veuillez saisir un montant.')
    .positive('Le montant ne peux être négatif.')
    .integer('Le prix doit être sans cent.')
    .required('Veuillez saisir un montant.'),
});

export default choosePriceSchema;
