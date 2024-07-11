import { CgSpinner } from "react-icons/cg";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { getAllAccounts, register } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { errorStyle, successStyle } from "../../utils/toast-customize";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

export const SignUpPage = () => {
  const { accounts, isLoading } = useSelector((state) => state.auth);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setcomfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [
    displayTextViewInInputPhoneNumber,
    setDisplayTextViewInInputPhoneNumber,
  ] = useState("");

  const [hidePhoneNumber, setHidePhoneNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkExistAccount = (newPhone) => {
    console.log("Account Data", accounts);
    const listPhones = accounts.map((item) => item.phoneNumber);
    if (listPhones.includes(newPhone)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    dispatch(getAllAccounts());
  }, []);

  const onSubmitCreateAccount = async () => {
    const accountData = {
      phoneNumber: 0 + phoneNumber,
      password: password,
    };

    const result = await dispatch(register(accountData));
    console.log("ACCount Data", accountData);
    if (result.type.endsWith("fulfilled")) {
      toast.success("Đăng Ký Tài Khoản Thành Công !!!!!", successStyle);
      navigate("/home");
    } else if (result?.error?.message === "Rejected") {
      toast.error(result?.payload, errorStyle);
    }
  };

  const handleSendOTP = async () => {
    if (phoneNumber.length < 9) {
      toast.error("Vui lòng nhập số điện thoại có 10 hoặc 11 chữ số !!!");
      return;
    }

    const formattedPhoneNumber = `+84${phoneNumber}`;

    const accountData = {
      phoneNumber: 0 + phoneNumber,
    };

    console.log("Get phone ", accountData.phoneNumber);
    if (checkExistAccount(accountData.phoneNumber)) {
      toast.error(
        "Số điện thoại này đã đăng kí tài khoản !!! Hãy thử số điện thoại khác",
        errorStyle
      );
      return;
    }

  };


  


  const handlePhoneNumberChange = (e) => {
    if (isNaN(e.target.value)) return false;
    let input = e.target.value;

    if (!input.startsWith("0") && input.length == 11) {
      toast.error(
        "Vui lòng nhập đúng số điện thoại gồm 9 hoặc 10 chữ số không bao gồm số 0"
      );
      return;
    }

    if (input.startsWith("0") && (input.length == 10 || input.length == 11)) {
      input = input.substring(1);
    }
    setPhoneNumber(input);
  };

  const handleCheckPassword = (e) => {
    e.preventDefault();

    if (/\s/.test(password)) {
      toast.error("Mật khẩu không được chứa khoảng trắng !!!");
      return;
    }

    if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
      toast.error("Mật khẩu phải chứa ít nhất một ký tự in hoa và một số !!!");
      return;
    }

    if (password.length < 8) {
      toast.error("Mật khẩu phải dài ít nhất 8 ký tự !!!");
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error("Mật khẩu không khớp!");
      return;
    }

    toast.success("Mật khẩu hợp lệ");
    onSubmitCreateAccount();
  };

  const nameViewInInputPhoneNumber =
    "Quý khách vui lòng nhập số điện thoại !!!";


  return (
    <section className="flex items-center justify-center mt-20">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="sign-in-button"></div>
          <div className="select-none">
            <form onSubmit={handleCheckPassword}>
              <h2 className="text-[25px] font-bold text-center mb-12 ">
                Quý khách vui lòng nhập số điện thoại và mật khẩu !!!
              </h2>


              <div className="flex items-center justify-between">
                <div className="text-gray mb-2">Nhập số điện thoại</div>
              </div>
              <input
                maxLength={11}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="shadow appearance-none border py-3 px-3 rounded mb-10"
              />


              <div className="flex items-center justify-between">
                <div className="text-gray mb-2">Nhập mật khẩu</div>
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center mb-2 gap-x-2 text-gray cursor-pointer"
                >
                  {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                  {showPassword ? "Ẩn" : "Hiện"}
                </div>
              </div>
              <input
                type={`${showPassword ? "text" : "password"}`}
                className="shadow appearance-none border py-3 px-3 rounded mb-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex items-center justify-between">
                <div className="text-gray mb-2">Nhập lại mật khẩu</div>
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="flex items-center mb-2 gap-x-2 text-gray cursor-pointer"
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                  {showConfirmPassword ? "Ẩn" : "Hiện"}
                </div>
              </div>
              <input
                type={`${showConfirmPassword ? "text" : "password"}`}
                className="shadow appearance-none border py-3 px-3 rounded mb-10"
                value={confirmPassword}
                onChange={(e) => setcomfirmPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-primary mb-10 text-white py-3 rounded-full hover:bg-blue-600 transition duration-300 font-bold flex justify-center items-center"
                onClick={handleSendOTP}
              >
                <span>Xác nhận</span>
                {loading && <CgSpinner size={20} className="animate-spin" />}
              </button>
            </form>
          </div>
      </div>
    </section>
  );
};
