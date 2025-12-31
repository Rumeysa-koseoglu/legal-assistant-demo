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
  {
    id: "doc-004",
    title: "Service Agreement",
    category: "Contract",
    content: `
This Service Agreement is made between the Service Provider and the Client.

1. Scope of Services  
The Provider agrees to deliver the services described in the project documentation.

2. Payment Terms  
The Client shall compensate the Provider according to the agreed schedule.

3. Responsibilities  
Both parties agree to cooperate in good faith to ensure successful completion of services.

4. Liability  
The Provider shall not be liable for indirect or consequential damages.

5. Governing Law  
This Agreement shall be governed by the laws of the applicable jurisdiction.
`,
  },
  {
    id: "doc-005",
    title: "Terms of Use",
    category: "Policy",
    content: `
These Terms of Use govern access to and use of the platform.

1. User Obligations  
Users agree to use the service only for lawful purposes.

2. Account Security  
Users are responsible for maintaining the confidentiality of their login credentials.

3. Prohibited Activities  
Unauthorized access, misuse of data, or interference with the system is strictly prohibited.

4. Termination of Access  
The platform may suspend access for violations of these terms.

5. Modifications  
The terms may be updated without prior notice.
`,
  },
  {
    id: "doc-006",
    title: "Data Processing Agreement",
    category: "Agreement",
    content: `
This Data Processing Agreement regulates the handling of personal data.

1. Purpose of Processing  
Personal data shall be processed solely for legitimate business purposes.

2. Security Measures  
Appropriate safeguards shall be implemented to protect personal data.

3. Subprocessors  
Any third party involved in processing must comply with this agreement.

4. Data Breach  
In the event of a breach, affected parties shall be notified promptly.

5. Compliance  
All processing activities must comply with applicable data protection laws.
`,
  },
  {
    id: "doc-007",
    title: "Intellectual Property Policy",
    category: "Policy",
    content: `
This policy outlines ownership and usage of intellectual property.

1. Ownership  
All intellectual property created within the company remains company property.

2. Usage Rights  
Employees may use intellectual property only for authorized purposes.

3. Infringement  
Unauthorized use may result in disciplinary or legal action.

4. External Contributions  
Contributions from third parties must be documented and approved.

5. Enforcement  
The company actively enforces its intellectual property rights.
`,
  },
  {
    id: "doc-008",
    title: "Partnership Agreement",
    category: "Agreement",
    content: `
This Partnership Agreement establishes the relationship between business partners.

1. Contributions  
Each partner shall contribute resources and expertise as agreed.

2. Profit Sharing  
Profits and losses shall be shared according to the partnership terms.

3. Decision Making  
Major decisions require mutual consent of all partners.

4. Withdrawal  
Partners may withdraw under conditions defined in this agreement.

5. Dispute Resolution  
Disputes shall be resolved through mediation before litigation.
`,
  },
];
