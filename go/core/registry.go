package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewClassifyEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewHealthEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewInternalEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewRotationEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewUsageEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

