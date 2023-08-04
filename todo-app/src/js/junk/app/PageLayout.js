import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PageHeader } from 'antd';

const { Content } = Layout;

const PageLayout = ({ title, children }) => {
  return (
    <>
      <PageHeader title={title} />
      <Content className="page-content">{children}</Content>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
