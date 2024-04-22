"use strict";(self.webpackChunkdoc_platform_engineering=self.webpackChunkdoc_platform_engineering||[]).push([[245],{7739:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),o=i(8453);const s={sidebar_label:"Platform Tooling",slug:"/platform-tooling"},r="Platform Tooling",a={id:"tooling",title:"Platform Tooling",description:"Platform engineering involves creating and managing the foundational infrastructure and tools that enable developers to build, deploy, and operate software applications efficiently and reliably.",source:"@site/docs/04-tooling.md",sourceDirName:".",slug:"/platform-tooling",permalink:"/doc-platform-engineering/platform-tooling",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Platform Tooling",slug:"/platform-tooling"},sidebar:"tutorialSidebar",previous:{title:"Empowering Developers",permalink:"/doc-platform-engineering/internal-developer-platform"},next:{title:"Microsoft Products & Technologies",permalink:"/doc-platform-engineering/microsoft-products-technologies"}},l={},c=[{value:"Components &amp; Tooling",id:"components--tooling",level:2},{value:"IDP Reference Architecture",id:"idp-reference-architecture",level:2}];function d(e){const n={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"platform-tooling",children:"Platform Tooling"}),"\n",(0,t.jsx)(n.p,{children:"Platform engineering involves creating and managing the foundational infrastructure and tools that enable developers to build, deploy, and operate software applications efficiently and reliably."}),"\n",(0,t.jsx)(n.h2,{id:"components--tooling",children:"Components & Tooling"}),"\n",(0,t.jsx)(n.p,{children:"This section lists some basic components and tooling typically involved in platform engineering:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Developer Workstations"}),": Equipping developers with efficient workstations or cloud hosted PCs with necessary development tools and environments ensures productivity and smooth development processes. These usually include integrated development environments (IDEs), code editors, debugging tools, and other resources tailored to the needs of developers."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Repositories"}),": Version control systems such as Git provide repositories for storing and managing source code, enabling collaboration, versioning, and change tracking across development teams."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Infrastructure as Code (IaC)"}),": This practice involves specifying infrastructure topology in documents stored in version control, similar to code management. It utilizes DevOps tooling for consistency, quality, and accountability, allowing rapid creation or deletion of infrastructure on demand."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cloud Native and Serverless Runtime Environments"}),": Leveraging containerization technologies, orchestration platforms, and serverless computing, these environments package, deploy, and manage applications and dependencies consistently across different environments. They enable agility, scalability and resilience plus offer the benefits of pay-per-use pricing models."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Automation"}),": Streamlines repetitive tasks, reduces manual errors, and accelerates software delivery through Continuous Integration/Continuous Deployment (CI/CD) pipelines that automate build, testing, and deployment of code changes for rapid and reliable releases."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Monitoring and Observability Tools"}),": Essential for tracking health, performance, and availability of applications and infrastructure components, with log aggregation tools centralizing and analysing logs for troubleshooting and debugging."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Identity and Access Management"}),": Crucial for managing user access permissions, authentication, and authorization to platform resources."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Security Tools and Practices"}),": Protects the platform against threats and vulnerabilities through encryption mechanisms, access controls, networking security measures, secrets management, and vulnerability scanning tools."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Networking Mesh Technologies"}),": Provide a dedicated infrastructure layer for handling service-to-service communication, including traffic management, security, and observability features."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Collaboration/Documentation Tools"}),": Enable effective communication, knowledge sharing, and collaboration among teams, with comprehensive documentation facilitating onboarding, troubleshooting, and knowledge sharing."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Work Item & Issue Tracking"}),": Organize tasks, prioritize work, and track progress effectively, providing visibility into ongoing activities and facilitating communication between team members."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Testing Tools and Practices"}),": Ensure the quality and reliability of software through comprehensive testing methodologies, including unit testing, integration testing, and end-to-end testing, enabling early detection of bugs and issues.  This encompasses both automated testing, which includes unit tests and integration tests run as part of Continuous Integration (CI) pipelines, as well as manual exploratory testing to uncover unforeseen issues."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"idp-reference-architecture",children:"IDP Reference Architecture"}),"\n",(0,t.jsx)(n.p,{children:"McKinsey has introduced an Internal Developer Platform (IDP) reference architecture, which serves as a blueprint for building efficient and standardized internal developer platforms. These platforms empower developers, enhance efficiency, and streamline the software delivery lifecycle. It defines five key planes within the architecture:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Developer Control Plane"}),":  This  acts as the primary configuration layer where application developers interact with the platform. It allows them to configure their workloads, manage code, and publish changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Components include:  Developer workstations and tools. code repos / version controls, workload specifications (developers define workload requirements and constraints), developer portal to access services."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Delivery Plane"}),":  This  facilitates seamless transitions from development to deployment. It ensures efficient integration and delivery of software applications."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Components include: Automation, continuous integration (build and testing processes), continuous deployment (deployment workflows),  release management, artifact repositories."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Monitoring Plane"}),":  This provides insights into application performance, identify bottlenecks, and troubleshoot issues effectively."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Components include: Observability tools: (Monitor application behaviour, metrics, and logs), application performance monitoring, service health monitoring."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Security Plane"}),"  This mitigates risks, protect data, and maintain a secure development environment."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Components include: Secrets management, access controls, and governance policies."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resource Plane"}),":  this manages the components necessary to run applications within the platform."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Components include: Compute, databases, storage, networking infrastructure, integration services (APIs, messages, events, workflow)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(2254).A+"",width:"1280",height:"720"})}),"\n",(0,t.jsx)(n.p,{children:"The planes work together to create a robust IDP, enhancing developer productivity and ensuring a reliable platform for software delivery.\nthe foundational components and tooling for platform engineering, but specific requirements may vary depending on the organization's needs, infrastructure, and technology stack. Additionally, platform engineers should continuously evaluate and evolve their tooling and practices to adapt to changing requirements and advancements in technology."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2254:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/refarch-57487f86368df4abc79aeb582acdff21.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);