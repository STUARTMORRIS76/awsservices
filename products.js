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
  "description": "<p>Amazon Elastic Container Service (ECS) is a scalable, fully managed container orchestration service that integrates tightly with AWS infrastructure. It consists of <strong>clusters</strong> (logical resource pools), <strong>task definitions</strong> (container blueprints), <strong>tasks</strong> (running containers), and <strong>services</strong> (long-running task managers). ECS supports both <em>Fargate</em> (serverless) and <em>EC2</em> (self-managed) launch types, allowing flexibility in how workloads are deployed and managed.</p>",
  "technotes": "<p>Common ECS service metrics available in Amazon CloudWatch include:</p><ul><li><strong>ECSServiceAverageCPUUtilization</strong>: Average percentage of CPU units consumed by tasks in the service.</li><li><strong>ECSServiceAverageMemoryUtilization</strong>: Average percentage of memory used by tasks in the service.</li><li><strong>ECSServiceDesiredTaskCount</strong>: Number of tasks the service is configured to maintain.</li><li><strong>ECSServiceRunningTaskCount</strong>: Number of tasks currently running in the service.</li><li><strong>ECSServicePendingTaskCount</strong>: Number of tasks waiting to be placed or started.</li><li><strong>ECSServiceDeploymentCount</strong>: Number of active deployments associated with the service.</li><li><strong>ECSServiceTaskSetCount</strong>: Number of task sets in the service, relevant for blue/green deployments.</li><li><strong>ALBRequestCountPerTarget</strong>: Number of requests received per target in an Application Load Balancer target group linked to the ECS service.</li></ul><p>These metrics are essential for monitoring performance, scaling behavior, and deployment health in ECS environments.</p>"
}
,
  {
    "name": "Amazon ECS Anywhere",
    "description": "Extends Amazon ECS to run containers on customer-managed infrastructure outside AWS"
  },
  {
  "name": "Amazon EKS",
  "description": "Managed Kubernetes service for running containerized applications using Kubernetes",
  "technotes": "Lets you run Kubernetes clusters on your own infrastructure using the same tools as AWS EKS, without needing a cloud connection. It's ideal for hybrid or on-prem environments.<BR><BR><strong>EKS Autoscaling:</strong><BR><BR>Amazon EKS supports multiple autoscaling mechanisms to optimize resource usage and performance. You can use the Kubernetes Cluster Autoscaler to automatically adjust the number of EC2 nodes based on pending pods, Horizontal Pod Autoscaler to scale pods based on CPU or memory metrics, and Karpenter for dynamic provisioning of compute capacity with faster scaling and cost efficiency."
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
  {"name": "AWS Snow family",
    "description": "The AWS Snow Family provides rugged, portable devices to securely transfer large-scale data between on-premises environments and AWS.<br> Technically, Snow devices use encrypted storage and built-in compute to ingest, process, and transfer petabyte-scale data into Amazon S3.<br> It includes <b>Snowcone</b> (smallest, edge computing), <b>Snowball Edge</b> (data transfer + compute), and <b>Snowmobile</b> (exabyte-scale truck for massive migrations).", "technotes":"You have to move data into S3 first before putting it in a <b>S3 Glacier vault</b>"
},
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
  "name": "AWS Database Migration Service (DMS)",
  "description": "<p>AWS DMS helps you migrate databases quickly and securely to AWS. It supports homogeneous migrations (e.g., Oracle to Oracle) and heterogeneous migrations (e.g., SQL Server to Amazon Aurora), with minimal downtime during the process.</p>\n\n<p>DMS can also be used for continuous data replication between on-premises and cloud databases, making it ideal for hybrid architectures and real-time analytics.</p>",
  "technotes": "<p><strong>Supported Sources and Targets:</strong></p>\n<ul>\n  <li>Supports popular engines like Oracle, SQL Server, MySQL, PostgreSQL, MariaDB, MongoDB, and Amazon Aurora.</li>\n  <li>Targets include Amazon RDS, Amazon Redshift, Amazon S3, Amazon DynamoDB, and more.</li>\n</ul>\n\n<p><strong>Key Features:</strong></p>\n<ul>\n  <li><strong>Minimal downtime:</strong> Keeps source databases fully operational during migration.</li>\n  <li><strong>Change Data Capture (CDC):</strong> Continuously replicates changes from source to target in near real-time.</li>\n  <li><strong>Schema conversion:</strong> Use with AWS Schema Conversion Tool (SCT) for heterogeneous migrations.</li>\n  <li><strong>Monitoring:</strong> Integrated with Amazon CloudWatch for visibility into migration tasks.</li>\n  <li><strong>Secure:</strong> Supports encryption in transit and at rest, and VPC-based deployments.</li>\n</ul>\n\n<p><strong>Use Cases:</strong></p>\n<ul>\n  <li>Lift-and-shift migrations to AWS cloud databases.</li>\n  <li>Cross-region or cross-account replication.</li>\n  <li>Real-time analytics pipelines using S3 or Redshift as targets.</li>\n  <li>Disaster recovery and high availability replication setups.</li>\n</ul>\n\n<p><strong>Example:</strong> Migrate an on-premises Oracle database to Amazon Aurora PostgreSQL with minimal downtime using DMS and SCT.</p>"
},
  {
  "name": "AWS DataSync",
  "description": "<p><strong>AWS DataSync</strong> is a data transfer service that simplifies, automates, and accelerates moving large amounts of data between on-premises storage and AWS services such as Amazon S3, Amazon EFS, and Amazon FSx.</p>",
  "technotes": "<ul><li>Supports NFS, SMB, and Amazon S3 as source and destination endpoints.</li><li>Uses a DataSync agent for on-premises deployments.</li><li>Encryption in transit is enabled by default using TLS.</li><li>Can be automated via AWS CLI, SDKs, or CloudWatch Events.</li></ul>",
  "billingnotes": "<ul><li>Charged based on the amount of data transferred.</li><li>No upfront fees or minimum commitments.</li><li>Additional charges may apply for storage and data retrieval depending on the destination service.</li></ul>"
}
,
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
  {
  "name": "Amazon EC2 Spot Instances",
  "description": "Cost-effective compute capacity for fault-tolerant workloads, available at up to 90% discount. You can also use a blended <b>mixed instances policy</b> to combine Spot and On-Demand capacity for both cost savings and reliability."
},
{
  "name": "Amazon Machine Image (AMI)",
  "description": "<p>An Amazon Machine Image (AMI) provides the information required to launch an instance on AWS. It includes a template for the root volume, launch permissions, and block device mappings. AMIs enable consistent, repeatable deployments of EC2 instances across environments.</p>\n\n<p><strong>AMIs are region-specific</strong>, meaning each AMI ID is unique to the AWS region in which it was created. To use an AMI in another region, you must copy it across regions using the AWS Management Console or CLI. This ensures that EC2 instances launched in different regions have access to the correct image data.</p>",
  "technotes": "<p><strong>Amazon Machine Images (AMIs)</strong> are preconfigured templates used to create EC2 instances. They contain the operating system, application server, and applications required to launch a virtual machine in the cloud.</p>\n\n<p><strong>Types of AMIs:</strong></p>\n<ul>\n  <li><strong>Public AMIs</strong>: Provided by AWS or shared by other users for general use.</li>\n  <li><strong>Private AMIs</strong>: Created and owned by your account, used for internal deployments.</li>\n  <li><strong>Marketplace AMIs</strong>: Offered by third-party vendors with licensed software.</li>\n</ul>\n\n<p><strong>Region Scope:</strong> AMIs are region-specific. Each AMI ID is valid only in the region where the AMI was created. To use an AMI in another region, you must copy it using the AWS Console or CLI. This ensures that EC2 instances launched in different regions have access to the correct image data.</p>\n\n<p><strong>Use Cases:</strong></p>\n<ul>\n  <li>Standardizing environments across development, staging, and production.</li>\n  <li>Creating golden images with pre-installed security patches and software.</li>\n  <li>Rapid scaling of EC2 fleets with consistent configurations.</li>\n</ul>\n\n<p><strong>Example: Launching an EC2 instance with a specific AMI using AWS CLI</strong></p>\n<pre><code>aws ec2 run-instances \\\n  --image-id ami-0abcdef1234567890 \\\n  --instance-type t2.micro \\\n  --key-name MyKeyPair \\\n  --security-groups my-security-group</code></pre>\n\n<p>This command launches a t2.micro EC2 instance using the specified AMI ID, key pair, and security group. Ensure the AMI ID is valid in the region you're operating in.</p>"
},

  { "name": "Amazon Lightsail", "description": "Simplified cloud platform for building applications and websites with preconfigured resources" },
  { "name": "AWS Lambda", "description": "Serverless compute service that runs code in response to events without provisioning servers","billingnotes":"can have saving plans"  },
 {
  "name": "AWS Fargate",
  "description": "<p>AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS. It eliminates the need to provision, configure, or scale virtual machines, allowing developers to focus on building applications without managing infrastructure.</p><p>Fargate runs containers in isolated compute environments and automatically handles task placement, scaling, and resource allocation. It integrates with IAM for security, CloudWatch for observability, and supports both EC2 networking modes and VPC integration for secure communication.</p><p>Fargate supports persistent storage through <strong>Amazon EFS</strong> (Elastic File System), allowing containers to share data across tasks and retain state. While <strong>Amazon EBS</strong> (Elastic Block Store) is not directly supported for Fargate tasks, EFS provides scalable, elastic storage ideal for stateless and stateful workloads.</p>",
  "technotes": "<p>Key operational metrics for AWS Fargate tasks include:</p><ul><li><strong>CPUUtilized</strong>: Amount of CPU used by the container task, measured in vCPU seconds.</li><li><strong>MemoryUtilized</strong>: Memory consumed by the task, measured in MiB.</li><li><strong>NetworkRxBytes</strong>: Volume of incoming network traffic to the container.</li><li><strong>NetworkTxBytes</strong>: Volume of outgoing network traffic from the container.</li><li><strong>StorageReadBytes</strong>: Amount of data read from ephemeral storage.</li><li><strong>StorageWriteBytes</strong>: Amount of data written to ephemeral storage.</li></ul><p>These metrics are available in CloudWatch Container Insights and help monitor performance, troubleshoot issues, and optimize resource usage for Fargate-based workloads.</p>"
},

  { "name": "Amazon ECS", "description": "Highly scalable container orchestration service for Docker containers" },
  { "name": "Amazon EKS", "description": "Managed Kubernetes service for running containerized applications using Kubernetes" },
  { "name": "AWS App Runner", "description": "Fully managed service to build and run containerized web applications and APIs" },
  { "name": "AWS Batch", "description": "Efficient batch computing service for running large-scale parallel and high-performance jobs" ,"billingnotes":"does not have saving plans" },
  { "name": "AWS Elastic Beanstalk", "description": "Platform-as-a-Service for deploying and scaling web applications automatically" },
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
	{
  "name": "AWS Instance Stores",
  "description": "<p>AWS Instance Stores provide ephemeral block-level storage physically attached to the host server. They deliver very high I/O performance and are ideal for temporary data such as caches, buffers, and scratch files. Data persists only for the lifetime of the instance.</p><p>Storage Capacity: Ranges from hundreds of GB (smaller I3 instances) to 60 TB (I3en.24xlarge). Capacity depends on instance type and family.</p>",
  "technotes": "<p><strong>Instance Families:</strong></p>\n<ul>\n  <li><strong>I3 Family:</strong> NVMe SSD-backed instance stores with up to 15.2 TB of storage, delivering hundreds of thousands of low-latency IOPS.</li>\n  <li><strong>I3en Family:</strong> Optimized for storage density, offering up to 60 TB of NVMe SSD storage per instance.</li>\n  <li><strong>D2 Family:</strong> HDD-backed instance stores with up to 48 TB of storage, optimized for dense storage workloads.</li>\n  <li><strong>H1 Family:</strong> High-density HDD instance stores with up to 16 TB of storage, designed for big data and analytics.</li>\n</ul>\n\n<p><strong>IOPS Performance:</strong></p>\n<ul>\n  <li>NVMe SSD instance stores (I3/I3en) deliver hundreds of thousands of random IOPS with very low latency.</li>\n  <li>HDD instance stores (D2/H1) provide high sequential throughput, suitable for large-scale data processing.</li>\n</ul>\n\n<p><strong>Storage Capacity:</strong></p>\n<ul>\n  <li>Ranges from hundreds of GB (smaller I3 instances) to 60 TB (I3en.24xlarge).</li>\n  <li>Capacity depends on instance type and family, with SSD-backed families offering smaller but faster storage, and HDD-backed families offering larger but slower storage.</li>\n</ul>",
  "billingnotes": "<p><strong>Pricing:</strong></p>\n<ul>\n  <li>Instance store volumes are included in the cost of the EC2 instance; no separate charges.</li>\n  <li>Data is ephemeral and lost when the instance stops, terminates, or fails.</li>\n  <li>For persistent storage, AWS recommends using Amazon EBS or S3.</li>\n</ul>"
},

  { "name": "Amazon S3", "description": "Scalable object storage for any type of data with high durability and availability","technotes":"S3 can be put on CloudFront, <BR>when uploading over 100mb use multipart uploading<BR><h2>🔐 Server-Side Encryption (SSE)</h2><ul><li><strong>SSE-S3</strong>: Amazon S3 manages the encryption keys.</li><li><strong>SSE-KMS</strong>: Uses AWS Key Management Service (KMS) keys for more control and <b>auditing</b></li><li><strong>DSSE-KMS</strong>: Dual-layer encryption using AWS KMS keys for enhanced security.</li><li><strong>SSE-C</strong>: Customer provides their own encryption keys; AWS does not store them.</li></ul><h2>🧠 Client-Side Encryption</h2><ul><li>Data is encrypted before uploading to S3.</li><li>Users manage their own encryption keys and algorithms.</li><li>Requires custom implementation or use of AWS SDKs with encryption libraries.</li></ul>" },
 
