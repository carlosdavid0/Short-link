import React, { useEffect, useState } from "react";
import ILinks from "../../interfaces/iLinks";
import api from "../../services/api";

export default function Links() {
  const [links, setLinks] = useState<ILinks[]>();
  useEffect(() => {
    api
      .get("/links")
      .then((response) => {
        setLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    URL
                </th>
                <th scope="col" className="py-3 px-6">
                    code
                </th>
                <th scope="col" className="py-3 px-6">
                    description
                </th>
                <th scope="col" className="py-3 px-6">
                    Status
                </th>
                <th scope="col" className="py-3 px-6"> 
                    Clicks
                </th>
                <th scope="col" className="py-3 px-6"> 
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
           
       {links?.map((link) => (
         <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
         <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {link.url}
         </th>
         <td className="py-4 px-6">
            {link.code}
         </td>
         <td className="py-4 px-6">
            {link.description}
         </td>
         <td className="py-4 px-6">
         {link.active?(
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Active</span>
         ):(
                <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Inactive</span>
         )}
         </td>
         <td className="py-4 px-6">
             <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
         </td>
     </tr>    
    ))}
        </tbody>
    </table>
</div>
  );
}
