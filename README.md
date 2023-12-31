# Document Service UI

### Description:

The Document Service REST API is a service that allows users to upload documents along with metadata. It leverages AWS services, such as S3 for document storage and MongoDB for metadata management.

### Tech Used for UI:

ReactJS, CSS3,HTML5,React Router DOm v6,Vitest and React Testing Library,Material UI,React Hook Form,React Toastify

### Work Flow:

We have a home page in that we have two sections <br/>
a.File Upload <br/>
b.View Files <br/>

1). In File Upload Section, User can upload file from local computer and add extra meta data and click upload button It will be stored in Database.<br/>
2). In View Files Section,There is a Table ,User can view all the documents uploaded and search those documents with whatever our query and User can download those documents to the local and delete those documents from database. <br/>
3). In this way user can manage Documents easily.<br/>

## Instructions to setup project in local computer:

##### Clone this Repository:

You need to write the following commands on the terminal screen(in vscode) so that you can run this project locally.

```
git clone https://github.com/SaiSuryaTejaChavatapalli/document-service-app.git
```

##### Go to the project directory:

```
cd document-service-app
```

##### Install dependencies:

```
npm install
```

##### Start the server:

```
npm run dev
```

This application should now be running on localhost.

## For Running test cases:

Go to the project repository i.e document-service-app. <br/>
Make sure you are on project directory

```
npm run test
```

The above snippet executes the unit test cases.
