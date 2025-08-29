import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: {
    remoteEntry: path.resolve(__dirname, "./components/bootstrap.ts"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
