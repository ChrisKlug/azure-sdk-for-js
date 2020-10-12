/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/customDomainsMappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";
import { Profiles } from "./profiles";

/** Class representing a CustomDomains. */
export class CustomDomains {
  private readonly client: CdnManagementClientContext;

  /**
   * Create a CustomDomains.
   * @param {CdnManagementClientContext} client Reference to the service client.
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the existing custom domains within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsListByEndpointResponse>
   */
  listByEndpoint(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsListByEndpointResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param callback The callback
   */
  listByEndpoint(resourceGroupName: string, profileName: string, endpointName: string, callback: msRest.ServiceCallback<Models.CustomDomainListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByEndpoint(resourceGroupName: string, profileName: string, endpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomainListResult>): void;
  listByEndpoint(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomainListResult>, callback?: msRest.ServiceCallback<Models.CustomDomainListResult>): Promise<Models.CustomDomainsListByEndpointResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        options
      },
      listByEndpointOperationSpec,
      callback) as Promise<Models.CustomDomainsListByEndpointResponse>;
  }

  /**
   * Gets an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsGetResponse>
   */
  get(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, callback: msRest.ServiceCallback<Models.CustomDomain>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomain>): void;
  get(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomain>, callback?: msRest.ServiceCallback<Models.CustomDomain>): Promise<Models.CustomDomainsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        customDomainName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CustomDomainsGetResponse>;
  }

  /**
   * Creates a new custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param hostName The host name of the custom domain. Must be a domain name.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsCreateResponse>
   */
  create(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, hostName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsCreateResponse> {
    return this.beginCreate(resourceGroupName, profileName, endpointName, customDomainName, hostName, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CustomDomainsCreateResponse>;
  }

  /**
   * Deletes an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName, profileName, endpointName, customDomainName, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CustomDomainsDeleteMethodResponse>;
  }

  /**
   * Disable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsDisableCustomHttpsResponse>
   */
  disableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsDisableCustomHttpsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param callback The callback
   */
  disableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, callback: msRest.ServiceCallback<Models.CustomDomain>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  disableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomain>): void;
  disableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomain>, callback?: msRest.ServiceCallback<Models.CustomDomain>): Promise<Models.CustomDomainsDisableCustomHttpsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        customDomainName,
        options
      },
      disableCustomHttpsOperationSpec,
      callback) as Promise<Models.CustomDomainsDisableCustomHttpsResponse>;
  }

  /**
   * Enable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsEnableCustomHttpsResponse>
   */
  enableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: Models.CustomDomainsEnableCustomHttpsOptionalParams): Promise<Models.CustomDomainsEnableCustomHttpsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param callback The callback
   */
  enableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, callback: msRest.ServiceCallback<Models.CustomDomain>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  enableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options: Models.CustomDomainsEnableCustomHttpsOptionalParams, callback: msRest.ServiceCallback<Models.CustomDomain>): void;
  enableCustomHttps(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: Models.CustomDomainsEnableCustomHttpsOptionalParams | msRest.ServiceCallback<Models.CustomDomain>, callback?: msRest.ServiceCallback<Models.CustomDomain>): Promise<Models.CustomDomainsEnableCustomHttpsResponse> {
    let newOptions: Models.CustomDomainsEnableCustomHttpsOptionalParams = {};

    if (typeof options === "function") {
      callback = options;
    } else {
      newOptions = options as Models.CustomDomainsEnableCustomHttpsOptionalParams;
    }

    if (!newOptions) {
      newOptions = {};
    }

    let optionsPreparationPromise = Promise.resolve(options);

    if (!newOptions.customDomainHttpsParameters) {
      let profiles = new Profiles(this.client);
      optionsPreparationPromise = profiles.get(resourceGroupName, profileName).then(profile => {
        newOptions.customDomainHttpsParameters = getDefaultCustomDomainHttpsParameters(profile);
        return newOptions;
      })
    }

    return optionsPreparationPromise.then(options =>
      this.client.sendOperationRequest(
        {
          resourceGroupName,
          profileName,
          endpointName,
          customDomainName,
          options
        },
        enableCustomHttpsOperationSpec,
        callback) as Promise<Models.CustomDomainsEnableCustomHttpsResponse>
    );
  }

  /**
   * Creates a new custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param hostName The host name of the custom domain. Must be a domain name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, hostName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        customDomainName,
        hostName,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, profileName: string, endpointName: string, customDomainName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        customDomainName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the existing custom domains within an endpoint.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsListByEndpointNextResponse>
   */
  listByEndpointNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsListByEndpointNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByEndpointNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CustomDomainListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByEndpointNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomainListResult>): void;
  listByEndpointNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomainListResult>, callback?: msRest.ServiceCallback<Models.CustomDomainListResult>): Promise<Models.CustomDomainsListByEndpointNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByEndpointNextOperationSpec,
      callback) as Promise<Models.CustomDomainsListByEndpointNextResponse>;
  }
}

class SkuNames {
  public static get standard_microsoft() { return "Standard_Microsoft"; }
  public static get standard_verizon() { return "Standard_Verizon"; }
  public static get standard_akamai() { return "Standard_Akamai"; }
}

function getDefaultCustomDomainHttpsParameters(profile: Models.Profile): Models.CdnManagedHttpsParameters | undefined {
  switch (profile.sku.name) {
    case SkuNames.standard_microsoft:
      return {
        certificateSource: "Cdn",
        certificateSourceParameters: {
          certificateType: "Dedicated"
        },
        protocolType: "ServerNameIndication"
      }
    case SkuNames.standard_akamai:
      return {
        certificateSource: "Cdn",
        certificateSourceParameters: {
          certificateType: "Shared"
        },
        protocolType: "ServerNameIndication"
      }
    case SkuNames.standard_verizon:
      return {
        certificateSource: "Cdn",
        certificateSourceParameters: {
          certificateType: "Shared"
        },
        protocolType: "IPBased"
      }
    default:
      return undefined;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByEndpointOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.customDomainName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const disableCustomHttpsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}/disableCustomHttps",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.customDomainName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {
      bodyMapper: Mappers.CustomDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const enableCustomHttpsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}/enableCustomHttps",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.customDomainName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "customDomainHttpsParameters"
    ],
    mapper: Mappers.CustomDomainHttpsParameters
  },
  responses: {
    200: {},
    202: {
      bodyMapper: Mappers.CustomDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.customDomainName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      hostName: "hostName"
    },
    mapper: {
      ...Mappers.CustomDomainParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomain
    },
    201: {
      bodyMapper: Mappers.CustomDomain
    },
    202: {
      bodyMapper: Mappers.CustomDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.customDomainName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {
      bodyMapper: Mappers.CustomDomain
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByEndpointNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
