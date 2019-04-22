import { Stream, PassThrough } from "stream";

declare module "@verdaccio/types" {
type StringValue = string | void | null;


	type StorageList = Array<string>;
	type Callback = Function;
	type CallbackError = (err: NodeJS.ErrnoException) => void
	type Author = {
		name: string;
		email?: string;
		url?: string;
	}

	type Dist = {
		integrity?: string;
		shasum: string;
		tarball: string;
	}

	type RemoteUser = {
		real_groups: Array<string>;
		groups: Array<string>;
		name: string | void;
		error?: string;
	}

	interface LocalStorage {
		list: any;
		secret: string;
	}

	type Version = {
		name: string,
		version: string,
		devDependencies?: string,
		directories?: any,
		dist: Dist,
		author: string | Author,
		main: string,
		homemage?: string,
		license?: string,
		readme: string,
		readmeFileName?: string,
		readmeFilename?: string;
		description: string,
		bin?: string,
		bugs?: any,
		files?: Array<string>,
		gitHead?: string,
		maintainers?: Array<Author>,
		contributors?: Array<Author>,
		repository?: string | any,
		scripts?: any,
		homepage?: string,
		etag?: string;
		dependencies: any,
		keywords?: string | Array<string>,
		nodeVersion?: string,
		_id: string,
        _npmVersion?: string;
		_npmUser: Author,
		_hasShrinkwrap?: boolean
	};

	type Logger = {
		child: (conf: any) => any;
		debug: (conf: any, template?: string) => void;
		error: (conf: any, template?: string) => void;
		http: (conf: any, template?: string) => void;
		trace: (conf: any, template?: string) => void;
		warn: (conf: any, template?: string) => void;
		info: (conf: any, template?: string) => void;
	}

	type Versions = {
		[key: string]: Version;
	}

	type DistFile = {
		url: string;
		sha: string;
		registry?: string;
	}

	type MergeTags = {
		[key: string]: string;
	}

	type DistFiles = {
		[key: string]: DistFile;
	}

	type AttachMents = {
		[key: string]: AttachMentsItem;
	}

	type AttachMentsItem = {
		content_type? : string;
		data?: string;
		length?: number;
		shasum? : string;
		version?: string;
	}

	type GenericBody = {
		[key: string]: string;
	}

	type UpLinkMetadata = {
		etag: string;
		fetched: number;
	}

	type UpLinks = {
		[key: string]: UpLinkMetadata;
	}

	type Tags = {
		[key: string]: Version;
	}

	type Headers = {
		[key: string]: string;
	}

	type PackageUsers = {
        [key: string]: boolean;
	}

	type Package = {
		_id?: string;
		name: string;
		versions: Versions;
		'dist-tags': GenericBody;
		time?: GenericBody;
		readme?: string;
		users?: PackageUsers;
		_distfiles: DistFiles;
		_attachments: AttachMents;
		_uplinks: UpLinks;
		_rev: string;
	}

	 class IUploadTarball extends PassThrough {
		abort(): void;
		done(): void;
	}

	class IReadTarball extends PassThrough {
		abort(): void;
	}

	type UpLinkTokenConf = {
		type: "Bearer" | "Basic",
		token?: string,
		token_env?: boolean | string
	}

	type UpLinkConf = {
		url: string;
		ca?: string;
		cache?: boolean;
		timeout?: string | void;
		maxage?: string | void;
		max_fails?: number | void;
		fail_timeout?: string | void;
		headers?: Headers;
		auth?: UpLinkTokenConf;
		strict_ssl?: boolean | void;
	}

	type AuthPluginPackage = {
		packageName: string,
		packageVersion?: string
	}

	type PackageAccess = {
		storage?: string;
		publish?: Array<string>;
		proxy?: Array<string>;
		access?: Array<string>;
	}

	type PackageList = {
		[key: string]: PackageAccess;
	}

	type UpLinksConfList = {
		[key: string]: UpLinkConf;
	}

	type LoggerType = 'stdout' | 'stderr' | 'file';
  type LoggerFormat = 'pretty' | 'pretty-timestamped' | 'file';
  type LoggerLevel = 'http' | 'fatal' | 'warn' | 'info' | 'debug' | 'trace';

	type LoggerConfItem = {
		type: LoggerType;
	  format: LoggerFormat;
		level: LoggerLevel;
	}

	type PublishOptions = {
		allow_offline: boolean;
	}

	type AuthConf = any | AuthHtpasswd;

	interface AuthHtpasswd {
		file: string;
		max_users: number;
	}

	type Notifications = {
		method: string;
		packagePattern: RegExp;
		packagePatternFlags: string;
		endpoint: string;
		content: string;
		headers: Headers;
	}

	type ConfigFile = {
		storage: string;
		plugins: string;
		self_path: string;
		packages: PackageList;
		uplinks: UpLinksConfList;
		logs: Array<LoggerConf>;
		web: WebConf;
		auth: AuthConf;
		publish?: PublishOptions;
		url_prefix?: string;
		listen?: ListenAddress;
		https?: HttpsConf;
		http_proxy?: string;
		https_proxy?: string;
		no_proxy?: string;
		max_body_size?: string;
		notifications: Notifications;
	}

	type SyncReturn = Error | void;
	type IPackageStorage = ILocalPackageManager | void;
	type IPackageStorageManager = ILocalPackageManager;
	type IPluginStorage<T> = ILocalData<T>;

	interface AuthHtpasswd {
		file: string;
		max_users: number;
	}

	interface ILocalStorage {
		add(name: string): void;
		remove(name: string): void;
		get(): StorageList;
		sync(): void;
	}

	interface LoggerConf {
		[key: string]: LoggerConfItem;
	}

	interface ListenAddress {
		[key: string]: string;
	}

