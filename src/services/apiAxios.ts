import axios, { AxiosError } from "axios";
import { THttpRequest } from "../Utils/THttpRequest";

export default abstract class AxiosHttpClientAdapter {
  #baseUrl = process.env.BASE_URL;
  #data: THttpRequest;

  constructor(data: THttpRequest) {
    this.#data = data;
  }

  async #request(): Promise<{
    statusCode: number;
    data: any;
  }> {
    let axiosResponse: any;
    try {
      axiosResponse = await axios.request({
        url: `${this.#baseUrl}/${this.#data.url}`,
        method: this.#data.method,
        params: this.#data.params,
        data: {
          description: {
            ...this.#data.body,
          },
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...this.#data.headers,
        },
      });
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      throw new Error(_error?.response?.data?.message);
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data,
    };
  }

  get getRequest(): Promise<{
    statusCode: number;
    data: any;
  }> {
    return this.#request();
  }
}