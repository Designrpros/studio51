import React from 'react';
import styled from 'styled-components';

const PerformersSection = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  color: #000;
  text-align: center;
`;

const PerformerTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const PerformerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PerformerCard = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const PerformerName = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const Performer = () => {
  return (
    <PerformersSection>
      <PerformerTitle>Artists Lineup</PerformerTitle>
      <PerformerGrid>
        <PerformerCard>
          <PerformerName>Artist 1</PerformerName>
        </PerformerCard>
        <PerformerCard>
          <PerformerName>Artist 2</PerformerName>
        </PerformerCard>
        <PerformerCard>
          <PerformerName>Artist 3</PerformerName>
        </PerformerCard>
        {/* Add more performers as needed */}
      </PerformerGrid>
    </PerformersSection>
  );
};

export default Performer;