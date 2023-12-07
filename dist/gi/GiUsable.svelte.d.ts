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
export type GiUsableProps = typeof __propDef.props;
export type GiUsableEvents = typeof __propDef.events;
export type GiUsableSlots = typeof __propDef.slots;
export default class GiUsable extends SvelteComponentTyped<GiUsableProps, GiUsableEvents, GiUsableSlots> {
}
export {};
