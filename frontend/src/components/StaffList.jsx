import { useEffect } from "react";
import { motion } from "framer-motion";
import { Trash, UserRound } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const StaffList = () => {
  const { allUsers, deleteUser, getAllUsers } = useUserStore();

  console.log("products", allUsers);

  useEffect(() => {
    getAllUsers();
    // console.log("rerender");
  }, [getAllUsers]);

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className=" min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Role
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Created Time
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {allUsers?.map((user) => (
            <tr key={user._id} className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {/* <UserRound /> */}
                  {/* <div className="ml-4"> */}
                  <div className="text-sm font-medium text-white">
                    {user.name}
                  </div>
                  {/* </div> */}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{user.role}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{user.createdAt}</div>
                {/* <button
                  onClick={() => toggleFeaturedProduct(user._id)}
                  className={`p-1 rounded-full ${
                    user.isFeatured
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-600 text-gray-300"
                  } hover:bg-yellow-500 transition-colors duration-200`}
                >
                  <Star className="h-5 w-5" />
                </button> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {user.role !== "admin" && (
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
export default StaffList;
