# Finsignals SDK feature factory

from feature.base_feature import FinsignalsBaseFeature
from feature.test_feature import FinsignalsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FinsignalsBaseFeature(),
        "test": lambda: FinsignalsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
