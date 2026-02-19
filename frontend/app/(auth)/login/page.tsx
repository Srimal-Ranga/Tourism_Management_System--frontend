"use client";

import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { login, loading: authLoading } = useAuth();
  const router = useRouter();
  const [form] = Form.useForm();

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      const result = await login(values.username, values.password);

      // Only redirect if login was successful
      if (result) {
        message.success("Login successful!");
        router.push("/admin");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      message.error(error.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src="/sign-background.jpg"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
        {/* Dark overlay for better readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 100%)",
            backdropFilter: "blur(2px)",
          }}
        />
      </div>

      {/* Animated Floating Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "float 10s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />

      {/* Login Card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 480,
          margin: "0 20px",
        }}
      >
        {/* Glassmorphic Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            borderRadius: 32,
            padding: "56px 48px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.3)",
            animation: "slideUp 0.8s ease-out",
          }}
        >
          {/* Logo and Brand */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div
              style={{
                display: "inline-block",
                marginBottom: 24,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "3px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 12px 40px rgba(102, 126, 234, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)",
                  animation: "logoGlow 3s ease-in-out infinite",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Tourism Manager Logo"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Decorative ring around logo */}
              <div
                style={{
                  position: "absolute",
                  top: -8,
                  left: -8,
                  width: "calc(100% + 16px)",
                  height: "calc(100% + 16px)",
                  borderRadius: 28,
                  border: "2px solid rgba(102, 126, 234, 0.3)",
                  animation: "rotate 10s linear infinite",
                }}
              />
            </div>

            <h1
              style={{
                fontSize: 36,
                fontWeight: 800,
                margin: 0,
                color: "white",
                letterSpacing: "-0.03em",
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                marginBottom: 8,
              }}
            >
              Tourism Manager
            </h1>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: 16,
                margin: 0,
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Admin Dashboard Portal
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
              marginBottom: 32,
            }}
          />

          {/* Login Form */}
          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            style={{ width: "100%" }}
            size="large"
            initialValues={{ username: "", password: "" }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please enter your username" }]}
              style={{ marginBottom: 20 }}
            >
              <Input
                prefix={
                  <UserOutlined
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: 18,
                    }}
                  />
                }
                placeholder="Username"
                disabled={loading}
                style={{
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "white",
                  fontSize: 16,
                  transition: "all 0.3s",
                }}
                onFocus={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.12)";
                  e.target.style.borderColor = "rgba(102, 126, 234, 0.6)";
                  e.target.style.boxShadow = "0 0 0 4px rgba(102, 126, 234, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
              style={{ marginBottom: 28 }}
            >
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: 18,
                    }}
                  />
                }
                placeholder="Password"
                disabled={loading}
                style={{
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "white",
                  fontSize: 16,
                  transition: "all 0.3s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.6)";
                  e.currentTarget.style.boxShadow = "0 0 0 4px rgba(102, 126, 234, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                icon={<LoginOutlined />}
                style={{
                  height: 56,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  boxShadow: "0 8px 24px rgba(102, 126, 234, 0.5), 0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(102, 126, 234, 0.6), 0 6px 12px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(102, 126, 234, 0.5), 0 4px 8px rgba(0, 0, 0, 0.2)";
                }}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Form.Item>
          </Form>

          {/* Footer Info */}
          <div
            style={{
              marginTop: 32,
              textAlign: "center",
              padding: "20px",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: 12,
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: 14,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Default credentials:{" "}
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  fontWeight: 600,
                  fontFamily: "monospace",
                  padding: "2px 8px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 6,
                }}
              >
                admin
              </span>{" "}
              /{" "}
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  fontWeight: 600,
                  fontFamily: "monospace",
                  padding: "2px 8px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 6,
                }}
              >
                adminpassword
              </span>
            </p>
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
            box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4),
              0 4px 12px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 12px 50px rgba(102, 126, 234, 0.6),
              0 8px 20px rgba(118, 75, 162, 0.4);
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