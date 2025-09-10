const productData = {
ai: [
  {
    "name": "Amazon SageMaker",
    "description": "Comprehensive platform to build, train, and deploy machine learning models at scale",
    "technotes": "Just placeholder text showing here"
  },
  {
    "name": "Amazon Bedrock",
    "description": "Service to build and scale generative AI applications using foundation models from leading providers"
  },
  {
    "name": "Amazon Comprehend",
    "description": "Natural language processing service that extracts insights from text such as sentiment, entities, and key phrases"
  },
  {
    "name": "Amazon Rekognition",
    "description": "Image and video analysis service that detects objects, scenes, faces, and unsafe content"
  },
  {
    "name": "Amazon Textract",
    "description": "Automatically extracts text, handwriting, and data from scanned documents"
  },
  {
    "name": "Amazon Transcribe",
    "description": "Automatic speech recognition service that converts speech to text from audio and video files"
  },
  {
    "name": "Amazon Polly",
    "description": "Text-to-speech service that turns text into lifelike speech using deep learning"
  },
  {
    "name": "Amazon Translate",
    "description": "Neural machine translation service for fast and accurate language translation"
  },
  {
    "name": "Amazon Forecast",
    "description": "Time-series forecasting service using machine learning to predict future trends"
  },
  {
    "name": "Amazon Personalize",
    "description": "Real-time personalization and recommendation engine powered by machine learning"
  },
  {
    "name": "Amazon Lookout for Metrics",
    "description": "Detects anomalies in metrics and helps identify their root causes using ML"
  },
  {
    "name": "Amazon Lookout for Vision",
    "description": "Detects visual defects in industrial products using computer vision"
  },
  {
    "name": "Amazon Lookout for Equipment",
    "description": "Predicts equipment failures by analyzing sensor data with machine learning"
  },
  {
    "name": "Amazon CodeWhisperer",
    "description": "AI-powered coding companion that generates code suggestions based on natural language prompts"
  },
  {
    "name": "Amazon Kendra",
    "description": "Intelligent search service powered by machine learning for enterprise data"
  },
  {
    "name": "Amazon Lex",
    "description": "Builds conversational interfaces using voice and text powered by natural language understanding"
  },
  {
    "name": "Amazon HealthLake",
    "description": "Transforms health data into a structured format for advanced analytics and machine learning"
  },
  {
    "name": "Amazon A2I (Augmented AI)",
    "description": "Enables human review of machine learning predictions to improve model accuracy"
  },
  {
    "name": "AWS Inferentia",
    "description": "Custom-built ML inference chip designed to deliver high performance at low cost"
  },
  {
    "name": "AWS Trainium",
    "description": "High-performance ML training chip optimized for deep learning workloads"
  }
]

,container: [
  {
    "name": "Amazon ECS",
    "description": "Highly scalable container orchestration service for running Docker containers on AWS"
  },
  {
    "name": "Amazon ECS Anywhere",
    "description": "Extends Amazon ECS to run containers on customer-managed infrastructure outside AWS"
  },
  {
    "name": "Amazon EKS",
    "description": "Managed Kubernetes service for running containerized applications using Kubernetes",
    "technotes":"lets you run Kubernetes clusters on your own infrastructure using the same tools as AWS EKS, without needing a cloud connection. It's ideal for hybrid or on-prem environments."
  },
  {
    "name": "Amazon EKS Anywhere",
    "description": "Deploy and manage Kubernetes clusters on-premises using Amazon EKS tooling"
  },
  {
    "name": "AWS Fargate",
    "description": "Serverless compute engine for containers that eliminates the need to manage EC2 instances"
  },
  {
    "name": "AWS App Runner",
    "description": "Fully managed service to build, deploy, and run containerized web applications and APIs"
  },
  {
    "name": "AWS Batch",
    "description": "Efficient batch computing service for running containerized jobs at any scale"
  },
  {
    "name": "Amazon Lightsail Containers",
    "description": "Simplified container deployment and management for small-scale applications"
  },
  {
    "name": "Amazon EC2",
    "description": "Provides the underlying compute capacity for self-managed container orchestration platforms"
  },
  {
    "name": "Amazon ECR",
    "description": "Fully managed container registry for storing, managing, and deploying Docker container images"
  },
  {
    "name": "Red Hat OpenShift Service on AWS (ROSA)",
    "description": "Managed OpenShift Kubernetes service jointly supported by AWS and Red Hat"
  }
],
disaster: [
  {
    "name": "AWS Elastic Disaster Recovery (AWS DRS)",
    "description": "Minimizes downtime and data loss with fast, reliable recovery of on-premises and cloud-based applications using continuous replication and point-in-time recovery"
  },
  {
    "name": "AWS CloudEndure Disaster Recovery (Legacy)",
    "description": "Previously used for disaster recovery; now replaced by AWS Elastic Disaster Recovery for enhanced performance and integration"
  },
 
  {
    "name": "AWS Backup",
    "description": "Centralized backup service that automates and manages backups across AWS services and hybrid workloads"
  },
  {
    "name": "Amazon S3 Glacier",
    "description": "Low-cost archival storage designed for long-term data retention and disaster recovery scenarios"
  },
 {
    "name": "Amazon Route 53",
    "description": "Highly available DNS service with failover routing policies to redirect traffic during outages"
  },
  {
    "name": "AWS CloudFormation",
    "description": "Infrastructure as code service that enables rapid redeployment of resources in recovery regions"
  },
  {
    "name": "AWS Resilience Hub",
    "description": "Central service to assess and improve application resilience using AWS best practices and automated recovery recommendations"
  },
  {
    "name": "AWS Storage Gateway",
    "description": "Hybrid cloud storage service that enables backup and disaster recovery from on-premises environments to AWS"
  },
  {
    "name": "AWS Direct Connect",
    "description": "Dedicated network connection that ensures secure and reliable data replication for disaster recovery"
  },
  {
    "name": "AWS Systems Manager",
    "description": "Provides operational insights and automation for recovery workflows and patching during disaster events"
  },
  {
    "name": "AWS Control Tower",
    "description": "Helps govern multi-account environments with guardrails and automated setup for resilient architectures"
  }
]

,
datashipping: [
  {
    "name": "AWS Snowcone",
    "description": "Small, rugged edge device for offline data transfer and edge computing in constrained environments"
  },
  {
    "name": "AWS Snowball Edge Storage Optimized",
    "description": "80 TB device for large-scale data migration and edge storage, supporting block and object storage"
  },
  {
    "name": "AWS Snowball Edge Compute Optimized",
    "description": "Edge device with compute capabilities including optional GPU, ideal for processing data before transfer"
  },
  {
    "name": "AWS Snowmobile",
    "description": "Exabyte-scale data transfer service using a secure truck to move massive datasets to AWS"
  },
  {
    "name": "AWS DataSync",
    "description": "Online data transfer service for automating and accelerating movement between on-premises storage and AWS"
  },
  {
    "name": "AWS Transfer Family",
    "description": "Fully managed service for transferring files into and out of AWS using SFTP, FTPS, and FTP protocols"
  },
  {
    "name": "Amazon Kinesis Data Firehose",
    "description": "Real-time streaming service that delivers data to destinations like Amazon S3, Redshift, and OpenSearch"
  },
  {
    "name": "AWS Migration Hub",
    "description": "Centralized dashboard to track and manage data and application migrations across AWS services"
  },
  {
    "name": "AWS Application Migration Service (MGN)",
    "description": "Lift-and-shift migration service that replicates live server data to AWS for seamless cutover"
  },
  {
    "name": "AWS Backup",
    "description": "Fully managed service that centralizes and automates data protection across AWS services and hybrid workloads"
  },
  {
    "name": "AWS Direct Connect",
    "description": "Dedicated network connection from your premises to AWS, bypassing the public internet for secure, low-latency data transfer"
  },
  {
    "name": "AWS Schema Conversion Tool",
    "description": "Simplifies heterogeneous database migrations by converting source schemas and code to formats compatible with AWS targets"
  },
  {
    "name": "AWS Glue",
    "description": "Serverless data integration service for discovering, preparing, and transforming data from multiple sources into data lakes and analytics platforms"
  }
]

,
deploy: [
  {
    "name": "AWS CodeDeploy",
    "description": "Automates code deployments to any instance, including EC2, Lambda, and on-premises servers"
  },
  {
    "name": "AWS CodePipeline",
    "description": "Orchestrates continuous integration and continuous delivery (CI/CD) workflows for fast and reliable application updates"
  },
  {
    "name": "AWS CodeBuild",
    "description": "Fully managed build service that compiles source code, runs tests, and produces software packages"
  },
  {
    "name": "AWS CodeCommit",
    "description": "Secure, scalable, and managed source control service that hosts private Git repositories"
  },
  {
    "name": "AWS CloudFormation",
    "description": "Infrastructure as code service that lets you model and provision AWS resources using templates"
  },
  {
    "name": "AWS Elastic Beanstalk",
    "description": "Platform-as-a-Service for deploying and scaling web applications automatically without managing infrastructure"
  },
  {
    "name": "AWS AppConfig",
    "description": "Feature of AWS Systems Manager that enables safe and rapid deployment of application configurations"
  },
  {
    "name": "AWS OpsWorks",
    "description": "Configuration management service that uses Chef and Puppet to automate server setup, deployment, and management"
  },
  {
    "name": "AWS SAM (Serverless Application Model)",
    "description": "Framework for building serverless applications using simplified syntax and deployment tooling"
  },
  {
    "name": "AWS Cloud Development Kit (CDK)",
    "description": "Open-source software development framework to define cloud infrastructure using familiar programming languages"
  },
  {
    "name": "AWS Proton",
    "description": "Fully managed deployment service for container and serverless applications, designed for platform teams"
  },
  {
    "name": "AWS Launch Wizard",
    "description": "Guided deployment tool for enterprise applications like SAP, SQL Server, and Active Directory"
  },
  {
    "name": "AWS Service Catalog",
    "description": "Allows organizations to create and manage approved catalogs of resources for self-service deployment"
  }
]


,compute:[
  { "name": "Amazon EC2", "description": "Scalable virtual servers in the cloud with a wide range of instance types for different workloads","technotes":"Put in a <u>cluster</u> if you are using in HPC (High Performance Computing)","billingnotes":"<BR><B>Linux</B> is billed by the second,<BR>EC2 can have saving plans,<BR> <B>Elastic IP</B> addresses can increase EC2 costs if they are allocated but not in use, as AWS charges for unused Elastic IPs. Removing these unused addresses can help reduce overall expenses significantly." },
  { "name": "Amazon EC2 Auto Scaling", "description": "Automatically adjusts EC2 capacity to maintain performance and optimize costs" },
  { "name": "Amazon EC2 Spot Instances", "description": "Cost-effective compute capacity for fault-tolerant workloads, available at up to 90% discount" },
  { "name": "Amazon Lightsail", "description": "Simplified cloud platform for building applications and websites with preconfigured resources" },
  { "name": "AWS Lambda", "description": "Serverless compute service that runs code in response to events without provisioning servers","billingnotes":"can have saving plans"  },
  { "name": "AWS Fargate", "description": "Serverless compute engine for containers, eliminating the need to manage EC2 instances" },
  { "name": "Amazon ECS", "description": "Highly scalable container orchestration service for Docker containers" },
  { "name": "Amazon EKS", "description": "Managed Kubernetes service for running containerized applications using Kubernetes" },
  { "name": "AWS App Runner", "description": "Fully managed service to build and run containerized web applications and APIs" },
  { "name": "AWS Batch", "description": "Efficient batch computing service for running large-scale parallel and high-performance jobs" ,"billingnotes":"does not have saving plans" },
  { "name": "AWS Elastic Beanstalk", "description": "Platform-as-a-Service for deploying and scaling web applications automatically" },
  { "name": "AWS Outposts", "description": "Run AWS infrastructure and services on-premises for a consistent hybrid experience" },
  { "name": "AWS Wavelength", "description": "Delivers ultra-low latency applications for 5G devices by extending AWS infrastructure to telecom networks" },
  { "name": "AWS Local Zones", "description": "Places compute, storage, and other services closer to end-users for low-latency applications" },
  { "name": "VMware Cloud on AWS", "description": "Seamlessly extends and migrates VMware workloads to AWS infrastructure" },
  { "name": "AWS Serverless Application Repository", "description": "Collection of serverless applications that can be deployed directly into your AWS environment" },
  { "name": "Amazon EC2 Image Builder", "description": "Automates the creation, management, and deployment of secure EC2 images" }
]
,
 contentdelivery: [
  {
    "name": "Amazon CloudFront",
    "description": "Global content delivery network (CDN) that securely delivers data, videos, applications, and APIs with low latency and high transfer speeds"
  },
  {
    "name": "AWS Global Accelerator",
    "description": "Networking service that improves the availability and performance of your applications with static IP addresses and global routing"
  },
  {
    "name": "Amazon Route 53",
    "description": "Highly available and scalable DNS web service for domain registration, routing, and health checks"
  },
  {
    "name": "AWS Elemental MediaConvert",
    "description": "File-based video transcoding service for converting media into formats for broadcast and multiscreen delivery"
  },
  {
    "name": "AWS Elemental MediaLive",
    "description": "Live video processing service that encodes real-time video streams for broadcast and streaming platforms"
  },
  {
    "name": "AWS Elemental MediaPackage",
    "description": "Prepares and protects video content for delivery over the internet, supporting formats like HLS, DASH, and CMAF"
  },
  {
    "name": "AWS Elemental MediaStore",
    "description": "Storage service optimized for media workloads, offering low latency and high throughput for video origination"
  },
  {
    "name": "AWS Elemental MediaConnect",
    "description": "Reliable transport service for live video, enabling contribution and distribution of high-quality streams"
  },
  {
    "name": "AWS Cloud Map",
    "description": "Service discovery tool that maps application components to custom names, enabling dynamic routing and content delivery"
  }
]
,


	storage: [
  { "name": "Amazon S3", "description": "Scalable object storage for any type of data with high durability and availability","technotes":"S3 can be put on CloudFront, <BR>when uploading over 100mb use multipart uploading" },
  { "name": "Amazon S3TA", "description": "Amazon S3 Transfer Acceleration can speed up content transfers to and from Amazon S3 for long-distance transfer of larger objects.","technotes":"S3TA improves transfer performance by routing traffic through Amazon CloudFront’s globally distributed Edge Locations and over AWS backbone networks, and by using network protocol optimizations.","billingnotes":"With S3TA, you pay only for transfers that are accelerated." },
  { "name": "Amazon S3 Glacier", "description": "Low-cost archival storage designed for long-term data retention with retrieval options from milliseconds to hours"},
  { "name": "Amazon EBS", "description": "Block storage volumes for use with Amazon EC2, offering low-latency performance and high availability","technotes":"Deleting unused EBS volumes after terminating an EC2 instance helps save money because these volumes continue to incur charges even when the associated instance is stopped or terminated. By removing these unnecessary volumes, you can significantly reduce your monthly storage costs, as you only pay for the storage you actively use." },
  { "name": "Amazon EFS", "description": "Fully managed elastic file system for Linux workloads, accessible across multiple EC2 instances" },
  { "name": "Amazon FSx for Windows File Server", "description": "Managed Windows file system built on Windows Server, ideal for enterprise applications" },
  { "name": "Amazon FSx for Lustre", "description": "High-performance file system optimized for fast processing of workloads like machine learning and HPC" },
  { "name": "Amazon FSx for NetApp ONTAP", "description": "Fully managed file storage built on NetApp ONTAP, supporting advanced data management features" },
  { "name": "Amazon FSx for OpenZFS", "description": "Managed file system based on OpenZFS, designed for performance and data protection" },
  { "name": "Amazon File Cache", "description": "High-speed cache for file-based workloads that require fast access to data across multiple sources" },
  { "name": "AWS S3 File Gateway", "description": "Enables on-premises applications to store files as objects in Amazon S3 using SMB or NFS protocols" },
  { "name": "AWS FSx File Gateway", "description": "Provides low-latency access to Amazon FSx for Windows File Server shares from on-premises environments" },
  { "name": "AWS Storage Gateway - Tape", "description": "Virtual tape infrastructure for backup workflows, storing data in Amazon S3 and archiving to Glacier" },
  { "name": "AWS Storage Gateway - Cached Volumes", "description": "Stores primary data in Amazon S3 while retaining frequently accessed data locally for low-latency access" },
  { "name": "AWS Storage Gateway - Stored Volumes", "description": "Keeps a full copy of data locally and asynchronously backs up to AWS for durability and recovery" },
  { "name": "AWS Backup", "description": "Centralized backup service to automate and manage backups across AWS services and on-premises resources" },
  { "name": "AWS Elastic Disaster Recovery", "description": "Minimizes downtime and data loss with fast recovery of on-premises and cloud-based applications" },
  { "name": "AWS Snowcone", "description": "Smallest and most portable Snow device, ideal for edge computing and data transfer in space-constrained or disconnected environments; available in HDD and SSD versions" },
  { "name": "AWS Snowball Edge Storage Optimized", "description": "Designed for large-scale data transfer with 80 TB of HDD storage; supports block and S3-compatible object storage" },
  { "name": "AWS Snowball Edge Compute Optimized", "description": "Provides 42 TB of HDD or 28 TB of NVMe storage with 52 vCPUs and optional GPU for edge computing workloads like ML and video analysis" },
  { "name": "AWS Snowmobile", "description": "Exabyte-scale data transfer service using a secure shipping container transported by truck; ideal for migrating over 10 PB of data" }
],
  hybrid: [
  { "name": "Route 53 Resolver endpoints", "description": "allow DNS queries to flow between your AWS VPC and external networks like on-premises systems.",
     "technotes":"There are two types of Resolver endpoints: inbound and outbound. <B>Inbound endpoints</B> let DNS queries come into your AWS VPC from outside sources—like when your on-premises servers need to resolve AWS-hosted domain names. <B>Outbound endpoints</B> do the opposite: they send DNS queries out from your VPC to external DNS servers, which is useful when your AWS resources need to look up names hosted outside AWS. Together, they help connect your cloud and on-prem environments for smooth DNS resolution."},
  { "name": "AWS Direct Connect", "description": "Dedicated network connection from your premises to AWS for consistent, high-bandwidth, low-latency connectivity" },
  { "name": "AWS Site-to-Site VPN", "description": "Secure IPsec VPN connection between your on-premises network and AWS VPCs" },
  { "name": "AWS Transit Gateway", "description": "Central hub to connect multiple VPCs and on-premises networks via VPN or Direct Connect" },
  { "name": "AWS Cloud WAN", "description": "Global network management service to connect VPCs, data centers, and branch offices using a unified policy framework" },
  { "name": "AWS Virtual Private Gateway", "description": "Gateway attached to a VPC that enables VPN and Direct Connect connectivity to on-premises networks" },
  { "name": "AWS Direct Connect Gateway", "description": "Globally available gateway to route traffic between Direct Connect connections and multiple VPCs across regions" },
  { "name": "AWS Network Manager", "description": "Centralized dashboard for monitoring and managing global networks built with Transit Gateway and Cloud WAN" },
  { "name": "AWS PrivateLink", "description": "Securely access AWS services and VPC endpoints over private connectivity without exposing traffic to the public internet" },
  { "name": "AWS Storage Gateway", "description": "Hybrid cloud storage service that connects on-premises environments to AWS storage services" },
  { "name": "AWS VPN CloudHub", "description": "Enables communication between multiple on-premises sites using VPN connections through a Virtual Private Gateway" }
]
,
  analytics: [
  { "name": "Amazon Athena", "description": "Serverless query service to analyze data in Amazon S3 using standard SQL" },
  { "name": "Amazon EMR", "description": "Processes a large number of data sets, Managed big data platform for processing vast amounts of data using open-source tools like Apache Spark, Hive, and Hadoop" },
  { "name": "Amazon OpenSearch Service", "description": "Managed search and analytics engine for log analytics, real-time application monitoring, and search use cases" },
  { "name": "Amazon QuickSight", "description": "Scalable business intelligence service for creating interactive dashboards and visualizations" },
  { "name": "AWS Data Pipeline", "description": "Service for processing and moving data between AWS compute and storage services on a scheduled basis" },
  { "name": "AWS Lake Formation", "description": "Service to build, secure, and manage data lakes quickly and easily" },
  { "name": "AWS Data Exchange", "description": "Service to find, subscribe to, and use third-party data in the cloud" },
  { "name": "AWS DataZone", "description": "Data management service to catalog, govern, and share data across organizational boundaries" },
  { "name": "AWS Clean Rooms", "description": "Collaborative analytics service that allows multiple parties to analyze shared datasets without revealing raw data" }
]
,
  database: 
   [
  { "name": "Amazon Aurora", "description": "High-performance managed relational database compatible with MySQL and PostgreSQL" },
  { "name": "Amazon RDS", "description": "Managed relational database service supporting multiple engines like MySQL, PostgreSQL, Oracle, and SQL Server","technotes":"uses EBS as primary storage" },
  { "name": "Babelfish for PostgreSQL", "description": "lets you run SQL Server applications on PostgreSQL by adding T-SQL compatibility and support for SQL Server’s wire protocol."},
  { "name": "Amazon DynamoDB", "description": "Fully managed NoSQL database for key-value and document data with single-digit millisecond latency", "technotes":"<BR>Benefits of DynamoDB include:<BR><BR>1- Performance at scale:<BR><BR>DynamoDB supports some of the world’s largest scale applications by providing consistent, single-digit millisecond response times at any scale. You can build applications with virtually unlimited throughput and storage.<BR><BR>2- Serverless:<BR><BR>With DynamoDB, there are no servers to provision, patch, or manage and no software to install, maintain, or operate. DynamoDB automatically scales tables up and down to adjust for capacity and maintain performance.<BR><BR>3- Highly available:<BR><BR>Availability and fault tolerance are built in, eliminating the need to architect your applications for these capabilities.<BR><BR>" },
  { "name": "Amazon DAX", "description": "Managed in-memory caching service for DynamoDB that delivers microsecond read performance by caching frequently accessed data" },
  { "name": "Amazon ElastiCache", "description": "In-memory caching service supporting Redis and Memcached, and Valkey for ultra-fast performance","technotes":"Applications - Game Leaderboards, Ehcache not supported" },
  { "name": "Amazon Redshift", "description": "Fully managed data warehouse for fast querying and analytics at scale" },
  { "name": "Amazon Neptune", "description": "Managed graph database service optimized for storing and querying highly connected data" },
  { "name": "Amazon DocumentDB", "description": "Managed document database service compatible with MongoDB workloads" },
  { "name": "Amazon Keyspaces", "description": "Managed wide-column database service compatible with Apache Cassandra" },
  { "name": "Amazon Timestream", "description": "Purpose-built time series database for IoT and operational applications" },
  { "name": "Amazon QLDB", "description": "Ledger database that provides a cryptographically verifiable transaction log" },
  { "name": "Amazon MemoryDB", "description": "Redis-compatible, durable in-memory database for ultra-low latency applications" }
  ],
  security: [
  { "name": "IAM", "description": "Your cornerstone for securely managing access to AWS services and resources",
    "technotes": "<BR>AWS Identity and Access Management (IAM) provides a framework for securely managing access to AWS resources. <BR>At its core, IAM uses <B>users</B>, <B>groups</B>, and <B>roles</B> to define identities and assign permissions. <BR><B>IAM users</B> represent individual people or applications and can be grouped together into IAM groups for easier management. <BR><B>Groups</B> themselves don’t have credentials or permissions—they simply serve as containers for users. <BR><B>IAM roles</B>, on the other hand, are designed for temporary access and can be assumed by trusted entities like users, AWS services, or external identities. <BR>Roles are especially useful for cross-account access and service-to-service interactions, as they don’t require long-term credentials. <BR><BR>Permissions in IAM are governed by <B>policies</B>, which are JSON documents that define what actions are allowed or denied on specific resources. These policies can be attached to users, groups, or roles. <BR><BR>In addition to IAM policies, AWS Organizations introduces <B>Service Control Policies (SCPs)</B>, which act as a top-level guardrail for accounts within an organization. SCPs don’t grant permissions directly—they define the maximum permissions that IAM policies can grant within an account or organizational unit. This layered approach ensures that even if an IAM policy allows an action, it will be blocked if the SCP doesn’t permit it, enabling centralized governance across multiple AWS accounts.<BR><BR><ul><li><b>Basic IAM Best Practices</b></li><ul><li><b>Least privilege:</b> Grant only the permissions needed—nothing more.</li><li><b>Enable MFA:</b> Require multi-factor authentication for all users, especially the root account.</li><li><b>Audit with CloudTrail:</b> Monitor IAM changes and sign-in activity for anomalies and compliance.</li><li><b>Avoid root user:</b> Use the root account only for critical setup and recovery tasks.</li><li><b>Use IAM roles:</b> Prefer roles over IAM users for applications and AWS services.</li><li><b>Use IAM groups:</b> Assign permissions to groups instead of individual users.</li><li><b>Start with managed policies:</b> Begin with AWS managed policies, then tailor as needed.</li><li><b>Review and clean up:</b> Regularly remove unused users, roles, keys, and policies.</li><li><b>Use IAM Access Analyzer:</b> Identify overly permissive or unintended access paths.</li><li><b>Policy conditions:</b> Add context restrictions (IP, time, MFA requirement) to policies.</li><li><b>Rotate credentials:</b> Regularly rotate passwords and access keys.</li><li><b>Permissions boundaries:</b> Limit the maximum permissions that can be granted during delegation.</li><li><b>Federate access:</b> Use AWS IAM Identity Center or external IdPs to centralize user management.</li></ul><li><b>Advanced IAM Best Practices</b></li><ul><li><b>Temporary credentials:</b> Use roles or federation instead of long-term access keys.</li><li><b>Just-in-time access:</b> Grant time-bound permissions only when needed.</li><li><b>Secure access keys:</b> Store keys securely (e.g., Secrets Manager); never hard-code them.</li><li><b>Validate policies pre-deploy:</b> Use IAM Access Analyzer proactively to check policies before rollout.</li><li><b>Delegation safeguards:</b> Apply permissions boundaries to prevent privilege escalation in created roles.</li><li><b>RBAC + ABAC:</b> Combine role-based and attribute-based access for flexible, scalable control.</li><li><b>Strong password policy:</b> Enforce complexity, reuse prevention, and rotation where applicable.</li></ul></ul>"
 },
 { "name":"IAM Principals","description":"In AWS IAM, the term principal refers to any entity that can make a request to AWS services. These include:<BR><BR><B>IAM Users</B> – Individual identities with credentials.<BR><B>IAM Roles</B> – Temporary identities assumed by trusted entities.<BR><B>Federated Users</B> – External identities authenticated via identity providers.<BR><B>AWS Services</B> – Like EC2 or Lambda, when they act on your behalf."},
  { "name": "IAM Access Analyzer", "description": "Fine-tune access with granular permissions (Tip: use this to give least privilege permissions!)" },
  { "name": "AWS Organizations", "description": "Manage and govern multiple AWS accounts" },
  { "name": "IAM Identity Center", "description": "Simplify workforce access across AWS accounts, services, and apps" },
  { "name": "Amazon Macie", "description": "Discover and shield sensitive data at scale" },
  { "name": "AWS KMS", "description": "Your locksmith, managing cryptographic keys with finesse" },
  { "name": "AWS Secrets Manager", "description": "A secure vault, safeguarding and rotating your secrets (Tip: Use to get rid of hard-coded and plaintext secrets)" },
  { "name": "AWS Certificate Manager", "description": "Provision and deploy SSL/TLS certs" },
  { "name": "AWS WAF", "description": "Block web threats like SQL injection and XSS, and add custom rules like country blocking",
    "technotes":"AWS Web Application Firewall (AWS WAF) is a cloud-based security service that protects web applications from common threats like SQL injection, cross-site scripting (XSS), and bot attacks by filtering and monitoring HTTP(S) traffic. It allows users to create custom rules, apply AWS-managed rule groups, and set rate-based limits to block excessive requests or malicious behavior. Integrated with services like <b>CloudFront</b>, <b>API Gateway</b>, and <b>Application Load Balancer</b>, AWS WAF offers features such as <b>geo-blocking</b>, real-time monitoring via <b>CloudWatch</b>, and automatic scaling to handle traffic surges." },
  { "name": "AWS Shield", "description": "Guard against DDoS attacks" },
  { "name": "AWS Firewall Manager", "description": "Manage firewall rules, SGs, and Shield, across your AWS Organization" },
  { "name": "AWS Network Firewall", "description": "Fortify network security across Amazon VPCs by filtering traffic" },
  { "name": "Amazon GuardDuty", "description": "A relentless threat detection service, continuously monitoring for malicious activities" },
  { "name": "Amazon Detective", "description": "Dive deep into security data and visualize threats" },
  { "name": "Amazon Inspector", "description": "Discover workloads and scan them for software vulnerabilities" },
  { "name": "AWS CloudTrail", "description": "A meticulous recorder, logging user activity and API usage (Tip: push to CloudWatch Logs for tracking & to generate metrics and alerts)" },
  { "name": "AWS Config", "description": "A detailed observer, recording and evaluating configurations of AWS resources (Tip: use with SSM and Lambda for automated remediation)" },
  { "name": "AWS Security Hub", "description": "Unified security command center, providing a comprehensive view of alerts and posture" },
  { "name": "AWS Audit Manager", "description": "Continuously auditing AWS usage against prebuilt and custom frameworks" },
  { "name": "AWS Artifact", "description": "Your gateway to compliance reports from AWS and ISVs" },
  { "name": "AWS Control Tower", "description": "Account deployment and governance" }
],
monitoring :[
  {
    "name": "Amazon CloudWatch",
    "description": "Central monitoring service for collecting metrics, logs, and events from AWS resources and applications"
  },
  {
    "name": "AWS CloudTrail",
    "description": "Records AWS API calls and user activity for auditing, security analysis, and operational troubleshooting"
  },
  {
    "name": "AWS Config",
    "description": "Tracks configuration changes and evaluates resource compliance against defined rules"
  },
  {
    "name": "AWS X-Ray",
    "description": "Distributed tracing service that helps analyze and debug applications, especially <B>microservices</B>"
  },
  {
    "name": "Amazon Managed Grafana",
    "description": "Fully managed Grafana service for visualizing metrics and logs from CloudWatch, Prometheus, and other sources"
  },
  {
    "name": "Amazon Managed Service for Prometheus",
    "description": "Scalable monitoring service for container workloads using Prometheus-compatible metrics"
  },
  {
    "name": "AWS Distro for OpenTelemetry (ADOT)",
    "description": "Open-source distribution for collecting telemetry data (metrics, logs, traces) from applications"
  },
  {
    "name": "AWS Control Tower",
    "description": "Provides governance and visibility across multi-account AWS environments with integrated monitoring"
  },
  {
    "name": "AWS Health Dashboard",
    "description": "Provides personalized alerts and notifications about AWS service events that may impact your resources"
  },
  {
    "name": "AWS Personal Health Dashboard",
    "description": "Delivers alerts and remediation guidance when AWS is experiencing events that affect your account"
  },
  {
    "name": "AWS Trusted Advisor",
    "description": "Provides real-time guidance to help provision resources following AWS best practices, including monitoring checks"
  },
  {
    "name": "AWS Application Signals",
    "description": "Automatically collects and visualizes application performance metrics for faster troubleshooting"
  },
  {
    "name": "Amazon OpenSearch Service",
    "description": "Search and analytics engine for log data, enabling real-time monitoring and observability"
  }
]
,
serverless : [
  {
    "name": "AWS Lambda",
    "description": "Run code in response to events without provisioning or managing servers"
  },
  {
    "name": "Amazon S3",
    "description": "Object storage service that scales automatically and supports serverless architectures"
  },
  {
    "name": "Amazon DynamoDB",
    "description": "Serverless NoSQL database with single-digit millisecond latency and automatic scaling"
  },
  {
    "name": "Amazon API Gateway",
    "description": "Create, publish, and manage REST and WebSocket APIs for serverless applications",
    "technotes":"supports <b>REST</b> (standard request-response over HTTP for CRUD operations), <b>HTTP</b> (lightweight APIs with flexible routing), and <b>WebSocket</b> (persistent, bidirectional connections for real-time apps like chat or gaming). <br>While API Gateway with Lambda is effective for real-time synchronous processing, it does not inherently offer decoupling between tiers or a durable queue. It also lacks native support for guaranteed exactly-once processing across asynchronous workloads."
  },
  {
    "name": "AWS Step Functions",
    "description": "Serverless workflow service for coordinating distributed applications using visual workflows"
  },
  {
    "name": "Amazon EventBridge",
    "description": "Event bus for building event-driven applications that integrate AWS services and SaaS apps"
  },
  {
    "name": "Amazon SNS",
    "description": "Pub/Sub messaging service for decoupling microservices and sending notifications"
  },
  {
    "name": "Amazon SQS",
    "description": "Message queuing service for decoupling and scaling microservices, distributed systems, and serverless apps"
  },
  {
    "name": "AWS Fargate",
    "description": "Serverless compute engine for containers that eliminates the need to manage EC2 instances"
  },
  {
    "name": "AWS AppSync",
    "description": "Managed GraphQL service for building scalable serverless APIs with real-time data sync"
  },
  {
    "name": "AWS Amplify",
    "description": "Set of tools and services for building full-stack serverless web and mobile applications"
  },
  {
    "name": "Amazon Kinesis Data Firehose",
    "description": "Serverless service for delivering real-time streaming data to destinations like S3 and Redshift"
  },
  {
    "name": "Amazon Timestream",
    "description": "Serverless time series database for IoT and operational applications"
  },
  {
    "name": "Amazon Aurora Serverless",
    "description": "On-demand, auto-scaling version of Amazon Aurora for infrequent or variable workloads"
  },
  {
    "name": "AWS Glue",
    "description": "Serverless data integration service for discovering, preparing, and transforming data"
  },
  {
    "name": "AWS SAM (Serverless Application Model)",
    "description": "Framework for building serverless applications using simplified syntax and deployment tooling"
  },
  {
    "name": "AWS CloudFormation",
    "description": "Infrastructure as code service that supports serverless resource provisioning via templates"
  },
  {
    "name": "AWS App Runner",
    "description": "Fully managed service to deploy and run containerized web applications and APIs without managing infrastructure"
  },
  {
    "name": "AWS CodeBuild",
    "description": "Serverless build service that compiles source code, runs tests, and produces software packages"
  },
  {
    "name": "AWS CodePipeline",
    "description": "Serverless CI/CD service for automating build, test, and deployment workflows"
  }
],
management:[
  {
    "name": "AWS Organizations",
    "description": "Manage and govern multiple AWS accounts centrally with consolidated billing and policy controls"
  },
{
    "name": "AWS Managed Microsoft Active Directory",
    "description": "A fully managed Microsoft Active Directory in the AWS Cloud for AD-aware workloads and seamless integration."
  },
  {
    "name": "AWS Managed Microsoft AD Connector",
    "description": "A proxy that connects AWS resources to your on-premises Microsoft AD without storing data in the cloud."
  },
  {
    "name": "Simple AD",
    "description": "A low-cost, standalone directory based on Samba, suitable for small AD-compatible workloads."
  },
  {
    "name": "Amazon Cognito",
    "description": "Provides user authentication, authorization, and user management for web and mobile apps."
  },
  {
    "name": "AWS Billing and Cost Management",
    "description": "Suite of tools to manage billing, payments, invoices, and optimize cloud spending"
  },
  {
    "name": "AWS Cost Explorer",
    "description": "Visualize and analyze your AWS usage and spending patterns over time"
  },
  {
    "name": "AWS Budgets",
    "description": "Set custom cost and usage budgets and receive alerts when thresholds are exceeded"
  },
  {
    "name": "AWS Cost Anomaly Detection",
    "description": "Uses machine learning to detect unusual spending patterns and alert you to anomalies"
  },
  {
    "name": "AWS Cost and Usage Report (CUR)",
    "description": "Detailed dataset of AWS usage and costs, exportable to Amazon S3 for analysis"
  },
  {
    "name": "AWS Billing Conductor",
    "description": "Customize billing and cost allocation across accounts with billing groups and pricing models"
  },
  {
    "name": "AWS Purchase Orders",
    "description": "Track and manage purchase orders associated with your AWS billing account"
  },
  {
    "name": "AWS Tax Settings",
    "description": "Configure tax registration and exemption settings for your AWS account"
  },
  {
    "name": "AWS Free Tier Dashboard",
    "description": "Monitor your usage of AWS Free Tier services and avoid unexpected charges"
  },
  {
    "name": "AWS Payment History",
    "description": "View and download records of past payments and invoices"
  },
  {
    "name": "AWS Price List API",
    "description": "Programmatically access AWS service pricing information for cost modeling"
  },
  {
    "name": "AWS Cost Categories",
    "description": "Organize and group AWS costs using custom categories for better financial reporting"
  },
  {
    "name": "AWS Cost Allocation Tags",
    "description": "Assign tags to resources to track and allocate costs across projects or departments"
  },
  {
    "name": "AWS Account Management Console",
    "description": "Manage account settings, security credentials, and contact information"
  },
  {
    "name": "AWS Identity and Access Management (IAM)",
    "description": "Your cornerstone for securely managing access to AWS services and resources"
  }
],
networking: [
  {
    "name": "Amazon VPC",
    "description": "Create isolated virtual networks in the AWS cloud with full control over IP addressing, subnets, routing, and security"
  },
  {
    "name": "AWS Transit Gateway",
    "description": "Connects multiple VPCs and on-premises networks through a central hub for simplified routing and scalability"
  },
  {
    "name": "AWS Direct Connect",
    "description": "Establishes dedicated network connections between your data center and AWS for consistent, low-latency performance"
  },
  {
    "name": "AWS Site-to-Site VPN",
    "description": "Securely connects your on-premises network to AWS using encrypted IPsec tunnels"
  },
  {
    "name": "AWS Client VPN",
    "description": "Enables secure remote access to AWS and on-premises resources for users via OpenVPN-based connections"
  },
  {
    "name": "Amazon Route 53",
    "description": "Highly available and scalable DNS service with domain registration, routing policies, and health checks"
  },
  {
    "name": "AWS Global Accelerator",
    "description": "Improves application availability and performance using static IPs and global routing over the AWS network"
  },
  {
    "name": "AWS PrivateLink",
    "description": "Provides private connectivity between VPCs and AWS services without exposing traffic to the public internet"
  },
  {
    "name": "AWS Cloud WAN",
    "description": "Builds and manages global wide-area networks across AWS Regions and on-premises locations using a unified policy framework"
  },
  {
    "name": "AWS Network Firewall",
    "description": "Managed network firewall service for inspecting and filtering traffic at the VPC level"
  },
  {
    "name": "AWS Firewall Manager",
    "description": "Centralized management of firewall rules, security groups, and network protections across accounts"
  },
  {
    "name": "Elastic Load Balancing (ELB)",
    "description": "Distributes incoming traffic across multiple targets to ensure fault tolerance and scalability, <BR>Deleting unused Elastic Load Balancers (ELBs) helps save money by eliminating charges associated with resources that are not actively being used, which can accumulate over time. Each idle ELB can cost around $200 per year, so removing them reduces unnecessary expenses on your AWS bill."
  },
  {
    "name": "Application Load Balancer (ALB)",
    "description": "Layer 7 load balancer that routes HTTP/HTTPS traffic based on content and supports advanced routing features"
  },
  {
    "name": "Network Load Balancer (NLB)",
    "description": "Layer 4 load balancer optimized for high-performance TCP traffic and static IP support"
  },
  {
    "name": "Gateway Load Balancer (GLB)",
    "description": "Distributes traffic to third-party virtual appliances for deep packet inspection and security services"
  },
  {
    "name": "Auto Scaling Groups (ASG)",
    "description": "Automatically adjusts EC2 instance capacity to maintain performance and availability across your application",
"technotes":"<u>Manual scaling</u> (user sets capacity manually—best for full control), <u>scheduled scaling</u> (based on time—ideal for predictable workloads), <u>dynamic scaling</u> (reacts to metrics—great for responsive scaling), <u>step scaling</u> (scales in steps—best for gradual, controlled changes), <u>target tracking</u> (maintains a metric target—perfect for consistent performance), and <u>predictive scaling</u> (forecasts demand—suited for seasonal or recurring traffic patterns)"
  },
  {
    "name": "VPC Endpoint - Interface",
    "description": "Creates a private connection to AWS services using elastic network interfaces within your VPC"
  },
  {
    "name": "VPC Endpoint - Gateway",
    "description": "Provides private access to AWS services like S3 and DynamoDB using route tables within your VPC"
  },
  {
    "name": "NAT Gateway",
    "description": "Enables instances in a private subnet to connect to the internet or other AWS services without exposing them"
  },
  {
    "name": "Internet Gateway",
    "description": "Allows communication between instances in your VPC and the internet"
  },
  {
    "name": "NAT Instance",
    "description": "EC2-based alternative to NAT Gateway for outbound internet access from private subnets"
  },
  {
    "name": "Security Groups",
    "description": "Virtual firewalls that control inbound and outbound traffic to AWS resources at the instance level"
  },
  {
    "name": "Network Access Control Lists (NACLs)",
    "description": "Stateless firewalls that control traffic at the subnet level with customizable rules"
  },
  {
    "name": "AWS App Mesh",
    "description": "Service mesh that enables application-level networking for microservices with traffic routing and observability"
  },
  {
    "name": "AWS Cloud Map",
    "description": "Service discovery tool that maps application components to custom names for dynamic routing"
  },
  {
    "name": "Amazon VPC Lattice",
    "description": "Application-layer networking service for secure communication between services across VPCs"
  },
  {
    "name": "AWS Verified Access",
    "description": "Zero-trust access service that enables secure connectivity to applications without a VPN"
  },
  {
    "name": "AWS Private 5G",
    "description": "Deploys and manages private cellular networks for secure, high-bandwidth connectivity in enterprise environments"
  }
],
configuration: [
  {
    "name": "AWS Config",
    "description": "Tracks configuration changes, maintains resource inventory, and evaluates compliance against custom rules"
  },
  {
    "name": "AWS Systems Manager",
    "description": "Unified interface for managing infrastructure and software configurations across AWS and on-premises environments"
  },
  {
    "name": "AWS CloudFormation",
    "description": "Infrastructure as code service that provisions and manages AWS resources using declarative templates"
  },
  {
    "name": "AWS OpsWorks",
    "description": "Configuration management service that uses Chef and Puppet to automate server setup and deployment"
  },
  {
    "name": "AWS Service Catalog",
    "description": "Enables organizations to create and manage approved catalogs of resources for consistent configuration and deployment.  You can store IaaC templates."
  },
  {
    "name": "AWS Elastic Beanstalk",
    "description": "Platform-as-a-Service that automatically handles environment provisioning, configuration, and scaling for applications"
  },
  {
    "name": "AWS Launch Wizard",
    "description": "Guided deployment tool that configures and provisions enterprise applications like SAP and SQL Server"
  },
  {
    "name": "AWS Cloud Development Kit (CDK)",
    "description": "Framework for defining cloud infrastructure using familiar programming languages with reusable configuration constructs"
  },
  {
    "name": "AWS SAM (Serverless Application Model)",
    "description": "Framework for building and deploying serverless applications using simplified configuration syntax"
  },
  {
    "name": "AWS AppConfig",
    "description": "Feature of Systems Manager that enables safe and rapid deployment of application configurations"
  },
  {
    "name": "AWS CodeDeploy",
    "description": "Automates application deployments and configuration updates across EC2, Lambda, and on-premises servers"
  },
  {
    "name": "AWS CodePipeline",
    "description": "Orchestrates CI/CD workflows including configuration changes across environments"
  },
  {
    "name": "AWS CodeBuild",
    "description": "Builds and tests code with configuration scripts and environment variables for deployment pipelines"
  }
],
datastreams : [
  {
    "name": "Amazon Kinesis Data Streams",
    "description": "Real-time data streaming service for ingesting high-throughput data such as logs, events, and telemetry"
  },
  {
    "name": "Amazon Kinesis Data Firehose",
    "description": "Fully managed service for delivering streaming data to destinations like Amazon S3, Redshift, and OpenSearch","technote":"Won't work with DynamoDB, but you can use S3"
  },
  {
    "name": "Amazon Kinesis Data Analytics",
    "description": "Real-time analytics service that processes streaming data using SQL or Apache Flink"
  },
  {
    "name": "Amazon MSK (Managed Streaming for Apache Kafka)",
    "description": "Fully managed service for building and running applications using Apache Kafka for real-time data streaming"
  },
  {
    "name": "Amazon MSK Serverless",
    "description": "Serverless option for Amazon MSK that automatically provisions and scales resources for Kafka workloads"
  },
  {
    "name": "AWS Glue Streaming ETL",
    "description": "Processes streaming data in real time using serverless extract, transform, and load (ETL) jobs"
  },
  {
    "name": "AWS DMS (Database Migration Service) with CDC",
    "description": "Supports change data capture (CDC) to stream database changes in near real-time during migrations"
  },
  {
    "name": "Amazon EventBridge",
    "description": "Event bus service for building event-driven architectures that stream events between AWS services and SaaS apps"
  },
  {
    "name": "Amazon SQS",
    "description": "Message queuing service that supports decoupled, scalable data streaming between distributed systems"
  },
  {
    "name": "Amazon SNS",
    "description": "Pub/Sub messaging service for broadcasting streaming data to multiple subscribers in real time"
  }
],

"supportplan" : [
  {
    "name": "Basic Support",
    "description": "Free support plan included with all AWS accounts.",
    "technotes": "<ul><li>24/7 access to customer service</li><li>Access to AWS documentation, whitepapers, and forums</li><li>Limited Trusted Advisor checks</li><li>No technical support included</li></ul>",
    "billingnotes": "Free of charge"
  },
  {
    "name": "Developer Support",
    "description": "Designed for early-stage development and testing environments.",
    "technotes": "<ul><li>Email access to Cloud Support Associates during business hours</li><li>Response time: &lt; 24 hours for general guidance</li><li>Limited Trusted Advisor checks</li></ul>",
    "billingnotes": "Starts at $29/month or 3% of monthly AWS usage, whichever is greater"
  },
  {
    "name": "Business Support",
    "description": "Recommended for production workloads requiring fast response and guidance.",
    "technotes": "<ul><li>24/7 access via phone, chat, and email to Cloud Support Engineers</li><li>Response times: &lt; 24h (general), &lt; 12h (system impaired), &lt; 4h (production impaired), &lt; 1h (production down)</li><li>Full Trusted Advisor checks</li><li>Access to AWS Support API</li></ul>",
    "billingnotes": "Starts at $100/month or tiered percentage of monthly usage: 10% of first $0–$10K, 7% of $10K–$80K, 5% of $80K–$250K, 3% over $250K"
  },
  {
    "name": "Enterprise On-Ramp Support",
    "description": "For businesses with critical workloads needing consultative guidance.",
    "technotes": "<ul><li>All Business Support features</li><li>Consultative architectural guidance</li><li>Support Automation Workflows</li><li>One AWS Countdown engagement per year</li><li>Pool of Technical Account Managers</li></ul>",
    "billingnotes": "Starts at $5,500/month or 10% of monthly AWS usage"
  },
  {
    "name": "Enterprise Support",
    "description": "For mission-critical workloads requiring dedicated support and strategic guidance.",
    "technotes": "<ul><li>All Enterprise On-Ramp features</li><li>Designated Technical Account Manager (TAM)</li><li>Response time: &lt; 15 minutes for business-critical system down</li><li>Annual security and infrastructure reviews</li><li>Access to AWS Incident Detection and Response</li></ul>",
    "billingnotes": "Starts at $15,000/month or tiered percentage of monthly usage: 10% of first $0–$150K, 7% of $150K–$500K, 5% of $500K–$1M, 3% over $1M"
  },
  {
    "name": "AWS Countdown",
    "description": "is a support program that helps organizations prepare for and execute critical cloud events—like product launches or migrations—with expert guidance and minimal risk. It offers structured planning, readiness assessments, and real-time support to ensure smooth execution. Available in standard and premium tiers, Countdown gives teams access to AWS specialists, proven playbooks, and hands-on help tailored to the complexity of their event.",
    "technotes": "<BR><B>AWS Countdown (Standard Tier)</B><BR>What it is: Guided support from your Technical Account Manager (TAM), including planning assistance, readiness checks, and coordination during your event.<BR><BR>Best for: Teams with internal cloud expertise who need validation and structured guidance.<BR><BR><B>AWS Countdown Premium</B><BR>What it is: Full-spectrum support from designated AWS engineers—from design to post-launch. Includes proactive guidance, access to subject matter experts (SMEs), and live event troubleshooting.<BR><BR>Best for: High-stakes events requiring deep technical involvement and real-time support.<BR><BR>",
    "billingnotes": "<BR><B>AWS Countdown (Standard Tier)</B><BR>Availability: Included at no extra cost with the Enterprise Support plan.<BR><BR>Enterprise On-Ramp customers receive one free engagement per year<BR><BR><B>AWS Countdown Premium</B><BR>Offered as a monthly subscription for an additional fee.<BR><BR>Available to customers with Business Support, Enterprise On-Ramp, or Enterprise Support plans.<BR><BR>Recommended to subscribe 2–3 weeks before your critical event to allow for thorough planning.<BR><BR>"
  }

],
"tbd" :[],

"waf" : [
  {
    "name": "1. Operational Excellence",
    "description": "Focuses on <b>running</b> and <b>monitoring</b> systems to deliver business value and continuously improve processes and procedures.",
    "technotes": "Use Amazon CloudWatch to monitor application health and set up automated alerts for performance issues."
  },
  {
    "name": "2. Security",
    "description": "Emphasizes protecting data, systems, and assets through risk assessments and mitigation strategies.",
    "technotes": "Enable multi-factor authentication (MFA) for all IAM users and encrypt sensitive data using AWS Key Management Service (KMS)."
  },
  {
    "name": "3. Reliability",
    "description": "Ensures workloads perform as intended and can recover quickly from failures.",
    "technotes": "Deploy applications across multiple Availability Zones to ensure high availability and fault tolerance."
  },
  {
    "name": "4. Performance Efficiency",
    "description": "Uses computing resources efficiently to meet system requirements and adapt to changing demands.",
    "technotes": "Use AWS Auto Scaling to automatically adjust compute resources based on traffic patterns."
  },
  {
    "name": "5. Cost Optimization",
    "description": "Helps avoid unnecessary costs and ensures you’re spending wisely on cloud resources.",
    "technotes": "Use AWS Cost Explorer to identify underutilized EC2 instances and switch to smaller or spot instances."
  },
  {
    "name": "6. Sustainability",
    "description": "Encourages designing systems that minimize environmental impact and improve energy efficiency.",
    "technotes": "Choose AWS Regions powered by renewable energy and optimize workloads to reduce compute time."
  }
],
caf : [
  {
    "name": "1. Business Perspective",
    "description": "Ensures that cloud investments align with business goals and accelerate digital transformation.",
    "technotes": "Define KPIs and use AWS services like Cost Explorer to track cloud spending against business outcomes."
  },
  {
    "name": "2. People Perspective",
    "description": "Focuses on organizational culture, structure, and skills needed to support cloud adoption.",
    "technotes": "Conduct training programs using AWS Skill Builder to upskill teams on cloud technologies."
  },
  {
    "name": "3. Governance Perspective",
    "description": "Helps manage cloud initiatives while minimizing risks and ensuring compliance.",
    "technotes": "Implement guardrails with AWS Organizations and use AWS Config to enforce policy compliance."
  },
  {
    "name": "4. Platform Perspective",
    "description": "Guides the design and deployment of cloud infrastructure and applications.",
    "technotes": "Use AWS CloudFormation to automate infrastructure provisioning and ensure consistency."
  },
  {
    "name": "5. Security Perspective",
    "description": "Ensures that cloud workloads meet security, compliance, and risk management requirements.",
    "technotes": "Apply IAM best practices and use AWS Security Hub to monitor and improve your security posture."
  },
  {
    "name": "6. Operations Perspective",
    "description": "Focuses on managing and supporting cloud services to meet business needs.",
    "technotes": "Use Amazon CloudWatch and AWS Systems Manager to monitor, troubleshoot, and optimize operations."
  }
]





};

