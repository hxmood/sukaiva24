'use client'
import { names } from '@/names/page'
import React, { useState } from 'react'
import { useEffect } from 'react'

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [points, setPoints] = useState([]);

  const fetchRes = async () => {
    try {
      const response = await fetch("/api/participantPoints", {
        cache: "no-store",
      });
      const datas = await response.json();
      setPoints(datas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRes();
  }, []);

  const firstletter = (str) => {
    const getfirst = str
      ?.split(" ")
      ?.map((word) => word.charAt(0))
      ?.join(".");
    return getfirst;
  };

  const filteredBZone = points
    ?.filter((item) => names["B zone"].includes(item.name))
    ?.sort((a, b) => b.points - a.points);
  const filteredCZone = points
    ?.filter((item) => names["C zone"].includes(item.name))
    ?.sort((a, b) => b.points - a.points);
  const filteredYZone = points
    ?.filter((item) => names["Y zone"].includes(item.name))
    ?.sort((a, b) => b.points - a.points);
  return (
    
    <div className='w-full h-auto bg-white px-6 lg:px-8 mt-10 py-6 rounded-t-md shadow-md'>
      <h2 className='font-bold text-lg py-3'>Bzone</h2>
      <table className='table-auto w-full border text-left'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='p-4'>-</th>
            <th className='p-4'>Name</th>
            <th className='p-4 hidden md:block'>team</th>
            <th className='p-4 '>points</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>
        </tbody>
      </table>

      <h1 className='font-bold text-lg mt-6 py-3'>Czone</h1>
      <table className='table-auto w-full border text-left'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='p-4'>-</th>
            <th className='p-4'>Name</th>
            <th className='p-4 hidden md:block'>team</th>
            <th className='p-4 '>points</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>
        </tbody>
      </table>

      <h1 className='font-bold text-lg mt-6 py-3'>Yzone</h1>
      <table className='table-auto w-full border text-left'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='p-4'>-</th>
            <th className='p-4'>Name</th>
            <th className='p-4 hidden md:block'>team</th>
            <th className='p-4 '>points</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>

          <tr>
            <td className='p-4'>1</td>
            <td className='p-4'>hamood</td>
            <td className='p-4 hidden md:block'>team1</td>
            <td className='p-4 text-center md:text-left'>23</td>
          </tr>
        </tbody>
      </table>
      {/* <table className='w-full text-left rounded-lg border'>
        <thead className='bg-gray-100'>
          <tr className='px-4'>
            <th scope='col' className='py-3 px-4 '>
              -
            </th>
            <th scope='col' className='py-3 px-4'>
              name
            </th>

            <th scope='col' className='py-3 px-4'>
              team
            </th>

            <th scope='col' className='py-3 px-4'>
              mark
            </th>
          </tr>
        </thead>
          <tr className='border-b'>
            <td className='py-4 px-4'>1</td>
            <td className='py-4 px-4'>hamood</td>
            <td className='py-4 px-4'>team1</td>
            <td className='py-4 px-4'>123</td>
          </tr>

          <tr className='border-b'>
            <td className='py-4 px-4'>1</td>
            <td className='py-4 px-4'>hamood</td>
            <td className='py-4 px-4'>team1</td>
            <td className='py-4 px-4'>123</td>
          </tr>

          <tr className='border-b'>
            <td className='py-4 px-4'>1</td>
            <td className='py-4 px-4'>hamood</td>
            <td className='py-4 px-4'>team1</td>
            <td className='py-4 px-4'>123</td>
          </tr>

          <tr className='border-b'>
            <td className='py-4 px-4'>1</td>
            <td className='py-4 px-4'>hamood</td>
            <td className='py-4 px-4'>team1</td>
            <td className='py-4 px-4'>123</td>
          </tr>

          <tr className='border-b'>
            <td className='py-4 px-4'>1</td>
            <td className='py-4 px-4'>hamood</td>
            <td className='py-4 px-4'>team1</td>
            <td className='py-4 px-4'>123</td>
          </tr>

          <tr className='border-b'>
            <td className='py-4 px-4'>1</td>
            <td className='py-4 px-4'>hamood</td>
            <td className='py-4 px-4'>team1</td>
            <td className='py-4 px-4'>123</td>
          </tr>

        <tbody>

        </tbody>
      </table> */}
    
    </div>
  )
}

export default page