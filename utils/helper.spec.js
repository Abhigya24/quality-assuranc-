const axios = require('axios');
import { expect } from '@playwright/test';
import { get } from 'http';

let apiurl

async function authenticateUser(username, password, {request}) {
     const apiurl = await getApiBaseUrl();
     const headers = {
        'Content-Type': 'application/json',
     };
     const requestBody = {
        email: username,
        password: password,
     };
     const response = await request.post(`${apiurl}/user/login`, {
        headers,
        data: requestBody,
     });
     expect(response.status()).toBe(200);
     const responseBody = await response.json();
     const token = responseBody.token;
     return token;
}

async function getApiBaseUrl() {
    apiurl - process.env.API_BASE_URL || 'http://localhost:3000/api';
    if (!apiurl) {
       apiurl="http://thinking-tester-contact-list.herokuapp.com/api";
    }
    return apiurl;
}

async function createEntity(userData, accessToken, module, {request}) {
    const apiurl = await getApiBaseUrl();
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': "Bearer " + accessToken,
    };
    const response = await request.post(apiurl + module, {
        headers,
        data: userData,
    });
    const responseBody = await response.json();
    const statusCode = response.status();
    expect(statusCode).toBe(201);
    if (responseBody && responseBody._id) {
        return responseBody._id;
    }else {
        return null;

    }
}