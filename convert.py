import json

input_path = "X.txt"
output_path = "formatted_dataset.jsonl"

with open(input_path, "r", encoding="utf-8") as infile, open(output_path, "w", encoding="utf-8") as outfile:
    for line in infile:
        try:
            data = json.loads(line)
            formatted = {
                "text": data["query"],
                "label": data["verdict"]
            }
            json.dump(formatted, outfile)
            outfile.write("\n")
        except Exception as e:
            print("Error processing line:", line)
            print("Exception:", e)
