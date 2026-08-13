# Finsignals SDK utility: make_context

from finsignals_sdk.core.context import FinsignalsContext


def make_context_util(ctxmap, basectx):
    return FinsignalsContext(ctxmap, basectx)
