import { AxiosProxyConfig } from 'contentful';

export class Config {
  space: string;
  accessToken: string;
  insecure?: boolean;
  host?: string;
  basePath?: string;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig;
  headers?: any;
  application?: string;
  integration?: string;
  resolveLinks?: boolean;
  retryOnError?: boolean;
}
