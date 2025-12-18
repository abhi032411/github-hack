import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const git = simpleGit();
const path = "./data.json";
const date = moment().subtract(1,'d').format();

async function run() {
  try {
    // 1. Write file
    await jsonfile.writeFile(path, { date }, { spaces: 2 });
    console.log("📄 data.json updated");

    // 2. Git add
    await git.add(".");
    console.log("➕ File added");

    // 3. Git commit
    await git.commit(`Auto update: ${date}`, { "--date": date });
    console.log("📝 Commit created");

    // 4. Git push
    await git.push();
    console.log("🚀 Pushed to GitHub");

  } catch (err) {
    console.error("❌ Error:", err);
  }
}

run();