{
  "name": "S3 Access Points",
  "description": "An access point is a hostname that can point to a carefully defined subset of objects in a bucket. Depending on how you configure your access points, clients invoking the hostname will be able to read or write only the data you allow and only as long as you allow it.",
  "technotes": "<p><strong>S3 Access Points</strong> provide a scalable and secure way to manage access to shared datasets. Each access point has its own policy, enabling fine-grained permissions tailored to specific applications or users. They can be restricted to VPCs for private access and simplify access management in multi-tenant environments.</p>\n\n<p><strong>Example: Creating an S3 Access Point using AWS CLI</strong></p>\n<pre><code>aws s3control create-access-point \\\n  --account-id 123456789012 \\\n  --name my-access-point \\\n  --bucket my-bucket-name \\\n  --vpc-configuration VpcId=vpc-abc123</code></pre>\n\n<p>This command creates an access point named <code>my-access-point</code> for the bucket <code>my-bucket-name</code>, scoped to the VPC <code>vpc-abc123</code>. You can then attach a policy to control access behavior.</p>"
},
 { "name": "Amazon S3TA", "description": "Amazon S3 Transfer Acceleration can speed up content transfers to and from Amazon S3 for long-distance transfer of larger objects.  Note: This is not for cross-region transfer as you are already inside the AWS Backbone Network","technotes":"S3TA improves transfer performance by routing traffic through Amazon CloudFront’s globally distributed Edge Locations and over AWS backbone networks, and by using network protocol optimizations.","billingnotes":"With S3TA, you pay only for transfers that are accelerated." },
  { "name": "Amazon S3 Glacier", "description": "Low-cost archival storage designed for long-term data retention with retrieval options from milliseconds to hours"},
  { "name": "Amazon EBS", "description": "Block storage volumes for use with Amazon EC2, offering low-latency performance and high availability",
   "technotes": "<p>Deleting unused EBS volumes after terminating an EC2 instance helps save money because these volumes continue to incur charges even when the associated instance is stopped or terminated. By removing these unnecessary volumes, you can significantly reduce your monthly storage costs, as you only pay for the storage you actively use.</p>\n<p><strong>Key EBS Features:</strong></p>\n<ul>\n  <li>Persistent block storage independent of EC2 lifecycle</li>\n  <li>Multiple volume types (SSD and HDD options)</li>\n  <li>High availability with replication within an Availability Zone</li>\n  <li>Snapshots for point-in-time backups</li>\n  <li>Snapshot Recycle Bin for recovering accidentally deleted snapshots</li>\n  <li>Fast Snapshot Restore (FSR) for low-latency access to restored snapshots</li>\n  <li>Elastic Volumes to resize or change performance without downtime</li>\n  <li>Encryption at rest and in transit via AWS KMS</li>\n  <li>Cross-Region Snapshot Copy for disaster recovery</li>\n  <li>Performance optimization with Provisioned IOPS</li>\n</ul>"
  },
   {
  "name": "Amazon Elastic File System (EFS)",
  "description": "<p>Amazon EFS is a scalable, fully managed NFS file system for use with AWS Cloud services and on-premises resources. It provides elastic storage that grows and shrinks automatically as files are added and removed, eliminating the need for provisioning.</p>\n\n<p>EFS is ideal for workloads that require shared access to file data across multiple instances, containers, or services, with strong consistency and low-latency performance.</p><p>EFS is essentially a POSIX-compliant, distributed file system in the cloud, making it easy to migrate existing Linux-based applications without rewriting them.</p>",
  "technotes": "<p><strong>Storage Classes:</strong></p>\n<ul>\n  <li><strong>Standard:</strong> High-performance storage for frequently accessed files.</li>\n  <li><strong>Infrequent Access (IA):</strong> Lower-cost storage for files accessed less often. Automatically transitions files based on lifecycle policies.</li>\n</ul>\n\n<p><strong>Performance Modes:</strong></p>\n<ul>\n  <li><strong>General Purpose:</strong> Default mode optimized for latency-sensitive use cases like web serving and content management.</li>\n  <li><strong>Max I/O:</strong> Designed for highly parallelized workloads that require high aggregate throughput, such as big data and media processing.</li>\n</ul>\n\n<p><strong>Throughput Modes:</strong></p>\n<ul>\n  <li><strong>Bursting:</strong> Automatically scales throughput based on file system size. Suitable for most workloads with spiky or unpredictable traffic.</li>\n  <li><strong>Provisioned:</strong> Allows you to set a fixed throughput level independent of storage size. Ideal for workloads with consistent, high throughput needs.</li>\n</ul>\n\n<p><strong>Use Cases:</strong></p>\n<ul>\n  <li>Web hosting and CMS platforms</li>\n  <li>Machine learning and analytics pipelines</li>\n  <li>Container storage for Kubernetes and ECS</li>\n  <li>Shared file access across EC2 instances</li>\n</ul>\n\n<p>"
},
{
  "name": "Amazon EFS Mount Points",
  "description": "Mount points in Amazon EFS are network endpoints that allow compute resources like EC2 instances to access a shared file system over NFS. Each mount point is backed by an Elastic Network Interface (ENI) in a specific Availability Zone, enabling secure and scalable access within a VPC.",
  "technotes": "<p><strong>Elastic Network Interfaces (ENIs)</strong> are automatically provisioned when you create a mount target for an EFS file system. These ENIs serve as the network bridge between your compute resources and the file system, providing a private IP address and security group configuration for access control.</p>\n\n<p>Each Availability Zone where you want to access EFS requires its own mount target and corresponding ENI. This ensures low-latency access and high availability across zones.</p>\n\n<p><strong>Performance Considerations:</strong></p>\n<ul>\n  <li>Mount targets should be created in every AZ where clients reside to minimize cross-AZ traffic and latency.</li>\n  <li>Security groups attached to ENIs must allow inbound NFS traffic (port 2049) from client instances.</li>\n  <li>EFS supports bursting throughput and provisioned throughput modes—choose based on workload patterns.</li>\n  <li>Use EFS Access Points for fine-grained access control and POSIX identity enforcement.</li>\n</ul>\n\n<p>F"
},
{
  "name": "Amazon FSx for Windows File Server",
  "description": "<p><strong>Amazon FSx for Windows File Server</strong> is a fully managed Windows file system built on Windows Server, designed for enterprise-grade applications that require native Windows compatibility. It supports the <strong>SMB protocol</strong>, enabling seamless file sharing across Windows, Linux, and macOS clients. This makes it ideal for workloads like home directories, departmental shares, and business applications that rely on Windows file systems.</p>"
},
  { "name": "Amazon FSx for Lustre", "description": "High-performance file system optimized for fast processing of workloads like machine learning and HPC" },
  {
  "name": "Amazon FSx for NetApp ONTAP",
  "description": "<p><strong>Amazon FSx for NetApp ONTAP</strong> is a fully managed shared file storage service built on NetApp’s ONTAP file system. It provides high-performance, scalable, and feature-rich storage accessible via NFS, SMB, iSCSI, and NVMe-over-TCP protocols. FSx for ONTAP supports advanced data management features like snapshots, replication, and tiering, making it ideal for enterprise workloads.</p>",
  "technotes": "<ul><li>Supports multiprotocol access: NFS, SMB, iSCSI, NVMe-over-TCP.</li><li>Offers SSD storage with submillisecond latencies.</li><li>Includes ONTAP features like SnapMirror, FlexClone, and data tiering.</li><li>Available in Single-AZ and Multi-AZ configurations for resilience.</li><li>Integrates with AWS services like CloudWatch, IAM, and Backup.</li></ul>",
  "billingnotes": "<ul><li>Pricing based on provisioned storage and throughput capacity.</li><li>Separate charges for SSD and capacity pool storage tiers.</li><li>Data transfer within AWS is free; cross-region replication incurs charges.</li><li>Backup storage and requests billed separately via AWS Backup.</li></ul>"
},

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
  { "name": "AWS Outposts", "description": "Run AWS infrastructure and services on-premises (not on the cloud) for a consistent hybrid experience" ,"technotes":"You can run EC2, EBS, S3, ECS, EKS, RDS, EMR, SageMaker, CloudFormation, CloudWatch, IAM, and VPC on AWS Outposts."},
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
  {
  "name": "Kinesis Data Analytics",
  "description": "Kinesis Data Analytics enables real-time processing and analysis of streaming data using SQL or Apache Flink. It allows you to ingest, transform, and gain insights from data as it arrives, without needing to manage infrastructure.",
  "technotes": "<p><strong>Kinesis Data Analytics</strong> provides a powerful platform for real-time analytics on streaming data. You can write SQL queries or use Apache Flink to detect patterns, aggregate metrics, and trigger alerts instantly. It integrates seamlessly with Kinesis Data Streams and Firehose, making it ideal for use cases like fraud detection, IoT telemetry, and live dashboards.</p>\n\n<p><strong>Example: Creating a Kinesis Data Analytics application using AWS CLI</strong></p>\n<pre><code>aws kinesisanalyticsv2 create-application \\\n  --application-name my-analytics-app \\\n  --runtime-environment SQL-1_0 \\\n  --service-execution-role arn:aws:iam::123456789012:role/KinesisAnalyticsRole \\\n  --application-configuration file://app-config.json</code></pre>\n\n<p>This command creates a SQL-based analytics application named <code>my-analytics-app</code> with a specified IAM role and configuration file. The application can then be connected to a Kinesis Data Stream to begin processing data in real time.</p>"
},
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
{
  "name": "Amazon Aurora",
  "description": "<p>Amazon Aurora is a fully managed relational database engine designed for high performance, availability, and compatibility with MySQL and PostgreSQL. It offers enterprise-grade capabilities with the simplicity and cost-effectiveness of open-source databases.</p>",
  "technotes": "<p><strong>Deployment Models:</strong></p>\n<ul>\n  <li><strong>Aurora Standard:</strong> The default configuration where you pay separately for database instances, storage, and I/O operations. Ideal for workloads with moderate or variable I/O usage where cost optimization is based on actual consumption.</li>\n  <li><strong>Aurora I/O-Optimized:</strong> A configuration that eliminates I/O charges and instead charges a higher rate for compute and storage. Best suited for I/O-intensive workloads such as analytics, batch processing, and high-throughput transactional systems. Offers predictable pricing and improved performance for heavy I/O operations.</li>\n</ul>\n\n<p><strong>Key Features:</strong></p>\n<ul>\n  <li>MySQL and PostgreSQL compatibility</li>\n  <li>Distributed, fault-tolerant storage that auto-scales up to 128 TB</li>\n  <li>High availability with multi-AZ deployments and automatic failover</li>\n  <li>Global Database for cross-region replication</li>\n  <li>Serverless v2 for on-demand, fine-grained compute scaling</li>\n  <li>Encryption at rest and in transit, IAM integration, and VPC isolation</li>\n</ul>"
},
{
  "name": "Amazon Aurora Cluster",
  "description": "<p><strong>Amazon Aurora</strong> is a fully managed relational database service compatible with MySQL and PostgreSQL. It combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.</p>",
  "technotes": "<p><strong>Technical Elements:</strong></p>\n<ul>\n  <li><strong>Aurora Clusters:</strong> Consist of a primary writer instance and multiple reader instances, all sharing a distributed storage volume.</li>\n  <li><strong>Aurora Replicas:</strong> Up to 15 read-only replicas per cluster, providing read scalability and failover support.</li>\n  <li><strong>Storage Layer:</strong> Automatically scales up to 128 TB with six-way replication across multiple Availability Zones.</li>\n  <li><strong>Endpoints:</strong> Cluster endpoint for read/write operations, reader endpoint for distributing read queries.</li>\n  <li><strong>Failover:</strong> Automatic promotion of replicas to primary in case of failure, ensuring high availability.</li>\n  <li><strong>Global Database:</strong> Supports cross-region replication for disaster recovery and low-latency reads worldwide.</li>\n  <li><strong>Backups:</strong> Continuous backups to Amazon S3 with point-in-time recovery.</li>\n</ul>",
  "billingnotes": "<p><strong>Pricing:</strong></p>\n<ul>\n  <li>Billed per instance hour for each Aurora DB instance (writer and replicas).</li>\n  <li>Storage billed per GB-month, with additional charges for I/O requests.</li>\n  <li>Backup storage beyond the provisioned database size incurs extra costs.</li>\n  <li>Cross-region replication and global database features may add additional charges.</li>\n</ul>"
},
 {
  "name": "Amazon RDS",
  "description": "<p><strong>Amazon RDS</strong> is a managed relational database service supporting multiple engines, including <em>MySQL</em>, <em>PostgreSQL</em>, <em>Oracle</em>, and <em>SQL Server</em>. It automates provisioning, patching, backups, and scaling to simplify database operations.</p>",
  "technotes": "<p><strong>Storage:</strong> Uses <strong>Amazon EBS</strong> as primary storage for durability and performance.</p>\n<p><strong>Failover:</strong> Provides automated failover by <em>remapping CNAME records</em> to a standby instance during an outage, minimizing downtime and client-side changes.</p>\n<p><strong>Disaster Recovery:</strong></p>\n<ul>\n  <li><strong>Cross-region DR:</strong> Supports read replicas and backup/restore across regions for resilience.</li>\n  <li><strong>Multi-AZ:</strong> Synchronous replication to a standby with <em>automatic backups</em> and managed failover for high availability.</li>\n</ul>"
},
 { "name": "Babelfish for PostgreSQL", "description": "lets you run SQL Server applications on PostgreSQL by adding T-SQL compatibility and support for SQL Server’s wire protocol."},
{
  "name": "Amazon DynamoDB",
  "description": "<p>Fully managed NoSQL database for key-value and document data with single-digit millisecond latency.</p>\n\n<p>DynamoDB supports both <strong>on-demand</strong> and <strong>provisioned</strong> capacity modes, allowing you to choose between automatic scaling or manually configured throughput based on your workload needs.</p>\n\n<p><strong>On-demand mode</strong> is ideal for:</p>\n<ul>\n  <li>Unpredictable workloads</li>\n  <li>Event-driven architectures</li>\n  <li>Mobile and gaming apps with sudden usage spikes</li>\n  <li>IoT data ingestion pipelines with fluctuating volumes</li>\n</ul>\n\n<p><strong>Provisioned mode</strong> suits:</p>\n<ul>\n  <li>Stable traffic patterns</li>\n  <li>Cost-optimized workloads with known throughput</li>\n  <li>Regulated environments requiring strict control over scaling</li>\n  <li>Multi-tenant SaaS platforms with fine-grained capacity management</li>\n</ul>",
  "technotes": "<BR>Benefits of DynamoDB include:<BR><BR>1- Performance at scale:<BR><BR>DynamoDB supports some of the world’s largest scale applications by providing consistent, single-digit millisecond response times at any scale. You can build applications with virtually unlimited throughput and storage.<BR><BR>2- Serverless:<BR><BR>With DynamoDB, there are no servers to provision, patch, or manage and no software to install, maintain, or operate. DynamoDB automatically scales tables up and down to adjust for capacity and maintain performance.<BR><BR>3- Highly available:<BR><BR>Availability and fault tolerance are built in, eliminating the need to architect your applications for these capabilities.<BR><BR>4- Deletion Protection:<BR><BR>DynamoDB supports table-level deletion protection to prevent accidental or unauthorized removal of critical data. When enabled, deletion protection blocks table deletion operations until explicitly disabled, adding a layer of safety for production workloads and compliance-sensitive environments.<BR><BR>5- Point-in-Time Recovery (PITR):<BR><BR>PITR allows you to restore your DynamoDB table to any point within the last 35 days. This is useful for recovering from accidental writes or deletes and supports compliance and backup strategies.<BR><BR>6- Global Tables:<BR><BR>DynamoDB Global Tables provide multi-region, fully replicated tables for low-latency access and disaster recovery. They automatically replicate data across selected AWS Regions and support active-active architectures.<BR><BR>7- DAX (DynamoDB Accelerator):<BR><BR>DAX is an in-memory caching layer for DynamoDB that delivers microsecond response times for read-heavy workloads. It’s fully managed, compatible with existing DynamoDB APIs, and ideal for applications needing ultra-fast access to frequently read data.<BR><BR>"
},
 { "name": "Amazon DAX", "description": "Managed in-memory caching service for DynamoDB that delivers microsecond read performance by caching frequently accessed data" },
{
  "name": "Amazon ElastiCache",
  "description": "In-memory caching service supporting Redis(<b>R</b>emote <b>D</b>ictionary <b>S</b>ervice) and Memcached (<B>Multithreaded</B>), and Valkey for ultra-fast performance, requires a lot of effort to change Application Code to use.",
  "technotes": "<p><strong>Applications:</strong> Game leaderboards, real-time analytics, session stores, and caching layers for web apps.</p>\n<p>Ehcache not supported.</p>\n\n<p><strong>Databases in AWS That Support ElastiCache:</strong></p>\n<ul>\n  <li><strong>Amazon RDS:</strong> Use ElastiCache to cache query results and reduce read pressure on MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server.</li>\n  <li><strong>Amazon Aurora:</strong> Accelerate read-heavy workloads and metadata access for both Aurora MySQL and Aurora PostgreSQL.</li>\n  <li><strong>Amazon DynamoDB:</strong> Cache frequently accessed items or aggregation results to reduce read units and latency.</li>\n  <li><strong>Amazon DocumentDB:</strong> Improve performance by caching document queries and search results.</li>\n  <li><strong>Amazon Redshift:</strong> Use ElastiCache to cache dashboard queries and analytics results for faster front-end performance.</li>\n</ul>\n\n<p><strong>Redis vs Memcached:</strong></p>\n<ul>\n  <li><strong>Redis:</strong> Supports advanced data structures (lists, sets, hashes), persistence, replication, pub/sub messaging, and clustering. Ideal for complex caching, real-time analytics, and session management.</li>\n  <li><strong>Memcached:</strong> Simple key-value store with high performance and low memory overhead. Best for straightforward caching scenarios like page fragments or database query results.</li>\n  <li><strong>Redis is recommended</strong> for most modern applications due to its richer feature set and scalability options.</li>\n</ul>"
},
{
  "name": "Amazon ElastiCache - Session Management & Distributed In-Memory Cache",
  "description": "<p>Amazon ElastiCache is a fully managed in-memory caching service that supports Redis and Memcached. It is commonly used for <strong>session management</strong> in web applications and as a <strong>distributed in-memory cache</strong> to accelerate application performance by reducing database load.</p>",
  "technotes": "<p><strong>Session Management:</strong></p>\n<ul>\n  <li>Stores user session data in-memory for fast retrieval.</li>\n  <li>Ensures scalability by distributing session state across multiple nodes.</li>\n  <li>Supports high availability with replication and automatic failover.</li>\n  <li>Commonly used in stateless web architectures to maintain user login state, preferences, and temporary data.</li>\n</ul>\n\n<p><strong>Distributed In-Memory Cache:</strong></p>\n<ul>\n  <li>Provides low-latency access to frequently used data.</li>\n  <li>Reduces load on backend databases by caching query results, objects, or API responses.</li>\n  <li>Supports horizontal scaling with sharding and clustering.</li>\n  <li>Ideal for real-time analytics, recommendation engines, and high-throughput applications.</li>\n</ul>\n\n<p><strong>Key Features:</strong></p>\n<ul>\n  <li>Supports Redis (advanced data structures, persistence, pub/sub) and Memcached (simple, high-speed caching).</li>\n  <li>Automatic scaling and patching managed by AWS.</li>\n  <li>Encryption in transit and at rest for secure data handling.</li>\n  <li>Integration with AWS services like EC2, RDS, and Lambda.</li>\n</ul>"
},

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
{"name":"IAM Permission Boundary","description":"An AWS IAM <b>permission boundary</b> is a powerful security feature that sets the <b>maximum permissions</b> only on an <b>IAM user</B> or <b>role</b> can have—even if their identity-based policies allow more. Think of it as a <b>guardrail</b> that ensures no one exceeds their intended access.  This can't grant permissions only <b>limit</b> them"},
 { "name": "IAM Policy JSON", "description": "Fine-tune access with granular permissions (Tip: use this to give least privilege permissions!)","technotes":"<p>Writing JSON for AWS IAM policies involves structuring permissions using key elements like <strong>\"Effect\"</strong>, <strong>\"Action\"</strong>, <strong>\"Resource\"</strong>, and optionally <strong>\"Condition\"</strong>. The <strong>\"Action\"</strong> specifies what operations are allowed or denied (e.g., <strong>\"s3:PutObject\"</strong>), while <strong>\"Resource\"</strong> defines the target using Amazon Resource Names (ARNs). The <strong>*</strong> wildcard is a powerful notation that can be used to match multiple actions or resources—for example, <strong>\"Action\": \"s3:*\"</strong> grants access to all S3 operations, and <strong>\"Resource\": \"*\"</strong> applies the policy to all resources. Use wildcards cautiously, as they can unintentionally broaden access beyond what's intended.</p><br><b>Example: Allow Read Access to an S3 Bucket</b><br><p>{<br>&nbsp;&nbsp;<span style=\"color: brown;\">\"Version\"</span>: <span style=\"color: green;\">\"2012-10-17\"</span>,<br>&nbsp;&nbsp;<span style=\"color: brown;\">\"Statement\"</span>: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: brown;\">\"Effect\"</span>: <span style=\"color: green;\">\"Allow\"</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: brown;\">\"Action\"</span>: <span style=\"color: green;\">\"s3:GetObject\"</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: brown;\">\"Resource\"</span>: <span style=\"color: green;\">\"arn:aws:s3:::example-bucket/*\"</span><br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;]<br>}</p>"},
  { "name": "IAM Access Analyzer", "description": "Fine-tune access with granular permissions (Tip: use this to give least privilege permissions!)" },
 {"name": "Service Control Policies (SCP)", "description":"An SCP (Service Control Policy) sets permission limits for AWS accounts in an organization. You need to use <b>AWS Organizations</b> to apply SCPs and enforce centralized security controls. In IAM, SCPs help prevent users from performing sensitive actions like deleting permission boundaries or modifying roles. Its scope applies to <b>all users, roles, and services</b> within the affected AWS accounts—regardless of their individual IAM policies. SCPs sit <b>above IAM policies</b> in the permissions hierarchy, acting as a top-level filter that blocks actions even if IAM allows them."},  
{
  "name": "AWS Organizations",
  "description": "<p>AWS Organizations is a service that helps you centrally manage and govern multiple AWS accounts. It provides consolidated billing, policy-based management, and automation to simplify large-scale AWS environments.</p>",
  "technotes": "<p><strong>Key Features:</strong></p>\n<ul>\n  <li><strong>Account Management:</strong> Create and manage multiple AWS accounts within a single organization.</li>\n  <li><strong>Organizational Units (OUs):</strong> Group accounts into hierarchies for easier governance and policy application.</li>\n  <li><strong>Service Control Policies (SCPs):</strong> Define fine-grained permissions and guardrails across accounts to enforce compliance.</li>\n  <li><strong>Tag Policies:</strong> Standardize and enforce tagging across AWS resources. Tag policies help ensure consistent metadata for cost allocation, automation, and compliance reporting by defining allowed tag keys and values across accounts.</li>\n  <li><strong>Consolidated Billing:</strong> Combine usage across accounts for volume discounts and simplified billing.</li>\n  <li><strong>Integration:</strong> Works with AWS Identity and Access Management (IAM), Control Tower, and other governance tools.</li>\n  <li><strong>Delegated Administration:</strong> Assign specific accounts to manage services across the organization.</li>\n  <li><strong>Automation:</strong> Use APIs to automate account creation, policy enforcement, and scaling of environments.</li>\n</ul>\n\n<p><strong>Benefits:</strong></p>\n<ul>\n  <li>Centralized governance and compliance management</li>\n  <li>Cost optimization through consolidated billing</li>\n  <li>Improved security with guardrails and SCPs</li>\n  <li>Consistent resource tagging for better visibility and automation</li>\n  <li>Scalable management for enterprises and multi-team environments</li>\n</ul>"
},
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
  { "name": "Amazon GuardDuty", "description": "A relentless threat detection service, continuously monitoring for malicious activities.  Threat Inelligence assisted with AI/ML.<BR>Identifies any unusual or unauthorized activity, like <b>cryptocurrency mining</b>" },
  { "name": "Amazon Detective", "description": "Dive deep into security data and visualize threats" },
  { "name": "Amazon Inspector", "description": "Discover workloads and scan them for software vulnerabilities" },
  { "name": "AWS CloudTrail", "description": "A meticulous recorder, logging user activity and API usage (Tip: push to CloudWatch Logs for tracking & to generate metrics and alerts)" },
  { "name": "AWS Config", "description": "A detailed observer, recording and evaluating configurations of AWS resources (Tip: use with SSM and Lambda for automated remediation)" },
{
  "name": "AWS Security Lake",
  "description": "<p><strong>AWS Security Lake</strong> is a fully managed service that centralizes security data from cloud, on-premises, and third-party sources into a purpose-built data lake stored in your AWS account. It automatically normalizes this data using the <em>Open Cybersecurity Schema Framework (OCSF)</em>, making it easier to analyze and respond to threats across your organization.</p>",
  "technotes": "<ul>\
    <li><strong>Data Aggregation:</strong> Collects logs and events from AWS services like CloudTrail, VPC Flow Logs, GuardDuty, and more.</li>\
    <li><strong>Standardization:</strong> Uses OCSF to normalize data across sources for consistent analysis.</li>\
    <li><strong>Storage:</strong> Built on Amazon S3, giving you full control and scalability.</li>\
    <li><strong>Integration:</strong> Compatible with analytics tools like Amazon Athena, OpenSearch, and third-party SIEMs.</li>\
    <li><strong>Multi-Region & Multi-Account:</strong> Supports centralized management across AWS accounts and regions.</li>\
    <li><strong>Security Insights:</strong> Enables faster threat detection, investigation, and response.</li>\
  </ul>"
}, 
 { "name": "AWS Security Hub", "description": "Unified security command center, providing a comprehensive view of alerts and posture" },
  { "name": "AWS Audit Manager", "description": "Continuously auditing AWS usage against prebuilt and custom frameworks" },
  { "name": "AWS Artifact", "description": "Your gateway to compliance reports from AWS and ISVs" },
  { "name": "AWS Control Tower", "description": "Account deployment and governance" }
],
resilient : [
  {
    "name": "Amazon SNS",
    "description": "Pub/Sub messaging service for decoupling microservices and sending notifications"
  },
  {
  "name": "Amazon SQS",
  "description": "<p>Message queuing service that supports decoupled, scalable data streaming between distributed systems.</p><p>Amazon SQS offers two queue types: <strong>Standard queues</strong> (high throughput, at-least-once delivery, best-effort ordering) and <strong>FIFO queues</strong> (first-in-first-out delivery with exactly-once processing). By default, FIFO queues support up to 3,000 messages per second with batching or up to 300 messages per second without batching.</p><p>SQS queues are accessed via HTTPS endpoints, and each queue has a unique URL. AWS enforces limits such as message size (up to 256 KB), retention period (1 minute to 14 days), and throughput quotas that vary by queue type and region.</p>",
  "technotes": "<p><strong>Polling Behavior and Cost:</strong></p><p>Amazon SQS supports two polling modes for retrieving messages:</p><ul><li><strong>Short polling</strong>: Returns immediately, even if no messages are available. This can result in more empty responses and higher costs due to increased API calls.</li><li><strong>Long polling</strong>: Waits up to 20 seconds for messages to arrive before returning a response. This reduces the number of empty responses and is more cost-efficient for high-throughput or bursty workloads.</li></ul><p>Each poll request counts as a billable request. Long polling is generally recommended to reduce cost and improve efficiency.</p><p>Amazon SQS integrates with CloudWatch to expose key operational metrics:</p><ul><li><strong>NumberOfMessagesSent</strong>: Count of messages added to the queue.</li><li><strong>NumberOfMessagesReceived</strong>: Count of messages retrieved from the queue.</li><li><strong>NumberOfMessagesDeleted</strong>: Count of messages successfully deleted after processing.</li><li><strong>ApproximateNumberOfMessagesVisible</strong>: Number of messages available for retrieval.</li><li><strong>ApproximateNumberOfMessagesNotVisible</strong>: Messages that are being processed and not currently visible to consumers.</li><li><strong>ApproximateAgeOfOldestMessage</strong>: Age of the oldest unprocessed message in seconds.</li><li><strong>SentMessageSize</strong>: Size of messages sent to the queue, useful for monitoring payload trends.</li></ul><p>These metrics help monitor queue health, throughput, and latency, and are essential for scaling and debugging distributed applications.</p>"
}

,
{
  "name": "Amazon MQ",
  "description": "<p><strong>Amazon MQ</strong> is a managed message broker service for <em>Apache ActiveMQ</em> and <em>RabbitMQ</em> that makes it easy to set up and operate message brokers in the cloud. It supports industry-standard messaging protocols including <code>AMQP</code>, <code>MQTT</code>, <code>OpenWire</code>, and <code>STOMP</code>, enabling seamless integration with existing applications.</p>",
  "technotes": "<p><strong>Amazon MQ</strong> is ideal for migrating messaging workloads to the cloud without rewriting code. It supports protocols like AMQP, MQTT, OpenWire, and STOMP, making it compatible with a wide range of existing messaging clients.</p>\n\n<p>Amazon MQ automatically handles provisioning, patching, and failure recovery, and integrates with AWS services like CloudWatch for monitoring and IAM for access control.</p>\n\n<p><strong>Example: Creating an Amazon MQ broker using AWS CLI</strong></p>\n<pre><code>aws mq create-broker \\\n  --broker-name MyBroker \\\n  --engine-type ActiveMQ \\\n  --engine-version 5.17.6 \\\n  --host-instance-type mq.t3.micro \\\n  --users Username=admin,Password=YourSecurePassword \\\n  --deployment-mode SINGLE_INSTANCE \\\n  --publicly-accessible</code></pre>\n\n<p>This command creates a single-instance ActiveMQ broker named <code>MyBroker</code> with a public endpoint. You can customize deployment mode, engine type, and access settings based on your needs.</p>"
}
],
monitoring :[
  {
    "name": "Amazon CloudWatch",
    "description": "Central monitoring service for collecting metrics, logs, and events from AWS resources and applications"
  },
  {
  "name": "Amazon CloudWatch on EC2",
  "description": "<p>Amazon CloudWatch provides monitoring and observability for Amazon EC2 instances. It collects and tracks metrics, logs, and events to give visibility into instance performance and operational health. CloudWatch integrates natively with EC2 to provide both basic and detailed monitoring options.</p>\n<p><strong>Monitoring Options:</strong></p>\n<ul>\n  <li><strong>Basic Monitoring:</strong> Enabled by default at no additional cost. Metrics are collected at <em>5-minute intervals</em> for CPU utilization, disk reads/writes, and network traffic. Suitable for workloads where coarse-grained visibility is sufficient.</li>\n  <li><strong>Detailed Monitoring:</strong> Optional feature that provides metrics at <em>1-minute intervals</em>. Enables more granular visibility into instance performance, supports faster scaling decisions, and improves alarm responsiveness. Detailed monitoring incurs additional charges per instance.</li>\n</ul>",
  "technotes": "<p><strong>Key Features:</strong></p>\n<ul>\n  <li>Automatic collection of EC2 metrics (CPU, disk, network)</li>\n  <li>Integration with CloudWatch Alarms for proactive notifications</li>\n  <li>Support for custom metrics and application-level monitoring</li>\n  <li>Visualization via CloudWatch dashboards</li>\n  <li>Log collection and analysis with CloudWatch Logs</li>\n</ul>",
  "billingnotes": "<p><strong>Pricing:</strong></p>\n<ul>\n  <li><strong>Basic Monitoring:</strong> Included at no additional cost.</li>\n  <li><strong>Detailed Monitoring:</strong> Charged per instance per month, based on the number of metrics collected at 1-minute granularity.</li>\n  <li><strong>Additional Costs:</strong> Charges apply for CloudWatch Alarms, dashboards, and log storage/ingestion beyond free tier limits.</li>\n</ul>"
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
  "description": "Run code in response to events without provisioning or managing servers",
  "technotes": "<p><strong>AWS Lambda</strong> enables event-driven execution of code without provisioning servers. It integrates with services like S3, DynamoDB, and API Gateway, and supports runtimes such as Python, Node.js, Java, and Go.</p>\n\n<p>By default, Lambda functions run in the AWS public VPC. If you need access to private resources (like RDS or EC2 in private subnets), you must configure the function to connect to a custom VPC with appropriate subnet and security group settings.</p>\n\n<p><strong>Monitoring and Scaling</strong>: Use Amazon CloudWatch to monitor key metrics such as <code>ConcurrentExecutions</code>, <code>Invocations</code>, and <code>Duration</code>. These help detect throttling, performance issues, or unexpected spikes in usage. Soft limits like 1,000 concurrent executions can be increased via AWS Support.</p>\n\n<p><strong>Lambda Layers</strong>: Layers allow you to package and share libraries, dependencies, or custom runtimes across multiple functions. This promotes code reuse and simplifies updates.</p>\n\n<p><strong>Limits</strong>: AWS Lambda hard limits include a <strong>15-minute maximum execution time</strong>, <strong>10 GB of memory</strong>, and a <strong>250 MB unzipped deployment package size</strong>. These are fixed. Soft limits, such as concurrent executions and storage quotas, can be raised by submitting a request to AWS Support.</p>\n\n<p><strong>Example: Creating a Lambda function using AWS CLI</strong></p>\n<pre><code>aws lambda create-function \\\n  --function-name my-function \\\n  --runtime python3.9 \\\n  --role arn:aws:iam::123456789012:role/lambda-execution-role \\\n  --handler lambda_function.lambda_handler \\\n  --zip-file fileb://function.zip \\\n  --layers arn:aws:lambda:us-east-1:123456789012:layer:my-shared-lib:1</code></pre>\n\n<p>This command creates a Lambda function named <code>my-function</code> using the Python 3.9 runtime, with a shared layer for reusable code and a specified IAM role for execution permissions.</p>"
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
  "name": "AWS API Gateway – Resource Policy",
  "description": "<p><strong>Resource Policies</strong> in <strong>AWS API Gateway</strong> are JSON-based policy documents that control access to your API Gateway resources. They allow you to define who can invoke your APIs based on source IPs, AWS accounts, VPCs, or IAM roles, without needing to modify individual method-level permissions.</p>",
  "technotes": "<ul>\
    <li><strong>Purpose:</strong> Restrict or allow access to an entire API Gateway endpoint based on conditions like IP address, VPC, or AWS principal.</li>\
    <li><strong>Format:</strong> Follows AWS Identity and Access Management (IAM) policy syntax.</li>\
    <li><strong>Common Use Cases:</strong>\
      <ul>\
        <li>Allow access only from a specific VPC or VPC endpoint.</li>\
        <li>Restrict access to known IP ranges (e.g., corporate network).</li>\
        <li>Permit only specific AWS accounts or IAM roles to invoke the API.</li>\
      </ul>\
    </li>\
    <li><strong>Example:</strong> A resource policy that allows access to an API only from a specific VPC endpoint:</li>\
  </ul>\
  <pre>{\
    \"Version\": \"2012-10-17\",\
    \"Statement\": [\
      {\
        \"Effect\": \"Allow\",\
        \"Principal\": \"*\",\
        \"Action\": \"execute-api:Invoke\",\
        \"Resource\": \"arn:aws:execute-api:region:account-id:api-id/*\",\
        \"Condition\": {\
          \"StringEquals\": {\
            \"aws:SourceVpce\": \"vpce-1234567890abcdef0\"\
          }\
        }\
      }\
    ]\
  }</pre>\
  <p>Resource policies are especially useful for public APIs that need controlled exposure without requiring user authentication.</p>"
}

 , {
    "name": "AWS Step Functions",
    "description": "Serverless workflow service for coordinating distributed applications using visual workflows"
  },
  {
  "name": "Amazon EventBridge",
  "description": "<p><strong>Amazon EventBridge</strong> is a service that helps different parts of your system talk to each other by sending and receiving messages called events. You can use it to connect AWS services, third-party apps, or your own software — and set up rules for what should happen when certain events occur.</p><BR>Best option for decoupling SAAS\
  <p>You can also use EventBridge like a scheduler. It lets you run tasks at specific times using <strong>cron jobs</strong> or <strong>rate expressions</strong> (like every 5 minutes or every day at 9 AM). These scheduled tasks can trigger things like <strong>AWS Fargate</strong> containers, which run code without needing to manage servers.</p>\
  <p>In short, EventBridge helps automate your system, respond to changes, and run tasks on a schedule — all without needing to build complex connections between services.</p>",
  "technotes": "<ul>\
    <li><strong>Event Buses:</strong> Channels that receive and route events. You can use the default bus, create your own, or use partner buses from SaaS providers.</li>\
    <li><strong>Rules:</strong> Define what should happen when an event matches certain conditions — like triggering a Lambda function or starting a Fargate task.</li>\
    <li><strong>Targets:</strong> The services that respond to events, such as Lambda, Step Functions, SNS, SQS, and Fargate.</li>\
    <li><strong>Scheduled Events:</strong> Use <code>cron</code> or <code>rate</code> expressions to run tasks on a schedule — like a built-in task scheduler.</li>\
    <li><strong>Fargate Integration:</strong> You can trigger Fargate tasks directly from EventBridge, which is great for running containers on demand.</li>\
    <li><strong>Schema Registry:</strong> Automatically discovers and stores the structure of your events to help with development and validation.</li>\
    <li><strong>Use Case:</strong> Automate workflows, decouple microservices, schedule jobs, or respond to changes in AWS services or third-party apps.</li>\
    <li><strong>Example:</strong> A rule runs every night at midnight to start a Fargate task that processes daily sales data and uploads a report to S3.</li>\
  </ul>"
},
{
  "name": "Amazon EventBridge Scheduler",
  "description": "<p><strong>Amazon EventBridge Scheduler</strong> is a service that lets you run tasks automatically at specific times. You can schedule one-time or recurring actions — like calling an API, starting a Lambda function, or launching a Fargate task — without needing to manage cron jobs or custom scripts.</p>\
  <p>It’s great for automating things like daily reports, backups, reminders, or any job that needs to run on a schedule.</p>",
  "technotes": "<ul>\
    <li><strong>Flexible Scheduling:</strong> Supports both one-time and recurring schedules using <code>cron</code> and <code>rate</code> expressions.</li>\
    <li><strongTarget Support:</strong> Can trigger over 270 AWS services including Lambda, Step Functions, ECS (Fargate), SQS, and more.</li>\
    <li><strong>Time Zones:</strong> Lets you set schedules in specific time zones, so you don’t have to convert everything to UTC.</li>\
    <li><strong>Retry Policies:</strong> Automatically retries failed tasks based on your settings.</li>\
    <li><strong>Input Payloads:</strong> You can pass custom data to the target when the schedule runs.</li>\
    <li><strong>Use Case:</strong> Automate a daily Lambda job that cleans up old files, or trigger a Fargate task every Monday at 9 AM to generate reports.</li>\
    <li><strong>Example:</strong> Schedule a Lambda function to run every day at midnight using <code>cron(0 0 * * ? *)</code>.</li>\
  </ul>\
  <p><em>Tip:</em> EventBridge Scheduler is separate from regular EventBridge rules — it’s built specifically for time-based automation.</p>"
}
,
  {
    "name": "Amazon SNS",
    "description": "Pub/Sub messaging service for decoupling microservices and sending notifications"
  },
  {
    "name": "Amazon SQS",
    "description": "Message queuing service for decoupling and scaling microservices, distributed systems, and serverless apps"
  },
{
  "name": "Amazon MQ",
  "description": "<p><strong>Amazon MQ</strong> is a managed message broker service for <em>Apache ActiveMQ</em> and <em>RabbitMQ</em> that makes it easy to set up and operate message brokers in the cloud. It supports industry-standard messaging protocols including <code>AMQP</code>, <code>MQTT</code>, <code>OpenWire</code>, and <code>STOMP</code>, enabling seamless integration with existing applications.</p>",
  "technotes": "<p><strong>Amazon MQ</strong> is ideal for migrating messaging workloads to the cloud without rewriting code. It supports protocols like AMQP, MQTT, OpenWire, and STOMP, making it compatible with a wide range of existing messaging clients.</p>\n\n<p>Amazon MQ automatically handles provisioning, patching, and failure recovery, and integrates with AWS services like CloudWatch for monitoring and IAM for access control.</p>\n\n<p><strong>Example: Creating an Amazon MQ broker using AWS CLI</strong></p>\n<pre><code>aws mq create-broker \\\n  --broker-name MyBroker \\\n  --engine-type ActiveMQ \\\n  --engine-version 5.17.6 \\\n  --host-instance-type mq.t3.micro \\\n  --users Username=admin,Password=YourSecurePassword \\\n  --deployment-mode SINGLE_INSTANCE \\\n  --publicly-accessible</code></pre>\n\n<p>This command creates a single-instance ActiveMQ broker named <code>MyBroker</code> with a public endpoint. You can customize deployment mode, engine type, and access settings based on your needs.</p>"
}

,
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
    "name": "AWS Organizations (see also Security)",
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
  "description": "<p><strong>Amazon Cognito</strong> is a managed authentication and authorization service that enables secure user sign-up, sign-in, and access control for web and mobile applications. It consists of two main components: <strong>User Pools</strong> and <strong>Identity Pools</strong>, each serving distinct purposes in identity management.</p>",
  "technotes": "<h3>User Pools</h3>\
  <p>User Pools are user directories that handle authentication. They allow users to sign up, sign in, and manage their profiles. Cognito User Pools support social identity providers (like Google, Facebook, Apple), SAML, and OpenID Connect.</p>\
  <ul>\
    <li><strong>Use Case:</strong> Building a login system for your app with email/password or social login.</li>\
    <li><strong>Example:</strong> A mobile app that lets users register and log in using Facebook or Google accounts.</li>\
    <li><strong>Features:</strong> Multi-factor authentication (MFA), password recovery, device tracking, and custom authentication flows.</li>\
  </ul>\
  <h3>Identity Pools</h3>\
  <p>Identity Pools provide temporary AWS credentials to authenticated users so they can access AWS services like S3, DynamoDB, or Lambda. They support both authenticated and unauthenticated (guest) access.</p>\
  <ul>\
    <li><strong>Use Case:</strong> Granting users access to AWS resources after authentication.</li>\
    <li><strong>Example:</strong> A photo-sharing app that lets users upload images to an S3 bucket after logging in.</li>\
    <li><strong>Features:</strong> Fine-grained IAM roles, support for federated identities, and guest access.</li>\
  </ul>\
  <p><em>Tip:</em> You can use both together — User Pools for authentication and Identity Pools for authorization to AWS resources.</p>\
  <p>Learn more from the <a href='https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-scenarios.html' target='_blank'>official AWS Cognito scenarios guide</a>.</p>"
}
,
  {
    "name": "AWS Billing and Cost Management",
    "description": "Suite of tools to manage billing, payments, invoices, and optimize cloud spending"
  },
  {
  "name": "AWS Cost Optimization Hub",
  "description": "<p>AWS Cost Optimization Hub is a centralized dashboard that helps you identify, track, and implement cost-saving opportunities across your AWS environment. It consolidates recommendations from multiple AWS services into a single view, enabling finance, operations, and engineering teams to collaborate on reducing cloud spend.</p>\n\n<p>It supports actionable insights across services like EC2, EBS, RDS, Lambda, and more, and helps you prioritize optimizations based on potential savings and implementation effort.</p>",
  "technotes": "<p><strong>Key Features:</strong></p>\n<ul>\n  <li><strong>Centralized visibility:</strong> View cost-saving recommendations across multiple AWS accounts and services in one place.</li>\n  <li><strong>Prioritized insights:</strong> Recommendations are ranked by potential monthly savings and ease of implementation.</li>\n  <li><strong>Integrated recommendations:</strong> Pulls insights from AWS Compute Optimizer, Trusted Advisor, and Savings Plans.</li>\n  <li><strong>Filtering and grouping:</strong> Filter by account, region, service, or resource type to focus on specific areas.</li>\n  <li><strong>Export and collaboration:</strong> Export recommendations to CSV or share with stakeholders for action planning.</li>\n</ul>\n\n<p><strong>Use Cases:</strong></p>\n<ul>\n  <li>Finance teams tracking cloud cost efficiency across business units.</li>\n  <li>DevOps teams identifying underutilized or idle resources.</li>\n  <li>Engineering teams evaluating instance right-sizing or storage tiering opportunities.</li>\n  <li>Cloud Center of Excellence (CCoE) teams enforcing cost governance policies.</li>\n</ul>\n\n<p><strong>Example:</strong> Use the Cost Optimization Hub to identify EC2 instances that are over-provisioned and receive a recommendation to downsize from m5.4xlarge to m5.2xlarge, saving an estimated $150/month per instance.</p>"
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
  "description": "<p>AWS Transit Gateway is a network hub that enables customers to connect their Amazon VPCs, on-premises networks, and other AWS services through a central gateway. It simplifies complex network topologies and scales connectivity across thousands of VPCs and remote networks.</p>\n\n<p>Transit Gateway supports <strong>multipath routing</strong> using <strong>Equal-Cost Multi-Path (ECMP)</strong>, allowing traffic to be distributed across multiple VPN or Direct Connect attachments with equal cost. This improves bandwidth utilization and provides redundancy for high-availability architectures.</p>\n\n<p>Using ECMP over Site-to-Site VPN enables parallel data paths, higher throughput, and automatic failover. It’s ideal for hybrid cloud setups that require scalable, resilient, and cost-effective connectivity between AWS and on-premises networks.</p>",
  "technotes": "<p><strong>Multipath Routing and ECMP:</strong></p>\n<ul>\n  <li>Transit Gateway supports ECMP for both VPN and AWS Direct Connect attachments.</li>\n  <li>Traffic is load-balanced across multiple paths with equal cost, enhancing throughput and fault tolerance.</li>\n  <li>ECMP is automatically enabled when multiple attachments to the same destination exist with equal routing metrics.</li>\n  <li>Use ECMP with dynamic routing protocols like BGP to advertise multiple paths.</li>\n</ul>\n\n<p><strong>Why Use ECMP Over Site-to-Site VPN:</strong></p>\n<ul>\n  <li><strong>Increased Bandwidth:</strong> Aggregate throughput across multiple VPN tunnels.</li>\n  <li><strong>Improved Resilience:</strong> Automatic failover if one tunnel becomes unavailable.</li>\n  <li><strong>Scalable Hybrid Connectivity:</strong> Up to eight VPN tunnels per Transit Gateway for flexible scaling.</li>\n  <li><strong>Optimized Load Distribution:</strong> Hash-based traffic balancing avoids congestion.</li>\n  <li><strong>Cost Efficiency:</strong> Maximize performance from multiple low-cost VPNs before investing in dedicated links.</li>\n</ul>\n\n<p><strong>Use Cases:</strong></p>\n<ul>\n  <li>Centralized connectivity for multi-VPC architectures across accounts and regions.</li>\n  <li>Hybrid cloud setups integrating on-premises networks via VPN or Direct Connect.</li>\n  <li>High-throughput applications requiring parallel data paths for performance and resilience.</li>\n  <li>Simplified routing and policy control using Transit Gateway route tables.</li>\n</ul>\n\n<p><strong>Example: Creating a Transit Gateway using AWS CLI</strong></p>\n<pre><code>aws ec2 create-transit-gateway \\\n  --description \"My TGW\" \\\n  --options AmazonSideAsn=64512,AutoAcceptSharedAttachments=enable</code></pre>\n\n<p>This command creates a Transit Gateway with a custom ASN and enables auto-acceptance of shared attachments.</p>"
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
  "description": "<p><strong>AWS Global Accelerator</strong> is a networking service that improves the availability and performance of your applications with global users. It uses the AWS global network infrastructure to route traffic through optimal paths, reducing latency and increasing reliability.</p>",
  "technotes": "<ul>\
    <li><strong>Global Anycast IPs:</strong> Provides two static IP addresses that act as fixed entry points to your application, regardless of region.</li>\
    <li><strong>Traffic Distribution:</strong> Automatically routes user traffic to the nearest healthy endpoint using health checks and routing algorithms.</li>\
    <li><strong>Supported Endpoints:</strong> Works with Application Load Balancers, Network Load Balancers, EC2 instances, and Elastic IPs.</li>\
    <li><strong>Use Case:</strong> Ideal for latency-sensitive applications like gaming, media streaming, or financial services that require fast and reliable global access.</li>\
    <li><strong>Failover & High Availability:</strong> Automatically reroutes traffic away from unhealthy endpoints to maintain uptime.</li>\
    <li><strong>Security:</strong> Integrates with AWS Shield and AWS WAF for DDoS protection and traffic filtering.</li>\
    <li><strong>Blue-Green Deployments:</strong> Supports seamless traffic shifting between production and staging environments, enabling safer application updates with minimal downtime.</li>\
  </ul>\
  <p><em>Example:</em> A global e-commerce platform uses Global Accelerator to ensure customers from Europe, Asia, and North America experience fast and consistent performance by routing them to the nearest regional endpoint.</p>"
}

