// import React, { useState,useEffect } from 'react';
// import axios from "axios";



// function MyForm() {


//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   console.log(selectedState)

//   const states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

    

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };




// //   useEffect(()=>{

// //     if(selectedState){
// //         axios
// //         .get(`https://zippopotam.us/api/${selectedState}`)
// //         .then((res)=>{
// //             const cities = res.data.geonames.map((cities)=>cities.name);
// //             setSelectedCity(cities);
// //         })
// //         .catch((err)=>console.log('error in fetching cities',err));
// //     }



// useEffect(() => {
//     if (selectedState) {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(
//             `https://api.countrystatecity.in/v1/countries/IN/states/${selectedState}/cities`,
//             {
//               method: 'GET',
//               headers: new Headers({
//                 'X-CSCAPI-KEY': 'YOUR_API_KEY', // Replace with your actual API key
//               }),
//               redirect: 'follow',
//             }
//           );

//           if (response.ok) {
//             const data = await response.json();
//             const cities = data.map((cityData) => cityData.name);
//             setSelectedCity('');
//             // Update the list of cities for the selected state
//             // You can set the cities state or render them directly in your component
//           } else {
//             console.error('Failed to fetch city data:', response.statusText);
//           }
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       };

//       fetchData();
//     }
//   }, [selectedState]);




//     //     if (selectedState) {
//     // //   const apiKey = 'YOUR_GOOGLE_API_KEY';
//     //   axios
//     //     .get(
//     //         `https://nominatim.openstreetmap.org/search?format=json&country=India&state=${selectedState}&feature=city`
//     //     )
//     //     .then((response) => {
//     //       const cities = response.data.predictions.map((prediction) => prediction.description);
//     //       setSelectedCity('');
//     //       // Update the list of cities for the selected state
//     //       // You can set the cities state or render them directly in your component
//     //     })
//     //     .catch((error) => {
//     //       console.error('Error fetching cities', error);
//     //     });
//     // }


// //   },[selectedState]);



//   return (
//     <div>
//       <h4>Select a State:</h4>
//       <select value={selectedState} onChange={handleStateChange}>
//         <option value="">Select a state</option>
//         {states.map((state) => (
//           <option key={state} value={state}>
//             {state}
//           </option>
//         ))}
//       </select>

// <br/>

//       <h4>select city :</h4>

//       <select 
//       value ={selectedCity} 
//       onChange={(e)=>setSelectedCity(e.target.value)}>
      
//       <option value=''>Select a city </option>

//       </select>
//     </div>
//   );
// }

// export default MyForm;
