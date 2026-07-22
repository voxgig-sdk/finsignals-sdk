package core

type FinsignalsError struct {
	IsFinsignalsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFinsignalsError(code string, msg string, ctx *Context) *FinsignalsError {
	return &FinsignalsError{
		IsFinsignalsError: true,
		Sdk:              "Finsignals",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FinsignalsError) Error() string {
	return e.Msg
}
