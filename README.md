# Example, using curl:

curl http://localhost:3000/oauth/token \
  -d "grant_type=client_credentials" \
  -H "Authorization: Basic Y29uZmlkZW50aWFsQXBwbGljYXRpb246dG9wU2VjcmV0" \
  -H "Content-Type: application/x-www-form-urlencoded"
If all goes as planned, you should receive a response like this:

{
	"token_type": "bearer",
	"access_token": "72ab415822b56cf0f9f93f07fe978d9aae859325",
	"expires_in": 3600
}

# Using the token

Headers
Authorization: "Bearer " + access_token
(for example, Bearer 72ab415822b56cf0f9f93f07fe978d9aae859325)

Example, using curl:

curl http://localhost:3000 \
  -H "Authorization: Bearer 72ab415822b56cf0f9f93f07fe978d9aae859325"
