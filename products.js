const productData = {
	storage: [
  { "name": "Amazon S3", "description": "Scalable object storage for any type of data with high durability and availability" },
  { "name": "Amazon S3 Glacier", "description": "Low-cost archival storage designed for long-term data retention with retrieval options from milliseconds to hours" },
  { "name": "Amazon EBS", "description": "Block storage volumes for use with Amazon EC2, offering low-latency performance and high availability" },
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
  { "name": "Amazon EMR", "description": "Managed big data platform for processing vast amounts of data using open-source tools like Apache Spark, Hive, and Hadoop" },
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
  { "name": "Amazon RDS", "description": "Managed relational database service supporting multiple engines like MySQL, PostgreSQL, Oracle, and SQL Server" },
  { "name": "Amazon DynamoDB", "description": "Fully managed NoSQL database for key-value and document data with single-digit millisecond latency" },
  { "name": "Amazon DAX", "description": "Managed in-memory caching service for DynamoDB that delivers microsecond read performance by caching frequently accessed data" },
  { "name": "Amazon ElastiCache", "description": "In-memory caching service supporting Redis and Memcached for ultra-fast performance" },
  { "name": "Amazon Redshift", "description": "Fully managed data warehouse for fast querying and analytics at scale" },
  { "name": "Amazon Neptune", "description": "Managed graph database service optimized for storing and querying highly connected data" },
  { "name": "Amazon DocumentDB", "description": "Managed document database service compatible with MongoDB workloads" },
  { "name": "Amazon Keyspaces", "description": "Managed wide-column database service compatible with Apache Cassandra" },
  { "name": "Amazon Timestream", "description": "Purpose-built time series database for IoT and operational applications" },
  { "name": "Amazon QLDB", "description": "Ledger database that provides a cryptographically verifiable transaction log" },
  { "name": "Amazon MemoryDB", "description": "Redis-compatible, durable in-memory database for ultra-low latency applications" }
  ],
  security: [
  { "name": "IAM", "description": "Your cornerstone for securely managing access to AWS services and resources" },
  { "name": "IAM Access Analyzer", "description": "Fine-tune access with granular permissions (Tip: use this to give least privilege permissions!)" },
  { "name": "AWS Organizations", "description": "Manage and govern multiple AWS accounts" },
  { "name": "IAM Identity Center", "description": "Simplify workforce access across AWS accounts, services, and apps" },
  { "name": "Amazon Macie", "description": "Discover and shield sensitive data at scale" },
  { "name": "AWS KMS", "description": "Your locksmith, managing cryptographic keys with finesse" },
  { "name": "AWS Secrets Manager", "description": "A secure vault, safeguarding and rotating your secrets (Tip: Use to get rid of hard-coded and plaintext secrets)" },
  { "name": "AWS Certificate Manager", "description": "Provision and deploy SSL/TLS certs" },
  { "name": "AWS WAF", "description": "Block web threats like SQL injection and XSS" },
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
]

};

