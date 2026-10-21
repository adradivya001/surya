Add-Type -AssemblyName System.Drawing

$inputPath = Join-Path $PSScriptRoot "public\images\surya-hospital-orange-emblem-logo.png"
$src = [System.Drawing.Bitmap]::FromFile($inputPath)

# Let's see what is to the right of col 480 at Y=280..320 vs what is at Y=350..470
for ($y = 260; $y -le 480; $y += 10) {
    $line = ""
    for ($x = 450; $x -le 520; $x += 2) {
        $p = $src.GetPixel($x, $y)
        if ($p.A -gt 50) { $line += "#" } else { $line += "." }
    }
    Write-Host ("Y={0:D3}: {1}" -f $y, $line)
}

$src.Dispose()
