import React, { memo } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { createMarkup } from "../../utils";

const World = ({ values }) => {
  const navigate = useNavigate();

  const renderImg = ({ image, description }) => {
    return (
      <div>
        <img src={image.url} alt={description} width="100%" />
      </div>
    );
  };

  const openPost = (id) => {
    navigate(`/world/${id}`);
  };

  const renderPost = (post, index) => {
    const { title, image, description, id } = post;
    const isFirst = index === 0;
    const spanValue = isFirst ? 24 : 12;

    console.log(image.url);

    return (
      <Col span={spanValue} md={6} key={`World-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          <p dangerouslySetInnerHTML={createMarkup(description)} />
          {isFirst && renderImg({ image, description })}
        </article>
      </Col>
    );
  };

  return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>;
};

World.defaultProps = {
  values: [],
};

World.prototype = {
  values: PropTypes.array.isRequired,
};

export default memo(World);
