# React Native Jobs

React Native Jobs is a mobile application that allows users to search for jobs using keywords and location. This project was built using React Native and integrates with the RapidAPI Job Search API.

# Project Demo

https://expo.dev/@n00r/react-native-jobs?serviceType=classic&distribution=expo-go

<p float="left">
<img src='./assets/images/home.jpeg' width="150"/> 
<img src='./assets/images/home_2.jpeg' width="150"/> 
<img src='./assets/images/job_about.jpeg' width="150"/> 
<img src='./assets/images/job_qualifications.jpeg' width="150"/> 
<img src='./assets/images/job_responsibilities.jpeg' width="150"/>
</p>

# Table of Contents

### Installation

### Usage

### Features

### License

# Installation

To get started with React Native Jobs, follow these steps:

- Clone this repository: git clone https://github.com/awiednoor/react-native-jobs.git
- Change into the project directory:

```
cd react-native-jobs
```

- Install the dependencies:

```
npm install
```

- Create a .env file at the root of the project and add your RapidAPI key and host URL:
  makefile & Copy code

```
RAPIDAPI_KEY=YOUR_API_KEY_HERE
RAPIDAPI_HOST=YOUR_API_HOST_URL_HERE

```

- Run the application:

```
npm start

```

# Usage

Upon launching the application, users are presented with a search screen where they can enter a job title and location to search for relevant job listings. The application communicates with the RapidAPI Job Search API to retrieve job listings based on the user's search criteria. Users can also view detailed information about a specific job listing by tapping on it.

# Features

Some of the key features of React Native Jobs include:

- A search screen where users can enter a job title and location to search for relevant job listings.
- A results screen where users can view a list of job listings based on their search criteria.
  -A detailed view for each job listing, displaying information such as the job title, company name, and job description.
  -Easy apply call to action button in each job page
  -Listing of popular and nearby jobs in home screen
- Integration with the RapidAPI Job Search API to retrieve job listings.

# License

React Native Jobs is licensed under the MIT License.

# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-react-native-app -t with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
