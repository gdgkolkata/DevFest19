workflow "New workflow" {
  on = "push"
  resolves = ["Push"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Push" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run fs"
  secrets = ["FIREBASE_TOKEN"]
}
