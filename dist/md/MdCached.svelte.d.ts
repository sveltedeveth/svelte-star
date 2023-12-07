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
export type MdCachedProps = typeof __propDef.props;
export type MdCachedEvents = typeof __propDef.events;
export type MdCachedSlots = typeof __propDef.slots;
export default class MdCached extends SvelteComponentTyped<MdCachedProps, MdCachedEvents, MdCachedSlots> {
}
export {};
