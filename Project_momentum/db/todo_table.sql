CREATE TABLE todo_table (
    memberID CHAR(30) NOT NULL,
    todo CHAR(50),
    PRIMARY KEY(memberID),
    CONSTRAINT FK FOREIGN KEY(memberID) REFERENCES member_table(memberID) ON DELETE CASCADE
);