import { getDefaultConfig } from "expo/metro-config";
import { withNativeWind } from "nativewind/metro";

const defaultConfig = getDefaultConfig(__dirname);
const config = withNativeWind(defaultConfig);

export default config;
