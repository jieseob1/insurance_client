import styled from 'styled-components';
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button,
  Checkbox,
} from '@shopify/polaris';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;

  .Polaris-Card {
    width: 100%;
    max-width: 400px;
  }
`;

const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  font-size: 24px;
`;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('필수 입력사항입니다'),
  lastName: Yup.string()
    .required('필수 입력사항입니다'),
  dateOfBirth: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/, '올바른 날짜 형식을 입력해주세요 (MM/DD/YYYY)')
    .required('필수 입력사항입니다'),
  email: Yup.string()
    .email('올바른 이메일 주소를 입력해주세요')
    .required('필수 입력사항입니다'),
  phoneNumber: Yup.string()
    .matches(/^\(\d{3}\) \d{3}-\d{4}$/, '올바른 전화번호 형식을 입력해주세요')
    .required('필수 입력사항입니다'),
  password: Yup.string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .required('필수 입력사항입니다'),
  terms: Yup.boolean()
    .oneOf([true], '약관에 동의해주세요')
});

const SignupPage = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
    // 여기에 회원가입 로직 추가
  };

  return (
    <SignupContainer>
      <Card>
        <FormTitle>Create an account</FormTitle>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            email: '',
            phoneNumber: '',
            password: '',
            terms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => (
            <Form>
              <FormLayout>
                <TextField
                  label="First name"
                  name="firstName"
                  value={values.firstName}
                  onChange={(value) => setFieldValue('firstName', value)}
                  error={touched.firstName && errors.firstName}
                  autoComplete="given-name"
                />

                <TextField
                  label="Last name"
                  name="lastName"
                  value={values.lastName}
                  onChange={(value) => setFieldValue('lastName', value)}
                  error={touched.lastName && errors.lastName}
                  autoComplete="family-name"
                />

                <TextField
                  label="Date of birth"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={(value) => setFieldValue('dateOfBirth', value)}
                  error={touched.dateOfBirth && errors.dateOfBirth}
                  placeholder="MM/DD/YYYY"
                  autoComplete="bday"
                />

                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(value) => setFieldValue('email', value)}
                  error={touched.email && errors.email}
                  autoComplete="email"
                />

                <TextField
                  label="Phone number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={(value) => setFieldValue('phoneNumber', value)}
                  error={touched.phoneNumber && errors.phoneNumber}
                  placeholder="(123) 456-7890"
                  autoComplete="tel"
                />

                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={(value) => setFieldValue('password', value)}
                  error={touched.password && errors.password}
                  autoComplete="new-password"
                />

                <Checkbox
                  label="By selecting this, you agree to the terms and conditions and privacy policy."
                  checked={values.terms}
                  onChange={(checked) => setFieldValue('terms', checked)}
                />
                {touched.terms && errors.terms && (
                  <div style={{ color: 'red' }}>{errors.terms}</div>
                )}

                <Button submit fullWidth variant="primary">
                  Create account
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>
      </Card>
    </SignupContainer>
  );
};

export default SignupPage; 