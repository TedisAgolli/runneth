# run from desktop
# .\makeLogos.ps1 .\cup.svg .\live-bookmarks\public\ runneth

$svgPath = $args[0]
$outputPath = $args[1]
$outputFileName = $args[2]

$sizes = @("16", "48", "128", "256")


foreach ($size in $sizes) {
    inkscape --export-png "$($outputPath)$($outputFileName)_$($size).png" -w $size $svgPath
}