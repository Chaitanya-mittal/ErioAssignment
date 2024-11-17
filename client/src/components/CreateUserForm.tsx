import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCreateUser from "../hooks/useCreateUser";
import useEditUser from "../hooks/useEditUser";
import Loader from "./Loader";

type FormValues = {
  First: string;
  Last: string;
  Email: string;
  Phone: string;
  Company: string;
  JobTitle: string;
};

export default function CreateUserForm({ editSession }: { editSession?: any }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: editSession ? editSession : undefined,
  });

  const { createUserFunc, isCreating } = useCreateUser();
  const { editUserFunc, isEditing } = useEditUser();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (editSession) {
      editUserFunc({ ...data, id: editSession.id });
    } else {
      createUserFunc(data);
    }
  };

  if (isCreating || isEditing) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex  w-full ">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
      <div className="p-6 w-full bg-[#121212] text-white flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl"
        >
          <div>
            <label className="block text-sm mb-2 font-medium">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              {...register("First", { required: "First name is required" })}
              placeholder="Write your first name here"
              className="w-full text-sm font-normal px-3 py-2 rounded-lg shadow-md bg-[#171717] text-white border border-solid border-gray-700 focus:border-purple-500 hover:border-purple-500 focus:ring-2 focus:ring-purple-500 focus-visible:outline-none"
            />
            {errors.First && (
              <p className="text-xs text-red-500 mt-1">
                {errors.First.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-2 font-medium">Last Name</label>
            <input
              {...register("Last")}
              placeholder="Write your last name here"
              className="w-full text-sm font-normal px-3 py-2 rounded-lg shadow-md bg-[#171717] text-white border border-solid border-gray-700 focus:border-purple-500 hover:border-purple-500 focus:ring-2 focus:ring-purple-500 focus-visible:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Write your email here"
              className="w-full text-sm font-normal px-3 py-2 rounded-lg shadow-md bg-[#171717] text-white border border-solid border-gray-700 focus:border-purple-500 hover:border-purple-500 focus:ring-2 focus:ring-purple-500 focus-visible:outline-none"
            />
            {errors.Email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.Email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2 font-medium">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              {...register("Phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              placeholder="Write your phone number here"
              className="w-full text-sm font-normal px-3 py-2 rounded-lg shadow-md bg-[#171717] text-white border border-solid border-gray-700 focus:border-purple-500 hover:border-purple-500 focus:ring-2 focus:ring-purple-500 focus-visible:outline-none"
            />
            {errors.Phone && (
              <p className="text-xs text-red-500 mt-1">
                {errors.Phone.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm mb-2 font-medium">Company</label>
            <input
              {...register("Company")}
              placeholder="Write your company name here"
              className="w-full text-sm font-normal px-3 py-2 rounded-lg shadow-md bg-[#171717] text-white border border-solid border-gray-700 focus:border-purple-500 hover:border-purple-500 focus:ring-2 focus:ring-purple-500 focus-visible:outline-none"
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-sm mb-2 font-medium">Job Title</label>
            <input
              {...register("JobTitle")}
              placeholder="Write your job title here"
              className="w-full text-sm font-normal px-3 py-2 rounded-lg shadow-md bg-[#171717] text-white border border-solid border-gray-700 focus:border-purple-500 hover:border-purple-500 focus:ring-2 focus:ring-purple-500 focus-visible:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
