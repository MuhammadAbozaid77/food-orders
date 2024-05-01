//
export default function TableShow() {
  return (
    <>
      <div className="mt-[100px]">
        <div className="relative overflow-x-auto rounded-[15px]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-slate-800 text-white">
              <tr>
                <th scope="col" className="px-6 py-3 text-[20px]">
                  Order Name
                </th>
                <th scope="col" className="px-6 py-3 text-[20px]">
                  Items
                </th>
                <th scope="col" className="px-6 py-3 text-[20px]">
                  Order Location
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                  <span className="border border-black bg-slate-800 px-2 py-1 rounded-[15px] text-white font-semibold">
                    <span> 3 </span> <span> Pizza </span>
                  </span>
                </td>
                <td className="px-6 py-4">Cairo Air port </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
