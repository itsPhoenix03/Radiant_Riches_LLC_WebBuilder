function SignUp() {
  return (
    <div className="w-full h-[171px] flex justify-between items-center gap-4">
      <h2 className="w-[398px] text-[32px] text-[#5C6874]">
        Sign up and get exclusive special deals
      </h2>

      {/* Wrapper for the Sign up */}
      <div className="w-[445px] h-[52px] flex justify-start items-center gap-0">
        <input
          type="text"
          name="sign-up"
          className="bg-white w-[348px] h-full py-4 px-2 rounded-l-xl"
        />
        <button className="bg-actionColor text-white font-light px-5 py-4 text-sm rounded-r-xl">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
