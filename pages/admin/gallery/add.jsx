import React from "react";
import { getDocuments } from "@/functions/firebase/getData";
import AddSubCategoryMain from "@/components/admin/gallery/AddGallery";
import { useMemo } from "react";
const AddGalleryPage = ({ }) => {
  return (
    <div>
      <AddSubCategoryMain 
      
      />
    </div>
  );
};


export default AddGalleryPage;


// serverside
// AddSubPage.getInitialProps = async (context) => {
//   const Categories = await getDocuments("cats"); //  []


//   console.log("data", Categories);


//   return {
//     // props from serverside will go to props in clientside
//     cats: Categories,
//   };
// };





// // serverside
// AddSubPage.getInitialProps = async (context) => {
//   const Categories = await getDocuments("cats"); //  []


//   console.log("data", Categories);


//   return {
//     // props from serverside will go to props in clientside
//     cats: Categories,
    
//   };
// };
