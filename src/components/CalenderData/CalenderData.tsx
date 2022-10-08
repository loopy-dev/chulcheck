import styled from 'styled-components';

const data = ['1', '2', '3', null, '5', '6', '7'];

const CalenderData = () => (
  <DataRow>
    <Wrapper>
      {data.map(
        (el, idx) =>
          el && (
            // eslint-disable-next-line react/no-array-index-key
            <DataColumn key={idx} left={idx} top={24}>
              {el}
            </DataColumn>
          ),
      )}
    </Wrapper>
  </DataRow>
);
export default CalenderData;

interface DataColumnProps {
  top: number;
  left: number;
}

const DataRow = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const DataColumn = styled.div<DataColumnProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: calc(100% * (${({ left }) => left} / 7));
  width: calc(100% / 7);
`;
