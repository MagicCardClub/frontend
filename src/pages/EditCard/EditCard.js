import React, { useState } from "react";
import "./EditCard.scss";
import SelectTemplate from "../../components/shared/SelectTemplate/SelectTemplate";
import EditCardModal from "../../components/EditCardModal/EditCardModal";
// import { blankCard } from "../../data/blankCard";
const EditCard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const handleSelectedTemplate = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="edit-card">
      <div className="edit-header">
        <div className="box-1"></div>
        <div className="box-2">
          <span>Mint price per NFT Gift card = 0.025 ETH</span>
        </div>
      </div>

      <SelectTemplate handleSelectedTemplate={handleSelectedTemplate} />
      <EditCardModal selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default EditCard;
