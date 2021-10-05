import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from './Button/Button';


export const Controls: FC = () => {
  return (
    <ControlsWrap>
      <Button title={'before'} path={
        <path
          d="M362.146,0.412c-2.471-1.143-5.517,0.094-9.138,3.709L150.308,206.828c-1.718,1.524-2.955,3.333-3.715,5.424V18.679
            c0-4.952-1.809-9.234-5.424-12.85c-3.617-3.617-7.9-5.426-12.847-5.426H91.775c-4.952,0-9.233,1.809-12.85,5.426
            C75.308,9.448,73.5,13.73,73.5,18.679v401.986c0,4.948,1.807,9.236,5.424,12.847c3.621,3.62,7.902,5.428,12.85,5.428h36.543
            c4.947,0,9.229-1.808,12.847-5.428c3.615-3.61,5.424-7.898,5.424-12.847V227.097c0.763,1.903,2,3.717,3.715,5.425l202.705,202.712
            c3.621,3.617,6.667,4.859,9.138,3.72c2.478-1.144,3.716-4.189,3.716-9.138V9.547C365.862,4.599,364.624,1.553,362.146,0.412z" />
      } />
      <Button title={'play'} path={<path d="m35.353 0 424.236 247.471-424.236 247.471z" />} />
      <Button title={'next'} path={
        <path d="M360.427,5.833c-3.613-3.617-7.898-5.424-12.847-5.424h-36.545c-4.945,0-9.233,1.807-12.847,5.424
            c-3.614,3.621-5.428,7.902-5.428,12.85v193.574c-0.948-2.091-2.19-3.901-3.717-5.424L86.343,4.125
            c-3.617-3.617-6.663-4.856-9.136-3.713c-2.474,1.143-3.711,4.189-3.711,9.137v420.262c0,4.948,1.237,7.994,3.711,9.138
            c2.473,1.14,5.519-0.1,9.136-3.724L289.048,232.52c1.529-1.711,2.765-3.521,3.72-5.424V420.66c0,4.948,1.81,9.239,5.421,12.847
            c3.62,3.62,7.904,5.428,12.847,5.428h36.552c4.948,0,9.236-1.808,12.847-5.428c3.614-3.607,5.428-7.898,5.428-12.847V18.683
            C365.854,13.73,364.037,9.45,360.427,5.833z" />
      } />
      <Button title={'clear'} path={
        <>
          <path
            d="M433.109,23.694c-3.614-3.612-7.898-5.424-12.848-5.424c-4.948,0-9.226,1.812-12.847,5.424l-37.113,36.835
            c-20.365-19.226-43.684-34.123-69.948-44.684C274.091,5.283,247.056,0.003,219.266,0.003c-52.344,0-98.022,15.843-137.042,47.536
            C43.203,79.228,17.509,120.574,5.137,171.587v1.997c0,2.474,0.903,4.617,2.712,6.423c1.809,1.809,3.949,2.712,6.423,2.712h56.814
            c4.189,0,7.042-2.19,8.566-6.565c7.993-19.032,13.035-30.166,15.131-33.403c13.322-21.698,31.023-38.734,53.103-51.106
            c22.082-12.371,45.873-18.559,71.376-18.559c38.261,0,71.473,13.039,99.645,39.115l-39.406,39.397
            c-3.607,3.617-5.421,7.902-5.421,12.851c0,4.948,1.813,9.231,5.421,12.847c3.621,3.617,7.905,5.424,12.854,5.424h127.906
            c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.42-7.898,5.42-12.847V36.542C438.529,31.593,436.733,27.312,433.109,23.694z" />
          <path d="M422.253,255.813h-54.816c-4.188,0-7.043,2.187-8.562,6.566c-7.99,19.034-13.038,30.163-15.129,33.4
            c-13.326,21.693-31.028,38.735-53.102,51.106c-22.083,12.375-45.874,18.556-71.378,18.556c-18.461,0-36.259-3.423-53.387-10.273
            c-17.13-6.858-32.454-16.567-45.966-29.13l39.115-39.112c3.615-3.613,5.424-7.901,5.424-12.847c0-4.948-1.809-9.236-5.424-12.847
            c-3.617-3.62-7.898-5.431-12.847-5.431H18.274c-4.952,0-9.235,1.811-12.851,5.431C1.807,264.844,0,269.132,0,274.08v127.907
            c0,4.945,1.807,9.232,5.424,12.847c3.619,3.61,7.902,5.428,12.851,5.428c4.948,0,9.229-1.817,12.847-5.428l36.829-36.833
            c20.367,19.41,43.542,34.355,69.523,44.823c25.981,10.472,52.866,15.701,80.653,15.701c52.155,0,97.643-15.845,136.471-47.534
            c38.828-31.688,64.333-73.042,76.52-124.05c0.191-0.38,0.281-1.047,0.281-1.995c0-2.478-0.907-4.612-2.715-6.427
            C426.874,256.72,424.731,255.813,422.253,255.813z" />
        </>
      } />
    </ControlsWrap>
  );
};

const ControlsWrap = styled.div`
  display: inline-flex;
  padding: 10px 12px;
  margin-bottom: var(--mb-3);
  background-color: #efefef;
  border-radius: 5px;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const EmptyCell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;


