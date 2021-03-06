/**
 * Copyright (c) Benjamin Ansbach - all rights reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const graphql = require('graphql');
const AccountNumberType = require('@pascalcoin-sbx/common').Types.AccountNumber;

/**
 * A AccountNumber Scalar.
 */
class AccountNumber {

  /**
   * Gets the name.
   *
   * @returns {string}
   */
  get name() {
    return 'AccountNumber';
  }

  /**
   * Gets a description of the AccountNumber Scalar.
   *
   * @returns {string}
   */
  get description() {
    return 'PascalCoin Account Number. Can be parsed from int or string + checksum.';
  }

  /**
   * Gets the account number.
   *
   * @param {AccountNumberType} value
   * @returns {Number}
   */
  serialize(value) {
    return value.account;
  }

  /**
   * Parses the given account number value.
   *
   * @param {Number} value
   * @returns {AccountNumberType}
   */
  parseValue(value) {
    return new AccountNumberType(value);
  }

  /**
   * Tries to parse an account number value.
   *
   * @param {Object} ast
   * @returns {null|AccountNumberType}
   */
  parseLiteral(ast) {
    if (ast.kind === graphql.Kind.INT || ast.kind === graphql.Kind.STRING) {
      return this.parseValue(ast.value);
    }

    return null;
  }
}

module.exports = new graphql.GraphQLScalarType(new AccountNumber());
