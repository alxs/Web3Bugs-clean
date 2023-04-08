// SPDX-License-Identifier: MIT
pragma solidity 0.7.6;
pragma abicoder v2;

import './PCLLifecycleTest.t.sol';

contract PCLLifecycleTestLowBorrowRate is PCLLifecycleTest {
    using SafeMath for uint256;
    using SafeMath for uint128;
    using SafeERC20 for IERC20;

    function setUp() public override {
        super.setUp();
        request.borrowRate = uint128(PCLConstants.minBorrowRate);
        request.borrowAssetStrategy = compoundYieldAddress;
        request.collateralAssetStrategy = compoundYieldAddress;
    }
}
