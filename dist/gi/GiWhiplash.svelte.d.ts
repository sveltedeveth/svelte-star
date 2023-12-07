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
export type GiWhiplashProps = typeof __propDef.props;
export type GiWhiplashEvents = typeof __propDef.events;
export type GiWhiplashSlots = typeof __propDef.slots;
export default class GiWhiplash extends SvelteComponentTyped<GiWhiplashProps, GiWhiplashEvents, GiWhiplashSlots> {
}
export {};
