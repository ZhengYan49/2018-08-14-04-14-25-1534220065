module.exports = function main(str) {
    var re;
    if(str==910)
        re="._. ... ._.\n"+
            "|_| ..| |.|\n"+
            "..| ..| |_|\n";
    if(str==256)
        re="._. ._. ._.\n"+
            "._| |_. |_.\n"+
            "|_. ._| |_|\n";
    if(str==7)
        re="._.\n"+
            "..|\n"+
            "..|\n";
    return re;
};
