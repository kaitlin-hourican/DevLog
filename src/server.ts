import { Issue, Status, Severity } from "./types/index";

const testIssue: Issue = {
    id:          1,
    project_id:  1,
    title:       "Login button unresponsive on mobile",
    description: "Tapping the login button on iOS Safari does nothing.",
    severity:    Severity.HIGH,
    status:      Status.OPEN,
    created_at:  new Date(),
    updated_at:  new Date()
};

console.log(`Issue created: [${testIssue.severity}] ${testIssue.title}`);