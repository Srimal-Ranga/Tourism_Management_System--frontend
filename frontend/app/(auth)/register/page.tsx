'use client';

import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

export default function SignUp() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  const onFinish = async (values: any) => {
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        username: values.username,
        password: values.password,
      });

      message.success(response.data.message || 'Admin registered successfully!');

      setTimeout(() => {
        router.push('/login');
      }, 800);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Registration failed. Please try again.';
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Image
          src="/sign-background.jpg"
          alt="Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
        {/* Dark overlay for better readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />
      </div>

      {/* Animated Floating Elements */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'float 10s ease-in-out infinite reverse',
          zIndex: 1,
        }}
      />

      {/* Signup Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 520,
          margin: '0 20px',
        }}
      >
        {/* Glassmorphic Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            borderRadius: 32,
            padding: '48px 44px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.3)',
            animation: 'slideUp 0.8s ease-out',
          }}
        >
          {/* Logo and Brand */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div
              style={{
                display: 'inline-block',
                marginBottom: 20,
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 12px 40px rgba(16, 185, 129, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)',
                  animation: 'logoGlow 3s ease-in-out infinite',
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Tourism Manager Logo"
                  width={90}
                  height={90}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Decorative ring around logo */}
              <div
                style={{
                  position: 'absolute',
                  top: -8,
                  left: -8,
                  width: 'calc(100% + 16px)',
                  height: 'calc(100% + 16px)',
                  borderRadius: 26,
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  animation: 'rotate 10s linear infinite',
                }}
              />
            </div>

            <h1
              style={{
                fontSize: 32,
                fontWeight: 800,
                margin: 0,
                color: 'white',
                letterSpacing: '-0.03em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                marginBottom: 8,
              }}
            >
              Create Admin Account
            </h1>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: 15,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              Register to manage tourism packages
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
              marginBottom: 28,
            }}
          />

          {/* Signup Form */}
          <Form
            form={form}
            name="signup"
            onFinish={onFinish}
            size="large"
            layout="vertical"
            scrollToFirstError
          >
            <Form.Item
              name="username"
              label={
                <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 14, fontWeight: 600 }}>
                  Username
                </span>
              }
              rules={[
                { required: true, message: 'Please enter username' },
                { min: 3, message: 'Username must be at least 3 characters' },
              ]}
              style={{ marginBottom: 18 }}
            >
              <Input
                prefix={
                  <UserOutlined
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: 17,
                    }}
                  />
                }
                placeholder="admin"
                disabled={loading}
                style={{
                  height: 52,
                  borderRadius: 14,
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  fontSize: 15,
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={
                <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 14, fontWeight: 600 }}>
                  Password
                </span>
              }
              rules={[
                { required: true, message: 'Please enter password' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ]}
              hasFeedback
              style={{ marginBottom: 18 }}
            >
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: 17,
                    }}
                  />
                }
                placeholder="Create a strong password"
                disabled={loading}
                style={{
                  height: 52,
                  borderRadius: 14,
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  fontSize: 15,
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                  e.currentTarget.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label={
                <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 14, fontWeight: 600 }}>
                  Confirm Password
                </span>
              }
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match'));
                  },
                }),
              ]}
              hasFeedback
              style={{ marginBottom: 20 }}
            >
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: 17,
                    }}
                  />
                }
                placeholder="Confirm your password"
                disabled={loading}
                style={{
                  height: 52,
                  borderRadius: 14,
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  fontSize: 15,
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                  e.currentTarget.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('Please accept the terms and conditions')),
                },
              ]}
              style={{ marginBottom: 24 }}
            >
              <Checkbox
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: 14,
                }}
              >
                I agree to the{' '}
                <Link
                  href="/terms"
                  style={{
                    color: '#10b981',
                    fontWeight: 600,
                    textDecoration: 'underline',
                  }}
                >
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  style={{
                    color: '#10b981',
                    fontWeight: 600,
                    textDecoration: 'underline',
                  }}
                >
                  Privacy Policy
                </Link>
              </Checkbox>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                icon={<UserAddOutlined />}
                style={{
                  height: 56,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  border: 'none',
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.5), 0 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 32px rgba(16, 185, 129, 0.6), 0 6px 12px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(16, 185, 129, 0.5), 0 4px 8px rgba(0, 0, 0, 0.2)';
                }}
              >
                {loading ? 'Creating Account...' : 'Register Admin'}
              </Button>
            </Form.Item>
          </Form>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
              margin: '28px 0',
            }}
          />

          {/* Footer Link */}
          <div
            style={{
              textAlign: 'center',
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 12,
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: 14 }}>
              Already have an account?{' '}
            </span>
            <Link
              href="/login"
              style={{
                color: '#10b981',
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              Sign in here
            </Link>
          </div>
        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoGlow {
          0%,
          100% {
            box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4),
              0 4px 12px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 12px 50px rgba(16, 185, 129, 0.6),
              0 8px 20px rgba(5, 150, 105, 0.4);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Custom input styles for dark theme */
        .ant-input,
        .ant-input-password input {
          color: white !important;
        }

        .ant-input::placeholder,
        .ant-input-password input::placeholder {
          color: rgba(255, 255, 255, 0.4) !important;
        }

        .ant-input-password-icon {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .ant-input-password-icon:hover {
          color: rgba(255, 255, 255, 0.8) !important;
        }

        /* Checkbox styling */
        .ant-checkbox-inner {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }

        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #10b981 !important;
          border-color: #10b981 !important;
        }

        .ant-checkbox-wrapper {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        /* Form item styling */
        .ant-form-item-explain-error {
          color: #fca5a5 !important;
          font-size: 13px !important;
        }

        .ant-form-item-has-error .ant-input,
        .ant-form-item-has-error .ant-input-password {
          border-color: #ef4444 !important;
        }

        /* Success feedback */
        .ant-form-item-has-success .ant-input,
        .ant-form-item-has-success .ant-input-password {
          border-color: #10b981 !important;
        }

        /* Scrollbar styling for dark theme */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}