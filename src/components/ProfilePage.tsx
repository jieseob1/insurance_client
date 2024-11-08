import {
  Page,
  Text,
  BlockStack,
  InlineGrid,
  Button,
  Divider,
  Box
} from '@shopify/polaris';
import styled from 'styled-components';

const RightAligned = styled.div`
  text-align: right;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

export function ProfilePage() {
  return (
    <Page title="Profile">
      <BlockStack gap="600">
        <InlineGrid columns={2} gap="400" alignItems="center">
          <Text variant="headingMd" as="h2">Personal information</Text>
          <RightAligned>
            <Button variant="secondary">Edit</Button>
          </RightAligned>
        </InlineGrid>

        <InlineGrid columns={2} gap="400" alignItems="center">
          <Text variant="headingMd" as="h2">Contact details</Text>
          <RightAligned>
            <Button variant="secondary">Edit</Button>
          </RightAligned>
        </InlineGrid>

        <InlineGrid columns={2} gap="400" alignItems="center">
          <Text variant="headingMd" as="h2">Insurance preferences</Text>
          <RightAligned>
            <Button variant="secondary">Edit</Button>
          </RightAligned>
        </InlineGrid>

        <BlockStack gap="400">
          <Text variant="headingMd" as="h2">Security</Text>
          <InlineGrid columns={2} gap="400" alignItems="center">
            <Text variant="bodyMd" as="span">Email address</Text>
            <RightAligned>
              <Text variant="bodyMd" as="span">blacksesame@gmail.com</Text>
            </RightAligned>
          </InlineGrid>
          <Divider />
          <InlineGrid columns={2} gap="400" alignItems="center">
            <Text variant="bodyMd" as="span">Password</Text>
            <RightAligned>
              <Button variant="secondary">Change</Button>
            </RightAligned>
          </InlineGrid>
        </BlockStack>

        <ButtonWrapper>
          <Button variant="primary" tone="critical">Log out</Button>
        </ButtonWrapper>
      </BlockStack>
    </Page>
  );
} 