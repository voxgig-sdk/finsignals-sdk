package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewClassifyEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewHealthEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewInternalEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewRotationEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

var NewUsageEntityFunc func(client *FinsignalsSDK, entopts map[string]any) FinsignalsEntity