,
{
  "name": "AWS PrivateLink",
  "description": "<p><strong>AWS PrivateLink</strong> provides <em>secure, private connectivity</em> between Virtual Private Clouds (VPCs), AWS services, and on-premises applications without exposing traffic to the public internet.</p>\n<p>It simplifies network architecture and enhances security by using <strong>private IP addresses</strong> within your VPC.</p>\n<p><strong>Network Protocol Support:</strong></p>\n<ul>\n  <li><strong>Supported:</strong> TCP at Layer 4 (suitable for HTTPS, TLS, and other TCP-based applications)</li>\n  <li><strong>Not supported:</strong> UDP and ICMP</li>\n</ul>",
  "technotes": "<p><strong>Key Features:</strong></p>\n<ul>\n  <li><strong>Private Connectivity:</strong> Establishes private connections to AWS services, partner services, or your own services hosted on AWS.</li>\n  <li><strong>VPC Endpoints:</strong> Uses interface endpoints powered by PrivateLink to connect directly to services via private IPs.</li>\n  <li><strong>Security:</strong> Traffic never traverses the public internet, reducing exposure to threats and improving compliance.</li>\n  <li><strong>Simplified Architecture:</strong> Eliminates the need for complex VPNs or NAT gateways for accessing AWS services privately.</li>\n  <li><strong>Cross-Account Access:</strong> Enables secure sharing of services across multiple AWS accounts using endpoint services.</li>\n  <li><strong>Hybrid Integration:</strong> Supports private connectivity from on-premises environments to AWS services via Direct Connect or VPN.</li>\n</ul>\n\n<p><strong>Benefits:</strong></p>\n<ul>\n  <li>Enhanced security by keeping traffic within the AWS network</li>\n  <li>Reduced network complexity compared to traditional routing solutions</li>\n  <li>Improved compliance for regulated workloads</li>\n  <li>Scalable and flexible integration with third-party and custom services</li>\n</ul>",
  "billingnotes": "<p><strong>Pricing:</strong></p>\n<ul>\n  <li><strong>Interface Endpoints:</strong> Charged per hour for each endpoint provisioned.</li>\n  <li><strong>Data Processing:</strong> Additional charges apply per gigabyte of data processed through the endpoint.</li>\n  <li><strong>Cross-Region Traffic:</strong> Standard AWS data transfer rates apply when traffic crosses regions.</li>\n  <li><strong>Cost Efficiency:</strong> Pricing is predictable for steady traffic, but can increase with high-volume data transfer.</li>\n</ul>"
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
  "name": "Server Name Indication (SNI)",
  "description": "<p>Server Name Indication (SNI) is a TLS protocol extension that allows a client to specify the hostname it wants to connect to during the SSL handshake. This enables a single server or load balancer to host multiple secure websites using distinct SSL certificates on the same IP address.</p>\n\n<p>SNI is widely supported by modern browsers and operating systems and is essential for scalable, secure multi-tenant architectures in the cloud.</p>",
  "technotes": "<p><strong>SNI in AWS:</strong></p>\n<ul>\n  <li><strong>Application Load Balancer (ALB):</strong> Supports SNI by allowing multiple SSL certificates on a single HTTPS listener. This enables hosting multiple secure applications behind one ALB.</li>\n  <li><strong>Elastic Beanstalk:</strong> Uses ALB with SNI to support multiple environments with distinct domains and certificates.</li>\n  <li><strong>Amazon CloudFront:</strong> Supports SNI for HTTPS connections to edge locations, reducing the need for dedicated IP addresses.</li>\n</ul>\n\n<p><strong>Benefits:</strong></p>\n<ul>\n  <li><strong>Multi-domain hosting:</strong> Serve multiple secure websites from one IP address.</li>\n  <li><strong>Cost efficiency:</strong> Reduces the need for multiple Elastic IPs or dedicated load balancers.</li>\n  <li><strong>Simplified certificate management:</strong> Each domain can use its own certificate without complex routing.</li>\n</ul>\n\n<p><strong>Use Case Example:</strong> Hosting <code>api.example.com</code> and <code>app.example.com</code> behind a single ALB with distinct SSL certificates for each domain using SNI.</p>"
},
  {
  "name": "AWS Network Load Balancer",
  "description": "<p>High-performance Layer 4 load balancer for TCP/UDP traffic,  *EXAM NOTE* Targets most likely going be <b>private IPs</b> as it is an AWS VPC</p>",
  "technotes": "<p>AWS NLB operates at Layer 4 of the OSI model, meaning it routes traffic based on IP address and port rather than application-level data. It’s designed to handle millions of requests per second with ultra-low latency.</p><p>NLB targets are typically EC2 instances or IP addresses within private subnets. When a client sends traffic to the NLB, it selects a healthy target from its target group using algorithms like round-robin or flow hash. The traffic is then forwarded directly to the target’s <b>private IP address</b>, preserving the original source IP. This makes it ideal for applications that need to see the client’s IP or require high-performance TCP/UDP handling.</p>"
},
  {
    "name": "Gateway Load Balancer (GLB)",
    "description": "Distributes traffic to third-party virtual appliances for deep packet inspection and security services"
  },
  {
    "name": "Auto Scaling Groups (ASG)",
    "description": "Automatically adjusts EC2 instance capacity to maintain performance and availability across your application",
"technotes":"<u>Manual scaling</u> (user sets capacity manually—best for full control), <u>scheduled scaling</u> (based on time—ideal for predictable workloads), <u>dynamic scaling</u> (reacts to metrics—great for responsive scaling), <u>step scaling</u> (scales in steps—best for gradual, controlled changes), <u>target tracking</u> (maintains a metric target—perfect for consistent performance), and <u>predictive scaling</u> (forecasts demand—suited for seasonal or recurring traffic patterns)<BR>The term <B>High Availability</B> refers to two AZs."
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
  "description": "<p>Enables instances in a private subnet to connect to the internet or other AWS services without exposing them.</p><p>A NAT Gateway is deployed in a public subnet within a VPC and is associated with an Elastic IP address. It acts as a bridge, allowing outbound traffic from private subnets to reach the internet while blocking inbound connections initiated from outside. This setup ensures secure and scalable internet access for resources that should remain private.</p>",
  "technotes": "<p>To update EC2 instances in a private subnet (e.g., installing OS patches or downloading software packages), the NAT Gateway allows outbound internet access while keeping the instances unreachable from the public internet. The EC2 instances route their traffic through a private subnet route table that points to the NAT Gateway as the default route. The NAT Gateway then forwards the traffic to the internet using its Elastic IP, enabling secure downloads and updates without exposing the EC2 instances directly.</p>"
}
,
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
  "description": "Virtual firewalls that control inbound and outbound traffic to AWS resources at the instance level. Security groups are stateful, meaning if you allow inbound traffic from a source, the response traffic is automatically allowed back out—even if there's no explicit outbound rule for it. This simplifies configuration and ensures seamless two-way communication for allowed connections."
}
,
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
  "name": "AWS Resource Access Manager (RAM)",
  "description": "<p><strong>AWS RAM</strong> enables secure and scalable sharing of AWS resources across accounts or within your AWS Organization. It helps eliminate duplication and simplifies governance by allowing centralized services to be reused across environments. One of its most powerful features is <strong>VPC Sharing</strong>, which allows multiple accounts to deploy resources into shared subnets within a centrally managed VPC.</p>",
  "technotes": "<ul><li>Supports sharing of resources such as VPC subnets, Transit Gateways, Route 53 Resolver rules, License Manager configurations, and more.</li><li><strong>VPC Sharing</strong>: Enables participant accounts to launch resources into shared subnets while the owner retains control over networking.</li><li>Works across AWS accounts and organizational units (OUs) within AWS Organizations.</li><li>Uses resource-based policies and sharing invitations to manage access.</li><li>Integrated with AWS Organizations for streamlined governance and policy enforcement.</li><li>Supports tagging and CloudTrail logging for auditing and compliance.</li></ul>",
  "billingnotes": "<ul><li>No additional cost for using AWS RAM.</li><li>Standard charges apply for the shared resources themselves (e.g., VPC, Transit Gateway).</li><li>VPC Sharing helps reduce duplication and optimize resource usage across accounts.</li><li>Consolidated billing benefits apply when used with AWS Organizations.</li></ul>"
}
,

  {
  "name": "AWS CloudFormation",
  "description": "<p>AWS CloudFormation is an infrastructure-as-code service that enables you to model, provision, and manage AWS resources using declarative templates written in JSON or YAML. It automates the deployment of resources such as EC2 instances, VPCs, IAM roles, and more, ensuring consistent and repeatable infrastructure setups.</p><p>CloudFormation <b>stacks</b> are deployed within regions and can span multiple Availability Zones. Templates define resources and their relationships, while parameters, mappings, and outputs allow customization and reuse. CloudFormation <b>StackSets</b> extend this capability by allowing you to deploy stacks across multiple AWS accounts and regions from a single template.</p>",
  "technotes": "<p>Key operational aspects of AWS CloudFormation include:</p><ul><li><strong>StackStatus</strong>: Indicates the current state of a stack (e.g., CREATE_COMPLETE, UPDATE_IN_PROGRESS, ROLLBACK_FAILED).</li><li><strong>DriftDetectionStatus</strong>: Shows whether resources have changed outside of CloudFormation management.</li><li><strong>ResourceType</strong>: Identifies the AWS service type for each resource in the stack (e.g., AWS::EC2::Instance).</li><li><strong>StackEvents</strong>: Logs lifecycle events such as creation, updates, and failures for troubleshooting.</li><li><strong>ChangeSets</strong>: Preview proposed changes before applying them to a stack, reducing risk during updates.</li></ul><p>CloudFormation also supports nested stacks, cross-stack references, and integration with CI/CD pipelines for automated infrastructure delivery.</p>"
}

