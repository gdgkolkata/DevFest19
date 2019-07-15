workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for Firebase"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "GitHub Action for npm-2" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["GitHub Action for npm-1"]
  args = "build --prod"
}

action "GitHub Action for Firebase" {
  uses = "w9jds/firebase-action@7d6b2b058813e1224cdd4db255b2f163ae4084d3"
  needs = ["GitHub Action for npm-2"]
  secrets = ["FIREBASE_TOKEN"]
  args = "deploy"
  env = {
    PROJECT_ID = "devfest-19"
    PUBLIC_PATH = "dist/DevFest19"
  }
}
