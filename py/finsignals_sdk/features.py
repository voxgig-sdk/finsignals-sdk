# Finsignals SDK feature factory

from finsignals_sdk.feature.base_feature import FinsignalsBaseFeature
from finsignals_sdk.feature.test_feature import FinsignalsTestFeature


_FEATURES = {
    "base": lambda: FinsignalsBaseFeature(),
    "test": lambda: FinsignalsTestFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
