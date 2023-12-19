// services
import getConfig from "next/config";
import APIService from "services/api.service";
import trackEventServices from "services/track-event.service";

// types
import { ICurrentUserResponse, IGptResponse } from "types";

const { publicRuntimeConfig: { NEXT_PUBLIC_API_BASE_URL } } = getConfig();

export class AIService extends APIService {
  constructor() {
    super(API_BASE_URL);
  }

  async createGptTask(
    workspaceSlug: string,
    projectId: string,
    data: { prompt: string; task: string }
  ): Promise<IGptResponse> {
    return this.post(`/api/workspaces/${workspaceSlug}/projects/${projectId}/ai-assistant/`, data)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response;
      });
  }
}
