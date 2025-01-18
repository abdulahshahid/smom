import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Globe, Code, Building2, Phone, UserCircle } from 'lucide-react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [signupStep, setSignupStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        organization: '',
        role: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const nextStep = (e) => {
        e.preventDefault();
        setSignupStep(signupStep + 1);
    };

    const prevStep = (e) => {
        e.preventDefault();
        setSignupStep(signupStep - 1);
    };

    const renderSignupStep = () => {
        switch (signupStep) {
            case 1:
                return (
                    <>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                    placeholder="M Ali"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block">Organization</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Building2 className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                    placeholder="Company Name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block">Role</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserCircle className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                    placeholder="Your Role"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden flex items-center justify-center py-16 px-4">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Auth Container */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white border-opacity-20">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-gray-600">
                            {isLogin ? "" : "Sign up to get started with our service"}
                        </p>
                    </div>


                    {isLogin ? (
                        <>
                            {/* Social Login Buttons */}
                            <div className="space-y-3 mb-6">
                                <button className="w-full bg-white bg-opacity-50 hover:bg-opacity-70 backdrop-blur-sm text-gray-700 px-4 py-3 rounded-lg font-medium border border-white border-opacity-20 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2">
                                    <Globe className="w-5 h-5" />
                                    Continue with Google
                                </button>
                                <button className="w-full bg-white bg-opacity-50 hover:bg-opacity-70 backdrop-blur-sm text-gray-700 px-4 py-3 rounded-lg font-medium border border-white border-opacity-20 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2">
                                    <Code className="w-5 h-5" />
                                    Continue with Github
                                </button>
                            </div>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                            </div>

                            {/* Login Form */}
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 block">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 block">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="password"
                                            className="w-full pl-10 pr-4 py-2 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 backdrop-blur-sm"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                        Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 bg-opacity-90 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                                >
                                    Sign in
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </>
                    ) : (
                        /* Signup Form */
                        <form className="space-y-4">
                            {renderSignupStep()}

                            <div className="flex gap-3">
                                {signupStep > 1 && (
                                    <button
                                        onClick={prevStep}
                                        className="flex-1 bg-gray-500 bg-opacity-90 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                                    >
                                        Back
                                    </button>
                                )}
                                <button
                                    onClick={signupStep === 2 ? (e) => e.preventDefault() : nextStep}
                                    type={signupStep === 2 ? "submit" : "button"}
                                    className="flex-1 bg-blue-600 bg-opacity-90 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                                >
                                    {signupStep === 2 ? "Create account" : "Next"}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Toggle Auth Mode */}
                    <p className="mt-6 text-center text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setSignupStep(1);
                            }}
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            {isLogin ? "Sign up" : "Sign in"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;