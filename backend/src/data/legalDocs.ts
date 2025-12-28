export interface LegalDocument {
  id: string;
  title: string;
  category: string;
  content: string;
}

export const legalDocuments: LegalDocument[] = [
  {
    id: "doc-001",
    title: "Employment Contract",
    category: "Contract",
    content: `This Employment Contract is entered into between the Employer and the Employee.

1. POSITION AND DUTIES  
The Employee agrees to perform all duties reasonably assigned related to their position.

2. COMPENSATION  
The Employer shall pay the Employee a salary as agreed upon by both parties.

3. WORKING HOURS 
The Employee agrees to work the standard working hours in accordance with company policy.

4. CONFIDENTIALITY  
The Employee shall not disclose any confidential information during or after employment.

5. TERMINATION  
Either party may terminate this agreement with written notice in accordance with company policy.
`,
  },
  {
    id: "doc-002",
    title: "Non-Disclosure Agreement",
    category: "Agreement",
    content: `This Non-Disclosure Agreement ("Agreement") is made to protect confidential information.

1. DEFINITION OF CONFIDENTIAL INFORMATION  
All non-public business information is considered confidential.

2. OBLIGATIONS  
The Receiving Party shall not disclose confidential information to any third party.

3. EXCLUSIONS  
Information already public or independently developed is not considered confidential.

4. DURATION  
This Agreement shall remain in effect for five (5) years from the signing date.

5. LEGAL REMEDIES  
Any violation may result in legal action and financial compensation.`,
  },
  {
    id: "doc-003",
    title: "Privacy Policy",
    category: "Policy",
    content: `
This Privacy Policy explains how personal data is collected, used, and protected.

1. DATA COLLECTION  
We collect information such as name, email, and usage data.

2. DATA USAGE 
Data is used to improve services, communicate with users, and ensure security.

3. DATA PROTECTION  
Appropriate technical measures are implemented to protect personal data.

4. USER RIGHTS  
Users have the right to access, update, or delete their personal information.

5. POLICY UPDATES  
This policy may be updated periodically. Continued use of the service constitutes acceptance.
`,
  },
];
