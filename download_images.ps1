$baseUrl = "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/25832/"
$images = @(
    "logo.svg",
    "top_main_chachi.svg",
    "top_1.jpg",
    "top_2_flow.svg",
    "top_2-1.jpg",
    "top_2-2.jpg",
    "top_2-3.jpg",
    "top_3_sub_read.svg",
    "top_3_bottom_photos_item-1.jpg",
    "top_3_bottom_photos_item-2.jpg",
    "top_5.jpg"
)

foreach ($img in $images) {
    $url = $baseUrl + $img
    $output = "public/images/" + $img
    Write-Host "Downloading $img..."
    Invoke-WebRequest -Uri $url -OutFile $output
}
