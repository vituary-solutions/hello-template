# Hello Template
A template project for a web front end with a RESTful service in the backend.

## Get Started

### React UI

A Web based front end

`$ cd react-ui`

See [react-ui](./react-ui/README.md) for details.

### Spring Boot API

See [Spring Boot API](./spring-boot-api/README.md) for details.

## Deployment Pipeline Pre-requisites

This project leverages [GitHub Actions](https://github.com/features/actions) and
[Google Cloud](https://cloud.google.com/) for builds and deployments.

### GitHub Secrets

These secrets are required in the GitHub repository for use in the workflows:

| Key | Description |
| --- | ----------- |
| GCP_PROJECT | The globally unique Google Cloud project id where the application will be deployed. |
| GCP_CREDENTIALS | This should be a service account key. See [Creating and managing service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) for details. |
| GCP_REGION | The Google Cloud Region to deploy where the application will be deployed. Currently, it assumes only a single region. |
| GCP_BUCKET | The name of the Cloud Storage bucket **and** hostname for the static content. See [Hosting a static website](https://cloud.google.com/storage/docs/hosting-static-website) for details. |
| API_HOSTNAME | The fully qualified domain name for the API. |

### IAM Permissions

The Google Cloud service account will require some IAM permissions:

| Key | Description |
| --- | ----------- |
| Cloud Storage: Storage Object Admin | Allows addition and removal of files from the [Cloud Storage](https://cloud.google.com/storage) bucket. |
| Cloud Run: Cloud Run Admin | Allows deployment of containers to [Cloud Run](https://cloud.google.com/run). |
| Cloud Build: Cloud Build Service Account | Allows use of [Cloud Build](https://cloud.google.com/cloud-build) to build API images and push them to [Container Registry](https://cloud.google.com/container-registry). |

### DNS

As the project is setup for deployment, `CNAME` entries are needed in DNS for each deployed component:

| Purpose | Name | Data |
| ------- | - | - |
| Static Content in Cloud Storage | `www.example.com` | `c.storage.googleapis.com` |
| API in Cloud Run | `api.example.com` | `ghs.googlehosted.com` |

In the case of the API, custom domains for Cloud Run are in beta and cannot be configured until after the service is 
deployed for the first time. See [Mapping custom domains](https://cloud.google.com/run/docs/mapping-custom-domains) for
details.
