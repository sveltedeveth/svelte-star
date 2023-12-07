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
export type GiTumulusProps = typeof __propDef.props;
export type GiTumulusEvents = typeof __propDef.events;
export type GiTumulusSlots = typeof __propDef.slots;
export default class GiTumulus extends SvelteComponentTyped<GiTumulusProps, GiTumulusEvents, GiTumulusSlots> {
}
export {};
