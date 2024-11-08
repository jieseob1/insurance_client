import React from 'react';
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button,
  Link,
  Text,
  BlockStack,
} from '@shopify/polaris';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; //유효성 검사

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // 자식 요소들의 너비를 100%로 설정
  > * {
    width: 100%;
    max-width: 800px;
  }
`;

const LoginCard = styled(Card)`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
`;


const StyledButton = styled.button`
  background-color: #2c6ecb !important;
  color: white;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;

  &:hover {
    background-color: #1f5296 !important;
  }
`;

const validationSchema = Yup.object({
  email: Yup.string()
    .email('올바른 이메일 형식이 아닙니다')
    .required('이메일을 입력해주세요'),
  password: Yup.string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .matches(/[A-Z]/, '대문자를 최소 1자 이상 포함해야 합니다')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, '특수문자를 최소 1자 이상 포함해야 합니다')
    .required('비밀번호를 입력해주세요'),
});

export function LoginPage() {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('Login attempt:', values);
  };

  return (
    <Page>
      <CenteredContainer>
        <LoginCard>
          <BlockStack gap="400">
            <Text variant="headingLg" as="h1">
              Welcome Back
            </Text>
            <Text variant="bodyMd" as="p">
              Sign in to continue
            </Text>
            
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <FormLayout>
                    <TextField
                      label="Email"
                      name="email"
                      value={values.email}
                      onChange={(value) => handleChange({ target: { name: 'email', value } })}
                      onBlur={handleBlur}
                      error={touched.email && errors.email}
                      autoComplete="email"
                    />
                    
                    <TextField
                      label="Password"
                      name="password"
                      value={values.password}
                      onChange={(value) => handleChange({ target: { name: 'password', value } })}
                      onBlur={handleBlur}
                      type="password"
                      error={touched.password && errors.password}
                      autoComplete="current-password"
                    />
                    
                    <Button submit fullWidth variant="primary">
                      Sign in
                    </Button>
                  </FormLayout>
                </Form>
              )}
            </Formik>
            
            <BlockStack gap="200">
              <Link url="/forgot-password">
                Forgot your username or password?
              </Link>
              <Link url="/signup">
                New to SecureRisk? Create an account
              </Link>
            </BlockStack>
          </BlockStack>
        </LoginCard>
      </CenteredContainer>
    </Page>
  );
} 