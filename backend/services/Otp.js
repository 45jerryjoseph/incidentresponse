import otpGenerator from 'otp-generator';

export const generateOTP = () => {
    const OTP_LENGTH = 5;
    // const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
    const OTP = otpGenerator.generate(OTP_LENGTH, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    console.log('Generated OTP:', OTP)
    return OTP;
}

