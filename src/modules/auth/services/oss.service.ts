import { Injectable } from '@nestjs/common';
import { STS } from 'ali-oss';
import * as CryptoJS from 'crypto-js';
@Injectable()
export class OssService {
  private readonly client: STS;
  constructor() {
    this.client = new STS({
      accessKeyId: process.env.OSS_APPID,
      accessKeySecret: process.env.OSS_SECRET,
    });
  }

  async findAll() {
    // roleArn填写角色ARN。
    // policy填写自定义权限策略。
    // expiration用于设置临时访问凭证有效时间单位为秒，最小值为900，最大值以当前角色设定的最大会话时间为准。
    // sessionName用于自定义角色会话名称，用来区分不同的令牌，例如填写为SessionTest。
    const result = await this.client.assumeRole(
      process.env.OSS_ARN,
      null,
      3600,
      'flowx-oss-role',
    );
    /**
     * 使用CryptoJS对AccessKeySecret进行加密，key为OSS_KEY
     */
    // const key = process.env.OSS_APPID;
    // const AccessKeySecret = CryptoJS.AES.encrypt(
    //   result.credentials.AccessKeySecret,
    //   key,
    // ).toString();
    return {
      //   accessKeyId: result.credentials.AccessKeyId,
      //   accessKeySecret: AccessKeySecret,
      //   securityToken: result.credentials.SecurityToken,
      //   expiration: result.credentials.Expiration,
      //   bucket: process.env.OSS_BUCKET,
      //   region: process.env.OSS_REGION,
      //   endPoint: process.env.OSS_ENDPOINT,

      dir: 'test',
      expire: result.credentials.Expiration,
      host: process.env.OSS_ENDPOINT,
      accessId: result.credentials.AccessKeyId,
      signature: result.credentials.AccessKeySecret,
      //   policy: result.credentials.SecurityToken,
      'x-oss-security-token': result.credentials.SecurityToken,
      region: process.env.OSS_REGION,
      bucket: process.env.OSS_BUCKET,
    };
  }
}
