/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/indexersMappers";
import * as Parameters from "../models/parameters";
import { SearchServiceClientContext } from "../searchServiceClientContext";

/** Class representing a Indexers. */
export class Indexers {
  private readonly client: SearchServiceClientContext;

  /**
   * Create a Indexers.
   * @param {SearchServiceClientContext} client Reference to the service client.
   */
  constructor(client: SearchServiceClientContext) {
    this.client = client;
  }

  /**
   * Resets the change tracking state associated with an indexer.
   * @param indexerName The name of the indexer to reset.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  reset(indexerName: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param indexerName The name of the indexer to reset.
   * @param callback The callback
   */
  reset(indexerName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param indexerName The name of the indexer to reset.
   * @param options The optional parameters
   * @param callback The callback
   */
  reset(indexerName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  reset(indexerName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        indexerName,
        options
      },
      resetOperationSpec,
      callback);
  }

  /**
   * Runs an indexer on-demand.
   * @param indexerName The name of the indexer to run.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  run(indexerName: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param indexerName The name of the indexer to run.
   * @param callback The callback
   */
  run(indexerName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param indexerName The name of the indexer to run.
   * @param options The optional parameters
   * @param callback The callback
   */
  run(indexerName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  run(indexerName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        indexerName,
        options
      },
      runOperationSpec,
      callback);
  }

