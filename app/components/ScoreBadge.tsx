import React from 'react';

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeClasses = '';
  let label = '';

  if (score > 69) {
    badgeClasses = 'bg-badge-green text-green-699';
    label = 'Strong';
  } else if (score > 49) {
    badgeClasses = 'bg-badge-yellow text-yellow-699';
    label = 'Good Start';
  } else {
    badgeClasses = 'bg-badge-red text-red-699';
    label = 'Need Work';
  }

  return (
    <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${badgeClasses}`}>
      <p>{label}</p>
    </div>
  );
};

export default ScoreBadge;