,
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
    "description": "Real-time data streaming service for ingesting high-throughput data such as logs, events, and telemetry",
	"technotes": "<p><strong>Core components and mechanics:</strong></p>\n<ul>\n  <li><strong>Shards:</strong> Units of capacity in a stream; typical limits are ~1&nbsp;MB/sec write and ~2&nbsp;MB/sec read per shard.</li>\n  <li><strong>Records:</strong> Data entries containing a sequence number, partition key, and a data blob (up to 1&nbsp;MB).</li>\n  <li><strong>Partition keys:</strong> Keys that route records to shards and guarantee ordering within a partition.</li>\n  <li><strong>Sequence numbers:</strong> Ordered identifiers per shard used for ordering and consumer checkpointing.</li>\n  <li><strong>Batches:</strong> Consumers read/process records in batches to optimize throughput and cost; batch size tunes latency vs efficiency.</li>\n  <li><strong>Producers:</strong> Apps/services that put records into streams (e.g., web apps, IoT devices, log agents).</li>\n  <li><strong>Consumers:</strong> Apps that read/process stream data; supports standard consumers (shared throughput) and enhanced fan-out (dedicated throughput).</li>\n  <li><strong>Enhanced fan-out:</strong> Dedicated per-consumer per-shard read throughput (e.g., 2&nbsp;MB/sec) with lower latency.</li>\n  <li><strong>Retention period:</strong> Configurable record retention from 24 hours up to 365 days for replay and reprocessing.</li>\n  <li><strong>Checkpoints:</strong> Offsets tracked by consumer libraries (e.g., KCL) to resume processing reliably.</li>\n  <li><strong>Capacity modes:</strong> Provisioned (manage shard count) and on-demand (auto scales with traffic).</li>\n  <li><strong>Security:</strong> Encryption at rest/in transit and IAM-based access control for producers and consumers.</li>\n  <li><strong>Monitoring:</strong> CloudWatch metrics (e.g., IncomingBytes, ReadProvisionedThroughputExceeded) for visibility and scaling.</li>\n</ul>"
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
    "technotes": "<BR><B>AWS Countdown (Standard Tier)</B><BR><ul><li>What it is: Guided support from your Technical Account Manager (TAM), including planning assistance, readiness checks, and coordination during your event.<BR></li><li>Best for: Teams with internal cloud expertise who need validation and structured guidance.</li></ul><BR><B>AWS Countdown Premium</B><BR><ul><li>What it is: Full-spectrum support from designated AWS engineers—from design to post-launch. Includes proactive guidance, access to subject matter experts (SMEs), and live event troubleshooting.<BR></li><li>Best for: High-stakes events requiring deep technical involvement and real-time support.</li></ul>",
    "billingnotes": "<BR><B>AWS Countdown (Standard Tier)</B><BR>Availability: Included at no extra cost with the Enterprise Support plan.<BR><BR>Enterprise On-Ramp customers receive one free engagement per year<BR><BR><B>AWS Countdown Premium</B><BR>Offered as a monthly subscription for an additional fee.<BR><BR>Available to customers with Business Support, Enterprise On-Ramp, or Enterprise Support plans.<BR><BR>Recommended to subscribe 2–3 weeks before your critical event to allow for thorough planning.<BR><BR>"
  }

],
"generalnetworking" :[
{
  "name": "Essential AWS Ports for Solutions Architect Associate Exam",
  "description": "<p>These are the most commonly referenced ports in the AWS Certified Solutions Architect – Associate exam. They relate to EC2 access, web hosting, database connectivity, and file sharing.</p>",
  "technotes": "<table border='1' cellpadding='6' cellspacing='0'>\
    <thead><tr><th>Port</th><th>Protocol</th><th>Use Case</th></tr></thead>\
    <tbody>\
      <tr><td>22</td><td>SSH</td><td>Remote access to Linux EC2 instances</td></tr>\
      <tr><td>3389</td><td>RDP</td><td>Remote access to Windows EC2 instances</td></tr>\
      <tr><td>80</td><td>HTTP</td><td>Standard web traffic</td></tr>\
      <tr><td>443</td><td>HTTPS</td><td>Secure web traffic</td></tr>\
      <tr><td>3306</td><td>MySQL</td><td>Amazon RDS or Aurora MySQL</td></tr>\
      <tr><td>5432</td><td>PostgreSQL</td><td>Amazon RDS or Aurora PostgreSQL</td></tr>\
      <tr><td>1433</td><td>MS SQL Server</td><td>Amazon RDS for SQL Server</td></tr>\
      <tr><td>445</td><td>SMB</td><td>Amazon FSx for Windows File Server</td></tr>\
      <tr><td>53</td><td>DNS</td><td>Domain name resolution (UDP/TCP)</td></tr>\
    </tbody>\
  </table>"
},
{
  "name": "Ingress and Egress",
  "description": "<p><strong>Ingress</strong> refers to incoming network traffic that enters a system, service, or network from external sources. <strong>Egress</strong> refers to outgoing traffic that leaves a system, service, or network toward external destinations.</p>\n<p>These terms are commonly used in cloud networking, firewalls, and data transfer billing contexts to distinguish between inbound and outbound flows.</p>",
  "technotes": "<p><strong>Key Differences:</strong></p>\n<ul>\n  <li><strong>Ingress:</strong> Data packets entering a network or service. Examples include requests from clients to a web server or uploads to cloud storage.</li>\n  <li><strong>Egress:</strong> Data packets leaving a network or service. Examples include responses from a web server to clients or downloads from cloud storage.</li>\n</ul>\n\n<p><strong>Applications:</strong></p>\n<ul>\n  <li>Firewall rules often specify ingress (allowed inbound ports) and egress (allowed outbound ports).</li>\n  <li>Cloud providers use ingress/egress terminology for data transfer billing and network security policies.</li>\n  <li>Monitoring ingress and egress traffic helps detect anomalies, enforce compliance, and optimize bandwidth usage.</li>\n</ul>",
  "billingnotes": "<p><strong>Pricing Considerations:</strong></p>\n<ul>\n  <li><strong>Ingress:</strong> In most cloud environments, inbound data transfer (ingress) is free of charge.</li>\n  <li><strong>Egress:</strong> Outbound data transfer (egress) is typically billed per gigabyte, with rates varying by destination (same region, cross-region, or internet).</li>\n  <li><strong>Cross-Region Egress:</strong> Higher charges apply when data leaves one region to another.</li>\n  <li><strong>Internet Egress:</strong> Outbound traffic to the public internet is usually the most expensive.</li>\n</ul>"
},
{
  "name": "Level 4 Network Protocols - TCP/UDP",
  "description": "<p>At the Transport Layer, <strong>TCP</strong> and <strong>UDP</strong> are the two primary protocols. <strong>TCP</strong> is connection-oriented, ensures reliable delivery, and keeps packets in order, making it ideal for messaging, web traffic, and applications where accuracy is critical. <strong>UDP</strong> is connectionless, faster, and lightweight, but does not guarantee delivery or order, which makes it well-suited for gaming, streaming, and other real-time applications where speed is more important than reliability.</p>"
}
],

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
],
global : [
 {
  "name": "us-east-1 /Global Services Control",
  "description": "<p>The AWS us-east-1 (N. Virginia) region is unique because it hosts the control planes for many AWS Global Services. While these services operate worldwide, their management, orchestration, and certain dependencies are centralized in us-east-1. This makes the region critical to the functioning of AWS's global infrastructure.</p>",
  "technotes": "<p><strong>Global Services Controlled by us-east-1:</strong></p>\n<ul>\n  <li><strong>IAM (Identity and Access Management):</strong> Control plane resides in us-east-1.</li>\n  <li><strong>Route 53:</strong> DNS control plane managed in us-east-1.</li>\n  <li><strong>CloudFront:</strong> Requires ACM certificates in us-east-1; distribution control plane is centralized here.</li>\n  <li><strong>Lambda@Edge:</strong> Functions must be deployed in us-east-1 for global edge execution.</li>\n  <li><strong>CloudTrail:</strong> Global events logged as occurring in us-east-1.</li>\n  <li><strong>CloudWatch (Billing Metrics):</strong> Billing data stored in us-east-1 and represents worldwide charges.</li>\n  <li><strong>Amazon S3 (Global Namespace):</strong> Though S3 is regional for data, its global namespace and control plane are tied to us-east-1.</li>\n  <li><strong>Organizations:</strong> Account and policy management centralized in us-east-1.</li>\n  <li><strong>Key Management Service (KMS - Global Keys):</strong> Some global key operations depend on us-east-1.</li>\n</ul>",
  "billingnotes": "<p><strong>Pricing Considerations:</strong></p>\n<ul>\n  <li>Global services are billed as part of AWS accounts regardless of region, but their control plane activity is tied to us-east-1.</li>\n  <li>Data transfer costs (ingress/egress) apply globally, while billing metrics are consolidated in us-east-1.</li>\n</ul>"
},
{
  "name": "Global ACM Certificates (us-east-1)",
  "description": "<p>AWS Certificate Manager (ACM) issues SSL/TLS certificates for securing applications. For <strong>global services</strong> such as Amazon CloudFront and Lambda@Edge, certificates must be provisioned in the <strong>us-east-1 (N. Virginia)</strong> region. This is because the control plane for these services is centralized in us-east-1, and only certificates created there can be attached to global distributions.</p>",
  "technotes": "<p><strong>Key Points:</strong></p>\n<ul>\n  <li>Certificates for CloudFront distributions must be in us-east-1.</li>\n  <li>Lambda@Edge functions require ACM certificates in us-east-1.</li>\n  <li>Regional services (e.g., ALB, API Gateway) can use ACM certificates in their respective regions.</li>\n  <li>Supports automatic renewal and integration with AWS services.</li>\n</ul>",
  "billingnotes": "<p><strong>Pricing:</strong></p>\n<ul>\n  <li>ACM certificates are free of charge.</li>\n  <li>Costs may apply for services using the certificates (e.g., CloudFront data transfer, Lambda@Edge execution).</li>\n</ul>"
}


]





};

