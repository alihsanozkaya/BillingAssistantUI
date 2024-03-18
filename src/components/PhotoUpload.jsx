import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Upload,
  Modal,
  message,
  DatePicker,
  Switch,
  Button,
} from "antd";
import axios from "axios";
import { CameraFilled } from "@ant-design/icons";

import Resizer from "react-image-file-resizer";
import ImgCrop from "antd-img-crop";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AddOrder } from "../redux/actions/OrderActions";
const PhotoUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageLength, setImageLength] = useState(0);
  const [productId, setProductId] = useState(1);
  const [userId, setUserId] = useState(0);
  const [quantity, setQuantity] = useState(50);

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleAddOrder = () => {
    dispatch(AddOrder({ userId, productId, quantity, imageUrl }));
  };

  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth, auth.user.id]);

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const uploadProps = {
    beforeUpload: async (file) => {
      return new Promise(async (resolve, reject) => {
        try {
          const uri = await resizeImage(file);

          const formData = new FormData();
          formData.append("file", file);

          const response = await axios.post(
            "https://localhost:7032/api/Cloudinaries/AddImage",
            formData
          );

          setImageUrl(response.data.url);
          setImageLength(1);
          message.success(`${file.name} file uploaded successfully.`);
          resolve(false); // prevent default antd upload behavior
        } catch (error) {
          console.error(`${file.name} file upload failed.`, error);
          reject(error);
        }
      });
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status === "done") {
      } else if (status === "error") {
      }
    },
  };
  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  };
  return (
    <div className="App">
      <Form>
        <Form.Item
          label="Ürün"
          name="productId"
          rules={[{ required: true, message: "Ürün ID girilmesi zorunlu" }]}
          style={{ maxWidth: "200px" }}
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Adet"
          name="quantity"
          rules={[{ required: true, message: "Adet girilmesi zorunlu" }]}
          style={{ maxWidth: "200px" }}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          <Input />
        </Form.Item>
      </Form>
      <ImgCrop rotationSlider>
        <Upload
          {...uploadProps}
          defaultFileList={imageUrl ? [{ url: imageUrl, name: "image" }] : []}
          onPreview={onPreview}
          onRemove={() => {
            setImageUrl("");
            setImageLength(0);
          }}
          listType="picture-card"
        >
          {imageLength === 0 && <CameraFilled style={{ fontSize: 30 }} />}
        </Upload>
      </ImgCrop>

      <button className="btn btn-primary" onClick={handleAddOrder}>
        Fatura ekle
      </button>
    </div>
  );
};

export default PhotoUpload;