# Finsignals SDK utility: make_context

from projectname_sdk.core.context import FinsignalsContext


def make_context_util(ctxmap, basectx):
    return FinsignalsContext(ctxmap, basectx)
