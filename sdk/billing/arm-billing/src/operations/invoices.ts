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
import * as Models from "../models";
import * as Mappers from "../models/invoicesMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Invoices. */
export class Invoices {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Invoices.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the available invoices for a subscription in reverse chronological order beginning with
   * the most recent invoice. In preview, invoices are available via this API only for invoice
   * periods which end December 1, 2016 or later.  This is only supported for Azure Web-Direct
   * subscriptions. Other subscription types which were not purchased directly through the Azure web
   * portal are not supported through this preview API.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListResponse>
   */
  list(options?: Models.InvoicesListOptionalParams): Promise<Models.InvoicesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.InvoicesListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.InvoicesListOptionalParams, callback: msRest.ServiceCallback<Models.InvoicesListResult>): void;
  list(options?: Models.InvoicesListOptionalParams | msRest.ServiceCallback<Models.InvoicesListResult>, callback?: msRest.ServiceCallback<Models.InvoicesListResult>): Promise<Models.InvoicesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.InvoicesListResponse>;
  }

  /**
   * Gets a named invoice resource. When getting a single invoice, the downloadUrl property is
   * expanded automatically.  This is only supported for Azure Web-Direct subscriptions. Other
   * subscription types which were not purchased directly through the Azure web portal are not
   * supported through this preview API.
   * @param invoiceName The name of an invoice resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesGetResponse>
   */
  get(invoiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesGetResponse>;
  /**
   * @param invoiceName The name of an invoice resource.
   * @param callback The callback
   */
  get(invoiceName: string, callback: msRest.ServiceCallback<Models.Invoice>): void;
  /**
   * @param invoiceName The name of an invoice resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(invoiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Invoice>): void;
  get(invoiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Invoice>, callback?: msRest.ServiceCallback<Models.Invoice>): Promise<Models.InvoicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        invoiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InvoicesGetResponse>;
  }

  /**
   * Gets the most recent invoice. When getting a single invoice, the downloadUrl property is
   * expanded automatically.  This is only supported for Azure Web-Direct subscriptions. Other
   * subscription types which were not purchased directly through the Azure web portal are not
   * supported through this preview API.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesGetLatestResponse>
   */
  getLatest(options?: msRest.RequestOptionsBase): Promise<Models.InvoicesGetLatestResponse>;
  /**
   * @param callback The callback
   */
  getLatest(callback: msRest.ServiceCallback<Models.Invoice>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLatest(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Invoice>): void;
  getLatest(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Invoice>, callback?: msRest.ServiceCallback<Models.Invoice>): Promise<Models.InvoicesGetLatestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLatestOperationSpec,
      callback) as Promise<Models.InvoicesGetLatestResponse>;
  }

  /**
   * Lists the available invoices for a subscription in reverse chronological order beginning with
   * the most recent invoice. In preview, invoices are available via this API only for invoice
   * periods which end December 1, 2016 or later.  This is only supported for Azure Web-Direct
   * subscriptions. Other subscription types which were not purchased directly through the Azure web
   * portal are not supported through this preview API.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InvoicesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoicesListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoicesListResult>, callback?: msRest.ServiceCallback<Models.InvoicesListResult>): Promise<Models.InvoicesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.InvoicesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.skiptoken,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoicesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/{invoiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.invoiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getLatestOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/latest",
  urlParameters: [
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
      bodyMapper: Mappers.Invoice
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.InvoicesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
