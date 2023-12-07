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
export type GiNinjaMaskProps = typeof __propDef.props;
export type GiNinjaMaskEvents = typeof __propDef.events;
export type GiNinjaMaskSlots = typeof __propDef.slots;
export default class GiNinjaMask extends SvelteComponentTyped<GiNinjaMaskProps, GiNinjaMaskEvents, GiNinjaMaskSlots> {
}
export {};