  /**
   * Creates a new indexer or updates an indexer if it already exists.
   * @param indexerName The name of the indexer to create or update.
   * @param indexer The definition of the indexer to create or update.
   * @param [options] The optional parameters
   * @returns Promise<Models.IndexersCreateOrUpdateResponse>
   */
  createOrUpdate(indexerName: string, indexer: Models.SearchIndexer, options?: Models.IndexersCreateOrUpdateOptionalParams): Promise<Models.IndexersCreateOrUpdateResponse>;
  /**
   * @param indexerName The name of the indexer to create or update.
   * @param indexer The definition of the indexer to create or update.
   * @param callback The callback
   */
  createOrUpdate(indexerName: string, indexer: Models.SearchIndexer, callback: coreHttp.ServiceCallback<Models.SearchIndexer>): void;
  /**
   * @param indexerName The name of the indexer to create or update.
   * @param indexer The definition of the indexer to create or update.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(indexerName: string, indexer: Models.SearchIndexer, options: Models.IndexersCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.SearchIndexer>): void;
  createOrUpdate(indexerName: string, indexer: Models.SearchIndexer, options?: Models.IndexersCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.SearchIndexer>, callback?: coreHttp.ServiceCallback<Models.SearchIndexer>): Promise<Models.IndexersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        indexerName,
        indexer,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IndexersCreateOrUpdateResponse>;
  }

  /**
   * Deletes an indexer.
   * @param indexerName The name of the indexer to delete.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(indexerName: string, options?: Models.IndexersDeleteMethodOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param indexerName The name of the indexer to delete.
   * @param callback The callback
   */
  deleteMethod(indexerName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param indexerName The name of the indexer to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(indexerName: string, options: Models.IndexersDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(indexerName: string, options?: Models.IndexersDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        indexerName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves an indexer definition.
   * @param indexerName The name of the indexer to retrieve.
   * @param [options] The optional parameters
   * @returns Promise<Models.IndexersGetResponse>
   */
  get(indexerName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.IndexersGetResponse>;
  /**
   * @param indexerName The name of the indexer to retrieve.
   * @param callback The callback
   */
  get(indexerName: string, callback: coreHttp.ServiceCallback<Models.SearchIndexer>): void;
  /**
   * @param indexerName The name of the indexer to retrieve.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(indexerName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.SearchIndexer>): void;
  get(indexerName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.SearchIndexer>, callback?: coreHttp.ServiceCallback<Models.SearchIndexer>): Promise<Models.IndexersGetResponse> {
    return this.client.sendOperationRequest(
      {
        indexerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IndexersGetResponse>;
  }

  /**
   * Lists all indexers available for a search service.
   * @param [options] The optional parameters
   * @returns Promise<Models.IndexersListResponse>
   */
  list(options?: Models.IndexersListOptionalParams): Promise<Models.IndexersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: coreHttp.ServiceCallback<Models.ListIndexersResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.IndexersListOptionalParams, callback: coreHttp.ServiceCallback<Models.ListIndexersResult>): void;
  list(options?: Models.IndexersListOptionalParams | coreHttp.ServiceCallback<Models.ListIndexersResult>, callback?: coreHttp.ServiceCallback<Models.ListIndexersResult>): Promise<Models.IndexersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IndexersListResponse>;
  }

  /**
   * Creates a new indexer.
   * @param indexer The definition of the indexer to create.
   * @param [options] The optional parameters
   * @returns Promise<Models.IndexersCreateResponse>
   */
  create(indexer: Models.SearchIndexer, options?: coreHttp.RequestOptionsBase): Promise<Models.IndexersCreateResponse>;
  /**
   * @param indexer The definition of the indexer to create.
   * @param callback The callback
   */
  create(indexer: Models.SearchIndexer, callback: coreHttp.ServiceCallback<Models.SearchIndexer>): void;
  /**
   * @param indexer The definition of the indexer to create.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(indexer: Models.SearchIndexer, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.SearchIndexer>): void;
  create(indexer: Models.SearchIndexer, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.SearchIndexer>, callback?: coreHttp.ServiceCallback<Models.SearchIndexer>): Promise<Models.IndexersCreateResponse> {
    return this.client.sendOperationRequest(
      {
        indexer,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.IndexersCreateResponse>;
  }

  /**
   * Returns the current status and execution history of an indexer.
   * @param indexerName The name of the indexer for which to retrieve status.
   * @param [options] The optional parameters
   * @returns Promise<Models.IndexersGetStatusResponse>
   */
  getStatus(indexerName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.IndexersGetStatusResponse>;
  /**
   * @param indexerName The name of the indexer for which to retrieve status.
   * @param callback The callback
   */
  getStatus(indexerName: string, callback: coreHttp.ServiceCallback<Models.SearchIndexerStatus>): void;
  /**
   * @param indexerName The name of the indexer for which to retrieve status.
   * @param options The optional parameters
   * @param callback The callback
   */
  getStatus(indexerName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.SearchIndexerStatus>): void;
  getStatus(indexerName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.SearchIndexerStatus>, callback?: coreHttp.ServiceCallback<Models.SearchIndexerStatus>): Promise<Models.IndexersGetStatusResponse> {
    return this.client.sendOperationRequest(
      {
        indexerName,
        options
      },
      getStatusOperationSpec,
      callback) as Promise<Models.IndexersGetStatusResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const resetOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "indexers('{indexerName}')/search.reset",
  urlParameters: [
    Parameters.endpoint,
    Parameters.indexerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const runOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "indexers('{indexerName}')/search.run",
  urlParameters: [
    Parameters.endpoint,
    Parameters.indexerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "indexers('{indexerName}')",
  urlParameters: [
    Parameters.endpoint,
    Parameters.indexerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.prefer
  ],
  requestBody: {
    parameterPath: "indexer",
    mapper: {
      ...Mappers.SearchIndexer,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexer
    },
    201: {
      bodyMapper: Mappers.SearchIndexer
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "indexers('{indexerName}')",
  urlParameters: [
    Parameters.endpoint,
    Parameters.indexerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "indexers('{indexerName}')",
  urlParameters: [
    Parameters.endpoint,
    Parameters.indexerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexer
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const listOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "indexers",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListIndexersResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "indexers",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: "indexer",
    mapper: {
      ...Mappers.SearchIndexer,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.SearchIndexer
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const getStatusOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "indexers('{indexerName}')/search.status",
  urlParameters: [
    Parameters.endpoint,
    Parameters.indexerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexerStatus
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};
