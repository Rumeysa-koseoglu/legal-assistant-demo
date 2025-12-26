export interface LegalDocument {
  id: string;
  title: string;
  category: string;
  content: string;
}

export const legalDocuments: LegalDocument[] = [
  {
    id: "doc-001",
    title: "Employement Contract",
    category: "Contract",
    content: `This Employment Contract is entered into between the Employer and the Employee.

1. Position and Duties  
The Employee agrees to perform all duties reasonably assigned related to their position.

2. Compensation  
The Employer shall pay the Employee a salary as agreed upon by both parties.

3. Working Hours  
The Employee agrees to work the standard working hours in accordance with company policy.

4. Confidentiality  
The Employee shall not disclose any confidential information during or after employment.

5. Termination  
Either party may terminate this agreement with written notice in accordance with company policy.`,
  },
  {
    id: "doc-002",
    title: "Non-Disclosure Agreement",
    category: "Agreement",
    content: `This Non-Disclosure Agreement ("Agreement") is made to protect confidential information.

1. Definition of Confidential Information  
All non-public business information is considered confidential.

2. Obligations  
The Receiving Party shall not disclose confidential information to any third party.

3. Exclusions  
Information already public or independently developed is not considered confidential.

4. Duration  
This Agreement shall remain in effect for five (5) years from the signing date.

5. Legal Remedies  
Any violation may result in legal action and financial compensation.`,
  },
  {
    id: "doc-003",
    title: "Privacy Policy",
    category: "Policy",
    content: `
This Privacy Policy explains how personal data is collected, used, and protected.

1. Data Collection  
We collect information such as name, email, and usage data.

2. Data Usage  
Data is used to improve services, communicate with users, and ensure security.

3. Data Protection  
Appropriate technical measures are implemented to protect personal data.

4. User Rights  
Users have the right to access, update, or delete their personal information.

5. Policy Updates  
This policy may be updated periodically. Continued use of the service constitutes acceptance.
`,
  },
];
