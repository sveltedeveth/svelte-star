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
export type GiToasterProps = typeof __propDef.props;
export type GiToasterEvents = typeof __propDef.events;
export type GiToasterSlots = typeof __propDef.slots;
export default class GiToaster extends SvelteComponentTyped<GiToasterProps, GiToasterEvents, GiToasterSlots> {
}
export {};
