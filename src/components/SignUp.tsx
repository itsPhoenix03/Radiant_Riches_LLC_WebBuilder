function SignUp() {
  return (
    <div className="mb-6 sm:mb-0 w-full h-auto sm:h-[171px] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
      <h2 className="w-full sm:w-[398px] text-[20px] sm:text-[30px] lg:text-[32px] text-[#5C6874]">
        Sign up and get exclusive special deals
      </h2>

      {/* Wrapper for the Sign up */}
      <div className="w-full sm:w-[445px] h-full sm:h-[52px] flex flex-col sm:flex-row justify-start items-center gap-2 sm:gap-0">
        <input
          type="text"
          name="sign-up"
          className="outline-none bg-white w-full sm:w-[280px] lg:w-[348px] h-full py-4 px-2 rounded-xl sm:rounded-none sm:rounded-l-xl border border-actionColor/20"
        />
        <button className="w-full sm:w-auto bg-actionColor text-white font-light px-5 py-4 text-sm rounded-xl sm:rounded-none sm:rounded-r-xl">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
