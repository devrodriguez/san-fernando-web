export class Util {
    private ip: string = '192.168.0.13';
    private port: number = 8080;
    public apiUrl: string = `http://${this.ip}:${this.port}/api`;
    public storageUrl: string = `http://${this.ip}:${this.port}/storage`;
    public imageSize: number = 320;
}
