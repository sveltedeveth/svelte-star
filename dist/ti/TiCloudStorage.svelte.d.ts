import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TiCloudStorageProps = typeof __propDef.props;
export type TiCloudStorageEvents = typeof __propDef.events;
export type TiCloudStorageSlots = typeof __propDef.slots;
export default class TiCloudStorage extends SvelteComponentTyped<TiCloudStorageProps, TiCloudStorageEvents, TiCloudStorageSlots> {
}
export {};
