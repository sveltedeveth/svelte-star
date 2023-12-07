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
export type MdMapProps = typeof __propDef.props;
export type MdMapEvents = typeof __propDef.events;
export type MdMapSlots = typeof __propDef.slots;
export default class MdMap extends SvelteComponentTyped<MdMapProps, MdMapEvents, MdMapSlots> {
}
export {};
