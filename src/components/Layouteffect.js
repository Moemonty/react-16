import React, { useRef, Fragment, useLayoutEffect, useState } from 'react';

// TODO: Refactor and use classNames for css

// const MAX_HEIGHT = 120;

const Content = ({ children, truncate }) => {
  if (truncate) {
    return (
      <Fragment>
        {React.Children.map(children, (Item, ii) => {
          const className = ii > 5 ? 'hidden' : '';
          return React.cloneElement(Item, { className });
        })}
        <button>Read more coming soon</button>
      </Fragment>
    );
  }
  return <Fragment>{children}</Fragment>;
};

export default function LayoutEffect() {
  const wrapper = useRef(null);
  const [truncate, setTruncate] = useState(false);
  
  useLayoutEffect(() => {
    console.log(wrapper.current.clientHeight, ' client height');
    if(wrapper.current.clientHeight > 100) {
      console.log('useLayoutEffect triggered');
      setTruncate(true);
    }
  }, [wrapper]);

  console.log(truncate);
  
  return (
    <div className="wrap" ref={wrapper}>
      <Content truncate={truncate}>
        <div>Truncated?: { truncate === true && "True" } </div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
      </Content>
    </div>
  );
}