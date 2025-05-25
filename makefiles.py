import os

# Define base folder
repo_name = "quant101-iitb"

# Folder structure with sample files
folders = {
    "research-reports": "almgren-chriss-summary.md",
    "beginner-roadmap": "roadmap.md",
    "community-ideas": "iitb-vs-iitkgp.md",
    "quant-memes": "overfitting-meme.md",
    "appendix": "future-extensions.md"
}



# Create folders and files
for folder, file in folders.items():
    path = os.path.join(folder, file)
    os.makedirs(folder, exist_ok=True)
    with open(path, "w") as f:
        f.write(f"# {file.replace('-', ' ').title()}\n\n> Placeholder content for {folder}.")

# Create README.md and LICENSE
with open("README.md", "w") as f:
    f.write("# Quant101 @ IIT Bombay\n\nYour one-stop starter repo for breaking into Quant Finance.\n")

with open("LICENSE", "w") as f:
    f.write("MIT License")

