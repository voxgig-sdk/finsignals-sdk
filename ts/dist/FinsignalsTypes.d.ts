export interface Classify {
    body?: string;
    company_name?: string;
    credits_charged: number;
    endpoint_name: string;
    endpoint_type: string;
    items: any[];
    model_version: string;
    outputs: any[];
    request_id: string;
    ticker?: string;
    title?: string;
}
export interface ClassifyCreateData {
    body?: string;
    company_name?: string;
    credits_charged: number;
    endpoint_name: string;
    endpoint_type: string;
    items: any[];
    model_version: string;
    outputs: any[];
    request_id: string;
    ticker?: string;
    title?: string;
    $action?: string;
    [action: string]: any;
}
export interface Health {
}
export interface HealthLoadMatch {
}
export interface Internal {
}
export interface InternalCreateData {
}
export interface Rotation {
    credits_charged: number;
    endpoint_name: string;
    endpoint_type: string;
    generated_at: string;
    model_version: string;
    outlook_1y: Record<string, any>;
    outlook_5y: Record<string, any>;
    request_id: string;
    trading_date: string;
}
export interface RotationLoadMatch {
    credits_charged?: number;
    endpoint_name?: string;
    endpoint_type?: string;
    generated_at?: string;
    model_version?: string;
    outlook_1y?: Record<string, any>;
    outlook_5y?: Record<string, any>;
    request_id?: string;
    trading_date?: string;
}
export interface Usage {
}
export interface UsageLoadMatch {
}
