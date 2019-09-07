function deleteAllSmileys(theSmileys) {
    while (theSmileys.firstChild) theSmileys.removeChild(theSmileys.firstChild)
}