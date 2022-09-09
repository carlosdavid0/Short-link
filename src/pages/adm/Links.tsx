import {Alert} from 'flowbite-react'
import React, { useEffect, useState } from "react";
import Aside from "../../components/aside";
import ILinks from "../../interfaces/iLinks";
import api from "../../services/api";

export default function Links() {
  const [links, setLinks] = useState<ILinks[]>();
  useEffect(() => {
    const body = document.querySelector("body");

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
    <section className="dark:bg-slate-600 bg-slate-300 m-5 p-3 h-3/4 rounded-md">
      <Alert color="info">
  <span>
    <span className="font-medium">
      Info alert!
    </span>
    {' '}Change a few things up and try submitting again.
  </span>
</Alert>
      <table className="text-sm text-left text-gray-500 dark:text-slate-800-400 w-full">
      <thead className="text-xs text-gray-700 font-bold  bg-gray-100 dark:bg-slate-900 dark:text-white rounded-lg">
        <tr>
          <th scope="col" className="py-3 px-6 text-lg font-mono">
            URL
          </th> 
          <th scope="col" className="py-3 px-6 text-lg font-mono">
            code
          </th>
          <th scope="col" className="py-3 px-6 text-lg font-mono">
            description
          </th>
          <th scope="col" className="py-3 px-6 text-lg font-mono">
            Status
          </th>
          <th scope="col" className="py-3 px-6 text-lg font-mono">
            Clicks
          </th>
          <th scope="col" className="py-3 px-6 text-lg font-mono">
            Clicks
          </th>
        </tr>
      </thead>
      <tbody>
        {links?.map((link, index: number) => (
          <tr className="bg-white border-b dark:bg-gray-700 dark:text-white" key={index}>
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap "
            >
              {link.url}
            </th>
            <td className="py-4 px-6">{link.code}</td>
            <td className="py-4 px-6">{link.description}</td>
            <td className="py-4 px-6">
              {link.active ? (
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                  Active
                </span>
              ) : (
                <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                  Inactive
                </span>
              )}
            </td>
            <td className="py-4 px-6">{link.clicks || 0}</td>

            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-300  hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
}
