
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model LoanApplication
 * 
 */
export type LoanApplication = $Result.DefaultSelection<Prisma.$LoanApplicationPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model LoanStatusHistory
 * 
 */
export type LoanStatusHistory = $Result.DefaultSelection<Prisma.$LoanStatusHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanApplication`: Exposes CRUD operations for the **LoanApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanApplications
    * const loanApplications = await prisma.loanApplication.findMany()
    * ```
    */
  get loanApplication(): Prisma.LoanApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanStatusHistory`: Exposes CRUD operations for the **LoanStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanStatusHistories
    * const loanStatusHistories = await prisma.loanStatusHistory.findMany()
    * ```
    */
  get loanStatusHistory(): Prisma.LoanStatusHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    LoanApplication: 'LoanApplication',
    Document: 'Document',
    LoanStatusHistory: 'LoanStatusHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "loanApplication" | "document" | "loanStatusHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LoanApplication: {
        payload: Prisma.$LoanApplicationPayload<ExtArgs>
        fields: Prisma.LoanApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          findFirst: {
            args: Prisma.LoanApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          findMany: {
            args: Prisma.LoanApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>[]
          }
          create: {
            args: Prisma.LoanApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          createMany: {
            args: Prisma.LoanApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>[]
          }
          delete: {
            args: Prisma.LoanApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          update: {
            args: Prisma.LoanApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          deleteMany: {
            args: Prisma.LoanApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>[]
          }
          upsert: {
            args: Prisma.LoanApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          aggregate: {
            args: Prisma.LoanApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanApplication>
          }
          groupBy: {
            args: Prisma.LoanApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<LoanApplicationCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      LoanStatusHistory: {
        payload: Prisma.$LoanStatusHistoryPayload<ExtArgs>
        fields: Prisma.LoanStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.LoanStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.LoanStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.LoanStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.LoanStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.LoanStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>
          }
          update: {
            args: Prisma.LoanStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LoanStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanStatusHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>[]
          }
          upsert: {
            args: Prisma.LoanStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.LoanStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanStatusHistory>
          }
          groupBy: {
            args: Prisma.LoanStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<LoanStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    loanApplication?: LoanApplicationOmit
    document?: DocumentOmit
    loanStatusHistory?: LoanStatusHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanApplicationWhereInput
  }


  /**
   * Count Type LoanApplicationCountOutputType
   */

  export type LoanApplicationCountOutputType = {
    documents: number
    history: number
  }

  export type LoanApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | LoanApplicationCountOutputTypeCountDocumentsArgs
    history?: boolean | LoanApplicationCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * LoanApplicationCountOutputType without action
   */
  export type LoanApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplicationCountOutputType
     */
    select?: LoanApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanApplicationCountOutputType without action
   */
  export type LoanApplicationCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * LoanApplicationCountOutputType without action
   */
  export type LoanApplicationCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanStatusHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applications: Prisma.$LoanApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    where?: LoanApplicationWhereInput
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    cursor?: LoanApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LoanApplication
   */

  export type AggregateLoanApplication = {
    _count: LoanApplicationCountAggregateOutputType | null
    _avg: LoanApplicationAvgAggregateOutputType | null
    _sum: LoanApplicationSumAggregateOutputType | null
    _min: LoanApplicationMinAggregateOutputType | null
    _max: LoanApplicationMaxAggregateOutputType | null
  }

  export type LoanApplicationAvgAggregateOutputType = {
    monthlyIncome: number | null
    loanAmount: number | null
    tenure: number | null
    interestRate: number | null
    creditScore: number | null
    riskScore: number | null
  }

  export type LoanApplicationSumAggregateOutputType = {
    monthlyIncome: number | null
    loanAmount: number | null
    tenure: number | null
    interestRate: number | null
    creditScore: number | null
    riskScore: number | null
  }

  export type LoanApplicationMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    loanType: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    pan: string | null
    aadhaar: string | null
    address: string | null
    city: string | null
    state: string | null
    employmentType: string | null
    companyName: string | null
    monthlyIncome: number | null
    loanAmount: number | null
    tenure: number | null
    interestRate: number | null
    verified: boolean | null
    creditScore: number | null
    riskScore: number | null
    approvalStatus: string | null
    status: string | null
    signature: string | null
    adminRemark: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanApplicationMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    loanType: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    pan: string | null
    aadhaar: string | null
    address: string | null
    city: string | null
    state: string | null
    employmentType: string | null
    companyName: string | null
    monthlyIncome: number | null
    loanAmount: number | null
    tenure: number | null
    interestRate: number | null
    verified: boolean | null
    creditScore: number | null
    riskScore: number | null
    approvalStatus: string | null
    status: string | null
    signature: string | null
    adminRemark: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanApplicationCountAggregateOutputType = {
    id: number
    applicationId: number
    loanType: number
    fullName: number
    email: number
    phone: number
    pan: number
    aadhaar: number
    address: number
    city: number
    state: number
    employmentType: number
    companyName: number
    monthlyIncome: number
    loanAmount: number
    tenure: number
    interestRate: number
    verified: number
    creditScore: number
    riskScore: number
    approvalStatus: number
    status: number
    signature: number
    adminRemark: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoanApplicationAvgAggregateInputType = {
    monthlyIncome?: true
    loanAmount?: true
    tenure?: true
    interestRate?: true
    creditScore?: true
    riskScore?: true
  }

  export type LoanApplicationSumAggregateInputType = {
    monthlyIncome?: true
    loanAmount?: true
    tenure?: true
    interestRate?: true
    creditScore?: true
    riskScore?: true
  }

  export type LoanApplicationMinAggregateInputType = {
    id?: true
    applicationId?: true
    loanType?: true
    fullName?: true
    email?: true
    phone?: true
    pan?: true
    aadhaar?: true
    address?: true
    city?: true
    state?: true
    employmentType?: true
    companyName?: true
    monthlyIncome?: true
    loanAmount?: true
    tenure?: true
    interestRate?: true
    verified?: true
    creditScore?: true
    riskScore?: true
    approvalStatus?: true
    status?: true
    signature?: true
    adminRemark?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanApplicationMaxAggregateInputType = {
    id?: true
    applicationId?: true
    loanType?: true
    fullName?: true
    email?: true
    phone?: true
    pan?: true
    aadhaar?: true
    address?: true
    city?: true
    state?: true
    employmentType?: true
    companyName?: true
    monthlyIncome?: true
    loanAmount?: true
    tenure?: true
    interestRate?: true
    verified?: true
    creditScore?: true
    riskScore?: true
    approvalStatus?: true
    status?: true
    signature?: true
    adminRemark?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanApplicationCountAggregateInputType = {
    id?: true
    applicationId?: true
    loanType?: true
    fullName?: true
    email?: true
    phone?: true
    pan?: true
    aadhaar?: true
    address?: true
    city?: true
    state?: true
    employmentType?: true
    companyName?: true
    monthlyIncome?: true
    loanAmount?: true
    tenure?: true
    interestRate?: true
    verified?: true
    creditScore?: true
    riskScore?: true
    approvalStatus?: true
    status?: true
    signature?: true
    adminRemark?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoanApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanApplication to aggregate.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanApplications
    **/
    _count?: true | LoanApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanApplicationMaxAggregateInputType
  }

  export type GetLoanApplicationAggregateType<T extends LoanApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanApplication[P]>
      : GetScalarType<T[P], AggregateLoanApplication[P]>
  }




  export type LoanApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanApplicationWhereInput
    orderBy?: LoanApplicationOrderByWithAggregationInput | LoanApplicationOrderByWithAggregationInput[]
    by: LoanApplicationScalarFieldEnum[] | LoanApplicationScalarFieldEnum
    having?: LoanApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanApplicationCountAggregateInputType | true
    _avg?: LoanApplicationAvgAggregateInputType
    _sum?: LoanApplicationSumAggregateInputType
    _min?: LoanApplicationMinAggregateInputType
    _max?: LoanApplicationMaxAggregateInputType
  }

  export type LoanApplicationGroupByOutputType = {
    id: string
    applicationId: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address: string | null
    city: string | null
    state: string | null
    employmentType: string | null
    companyName: string | null
    monthlyIncome: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified: boolean
    creditScore: number | null
    riskScore: number | null
    approvalStatus: string
    status: string
    signature: string | null
    adminRemark: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: LoanApplicationCountAggregateOutputType | null
    _avg: LoanApplicationAvgAggregateOutputType | null
    _sum: LoanApplicationSumAggregateOutputType | null
    _min: LoanApplicationMinAggregateOutputType | null
    _max: LoanApplicationMaxAggregateOutputType | null
  }

  type GetLoanApplicationGroupByPayload<T extends LoanApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], LoanApplicationGroupByOutputType[P]>
        }
      >
    >


  export type LoanApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    loanType?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    pan?: boolean
    aadhaar?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    employmentType?: boolean
    companyName?: boolean
    monthlyIncome?: boolean
    loanAmount?: boolean
    tenure?: boolean
    interestRate?: boolean
    verified?: boolean
    creditScore?: boolean
    riskScore?: boolean
    approvalStatus?: boolean
    status?: boolean
    signature?: boolean
    adminRemark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | LoanApplication$documentsArgs<ExtArgs>
    history?: boolean | LoanApplication$historyArgs<ExtArgs>
    _count?: boolean | LoanApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanApplication"]>

  export type LoanApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    loanType?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    pan?: boolean
    aadhaar?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    employmentType?: boolean
    companyName?: boolean
    monthlyIncome?: boolean
    loanAmount?: boolean
    tenure?: boolean
    interestRate?: boolean
    verified?: boolean
    creditScore?: boolean
    riskScore?: boolean
    approvalStatus?: boolean
    status?: boolean
    signature?: boolean
    adminRemark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanApplication"]>

  export type LoanApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    loanType?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    pan?: boolean
    aadhaar?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    employmentType?: boolean
    companyName?: boolean
    monthlyIncome?: boolean
    loanAmount?: boolean
    tenure?: boolean
    interestRate?: boolean
    verified?: boolean
    creditScore?: boolean
    riskScore?: boolean
    approvalStatus?: boolean
    status?: boolean
    signature?: boolean
    adminRemark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanApplication"]>

  export type LoanApplicationSelectScalar = {
    id?: boolean
    applicationId?: boolean
    loanType?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    pan?: boolean
    aadhaar?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    employmentType?: boolean
    companyName?: boolean
    monthlyIncome?: boolean
    loanAmount?: boolean
    tenure?: boolean
    interestRate?: boolean
    verified?: boolean
    creditScore?: boolean
    riskScore?: boolean
    approvalStatus?: boolean
    status?: boolean
    signature?: boolean
    adminRemark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoanApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "loanType" | "fullName" | "email" | "phone" | "pan" | "aadhaar" | "address" | "city" | "state" | "employmentType" | "companyName" | "monthlyIncome" | "loanAmount" | "tenure" | "interestRate" | "verified" | "creditScore" | "riskScore" | "approvalStatus" | "status" | "signature" | "adminRemark" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["loanApplication"]>
  export type LoanApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | LoanApplication$documentsArgs<ExtArgs>
    history?: boolean | LoanApplication$historyArgs<ExtArgs>
    _count?: boolean | LoanApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoanApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoanApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoanApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      history: Prisma.$LoanStatusHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      loanType: string
      fullName: string
      email: string
      phone: string
      pan: string
      aadhaar: string
      address: string | null
      city: string | null
      state: string | null
      employmentType: string | null
      companyName: string | null
      monthlyIncome: number | null
      loanAmount: number
      tenure: number
      interestRate: number
      verified: boolean
      creditScore: number | null
      riskScore: number | null
      approvalStatus: string
      status: string
      signature: string | null
      adminRemark: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loanApplication"]>
    composites: {}
  }

  type LoanApplicationGetPayload<S extends boolean | null | undefined | LoanApplicationDefaultArgs> = $Result.GetResult<Prisma.$LoanApplicationPayload, S>

  type LoanApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanApplicationCountAggregateInputType | true
    }

  export interface LoanApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanApplication'], meta: { name: 'LoanApplication' } }
    /**
     * Find zero or one LoanApplication that matches the filter.
     * @param {LoanApplicationFindUniqueArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanApplicationFindUniqueArgs>(args: SelectSubset<T, LoanApplicationFindUniqueArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanApplicationFindUniqueOrThrowArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationFindFirstArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanApplicationFindFirstArgs>(args?: SelectSubset<T, LoanApplicationFindFirstArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationFindFirstOrThrowArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanApplications
     * const loanApplications = await prisma.loanApplication.findMany()
     * 
     * // Get first 10 LoanApplications
     * const loanApplications = await prisma.loanApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanApplicationWithIdOnly = await prisma.loanApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanApplicationFindManyArgs>(args?: SelectSubset<T, LoanApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanApplication.
     * @param {LoanApplicationCreateArgs} args - Arguments to create a LoanApplication.
     * @example
     * // Create one LoanApplication
     * const LoanApplication = await prisma.loanApplication.create({
     *   data: {
     *     // ... data to create a LoanApplication
     *   }
     * })
     * 
     */
    create<T extends LoanApplicationCreateArgs>(args: SelectSubset<T, LoanApplicationCreateArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanApplications.
     * @param {LoanApplicationCreateManyArgs} args - Arguments to create many LoanApplications.
     * @example
     * // Create many LoanApplications
     * const loanApplication = await prisma.loanApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanApplicationCreateManyArgs>(args?: SelectSubset<T, LoanApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanApplications and returns the data saved in the database.
     * @param {LoanApplicationCreateManyAndReturnArgs} args - Arguments to create many LoanApplications.
     * @example
     * // Create many LoanApplications
     * const loanApplication = await prisma.loanApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanApplications and only return the `id`
     * const loanApplicationWithIdOnly = await prisma.loanApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanApplication.
     * @param {LoanApplicationDeleteArgs} args - Arguments to delete one LoanApplication.
     * @example
     * // Delete one LoanApplication
     * const LoanApplication = await prisma.loanApplication.delete({
     *   where: {
     *     // ... filter to delete one LoanApplication
     *   }
     * })
     * 
     */
    delete<T extends LoanApplicationDeleteArgs>(args: SelectSubset<T, LoanApplicationDeleteArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanApplication.
     * @param {LoanApplicationUpdateArgs} args - Arguments to update one LoanApplication.
     * @example
     * // Update one LoanApplication
     * const loanApplication = await prisma.loanApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanApplicationUpdateArgs>(args: SelectSubset<T, LoanApplicationUpdateArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanApplications.
     * @param {LoanApplicationDeleteManyArgs} args - Arguments to filter LoanApplications to delete.
     * @example
     * // Delete a few LoanApplications
     * const { count } = await prisma.loanApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanApplicationDeleteManyArgs>(args?: SelectSubset<T, LoanApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanApplications
     * const loanApplication = await prisma.loanApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanApplicationUpdateManyArgs>(args: SelectSubset<T, LoanApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanApplications and returns the data updated in the database.
     * @param {LoanApplicationUpdateManyAndReturnArgs} args - Arguments to update many LoanApplications.
     * @example
     * // Update many LoanApplications
     * const loanApplication = await prisma.loanApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanApplications and only return the `id`
     * const loanApplicationWithIdOnly = await prisma.loanApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanApplication.
     * @param {LoanApplicationUpsertArgs} args - Arguments to update or create a LoanApplication.
     * @example
     * // Update or create a LoanApplication
     * const loanApplication = await prisma.loanApplication.upsert({
     *   create: {
     *     // ... data to create a LoanApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanApplication we want to update
     *   }
     * })
     */
    upsert<T extends LoanApplicationUpsertArgs>(args: SelectSubset<T, LoanApplicationUpsertArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationCountArgs} args - Arguments to filter LoanApplications to count.
     * @example
     * // Count the number of LoanApplications
     * const count = await prisma.loanApplication.count({
     *   where: {
     *     // ... the filter for the LoanApplications we want to count
     *   }
     * })
    **/
    count<T extends LoanApplicationCountArgs>(
      args?: Subset<T, LoanApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanApplicationAggregateArgs>(args: Subset<T, LoanApplicationAggregateArgs>): Prisma.PrismaPromise<GetLoanApplicationAggregateType<T>>

    /**
     * Group by LoanApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanApplicationGroupByArgs['orderBy'] }
        : { orderBy?: LoanApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanApplication model
   */
  readonly fields: LoanApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends LoanApplication$documentsArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplication$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends LoanApplication$historyArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplication$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanApplication model
   */
  interface LoanApplicationFieldRefs {
    readonly id: FieldRef<"LoanApplication", 'String'>
    readonly applicationId: FieldRef<"LoanApplication", 'String'>
    readonly loanType: FieldRef<"LoanApplication", 'String'>
    readonly fullName: FieldRef<"LoanApplication", 'String'>
    readonly email: FieldRef<"LoanApplication", 'String'>
    readonly phone: FieldRef<"LoanApplication", 'String'>
    readonly pan: FieldRef<"LoanApplication", 'String'>
    readonly aadhaar: FieldRef<"LoanApplication", 'String'>
    readonly address: FieldRef<"LoanApplication", 'String'>
    readonly city: FieldRef<"LoanApplication", 'String'>
    readonly state: FieldRef<"LoanApplication", 'String'>
    readonly employmentType: FieldRef<"LoanApplication", 'String'>
    readonly companyName: FieldRef<"LoanApplication", 'String'>
    readonly monthlyIncome: FieldRef<"LoanApplication", 'Float'>
    readonly loanAmount: FieldRef<"LoanApplication", 'Float'>
    readonly tenure: FieldRef<"LoanApplication", 'Int'>
    readonly interestRate: FieldRef<"LoanApplication", 'Float'>
    readonly verified: FieldRef<"LoanApplication", 'Boolean'>
    readonly creditScore: FieldRef<"LoanApplication", 'Int'>
    readonly riskScore: FieldRef<"LoanApplication", 'Int'>
    readonly approvalStatus: FieldRef<"LoanApplication", 'String'>
    readonly status: FieldRef<"LoanApplication", 'String'>
    readonly signature: FieldRef<"LoanApplication", 'String'>
    readonly adminRemark: FieldRef<"LoanApplication", 'String'>
    readonly userId: FieldRef<"LoanApplication", 'String'>
    readonly createdAt: FieldRef<"LoanApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"LoanApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanApplication findUnique
   */
  export type LoanApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication findUniqueOrThrow
   */
  export type LoanApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication findFirst
   */
  export type LoanApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanApplications.
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanApplications.
     */
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * LoanApplication findFirstOrThrow
   */
  export type LoanApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanApplications.
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanApplications.
     */
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * LoanApplication findMany
   */
  export type LoanApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplications to fetch.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanApplications.
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanApplications.
     */
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * LoanApplication create
   */
  export type LoanApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanApplication.
     */
    data: XOR<LoanApplicationCreateInput, LoanApplicationUncheckedCreateInput>
  }

  /**
   * LoanApplication createMany
   */
  export type LoanApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanApplications.
     */
    data: LoanApplicationCreateManyInput | LoanApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanApplication createManyAndReturn
   */
  export type LoanApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many LoanApplications.
     */
    data: LoanApplicationCreateManyInput | LoanApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanApplication update
   */
  export type LoanApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanApplication.
     */
    data: XOR<LoanApplicationUpdateInput, LoanApplicationUncheckedUpdateInput>
    /**
     * Choose, which LoanApplication to update.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication updateMany
   */
  export type LoanApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanApplications.
     */
    data: XOR<LoanApplicationUpdateManyMutationInput, LoanApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LoanApplications to update
     */
    where?: LoanApplicationWhereInput
    /**
     * Limit how many LoanApplications to update.
     */
    limit?: number
  }

  /**
   * LoanApplication updateManyAndReturn
   */
  export type LoanApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * The data used to update LoanApplications.
     */
    data: XOR<LoanApplicationUpdateManyMutationInput, LoanApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LoanApplications to update
     */
    where?: LoanApplicationWhereInput
    /**
     * Limit how many LoanApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanApplication upsert
   */
  export type LoanApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanApplication to update in case it exists.
     */
    where: LoanApplicationWhereUniqueInput
    /**
     * In case the LoanApplication found by the `where` argument doesn't exist, create a new LoanApplication with this data.
     */
    create: XOR<LoanApplicationCreateInput, LoanApplicationUncheckedCreateInput>
    /**
     * In case the LoanApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanApplicationUpdateInput, LoanApplicationUncheckedUpdateInput>
  }

  /**
   * LoanApplication delete
   */
  export type LoanApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter which LoanApplication to delete.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication deleteMany
   */
  export type LoanApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanApplications to delete
     */
    where?: LoanApplicationWhereInput
    /**
     * Limit how many LoanApplications to delete.
     */
    limit?: number
  }

  /**
   * LoanApplication.documents
   */
  export type LoanApplication$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * LoanApplication.history
   */
  export type LoanApplication$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    where?: LoanStatusHistoryWhereInput
    orderBy?: LoanStatusHistoryOrderByWithRelationInput | LoanStatusHistoryOrderByWithRelationInput[]
    cursor?: LoanStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanStatusHistoryScalarFieldEnum | LoanStatusHistoryScalarFieldEnum[]
  }

  /**
   * LoanApplication without action
   */
  export type LoanApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    documentType: string | null
    fileName: string | null
    fileUrl: string | null
    status: string | null
    uploadedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    documentType: string | null
    fileName: string | null
    fileUrl: string | null
    status: string | null
    uploadedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    applicationId: number
    documentType: number
    fileName: number
    fileUrl: number
    status: number
    uploadedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    applicationId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    status?: true
    uploadedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    applicationId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    status?: true
    uploadedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    applicationId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    status?: true
    uploadedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    applicationId: string
    documentType: string
    fileName: string
    fileUrl: string
    status: string
    uploadedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    status?: boolean
    uploadedAt?: boolean
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    status?: boolean
    uploadedAt?: boolean
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    status?: boolean
    uploadedAt?: boolean
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    status?: boolean
    uploadedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "documentType" | "fileName" | "fileUrl" | "status" | "uploadedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      application: Prisma.$LoanApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      documentType: string
      fileName: string
      fileUrl: string
      status: string
      uploadedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends LoanApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplicationDefaultArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly applicationId: FieldRef<"Document", 'String'>
    readonly documentType: FieldRef<"Document", 'String'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly fileUrl: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model LoanStatusHistory
   */

  export type AggregateLoanStatusHistory = {
    _count: LoanStatusHistoryCountAggregateOutputType | null
    _min: LoanStatusHistoryMinAggregateOutputType | null
    _max: LoanStatusHistoryMaxAggregateOutputType | null
  }

  export type LoanStatusHistoryMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    status: string | null
    remark: string | null
    createdAt: Date | null
  }

  export type LoanStatusHistoryMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    status: string | null
    remark: string | null
    createdAt: Date | null
  }

  export type LoanStatusHistoryCountAggregateOutputType = {
    id: number
    applicationId: number
    status: number
    remark: number
    createdAt: number
    _all: number
  }


  export type LoanStatusHistoryMinAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    remark?: true
    createdAt?: true
  }

  export type LoanStatusHistoryMaxAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    remark?: true
    createdAt?: true
  }

  export type LoanStatusHistoryCountAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    remark?: true
    createdAt?: true
    _all?: true
  }

  export type LoanStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanStatusHistory to aggregate.
     */
    where?: LoanStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStatusHistories to fetch.
     */
    orderBy?: LoanStatusHistoryOrderByWithRelationInput | LoanStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanStatusHistories
    **/
    _count?: true | LoanStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanStatusHistoryMaxAggregateInputType
  }

  export type GetLoanStatusHistoryAggregateType<T extends LoanStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanStatusHistory[P]>
      : GetScalarType<T[P], AggregateLoanStatusHistory[P]>
  }




  export type LoanStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanStatusHistoryWhereInput
    orderBy?: LoanStatusHistoryOrderByWithAggregationInput | LoanStatusHistoryOrderByWithAggregationInput[]
    by: LoanStatusHistoryScalarFieldEnum[] | LoanStatusHistoryScalarFieldEnum
    having?: LoanStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanStatusHistoryCountAggregateInputType | true
    _min?: LoanStatusHistoryMinAggregateInputType
    _max?: LoanStatusHistoryMaxAggregateInputType
  }

  export type LoanStatusHistoryGroupByOutputType = {
    id: string
    applicationId: string
    status: string
    remark: string | null
    createdAt: Date
    _count: LoanStatusHistoryCountAggregateOutputType | null
    _min: LoanStatusHistoryMinAggregateOutputType | null
    _max: LoanStatusHistoryMaxAggregateOutputType | null
  }

  type GetLoanStatusHistoryGroupByPayload<T extends LoanStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LoanStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LoanStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanStatusHistory"]>

  export type LoanStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanStatusHistory"]>

  export type LoanStatusHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanStatusHistory"]>

  export type LoanStatusHistorySelectScalar = {
    id?: boolean
    applicationId?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
  }

  export type LoanStatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "status" | "remark" | "createdAt", ExtArgs["result"]["loanStatusHistory"]>
  export type LoanStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }
  export type LoanStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }
  export type LoanStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | LoanApplicationDefaultArgs<ExtArgs>
  }

  export type $LoanStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanStatusHistory"
    objects: {
      application: Prisma.$LoanApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      status: string
      remark: string | null
      createdAt: Date
    }, ExtArgs["result"]["loanStatusHistory"]>
    composites: {}
  }

  type LoanStatusHistoryGetPayload<S extends boolean | null | undefined | LoanStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$LoanStatusHistoryPayload, S>

  type LoanStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanStatusHistoryCountAggregateInputType | true
    }

  export interface LoanStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanStatusHistory'], meta: { name: 'LoanStatusHistory' } }
    /**
     * Find zero or one LoanStatusHistory that matches the filter.
     * @param {LoanStatusHistoryFindUniqueArgs} args - Arguments to find a LoanStatusHistory
     * @example
     * // Get one LoanStatusHistory
     * const loanStatusHistory = await prisma.loanStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanStatusHistoryFindUniqueArgs>(args: SelectSubset<T, LoanStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a LoanStatusHistory
     * @example
     * // Get one LoanStatusHistory
     * const loanStatusHistory = await prisma.loanStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStatusHistoryFindFirstArgs} args - Arguments to find a LoanStatusHistory
     * @example
     * // Get one LoanStatusHistory
     * const loanStatusHistory = await prisma.loanStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanStatusHistoryFindFirstArgs>(args?: SelectSubset<T, LoanStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a LoanStatusHistory
     * @example
     * // Get one LoanStatusHistory
     * const loanStatusHistory = await prisma.loanStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanStatusHistories
     * const loanStatusHistories = await prisma.loanStatusHistory.findMany()
     * 
     * // Get first 10 LoanStatusHistories
     * const loanStatusHistories = await prisma.loanStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanStatusHistoryWithIdOnly = await prisma.loanStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanStatusHistoryFindManyArgs>(args?: SelectSubset<T, LoanStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanStatusHistory.
     * @param {LoanStatusHistoryCreateArgs} args - Arguments to create a LoanStatusHistory.
     * @example
     * // Create one LoanStatusHistory
     * const LoanStatusHistory = await prisma.loanStatusHistory.create({
     *   data: {
     *     // ... data to create a LoanStatusHistory
     *   }
     * })
     * 
     */
    create<T extends LoanStatusHistoryCreateArgs>(args: SelectSubset<T, LoanStatusHistoryCreateArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanStatusHistories.
     * @param {LoanStatusHistoryCreateManyArgs} args - Arguments to create many LoanStatusHistories.
     * @example
     * // Create many LoanStatusHistories
     * const loanStatusHistory = await prisma.loanStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanStatusHistoryCreateManyArgs>(args?: SelectSubset<T, LoanStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanStatusHistories and returns the data saved in the database.
     * @param {LoanStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many LoanStatusHistories.
     * @example
     * // Create many LoanStatusHistories
     * const loanStatusHistory = await prisma.loanStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanStatusHistories and only return the `id`
     * const loanStatusHistoryWithIdOnly = await prisma.loanStatusHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanStatusHistory.
     * @param {LoanStatusHistoryDeleteArgs} args - Arguments to delete one LoanStatusHistory.
     * @example
     * // Delete one LoanStatusHistory
     * const LoanStatusHistory = await prisma.loanStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one LoanStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends LoanStatusHistoryDeleteArgs>(args: SelectSubset<T, LoanStatusHistoryDeleteArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanStatusHistory.
     * @param {LoanStatusHistoryUpdateArgs} args - Arguments to update one LoanStatusHistory.
     * @example
     * // Update one LoanStatusHistory
     * const loanStatusHistory = await prisma.loanStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanStatusHistoryUpdateArgs>(args: SelectSubset<T, LoanStatusHistoryUpdateArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanStatusHistories.
     * @param {LoanStatusHistoryDeleteManyArgs} args - Arguments to filter LoanStatusHistories to delete.
     * @example
     * // Delete a few LoanStatusHistories
     * const { count } = await prisma.loanStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, LoanStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanStatusHistories
     * const loanStatusHistory = await prisma.loanStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanStatusHistoryUpdateManyArgs>(args: SelectSubset<T, LoanStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanStatusHistories and returns the data updated in the database.
     * @param {LoanStatusHistoryUpdateManyAndReturnArgs} args - Arguments to update many LoanStatusHistories.
     * @example
     * // Update many LoanStatusHistories
     * const loanStatusHistory = await prisma.loanStatusHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanStatusHistories and only return the `id`
     * const loanStatusHistoryWithIdOnly = await prisma.loanStatusHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanStatusHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanStatusHistory.
     * @param {LoanStatusHistoryUpsertArgs} args - Arguments to update or create a LoanStatusHistory.
     * @example
     * // Update or create a LoanStatusHistory
     * const loanStatusHistory = await prisma.loanStatusHistory.upsert({
     *   create: {
     *     // ... data to create a LoanStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends LoanStatusHistoryUpsertArgs>(args: SelectSubset<T, LoanStatusHistoryUpsertArgs<ExtArgs>>): Prisma__LoanStatusHistoryClient<$Result.GetResult<Prisma.$LoanStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStatusHistoryCountArgs} args - Arguments to filter LoanStatusHistories to count.
     * @example
     * // Count the number of LoanStatusHistories
     * const count = await prisma.loanStatusHistory.count({
     *   where: {
     *     // ... the filter for the LoanStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends LoanStatusHistoryCountArgs>(
      args?: Subset<T, LoanStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanStatusHistoryAggregateArgs>(args: Subset<T, LoanStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetLoanStatusHistoryAggregateType<T>>

    /**
     * Group by LoanStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LoanStatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanStatusHistory model
   */
  readonly fields: LoanStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends LoanApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplicationDefaultArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanStatusHistory model
   */
  interface LoanStatusHistoryFieldRefs {
    readonly id: FieldRef<"LoanStatusHistory", 'String'>
    readonly applicationId: FieldRef<"LoanStatusHistory", 'String'>
    readonly status: FieldRef<"LoanStatusHistory", 'String'>
    readonly remark: FieldRef<"LoanStatusHistory", 'String'>
    readonly createdAt: FieldRef<"LoanStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanStatusHistory findUnique
   */
  export type LoanStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoanStatusHistory to fetch.
     */
    where: LoanStatusHistoryWhereUniqueInput
  }

  /**
   * LoanStatusHistory findUniqueOrThrow
   */
  export type LoanStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoanStatusHistory to fetch.
     */
    where: LoanStatusHistoryWhereUniqueInput
  }

  /**
   * LoanStatusHistory findFirst
   */
  export type LoanStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoanStatusHistory to fetch.
     */
    where?: LoanStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStatusHistories to fetch.
     */
    orderBy?: LoanStatusHistoryOrderByWithRelationInput | LoanStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanStatusHistories.
     */
    cursor?: LoanStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanStatusHistories.
     */
    distinct?: LoanStatusHistoryScalarFieldEnum | LoanStatusHistoryScalarFieldEnum[]
  }

  /**
   * LoanStatusHistory findFirstOrThrow
   */
  export type LoanStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoanStatusHistory to fetch.
     */
    where?: LoanStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStatusHistories to fetch.
     */
    orderBy?: LoanStatusHistoryOrderByWithRelationInput | LoanStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanStatusHistories.
     */
    cursor?: LoanStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanStatusHistories.
     */
    distinct?: LoanStatusHistoryScalarFieldEnum | LoanStatusHistoryScalarFieldEnum[]
  }

  /**
   * LoanStatusHistory findMany
   */
  export type LoanStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoanStatusHistories to fetch.
     */
    where?: LoanStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStatusHistories to fetch.
     */
    orderBy?: LoanStatusHistoryOrderByWithRelationInput | LoanStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanStatusHistories.
     */
    cursor?: LoanStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanStatusHistories.
     */
    distinct?: LoanStatusHistoryScalarFieldEnum | LoanStatusHistoryScalarFieldEnum[]
  }

  /**
   * LoanStatusHistory create
   */
  export type LoanStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanStatusHistory.
     */
    data: XOR<LoanStatusHistoryCreateInput, LoanStatusHistoryUncheckedCreateInput>
  }

  /**
   * LoanStatusHistory createMany
   */
  export type LoanStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanStatusHistories.
     */
    data: LoanStatusHistoryCreateManyInput | LoanStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanStatusHistory createManyAndReturn
   */
  export type LoanStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many LoanStatusHistories.
     */
    data: LoanStatusHistoryCreateManyInput | LoanStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanStatusHistory update
   */
  export type LoanStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanStatusHistory.
     */
    data: XOR<LoanStatusHistoryUpdateInput, LoanStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which LoanStatusHistory to update.
     */
    where: LoanStatusHistoryWhereUniqueInput
  }

  /**
   * LoanStatusHistory updateMany
   */
  export type LoanStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanStatusHistories.
     */
    data: XOR<LoanStatusHistoryUpdateManyMutationInput, LoanStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LoanStatusHistories to update
     */
    where?: LoanStatusHistoryWhereInput
    /**
     * Limit how many LoanStatusHistories to update.
     */
    limit?: number
  }

  /**
   * LoanStatusHistory updateManyAndReturn
   */
  export type LoanStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to update LoanStatusHistories.
     */
    data: XOR<LoanStatusHistoryUpdateManyMutationInput, LoanStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LoanStatusHistories to update
     */
    where?: LoanStatusHistoryWhereInput
    /**
     * Limit how many LoanStatusHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanStatusHistory upsert
   */
  export type LoanStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanStatusHistory to update in case it exists.
     */
    where: LoanStatusHistoryWhereUniqueInput
    /**
     * In case the LoanStatusHistory found by the `where` argument doesn't exist, create a new LoanStatusHistory with this data.
     */
    create: XOR<LoanStatusHistoryCreateInput, LoanStatusHistoryUncheckedCreateInput>
    /**
     * In case the LoanStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanStatusHistoryUpdateInput, LoanStatusHistoryUncheckedUpdateInput>
  }

  /**
   * LoanStatusHistory delete
   */
  export type LoanStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which LoanStatusHistory to delete.
     */
    where: LoanStatusHistoryWhereUniqueInput
  }

  /**
   * LoanStatusHistory deleteMany
   */
  export type LoanStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanStatusHistories to delete
     */
    where?: LoanStatusHistoryWhereInput
    /**
     * Limit how many LoanStatusHistories to delete.
     */
    limit?: number
  }

  /**
   * LoanStatusHistory without action
   */
  export type LoanStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStatusHistory
     */
    select?: LoanStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStatusHistory
     */
    omit?: LoanStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LoanApplicationScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    loanType: 'loanType',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    pan: 'pan',
    aadhaar: 'aadhaar',
    address: 'address',
    city: 'city',
    state: 'state',
    employmentType: 'employmentType',
    companyName: 'companyName',
    monthlyIncome: 'monthlyIncome',
    loanAmount: 'loanAmount',
    tenure: 'tenure',
    interestRate: 'interestRate',
    verified: 'verified',
    creditScore: 'creditScore',
    riskScore: 'riskScore',
    approvalStatus: 'approvalStatus',
    status: 'status',
    signature: 'signature',
    adminRemark: 'adminRemark',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoanApplicationScalarFieldEnum = (typeof LoanApplicationScalarFieldEnum)[keyof typeof LoanApplicationScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    documentType: 'documentType',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    status: 'status',
    uploadedAt: 'uploadedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const LoanStatusHistoryScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    status: 'status',
    remark: 'remark',
    createdAt: 'createdAt'
  };

  export type LoanStatusHistoryScalarFieldEnum = (typeof LoanStatusHistoryScalarFieldEnum)[keyof typeof LoanStatusHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: LoanApplicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: LoanApplicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: LoanApplicationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LoanApplicationWhereInput = {
    AND?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    OR?: LoanApplicationWhereInput[]
    NOT?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    id?: StringFilter<"LoanApplication"> | string
    applicationId?: StringFilter<"LoanApplication"> | string
    loanType?: StringFilter<"LoanApplication"> | string
    fullName?: StringFilter<"LoanApplication"> | string
    email?: StringFilter<"LoanApplication"> | string
    phone?: StringFilter<"LoanApplication"> | string
    pan?: StringFilter<"LoanApplication"> | string
    aadhaar?: StringFilter<"LoanApplication"> | string
    address?: StringNullableFilter<"LoanApplication"> | string | null
    city?: StringNullableFilter<"LoanApplication"> | string | null
    state?: StringNullableFilter<"LoanApplication"> | string | null
    employmentType?: StringNullableFilter<"LoanApplication"> | string | null
    companyName?: StringNullableFilter<"LoanApplication"> | string | null
    monthlyIncome?: FloatNullableFilter<"LoanApplication"> | number | null
    loanAmount?: FloatFilter<"LoanApplication"> | number
    tenure?: IntFilter<"LoanApplication"> | number
    interestRate?: FloatFilter<"LoanApplication"> | number
    verified?: BoolFilter<"LoanApplication"> | boolean
    creditScore?: IntNullableFilter<"LoanApplication"> | number | null
    riskScore?: IntNullableFilter<"LoanApplication"> | number | null
    approvalStatus?: StringFilter<"LoanApplication"> | string
    status?: StringFilter<"LoanApplication"> | string
    signature?: StringNullableFilter<"LoanApplication"> | string | null
    adminRemark?: StringNullableFilter<"LoanApplication"> | string | null
    userId?: StringFilter<"LoanApplication"> | string
    createdAt?: DateTimeFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LoanApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    history?: LoanStatusHistoryListRelationFilter
  }

  export type LoanApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    loanType?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    pan?: SortOrder
    aadhaar?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    monthlyIncome?: SortOrderInput | SortOrder
    loanAmount?: SortOrder
    tenure?: SortOrder
    interestRate?: SortOrder
    verified?: SortOrder
    creditScore?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    approvalStatus?: SortOrder
    status?: SortOrder
    signature?: SortOrderInput | SortOrder
    adminRemark?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    history?: LoanStatusHistoryOrderByRelationAggregateInput
  }

  export type LoanApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicationId?: string
    AND?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    OR?: LoanApplicationWhereInput[]
    NOT?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    loanType?: StringFilter<"LoanApplication"> | string
    fullName?: StringFilter<"LoanApplication"> | string
    email?: StringFilter<"LoanApplication"> | string
    phone?: StringFilter<"LoanApplication"> | string
    pan?: StringFilter<"LoanApplication"> | string
    aadhaar?: StringFilter<"LoanApplication"> | string
    address?: StringNullableFilter<"LoanApplication"> | string | null
    city?: StringNullableFilter<"LoanApplication"> | string | null
    state?: StringNullableFilter<"LoanApplication"> | string | null
    employmentType?: StringNullableFilter<"LoanApplication"> | string | null
    companyName?: StringNullableFilter<"LoanApplication"> | string | null
    monthlyIncome?: FloatNullableFilter<"LoanApplication"> | number | null
    loanAmount?: FloatFilter<"LoanApplication"> | number
    tenure?: IntFilter<"LoanApplication"> | number
    interestRate?: FloatFilter<"LoanApplication"> | number
    verified?: BoolFilter<"LoanApplication"> | boolean
    creditScore?: IntNullableFilter<"LoanApplication"> | number | null
    riskScore?: IntNullableFilter<"LoanApplication"> | number | null
    approvalStatus?: StringFilter<"LoanApplication"> | string
    status?: StringFilter<"LoanApplication"> | string
    signature?: StringNullableFilter<"LoanApplication"> | string | null
    adminRemark?: StringNullableFilter<"LoanApplication"> | string | null
    userId?: StringFilter<"LoanApplication"> | string
    createdAt?: DateTimeFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LoanApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    history?: LoanStatusHistoryListRelationFilter
  }, "id" | "applicationId">

  export type LoanApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    loanType?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    pan?: SortOrder
    aadhaar?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    monthlyIncome?: SortOrderInput | SortOrder
    loanAmount?: SortOrder
    tenure?: SortOrder
    interestRate?: SortOrder
    verified?: SortOrder
    creditScore?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    approvalStatus?: SortOrder
    status?: SortOrder
    signature?: SortOrderInput | SortOrder
    adminRemark?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoanApplicationCountOrderByAggregateInput
    _avg?: LoanApplicationAvgOrderByAggregateInput
    _max?: LoanApplicationMaxOrderByAggregateInput
    _min?: LoanApplicationMinOrderByAggregateInput
    _sum?: LoanApplicationSumOrderByAggregateInput
  }

  export type LoanApplicationScalarWhereWithAggregatesInput = {
    AND?: LoanApplicationScalarWhereWithAggregatesInput | LoanApplicationScalarWhereWithAggregatesInput[]
    OR?: LoanApplicationScalarWhereWithAggregatesInput[]
    NOT?: LoanApplicationScalarWhereWithAggregatesInput | LoanApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanApplication"> | string
    applicationId?: StringWithAggregatesFilter<"LoanApplication"> | string
    loanType?: StringWithAggregatesFilter<"LoanApplication"> | string
    fullName?: StringWithAggregatesFilter<"LoanApplication"> | string
    email?: StringWithAggregatesFilter<"LoanApplication"> | string
    phone?: StringWithAggregatesFilter<"LoanApplication"> | string
    pan?: StringWithAggregatesFilter<"LoanApplication"> | string
    aadhaar?: StringWithAggregatesFilter<"LoanApplication"> | string
    address?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    city?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    state?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    employmentType?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    monthlyIncome?: FloatNullableWithAggregatesFilter<"LoanApplication"> | number | null
    loanAmount?: FloatWithAggregatesFilter<"LoanApplication"> | number
    tenure?: IntWithAggregatesFilter<"LoanApplication"> | number
    interestRate?: FloatWithAggregatesFilter<"LoanApplication"> | number
    verified?: BoolWithAggregatesFilter<"LoanApplication"> | boolean
    creditScore?: IntNullableWithAggregatesFilter<"LoanApplication"> | number | null
    riskScore?: IntNullableWithAggregatesFilter<"LoanApplication"> | number | null
    approvalStatus?: StringWithAggregatesFilter<"LoanApplication"> | string
    status?: StringWithAggregatesFilter<"LoanApplication"> | string
    signature?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    adminRemark?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    userId?: StringWithAggregatesFilter<"LoanApplication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoanApplication"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    applicationId?: StringFilter<"Document"> | string
    documentType?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileUrl?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    application?: XOR<LoanApplicationScalarRelationFilter, LoanApplicationWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
    application?: LoanApplicationOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    applicationId?: StringFilter<"Document"> | string
    documentType?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileUrl?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    application?: XOR<LoanApplicationScalarRelationFilter, LoanApplicationWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    applicationId?: StringWithAggregatesFilter<"Document"> | string
    documentType?: StringWithAggregatesFilter<"Document"> | string
    fileName?: StringWithAggregatesFilter<"Document"> | string
    fileUrl?: StringWithAggregatesFilter<"Document"> | string
    status?: StringWithAggregatesFilter<"Document"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type LoanStatusHistoryWhereInput = {
    AND?: LoanStatusHistoryWhereInput | LoanStatusHistoryWhereInput[]
    OR?: LoanStatusHistoryWhereInput[]
    NOT?: LoanStatusHistoryWhereInput | LoanStatusHistoryWhereInput[]
    id?: StringFilter<"LoanStatusHistory"> | string
    applicationId?: StringFilter<"LoanStatusHistory"> | string
    status?: StringFilter<"LoanStatusHistory"> | string
    remark?: StringNullableFilter<"LoanStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"LoanStatusHistory"> | Date | string
    application?: XOR<LoanApplicationScalarRelationFilter, LoanApplicationWhereInput>
  }

  export type LoanStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    application?: LoanApplicationOrderByWithRelationInput
  }

  export type LoanStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanStatusHistoryWhereInput | LoanStatusHistoryWhereInput[]
    OR?: LoanStatusHistoryWhereInput[]
    NOT?: LoanStatusHistoryWhereInput | LoanStatusHistoryWhereInput[]
    applicationId?: StringFilter<"LoanStatusHistory"> | string
    status?: StringFilter<"LoanStatusHistory"> | string
    remark?: StringNullableFilter<"LoanStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"LoanStatusHistory"> | Date | string
    application?: XOR<LoanApplicationScalarRelationFilter, LoanApplicationWhereInput>
  }, "id">

  export type LoanStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LoanStatusHistoryCountOrderByAggregateInput
    _max?: LoanStatusHistoryMaxOrderByAggregateInput
    _min?: LoanStatusHistoryMinOrderByAggregateInput
  }

  export type LoanStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: LoanStatusHistoryScalarWhereWithAggregatesInput | LoanStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: LoanStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: LoanStatusHistoryScalarWhereWithAggregatesInput | LoanStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanStatusHistory"> | string
    applicationId?: StringWithAggregatesFilter<"LoanStatusHistory"> | string
    status?: StringWithAggregatesFilter<"LoanStatusHistory"> | string
    remark?: StringNullableWithAggregatesFilter<"LoanStatusHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LoanStatusHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: LoanApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: LoanApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: LoanApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: LoanApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanApplicationCreateInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    documents?: DocumentCreateNestedManyWithoutApplicationInput
    history?: LoanStatusHistoryCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationUncheckedCreateInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
    history?: LoanStatusHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
    history?: LoanStatusHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
    history?: LoanStatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationCreateManyInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    status?: string
    uploadedAt?: Date | string
    application: LoanApplicationCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    applicationId: string
    documentType: string
    fileName: string
    fileUrl: string
    status?: string
    uploadedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: LoanApplicationUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    applicationId: string
    documentType: string
    fileName: string
    fileUrl: string
    status?: string
    uploadedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStatusHistoryCreateInput = {
    id?: string
    status: string
    remark?: string | null
    createdAt?: Date | string
    application: LoanApplicationCreateNestedOneWithoutHistoryInput
  }

  export type LoanStatusHistoryUncheckedCreateInput = {
    id?: string
    applicationId: string
    status: string
    remark?: string | null
    createdAt?: Date | string
  }

  export type LoanStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: LoanApplicationUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type LoanStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStatusHistoryCreateManyInput = {
    id?: string
    applicationId: string
    status: string
    remark?: string | null
    createdAt?: Date | string
  }

  export type LoanStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LoanApplicationListRelationFilter = {
    every?: LoanApplicationWhereInput
    some?: LoanApplicationWhereInput
    none?: LoanApplicationWhereInput
  }

  export type LoanApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type LoanStatusHistoryListRelationFilter = {
    every?: LoanStatusHistoryWhereInput
    some?: LoanStatusHistoryWhereInput
    none?: LoanStatusHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    loanType?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    pan?: SortOrder
    aadhaar?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    employmentType?: SortOrder
    companyName?: SortOrder
    monthlyIncome?: SortOrder
    loanAmount?: SortOrder
    tenure?: SortOrder
    interestRate?: SortOrder
    verified?: SortOrder
    creditScore?: SortOrder
    riskScore?: SortOrder
    approvalStatus?: SortOrder
    status?: SortOrder
    signature?: SortOrder
    adminRemark?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanApplicationAvgOrderByAggregateInput = {
    monthlyIncome?: SortOrder
    loanAmount?: SortOrder
    tenure?: SortOrder
    interestRate?: SortOrder
    creditScore?: SortOrder
    riskScore?: SortOrder
  }

  export type LoanApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    loanType?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    pan?: SortOrder
    aadhaar?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    employmentType?: SortOrder
    companyName?: SortOrder
    monthlyIncome?: SortOrder
    loanAmount?: SortOrder
    tenure?: SortOrder
    interestRate?: SortOrder
    verified?: SortOrder
    creditScore?: SortOrder
    riskScore?: SortOrder
    approvalStatus?: SortOrder
    status?: SortOrder
    signature?: SortOrder
    adminRemark?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    loanType?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    pan?: SortOrder
    aadhaar?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    employmentType?: SortOrder
    companyName?: SortOrder
    monthlyIncome?: SortOrder
    loanAmount?: SortOrder
    tenure?: SortOrder
    interestRate?: SortOrder
    verified?: SortOrder
    creditScore?: SortOrder
    riskScore?: SortOrder
    approvalStatus?: SortOrder
    status?: SortOrder
    signature?: SortOrder
    adminRemark?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanApplicationSumOrderByAggregateInput = {
    monthlyIncome?: SortOrder
    loanAmount?: SortOrder
    tenure?: SortOrder
    interestRate?: SortOrder
    creditScore?: SortOrder
    riskScore?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LoanApplicationScalarRelationFilter = {
    is?: LoanApplicationWhereInput
    isNot?: LoanApplicationWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type LoanStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
  }

  export type LoanStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
  }

  export type LoanStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
  }

  export type LoanApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
  }

  export type LoanApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LoanApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    upsert?: LoanApplicationUpsertWithWhereUniqueWithoutUserInput | LoanApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    set?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    disconnect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    delete?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    update?: LoanApplicationUpdateWithWhereUniqueWithoutUserInput | LoanApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanApplicationUpdateManyWithWhereWithoutUserInput | LoanApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
  }

  export type LoanApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    upsert?: LoanApplicationUpsertWithWhereUniqueWithoutUserInput | LoanApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    set?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    disconnect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    delete?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    update?: LoanApplicationUpdateWithWhereUniqueWithoutUserInput | LoanApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanApplicationUpdateManyWithWhereWithoutUserInput | LoanApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type LoanStatusHistoryCreateNestedManyWithoutApplicationInput = {
    create?: XOR<LoanStatusHistoryCreateWithoutApplicationInput, LoanStatusHistoryUncheckedCreateWithoutApplicationInput> | LoanStatusHistoryCreateWithoutApplicationInput[] | LoanStatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: LoanStatusHistoryCreateOrConnectWithoutApplicationInput | LoanStatusHistoryCreateOrConnectWithoutApplicationInput[]
    createMany?: LoanStatusHistoryCreateManyApplicationInputEnvelope
    connect?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type LoanStatusHistoryUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<LoanStatusHistoryCreateWithoutApplicationInput, LoanStatusHistoryUncheckedCreateWithoutApplicationInput> | LoanStatusHistoryCreateWithoutApplicationInput[] | LoanStatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: LoanStatusHistoryCreateOrConnectWithoutApplicationInput | LoanStatusHistoryCreateOrConnectWithoutApplicationInput[]
    createMany?: LoanStatusHistoryCreateManyApplicationInputEnvelope
    connect?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type DocumentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutApplicationInput | DocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutApplicationInput | DocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutApplicationInput | DocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type LoanStatusHistoryUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<LoanStatusHistoryCreateWithoutApplicationInput, LoanStatusHistoryUncheckedCreateWithoutApplicationInput> | LoanStatusHistoryCreateWithoutApplicationInput[] | LoanStatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: LoanStatusHistoryCreateOrConnectWithoutApplicationInput | LoanStatusHistoryCreateOrConnectWithoutApplicationInput[]
    upsert?: LoanStatusHistoryUpsertWithWhereUniqueWithoutApplicationInput | LoanStatusHistoryUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: LoanStatusHistoryCreateManyApplicationInputEnvelope
    set?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    disconnect?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    delete?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    connect?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    update?: LoanStatusHistoryUpdateWithWhereUniqueWithoutApplicationInput | LoanStatusHistoryUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: LoanStatusHistoryUpdateManyWithWhereWithoutApplicationInput | LoanStatusHistoryUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: LoanStatusHistoryScalarWhereInput | LoanStatusHistoryScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutApplicationInput | DocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutApplicationInput | DocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutApplicationInput | DocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type LoanStatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<LoanStatusHistoryCreateWithoutApplicationInput, LoanStatusHistoryUncheckedCreateWithoutApplicationInput> | LoanStatusHistoryCreateWithoutApplicationInput[] | LoanStatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: LoanStatusHistoryCreateOrConnectWithoutApplicationInput | LoanStatusHistoryCreateOrConnectWithoutApplicationInput[]
    upsert?: LoanStatusHistoryUpsertWithWhereUniqueWithoutApplicationInput | LoanStatusHistoryUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: LoanStatusHistoryCreateManyApplicationInputEnvelope
    set?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    disconnect?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    delete?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    connect?: LoanStatusHistoryWhereUniqueInput | LoanStatusHistoryWhereUniqueInput[]
    update?: LoanStatusHistoryUpdateWithWhereUniqueWithoutApplicationInput | LoanStatusHistoryUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: LoanStatusHistoryUpdateManyWithWhereWithoutApplicationInput | LoanStatusHistoryUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: LoanStatusHistoryScalarWhereInput | LoanStatusHistoryScalarWhereInput[]
  }

  export type LoanApplicationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<LoanApplicationCreateWithoutDocumentsInput, LoanApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutDocumentsInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutDocumentsInput, LoanApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutDocumentsInput
    upsert?: LoanApplicationUpsertWithoutDocumentsInput
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutDocumentsInput, LoanApplicationUpdateWithoutDocumentsInput>, LoanApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type LoanApplicationCreateNestedOneWithoutHistoryInput = {
    create?: XOR<LoanApplicationCreateWithoutHistoryInput, LoanApplicationUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutHistoryInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutHistoryInput, LoanApplicationUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutHistoryInput
    upsert?: LoanApplicationUpsertWithoutHistoryInput
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutHistoryInput, LoanApplicationUpdateWithoutHistoryInput>, LoanApplicationUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LoanApplicationCreateWithoutUserInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutApplicationInput
    history?: LoanStatusHistoryCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
    history?: LoanStatusHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationCreateOrConnectWithoutUserInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput>
  }

  export type LoanApplicationCreateManyUserInputEnvelope = {
    data: LoanApplicationCreateManyUserInput | LoanApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoanApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: LoanApplicationWhereUniqueInput
    update: XOR<LoanApplicationUpdateWithoutUserInput, LoanApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput>
  }

  export type LoanApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: LoanApplicationWhereUniqueInput
    data: XOR<LoanApplicationUpdateWithoutUserInput, LoanApplicationUncheckedUpdateWithoutUserInput>
  }

  export type LoanApplicationUpdateManyWithWhereWithoutUserInput = {
    where: LoanApplicationScalarWhereInput
    data: XOR<LoanApplicationUpdateManyMutationInput, LoanApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type LoanApplicationScalarWhereInput = {
    AND?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
    OR?: LoanApplicationScalarWhereInput[]
    NOT?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
    id?: StringFilter<"LoanApplication"> | string
    applicationId?: StringFilter<"LoanApplication"> | string
    loanType?: StringFilter<"LoanApplication"> | string
    fullName?: StringFilter<"LoanApplication"> | string
    email?: StringFilter<"LoanApplication"> | string
    phone?: StringFilter<"LoanApplication"> | string
    pan?: StringFilter<"LoanApplication"> | string
    aadhaar?: StringFilter<"LoanApplication"> | string
    address?: StringNullableFilter<"LoanApplication"> | string | null
    city?: StringNullableFilter<"LoanApplication"> | string | null
    state?: StringNullableFilter<"LoanApplication"> | string | null
    employmentType?: StringNullableFilter<"LoanApplication"> | string | null
    companyName?: StringNullableFilter<"LoanApplication"> | string | null
    monthlyIncome?: FloatNullableFilter<"LoanApplication"> | number | null
    loanAmount?: FloatFilter<"LoanApplication"> | number
    tenure?: IntFilter<"LoanApplication"> | number
    interestRate?: FloatFilter<"LoanApplication"> | number
    verified?: BoolFilter<"LoanApplication"> | boolean
    creditScore?: IntNullableFilter<"LoanApplication"> | number | null
    riskScore?: IntNullableFilter<"LoanApplication"> | number | null
    approvalStatus?: StringFilter<"LoanApplication"> | string
    status?: StringFilter<"LoanApplication"> | string
    signature?: StringNullableFilter<"LoanApplication"> | string | null
    adminRemark?: StringNullableFilter<"LoanApplication"> | string | null
    userId?: StringFilter<"LoanApplication"> | string
    createdAt?: DateTimeFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LoanApplication"> | Date | string
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type DocumentCreateWithoutApplicationInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    status?: string
    uploadedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutApplicationInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    status?: string
    uploadedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutApplicationInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput>
  }

  export type DocumentCreateManyApplicationInputEnvelope = {
    data: DocumentCreateManyApplicationInput | DocumentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type LoanStatusHistoryCreateWithoutApplicationInput = {
    id?: string
    status: string
    remark?: string | null
    createdAt?: Date | string
  }

  export type LoanStatusHistoryUncheckedCreateWithoutApplicationInput = {
    id?: string
    status: string
    remark?: string | null
    createdAt?: Date | string
  }

  export type LoanStatusHistoryCreateOrConnectWithoutApplicationInput = {
    where: LoanStatusHistoryWhereUniqueInput
    create: XOR<LoanStatusHistoryCreateWithoutApplicationInput, LoanStatusHistoryUncheckedCreateWithoutApplicationInput>
  }

  export type LoanStatusHistoryCreateManyApplicationInputEnvelope = {
    data: LoanStatusHistoryCreateManyApplicationInput | LoanStatusHistoryCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutApplicationInput, DocumentUncheckedUpdateWithoutApplicationInput>
    create: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutApplicationInput, DocumentUncheckedUpdateWithoutApplicationInput>
  }

  export type DocumentUpdateManyWithWhereWithoutApplicationInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    applicationId?: StringFilter<"Document"> | string
    documentType?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileUrl?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type LoanStatusHistoryUpsertWithWhereUniqueWithoutApplicationInput = {
    where: LoanStatusHistoryWhereUniqueInput
    update: XOR<LoanStatusHistoryUpdateWithoutApplicationInput, LoanStatusHistoryUncheckedUpdateWithoutApplicationInput>
    create: XOR<LoanStatusHistoryCreateWithoutApplicationInput, LoanStatusHistoryUncheckedCreateWithoutApplicationInput>
  }

  export type LoanStatusHistoryUpdateWithWhereUniqueWithoutApplicationInput = {
    where: LoanStatusHistoryWhereUniqueInput
    data: XOR<LoanStatusHistoryUpdateWithoutApplicationInput, LoanStatusHistoryUncheckedUpdateWithoutApplicationInput>
  }

  export type LoanStatusHistoryUpdateManyWithWhereWithoutApplicationInput = {
    where: LoanStatusHistoryScalarWhereInput
    data: XOR<LoanStatusHistoryUpdateManyMutationInput, LoanStatusHistoryUncheckedUpdateManyWithoutApplicationInput>
  }

  export type LoanStatusHistoryScalarWhereInput = {
    AND?: LoanStatusHistoryScalarWhereInput | LoanStatusHistoryScalarWhereInput[]
    OR?: LoanStatusHistoryScalarWhereInput[]
    NOT?: LoanStatusHistoryScalarWhereInput | LoanStatusHistoryScalarWhereInput[]
    id?: StringFilter<"LoanStatusHistory"> | string
    applicationId?: StringFilter<"LoanStatusHistory"> | string
    status?: StringFilter<"LoanStatusHistory"> | string
    remark?: StringNullableFilter<"LoanStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"LoanStatusHistory"> | Date | string
  }

  export type LoanApplicationCreateWithoutDocumentsInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    history?: LoanStatusHistoryCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationUncheckedCreateWithoutDocumentsInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: LoanStatusHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationCreateOrConnectWithoutDocumentsInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutDocumentsInput, LoanApplicationUncheckedCreateWithoutDocumentsInput>
  }

  export type LoanApplicationUpsertWithoutDocumentsInput = {
    update: XOR<LoanApplicationUpdateWithoutDocumentsInput, LoanApplicationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<LoanApplicationCreateWithoutDocumentsInput, LoanApplicationUncheckedCreateWithoutDocumentsInput>
    where?: LoanApplicationWhereInput
  }

  export type LoanApplicationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: LoanApplicationWhereInput
    data: XOR<LoanApplicationUpdateWithoutDocumentsInput, LoanApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type LoanApplicationUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    history?: LoanStatusHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: LoanStatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationCreateWithoutHistoryInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    documents?: DocumentCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationUncheckedCreateWithoutHistoryInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type LoanApplicationCreateOrConnectWithoutHistoryInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutHistoryInput, LoanApplicationUncheckedCreateWithoutHistoryInput>
  }

  export type LoanApplicationUpsertWithoutHistoryInput = {
    update: XOR<LoanApplicationUpdateWithoutHistoryInput, LoanApplicationUncheckedUpdateWithoutHistoryInput>
    create: XOR<LoanApplicationCreateWithoutHistoryInput, LoanApplicationUncheckedCreateWithoutHistoryInput>
    where?: LoanApplicationWhereInput
  }

  export type LoanApplicationUpdateToOneWithWhereWithoutHistoryInput = {
    where?: LoanApplicationWhereInput
    data: XOR<LoanApplicationUpdateWithoutHistoryInput, LoanApplicationUncheckedUpdateWithoutHistoryInput>
  }

  export type LoanApplicationUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationCreateManyUserInput = {
    id?: string
    applicationId?: string
    loanType: string
    fullName: string
    email: string
    phone: string
    pan: string
    aadhaar: string
    address?: string | null
    city?: string | null
    state?: string | null
    employmentType?: string | null
    companyName?: string | null
    monthlyIncome?: number | null
    loanAmount: number
    tenure: number
    interestRate: number
    verified?: boolean
    creditScore?: number | null
    riskScore?: number | null
    approvalStatus?: string
    status?: string
    signature?: string | null
    adminRemark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
    history?: LoanStatusHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
    history?: LoanStatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    loanType?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    pan?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    tenure?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskScore?: NullableIntFieldUpdateOperationsInput | number | null
    approvalStatus?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    adminRemark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyApplicationInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    status?: string
    uploadedAt?: Date | string
  }

  export type LoanStatusHistoryCreateManyApplicationInput = {
    id?: string
    status: string
    remark?: string | null
    createdAt?: Date | string
  }

  export type DocumentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStatusHistoryUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStatusHistoryUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStatusHistoryUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}