	interface WebConf {
		enable?: boolean;
		title?: string;
		logo?: string;
		gravatar?: boolean;
	}

	interface HttpsConf {
		key?: string;
		cert?: string;
		ca?: string;
		pfx?: string;
		passphrase?: string;
	}

	type JWTOptions = {
		sign: JWTSignOptions;
		verify: JWTVerifyOptions;
	}

	type JWTVerifyOptions = {
		algorithm?: string;
		expiresIn?: string;
		notBefore?: string | number;
		ignoreExpiration?: boolean;
		maxAge?: string | number;
		clockTimestamp?: number;
	}

	type JWTSignOptions = {
		algorithm?: string;
		expiresIn?: string;
		notBefore?: string;
		ignoreExpiration?: boolean;
		maxAge?: string | number;
		clockTimestamp?: number;
	}

	type APITokenOptions = {
		legacy: boolean;
		jwt?: JWTOptions;
	}

	type Security = {
		web: JWTOptions;
		api: APITokenOptions;
	}

	type Config = {
		user_agent: string;
		server_id: any;
		_debug?: boolean;
		storage?: string | void;
		plugins?: string | void;
		secret: string;
		self_path: string;
		packages: PackageList;
		uplinks: UpLinksConfList;
		logs?: Array<LoggerConf>;
		web?: WebConf;
		auth?: AuthConf;
		security: Security;
		publish?: PublishOptions;
		url_prefix?: string;
		store?: any;
		listen?: ListenAddress;
		https?: HttpsConf;
		http_proxy?: string;
		https_proxy?: string;
		no_proxy?: string;
		max_body_size?: string;
		notifications?: Notifications;
		middlewares?: any;
		filters?: any;
		checkSecretKey(token: string): string;
		getMatchedPackagesSpec(storage: string): PackageAccess | void;
		[key: string]: any;
	}

	interface ILocalData<T> extends IPlugin<T> {
		logger: Logger;
		config: T & Config;
		add(name: string, callback: Callback): void;
		remove(name: string, callback: Callback): void;
		get(callback: Callback): void;
		getSecret(): Promise<string>;
		setSecret(secret: string): Promise<any>;
		getPackageStorage(packageInfo: string): IPackageStorage;
		search(onPackage: Callback, onEnd: Callback, validateName: Function): void;
	}

	interface ILocalPackageManager {
		logger: Logger;
		writeTarball(name: string): IUploadTarball;
		readTarball(name: string): IReadTarball;
		readPackage(fileName: string, callback: Callback): void;
		createPackage(name: string, value: Package, cb: Callback): void;
		deletePackage(fileName: string, callback: Callback): void;
		removePackage(callback: Callback): void;
		updatePackage(pkgFileName: string,
									updateHandler: Callback,
									onWrite: Callback,
									transformPackage: Function,
									onEnd: Callback): void;
		savePackage(fileName: string, json: Package, callback: Callback): void;
	}

	interface TarballActions {
		addTarball(name: string, filename: string): IUploadTarball;
		getTarball(name: string, filename: string): IReadTarball;
		removeTarball(name: string, filename: string, revision: string, callback: Callback): void;
	}

	interface StoragePackageActions extends TarballActions {
		addVersion(name: string, version: string, metadata: Version, tag: StringValue, callback: Callback): void;
		mergeTags(name: string, tags: MergeTags, callback: Callback): void;
		removePackage(name: string, callback: Callback): void;
		changePackage(name: string, metadata: Package, revision: string, callback: Callback): void;
	}

	interface IStorageManager<T> extends StoragePackageActions {
		config: T & Config;
		logger: Logger;
		init(config: T & Config, filters: any): Promise<any>;
		addPackage(name: string, metadata: any, callback: Callback): Promise<any>;
		getPackage(options: any): void;
		search(startkey: string, options: any): IReadTarball;
		getLocalDatabase(callback: Callback): void;
	}

	interface IBasicStorage<T> extends StoragePackageActions {
		addPackage(name: string, info: Package, callback: Callback): void;
		updateVersions(name: string, packageInfo: Package, callback: Callback): void;
		getPackageMetadata(name: string, callback: Callback): void;
		search(startKey: string, options: any): IReadTarball;
		getSecret(config: T & Config): Promise<any>;
	}

	interface IBasicAuth<T> {
		config: T & Config;
		aesEncrypt(buf: Buffer): Buffer;
		authenticate(user: string, password: string, cb: Callback): void;
		changePassword(user: string, password: string, newPassword: string, cb: Callback): void;
		allow_access(pkg: AuthPluginPackage, user: RemoteUser, callback: Callback): void;
		add_user(user: string, password: string, cb: Callback): any;
	}

	class Plugin<T> {
		constructor(config: T, options: PluginOptions<T> );
	}

	interface IPlugin<T> {
		version?: string;
		// In case a plugin needs to be cleaned up/removed
		close?(): void;
	}

	type PluginOptions<T> = {
		config: T & Config;
		logger: Logger
	}

	interface IPluginAuth<T> extends IPlugin<T> {
		login_url?: string;
		authenticate(user: string, password: string, cb: Callback): void;
		adduser(user: string, password: string, cb: Callback): void;
		changePassword(user: string, password: string, newPassword: string, cb: Callback): void;
		allow_access?(user: RemoteUser, pkg: T & PackageAccess, cb: Callback): void;
		allow_publish?(user: RemoteUser, pkg: T & PackageAccess, cb: Callback): void;
	}

	interface IPluginMiddleware<T> extends IPlugin<T> {
		register_middlewares(app: any, auth: IBasicAuth<T>, storage: IStorageManager<T>): void;
	}

	interface IPluginStorageFilter<T> extends IPlugin<T> {
		filter_metadata(packageInfo: Package): Promise<Package>;
	}
}
