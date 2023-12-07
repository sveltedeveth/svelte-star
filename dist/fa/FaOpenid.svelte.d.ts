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
export type FaOpenidProps = typeof __propDef.props;
export type FaOpenidEvents = typeof __propDef.events;
export type FaOpenidSlots = typeof __propDef.slots;
export default class FaOpenid extends SvelteComponentTyped<FaOpenidProps, FaOpenidEvents, FaOpenidSlots> {
}
export {};
