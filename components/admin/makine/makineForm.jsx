import React, { useState, useEffect } from "react";
import {
  getDocuments,
  antdFieldValidation,
} from "@/functions/firebase/getData";
import {
  Button,
  Form,
  Upload,
  message,
  Input,
  Select,
  Switch,
  InputNumber,
} from "antd";
const { TextArea } = Input;

import Image from "next/image";
import Index from "@/pages";

const MakineForm = ({
  onFinish,
  initialValues,
  files,
  setFiles,
  file ,
  setFile,
  cats,
  subcats,
  isupdate = false,
}) => {
  const [images, setImages] = useState(initialValues?.images || []);
  const [image, setImage] = useState(initialValues?.image || "");

  const [offerToggle, setOfferToggle] = useState(
    initialValues?.isoffer || false
  );

  const onChange = (checked) => {
    setOfferToggle(checked);
  };


  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);

    console.log(selectedCategory)


  };


  //   onChange={handleCategoryChange}



  return (
    <div className=" w-[80%] mx-auto ">
      <div className=" w-full md:w-[70%] border-2 py-6 px-6">
        <Form
          layout="vertical"
          // onFinish same as submit normal form
          onFinish={(values) =>
            // name of our function
            onFinish({
              ...values,
              images,
              image
            })
          }
          initialValues={{
            title: initialValues?.title || "",
            titlear: initialValues?.title || "",
            titletr: initialValues?.title || "",
            images: initialValues?.images || [],
             category: initialValues?.category || "",
            // subcategory: initialValues?.subcategory || "",
            // price: initialValues?.price || 0,
            // desc: initialValues?.desc || "",
            // descar: initialValues?.descar || "",
            // desctr: initialValues?.desctr || "",
            // instock: initialValues?.instock || true,
            
            // video: initialValues?.video || "",
            // isoffer: initialValues?.isoffer || false,
            // discount: initialValues?.discount || 0,
            // offerdesc: initialValues?.offerdesc || "",
          }}
        >
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
            <Form.Item      rules={[
              {
                required: true,
                message: "Please input your title",
              },
            ]} name="title" label="English - Title">
              <Input />
            </Form.Item>

            <Form.Item      rules={[
              {
                required: true,
                message: "Please input your arabic title",
              },
            ]} name="titlear" label="Arabic - Title">
              <Input />
            </Form.Item>

            <Form.Item      rules={[
              {
                required: true,
                message: "Please input your turkish title",
              },
            ]} name="titletr" label="Turkish- Title">
              <Input />
            </Form.Item>
          </div>


{/* -----Category---- */}

<div className="m-4">



<Form.Item      rules={[
              {
                required: true,
                message: "Please input category",
              },
            ]} name="category" label="category">
              <Select  onChange={handleCategoryChange} placeholder="Select Category">
                {['Eccentric' ,'kalip'].map((category,index) => {
                  return (
                    <Select.Option key={index} value={category}>
                      {category}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>


</div>


{/* ------upload single image--- */}


<div>
            <Upload
              accept="image/*"
              maxCount={1}
              // file is data of image will be uploaded to firebase/storage
              beforeUpload={(file) => {
                setFile(file);
                // setFiles((prev) => [...prev, file]);
                return false;
              }}
              listType="picture-card"
              onRemove={() => setFile("")}
            >
              Upload MainImage
            </Upload>
          </div>



          {image && (
            <div className="  w-24 md:w-24 relative">
              <img className=" w-24 h-24  rounded-lg" src={image} alt="" />

              <p
                onClick={() => setImage("")}
                className="  !text-red-500 cursor-pointer  font-semibold text-center"
              >
                Remove
              </p>
            </div>
          )}





          {/* -----images upload----- */}

          <div>
            <Upload
              accept="image/*"
              multiple
              // files is data of images will be uploaded to firebase/storage
              beforeUpload={(file) => {
                setFiles((prev) => [...prev, file]);
                return false;
              }}
              listType="picture-card"
              onRemove={(file) => {
                console.log("fileDATA", file);
                setFiles((prev) => {
                  const index = prev.indexOf(file);
                  const newFileList = prev.slice();
                  newFileList.splice(index, 1);
                  return newFileList;
                });

                console.log("files", files);
              }}
            >
              Upload Images {files?.length}
            </Upload>
          </div>

          {/* -----show product images {update product} ---- */}

          <div className="flex flex-wrap gap-3 mt-2 ">
            {images?.map((data, index) => (
              <div key={index}>
                <img src={data} className="w-20 h-20 rounded-full " />
                <h1
                  onClick={() => {
                    // prev all previous images
                    setImages((prev) => {
                      // all images put into new array
                      const temp = [...prev];
                      // delete  image with clicked index
                      temp.splice(index, 1);
                      // return this new array after delete clicked image
                      return temp;
                    });
                  }}
                  className="text-center cursor-pointer text-red-600"
                >
                  remove
                </h1>
              </div>
            ))}
          </div>

          <div className=" ">
            <Button
              className=" mt-4  block w-1/3 bg-blue-500 mx-auto"
              type="primary"
              htmlType="submit"
            >
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MakineForm;
