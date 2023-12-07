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
export type MdSdStorageProps = typeof __propDef.props;
export type MdSdStorageEvents = typeof __propDef.events;
export type MdSdStorageSlots = typeof __propDef.slots;
export default class MdSdStorage extends SvelteComponentTyped<MdSdStorageProps, MdSdStorageEvents, MdSdStorageSlots> {
}
export {};
