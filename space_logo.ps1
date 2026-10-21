Add-Type -AssemblyName System.Drawing

$inputPath = Join-Path $PSScriptRoot "public\images\surya-hospital-orange-emblem-logo.png"
$outputPath = Join-Path $PSScriptRoot "public\images\surya-hospital-orange-emblem-logo.png"

$src = [System.Drawing.Bitmap]::FromFile($inputPath)
$w = $src.Width
$h = $src.Height

# We split at X = 466 (emblem: 0 to 465, text: 466 to w-1)
$emblemW = 466
$textW = $w - 466

# Desired extra space between emblem and text: 85 pixels
$extraSpace = 85
$newW = $w + $extraSpace

$dst = New-Object System.Drawing.Bitmap $newW, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dst)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Clear transparent
$g.Clear([System.Drawing.Color]::Transparent)

# Draw emblem (0..465) at X = 0
$srcRectEmblem = New-Object System.Drawing.Rectangle 0, 0, $emblemW, $h
$dstRectEmblem = New-Object System.Drawing.Rectangle 0, 0, $emblemW, $h
$g.DrawImage($src, $dstRectEmblem, $srcRectEmblem, [System.Drawing.GraphicsUnit]::Pixel)

# Draw text (466..w-1) shifted right by $extraSpace
$srcRectText = New-Object System.Drawing.Rectangle 466, 0, $textW, $h
$dstRectText = New-Object System.Drawing.Rectangle (466 + $extraSpace), 0, $textW, $h
$g.DrawImage($src, $dstRectText, $srcRectText, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$src.Dispose()

# Save updated image
$dst.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dst.Dispose()

Write-Host "Successfully spaced logo emblem and text. New dimensions: $newW x $h"
