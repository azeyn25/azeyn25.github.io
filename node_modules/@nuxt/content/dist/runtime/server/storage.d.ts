import type { H3Event } from 'h3';
import type { QueryBuilderParams, ParsedContent, QueryBuilder, ContentTransformer } from '../types';
import type { ModuleOptions } from '../../module';
interface ParseContentOptions {
    csv?: ModuleOptions['csv'];
    yaml?: ModuleOptions['yaml'];
    highlight?: ModuleOptions['highlight'];
    markdown?: ModuleOptions['markdown'];
    transformers?: ContentTransformer[];
    pathMeta?: {
        locales?: ModuleOptions['locales'];
        defaultLocale?: ModuleOptions['defaultLocale'];
    };
    [key: string]: any;
}
export declare const sourceStorage: import("unstorage/dist/types-bb85dfb7").S;
export declare const cacheStorage: import("unstorage/dist/types-bb85dfb7").S;
export declare const cacheParsedStorage: import("unstorage/dist/types-bb85dfb7").S;
export declare const getContentsIds: (event: H3Event, prefix?: string) => Promise<string[]>;
export declare const getContentsList: (event: H3Event, prefix?: string) => Promise<ParsedContent[]>;
export declare const getContent: (event: H3Event, id: string) => Promise<ParsedContent>;
/**
 * Parse content file using registered plugins
 */
export declare function parseContent(id: string, content: string, opts?: ParseContentOptions): Promise<ParsedContent | {
    _id: string;
    body: string;
}>;
export declare const createServerQueryFetch: <T = ParsedContent>(event: H3Event) => (query: QueryBuilder<T>) => Promise<T | T[]>;
/**
 * Query contents
 */
export declare function serverQueryContent<T = ParsedContent>(event: H3Event): QueryBuilder<T>;
export declare function serverQueryContent<T = ParsedContent>(event: H3Event, params?: QueryBuilderParams): QueryBuilder<T>;
export declare function serverQueryContent<T = ParsedContent>(event: H3Event, query?: string, ...pathParts: string[]): QueryBuilder<T>;
export {};
