# Finsignals SDK exists test

import pytest
from finsignals_sdk import FinsignalsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FinsignalsSDK.test(None, None)
        assert testsdk is not None
