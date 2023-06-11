import os
import requests

base_url = "https://crests.football-data.org/"
output_folder = "images"

# Create the output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# Iterate over the image URLs
for i in range(1, 500):  # Assuming the images are numbered from 1 to 500
    image_url = f"{base_url}{i}.svg"

    # Send a GET request to download the image
    response = requests.get(image_url)

    # Check if the request was successful
    if response.status_code == 200:
        # Extract the image filename from the URL
        filename = image_url.split("/")[-1]

        # Save the image to the output folder
        with open(os.path.join(output_folder, filename), "wb") as file:
            file.write(response.content)

        print(f"Downloaded: {filename}")
    else:
        print(f"Failed to download: {image_url}")