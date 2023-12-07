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
export type GiLoinclothProps = typeof __propDef.props;
export type GiLoinclothEvents = typeof __propDef.events;
export type GiLoinclothSlots = typeof __propDef.slots;
export default class GiLoincloth extends SvelteComponentTyped<GiLoinclothProps, GiLoinclothEvents, GiLoinclothSlots> {
}
export {};
