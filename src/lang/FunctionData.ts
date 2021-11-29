/*!
 * Copyright 2021 Jasper Geer. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */

/**
 * Data structure containing data about a function. Indtended for use by visitors to extract
 * function data by navigating a parse tree. 
 */
export interface FunctionData {
    paramNames: string[];
    returnType: string;
    exceptions: string[];
}