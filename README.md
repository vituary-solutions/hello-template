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

This project leverages [GitHub Actions](https://github.com/features/actions), [Google Cloud](https://cloud.google.com/)
and [Firebase](https://firebase.google.com/) for builds and deployments.

Additionally, [Auth0](https://auth0.com/) is used for authentication. A target application on the Auth0 platform must
be created and configured in GitHub Secrets as a pre-requisite.

### GitHub Secrets

These secrets are required in the GitHub repository for use in the workflows:

| Key | Description |
| --- | ----------- |
| GCP_PROJECT | The globally unique Google Cloud project id where the application will be deployed. |
| GCP_CREDENTIALS | This should be a service account key. See [Creating and managing service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) for details. |
| GCP_REGION | The Google Cloud Region to deploy where the application will be deployed. Currently, it assumes only a single region. |
| FIREBASE_TOKEN | A Firebase Auth token used to interact with firebase. See [Use the Firebase CLI with CI systems](https://firebase.google.com/docs/cli?authuser=0#cli-ci-systems). |
| UI_HOSTNAME | The fully qualified domain name for the web based front end. |
| API_HOSTNAME | The fully qualified domain name for the API. |
| AUTH0_CLIENT_ID | The client id of the Auth0 application. |
| AUTH0_DOMAIN | The fully qualified domain name hosted by Auth0. |

### IAM Permissions

The Google Cloud service account will require some IAM permissions:

| Permission | Description |
| ---------- | ----------- |
| Cloud Run: Cloud Run Admin | Allows deployment of containers to [Cloud Run](https://cloud.google.com/run). |
| Cloud Build: Cloud Build Service Account | Allows use of [Cloud Build](https://cloud.google.com/cloud-build) to build API images and push them to [Container Registry](https://cloud.google.com/container-registry). |
| Cloud Build: Cloud Build Editor | Needed to access the Cloud Build logs as described in [Missing permissions on cloud container builder role](https://github.com/GoogleCloudPlatform/cloud-builders/issues/120#issuecomment-329831523). |
| Project: Viewer | Needed to access the Cloud Build logs as described in [Missing permissions on cloud container builder role](https://github.com/GoogleCloudPlatform/cloud-builders/issues/120#issuecomment-329831523). |

Additionally, the Compute Engine default service user (_project-id_-compute@developer.gserviceaccount.com) will need the
ability to run as the service account used in the GitHub Actions. See
[Cloud Run IAM Roles](https://cloud.google.com/run/docs/reference/iam/roles#additional-configuration) for details.

### DNS

For deployment, some DNS entries are needed for each deployed component:

| Purpose | Type | Name | Data |
| ------- | ---- | ---- | ---- |
| Static Content hosted by Firebase | `A` | `www.example.com` | `151.101.1.195` |
| Static Content hosted by Firebase | `A` | `www.example.com` | `151.101.65.195` |
| API in Cloud Run | `CNAME` | `api.example.com` | `ghs.googlehosted.com` |

In the case of the API, custom domains for Cloud Run are in beta and cannot be configured until after the service is 
deployed for the first time. See [Mapping custom domains](https://cloud.google.com/run/docs/mapping-custom-domains) for
details.
