import * as yup from 'yup';

const SignUpSchema = yup.object().shape({
  name: yup.string().required("Veuillez saisir un nom d'utilisateur."),
  firstname: yup.string().required('Veuillez saisir votre prénom.'),
  lastname: yup.string().required('Veuillez saisir votre nom.'),
  email: yup
    .string()
    .email('Veuillez saisir une adresse email.')
    .required('Veuillez saisir une adresse email.'),
  password: yup
    .string()
    .required('Veuillez saisir votre mot de passe')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Il doit contenir au moins 8 charactères, 1 majuscule, 1 nombre et un special charactères (@$!%*#?&)',
    ),
});

export default SignUpSchema;
