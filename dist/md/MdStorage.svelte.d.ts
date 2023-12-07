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
export type MdStorageProps = typeof __propDef.props;
export type MdStorageEvents = typeof __propDef.events;
export type MdStorageSlots = typeof __propDef.slots;
export default class MdStorage extends SvelteComponentTyped<MdStorageProps, MdStorageEvents, MdStorageSlots> {
}
export {};
