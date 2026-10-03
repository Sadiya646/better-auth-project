
"use client";

import React from "react";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { signIn } from "../../../lib/auth-client";

const SignIn = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const { data: signInData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(signInData, error);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f7ff] px-4 py-10">

      {/* Background Animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl animate-pulse" />

        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl animate-pulse" />

        <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-pink-200/30 blur-3xl" />

      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md animate-fade-in">

        <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[0_20px_70px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-9">

          {/* Header */}
          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-2xl font-bold text-white shadow-lg shadow-violet-300/50 transition-transform duration-300 hover:scale-110">
              S
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome Back!
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to continue to your account.
            </p>

          </div>

          {/* Form */}
          <Form
            className="flex w-full flex-col gap-5"
            onSubmit={onSubmit}
          >

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="mb-2 text-sm font-semibold text-gray-700">
                Email Address
              </Label>

              <Input
                placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all duration-300 hover:border-violet-300 focus-within:border-violet-500 focus-within:bg-white"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="mb-2 text-sm font-semibold text-gray-700">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all duration-300 hover:border-violet-300 focus-within:border-violet-500 focus-within:bg-white"
              />

              <Description className="mt-2 text-xs text-gray-400">
                At least 8 characters, 1 uppercase letter and 1 number.
              </Description>

              <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Remember Me */}
            <div className="flex w-full items-center justify-between text-sm">

              <label className="flex cursor-pointer items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  name="rememberMe"
                  defaultChecked
                  className="h-4 w-4 cursor-pointer accent-violet-600"
                />
                Remember me
              </label>

              <span className="cursor-pointer font-medium text-violet-600 transition-colors hover:text-indigo-600 hover:underline">
                Forgot password?
              </span>

            </div>

            {/* Buttons */}
            <div className="mt-2 flex w-full flex-col gap-3">

              <Button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-300/50 active:scale-[0.98]"
              >
                Sign In
                <span className="ml-2 text-lg">→</span>
              </Button>

              <Button
                type="reset"
                variant="secondary"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 font-medium text-gray-600 transition-all duration-300 hover:border-violet-300 hover:bg-violet-50"
              >
                Reset
              </Button>

            </div>

          </Form>

          {/* Footer */}
          <div className="mt-7 text-center">

            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <span className="cursor-pointer font-semibold text-violet-600 transition-colors hover:text-indigo-600 hover:underline">
                Sign Up
              </span>
            </p>

          </div>

        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 Your App. All rights reserved.
        </p>

      </div>

    </main>
  );
};

export default SignIn;