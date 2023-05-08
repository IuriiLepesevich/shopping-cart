import { useState } from "react";
import "../../styles/BottomSection.css";
import ValueHolder from "./ValueHolder";

const BottomSection = (props) => {
  const [values, setValues] = useState([
    {
      heading: "High-Quality Products",
      text: "At our clothes shop, we take pride in offering our customers high-quality clothing made from durable materials. We believe that clothing should not only look good, but also last for a long time. That's why we only source products from trusted brands that share our commitment to quality.",
    },
    {
      heading: "Trendy and Versatile Collection",
      text: "Our collection is carefully curated to include the latest fashion trends, while also offering a range of versatile pieces that can be dressed up or down for any occasion. Whether you're looking for a statement piece or an everyday staple, we have something for everyone",
    },
    {
      heading: "Great Customer Service",
      text: "We believe that great customer service is just as important as great products. That's why our team of knowledgeable staff is always ready to assist you with your needs and offer personalized style advice. We want to make sure that you leave our shop feeling confident and satisfied with your purchase.",
    },
  ]);

  return (
    <div className="BottomSection">
      <div className="heading">Our Values</div>
      <div className="values">
        {values.map((value) => (
          <ValueHolder
            key={value.heading}
            heading={value.heading}
            text={value.text}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomSection;
