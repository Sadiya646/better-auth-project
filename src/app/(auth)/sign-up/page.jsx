"use client";
import React from 'react';
import { authClient } from '../../../lib/auth-client';
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const SignUp = () => {

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const { data:signUpData, error } = await authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
    callbackURL: "/", // An optional URL to redirect to after the user signs up.
});
console.log( signUpData,error);
   
  };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f7ff] px-4 py-10">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl animate-pulse" />

        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl animate-pulse" />

        <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-pink-200/30 blur-3xl" />

      </div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md animate-[fadeIn_0.7s_ease-out]">

        <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[0_20px_70px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-9">

          {/* Header */}
          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-2xl font-bold text-white shadow-lg shadow-violet-300/50 transition-transform duration-300 hover:scale-110">
              S
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Join us today! Create your account to get started.
            </p>

          </div>

          {/* Form */}
          <Form className="w-full" onSubmit={onSubmit}>

            <Fieldset className="w-full">

              <FieldGroup className="gap-5">

                {/* Name */}
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                >
                  <Label className="mb-2 text-sm font-semibold text-gray-700">
                    Full Name
                  </Label>

                  <Input
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all duration-300 hover:border-violet-300 focus-within:border-violet-500 focus-within:bg-white"
                  />

                  <FieldError className="text-xs text-red-500" />
                </TextField>

                {/* Email */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
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

              </FieldGroup>

              {/* Submit Button */}
              <Fieldset.Actions className="mt-7 flex w-full flex-col gap-3">

                <Button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-300/50 active:scale-[0.98]"
                >
                  Create Account
                  <span className="ml-2 text-lg">→</span>
                </Button>

                <Button
                  type="reset"
                  variant="secondary"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 font-medium text-gray-600 transition-all duration-300 hover:border-violet-300 hover:bg-violet-50"
                >
                  Cancel
                </Button>

              </Fieldset.Actions>

            </Fieldset>
          </Form>

          {/* Footer */}
          <div className="mt-7 text-center">

            <p className="text-xs text-gray-400">
              By creating an account, you agree to our{" "}
              <span className="cursor-pointer font-medium text-violet-600 hover:underline">
                Terms & Conditions
              </span>
            </p>

          </div>

        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 Your App. All rights reserved.
        </p>

      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </main>
    );
};

export default SignUp;