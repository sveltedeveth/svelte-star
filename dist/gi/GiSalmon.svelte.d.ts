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
export type GiSalmonProps = typeof __propDef.props;
export type GiSalmonEvents = typeof __propDef.events;
export type GiSalmonSlots = typeof __propDef.slots;
export default class GiSalmon extends SvelteComponentTyped<GiSalmonProps, GiSalmonEvents, GiSalmonSlots> {
}
export {};
