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
export type MdCollectionsProps = typeof __propDef.props;
export type MdCollectionsEvents = typeof __propDef.events;
export type MdCollectionsSlots = typeof __propDef.slots;
export default class MdCollections extends SvelteComponentTyped<MdCollectionsProps, MdCollectionsEvents, MdCollectionsSlots> {
}
export {};
