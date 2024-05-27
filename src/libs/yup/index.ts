import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'email', function () {
  return this.test('email', '${path} must be a valid email address', function (value) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value as string);
  });
});

export default Yup;
