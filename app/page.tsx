import React from 'react'
import GoogleButton from './GoogleButton'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#E1ECF3] flex items-center justify-center p-4 relative">
      <div className="absolute top-4 left-4">
        <Image 
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          priority
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image 
              src="/binaryx.png"
              alt="Binaryx Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Welcome to Binaryx
          </h1>
          <p className="text-[#B5BCC9] text-center mb-8">
            Sign Up or Log In with your email or wallet
          </p>
          
          <form className="space-y-4">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                placeholder="name@domain.com"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#99D6E5] text-white py-2 px-4 rounded-md hover:bg-[#88c5d4] transition-colors duration-200"
            >
              Continue with Email
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <GoogleButton />
            <button className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200">
              <Image 
                src="/wallet.png"
                alt="Wallet"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200">
              <Image 
                src="/metamask.png"
                alt="MetaMask"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>

          <p className="text-sm text-[#B5BCC9] text-center mt-6">
            By connecting your wallet, you agree to our{' '}
            <a href="#" className="text-[#09ADCC] hover:text-[#0897b2]">
              Terms of Service
            </a>{' '}
            and our{' '}
            <a href="#" className="text-[#09ADCC] hover:text-[#0897b2]">
              Privacy Policy
            </a>
          </p>
        </div>
        
        <div className="flex space-x-6 mt-4 text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Terms</span>
          <span className="hover:text-gray-700 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-700 cursor-pointer">Cookies Policy</span>
          <span className="hover:text-gray-700 cursor-pointer">Back to App</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-sm text-gray-500">
        2024 © Binaryx. All rights reserved
      </div>
    </div>
  )
}

export default Page