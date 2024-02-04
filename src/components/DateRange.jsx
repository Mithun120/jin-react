import React from 'react';

const CustomDateRange = () => {
  return (
    <div className='container' style={{gap:"1050px"}}>
        <h4 style={{color:"#19105b"}}>Total Hours: 0.0</h4>
     <p style={{color:"#343a40"}}> &lt; 29 Jan 2024 - 04 Feb 2024 &gt; </p>
    </div>
  );
};

export default CustomDateRange;



// import React, { useState } from 'react';

// const CustomDateRange = () => {
//   const [startDate, setStartDate] = useState('2024-01-29');
//   const [endDate, setEndDate] = useState('2024-02-04');
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);

//   const handleShowStartDatePicker = () => {
//     setShowStartDatePicker(!showStartDatePicker);
//     setShowEndDatePicker(false);
//   };

//   const handleShowEndDatePicker = () => {
//     setShowEndDatePicker(!showEndDatePicker);
//     setShowStartDatePicker(false);
//   };

//   return (
//     <div className='container' style={{gap:"1050px"}}>
//         <h4 style={{color:"#19105b"}}>Total Hours: 0.0</h4>
//     <div>
//       <form>
//         {showStartDatePicker && (
//           <input
//             type="date"
//             id="startDate"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         )}
        
//         {showEndDatePicker && (
//           <input
//             type="date"
//             id="endDate"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         )}
//       </form>
//       <div>
//         <span>
//           <em>
//             <button type="button" onClick={handleShowStartDatePicker}>
//               &lt;
//             </button>
//             {startDate} - {endDate}
//             <button type="button" onClick={handleShowEndDatePicker}>
//               &gt;
//             </button>
//           </em>
//         </span>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CustomDateRange;

