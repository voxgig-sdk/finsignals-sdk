package voxgigfinsignalssdk

import (
	"github.com/voxgig-sdk/finsignals-sdk/go/core"
	"github.com/voxgig-sdk/finsignals-sdk/go/entity"
	"github.com/voxgig-sdk/finsignals-sdk/go/feature"
	_ "github.com/voxgig-sdk/finsignals-sdk/go/utility"
)

// Type aliases preserve external API.
type FinsignalsSDK = core.FinsignalsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FinsignalsEntity = core.FinsignalsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FinsignalsError = core.FinsignalsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewClassifyEntityFunc = func(client *core.FinsignalsSDK, entopts map[string]any) core.FinsignalsEntity {
		return entity.NewClassifyEntity(client, entopts)
	}
	core.NewHealthEntityFunc = func(client *core.FinsignalsSDK, entopts map[string]any) core.FinsignalsEntity {
		return entity.NewHealthEntity(client, entopts)
	}
	core.NewInternalEntityFunc = func(client *core.FinsignalsSDK, entopts map[string]any) core.FinsignalsEntity {
		return entity.NewInternalEntity(client, entopts)
	}
	core.NewRotationEntityFunc = func(client *core.FinsignalsSDK, entopts map[string]any) core.FinsignalsEntity {
		return entity.NewRotationEntity(client, entopts)
	}
	core.NewUsageEntityFunc = func(client *core.FinsignalsSDK, entopts map[string]any) core.FinsignalsEntity {
		return entity.NewUsageEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFinsignalsSDK = core.NewFinsignalsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewFinsignalsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *FinsignalsSDK  { return NewFinsignalsSDK(nil) }
func Test() *FinsignalsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
