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
export type MdEjectProps = typeof __propDef.props;
export type MdEjectEvents = typeof __propDef.events;
export type MdEjectSlots = typeof __propDef.slots;
export default class MdEject extends SvelteComponentTyped<MdEjectProps, MdEjectEvents, MdEjectSlots> {
}
export {};
