function numUniqueEmails(emails: string[]): number {
    const unique = new Set();

    for (const email of emails) {
        const parts: string[] = email.split("@");
        let local: string = "";
        let i: number = 0;

        while (i < parts[0].length) {
            if (parts[0][i] === "+") {
                break;
            }
            if (parts[0][i] !== ".") {
                local += parts[0][i];
            }
            i++;
        }

        parts[0] = local;
        unique.add(parts.join("@"));
    }
    return unique.size;
}
