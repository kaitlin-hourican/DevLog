// central type definitions for entire application

// === ENUMS ===
export enum Severity {
    LOW      = "LOW",
    MEDIUM   = "MEDIUM",
    HIGH     = "HIGH",
    CRITICAL = "CRITICAL"
}

export enum Status {
    OPEN        = "OPEN",
    IN_PORGRESS = "IN_PROGRESS",
    RESOLVED    = "RESOLVED"
}

// === INTERFACES ===   
// mirror MySQL tables
export interface Project {
    id:          number;
    name:        string;
    description: string | null;
    created_at:  Date;
}

export interface Issue {
    id:          number;
    project_id:  number;
    title:       string;
    description: string | null;
    severity:    Severity;
    status:      Status;
    created_at:  Date;
    updated_at:  Date;
}

export interface Comment {
    id:         number;
    issue_id:   number;
    body:       string;
    created_at: Date;
}


// === UNITILITY TYPES ===
// used when creating project
// id and created_at set by MySQL
export type NewProject = Omit<Project, "id" | "created_at">;

// used when creating new issue
export type NewIssue = Omit<Issue, "id" | "created_at" | "updated_at">;

// used when creating new comment
export type NewComment = Omit<Comment, "id" | "created_at">;

// used for PATCH/update endpoints 
// every field is optional
export type UpdateIssue = Partial<Pick<Issue, "title" | "description" | "severity" | "status">>;


// === API RESPONSE WRAPPER ===
export interface ApiResponse<T> {
    success: boolean;
    data:    T | null;
    error:   string | null;
}