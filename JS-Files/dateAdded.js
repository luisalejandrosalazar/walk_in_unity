function timeSince(date) {
    const now = new Date();
    const past = new Date(date);
    const seconds = Math.floor((now - past) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return "Added: just now.";
    } else if (minutes < 60) {
        return "Added: just now.";
    } else if (hours < 24) {
        return `Added: ${hours} hours ago.`;
    } else if (days < 7) {
        return `Added: ${days} days ago.`;
    } else if (weeks <= 4) {
        return `Added: ${weeks} weeks ago.`;
    } else if (months <= 12) {
        return `Added: ${months} months ago.`;
    } else {
        return `Added: ${years} years ago.`;
    }

    console.log("nada???????????????");
}

export { timeSince };
