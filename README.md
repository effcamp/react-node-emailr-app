# react-node-emailr-app
EMAILR

This is a React+Express project that can send email surveys out using SendGrid.
It accepts payments using Swipe (fake card number: 4242 4242 4242 4242) to add credits

Right now you can make an account, and add credits using the fake card number and fake information (dev version of swipe)

It allows you to send simple yes/no surveys out to clients and (not implemented on the hosted version) it uses webhooks to count how many people clicked yes or no.
The backend is MongoDB using mLab on heroku.
