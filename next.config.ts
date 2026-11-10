import { realpathSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type {NextConfig} from 'next';
const config:NextConfig={output:'export',turbopack:{root:dirname(realpathSync(resolve('node_modules')))},trailingSlash:true,images:{unoptimized:true},devIndicators:false};
export default config;
