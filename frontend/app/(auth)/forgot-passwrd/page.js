'use client';

import { Form, Input, Button, Typography, Card, Result } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { validationRules } from '@/utils/validation';
import { useState } from 'react';

const { Title, Text } = Typography;

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await forgotPassword(values.email);
      setEmailSent(true);
    } catch (error) {
      console.error('Forgot password error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <Card style={{ width: 500, textAlign: 'center' }}>
          <Result
            status="success"
            title="Check Your Email"
            subTitle="We've sent password reset instructions to your email address."
            extra={[
              <Link href="/signin" key="signin">
                <Button type="primary" size="large">
                  Back to Sign In
                </Button>
              </Link>
            ]}
          />
        </Card>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Card style={{ width: 450, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
        <Link href="/signin" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px', color: '#1890ff' }}>
          <ArrowLeftOutlined style={{ marginRight: '8px' }} />
          Back to Sign In
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Title level={2} style={{ marginBottom: '8px' }}>Forgot Password?</Title>
          <Text type="secondary">
            Enter your email address and we'll send you instructions to reset your password.
          </Text>
        </div>

        <Form
          form={form}
          name="forgot-password"
          onFinish={onFinish}
          size="large"
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email Address"
            rules={validationRules.email}
          >
            <Input 
              prefix={<MailOutlined />} 
              placeholder="Enter your email address" 
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              loading={loading}
              size="large"
            >
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}