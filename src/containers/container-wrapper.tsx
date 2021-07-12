import React from 'react';
import {Helmet} from 'react-helmet';

/**
 * @function ContainerWrapper
 *
 * for global app state, two providers:
 *      AppStateContext.Provider      - provider for app context
 *      AppDispatchContext.Provider   - provider for dispatch methods
 *
 * @param children        {JSX.Element}  container, view level component
 * @param pageTitle       {String}       page title, meta attribute
 * @param pageDescription {String}       page description, meta attribute
 * @param pageName        {String}       page name, used for page class selector
 *  */

type ContainerWrapperProps = {
  children: JSX.Element;
  pageTitle: string;
  pageDescription: string;
  pageName: string;
};

const ContainerWrapper = ({
  children,
  pageTitle,
  pageDescription,
  pageName,
}: ContainerWrapperProps) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle} | Preconfigured react</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className={`${pageName}__page page`}>{children}</div>
    </>
  );
};

export default ContainerWrapper;
