export type statusType = 'alive' | 'dead' | 'unknown' | 'default';
export type severityType = 'secondary' | 'info' | 'success' | 'warn' | 'danger';

export type caseStatus = {
  color: severityType;
  label: string;
  status: statusType;
};
