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
export type FaStripeSProps = typeof __propDef.props;
export type FaStripeSEvents = typeof __propDef.events;
export type FaStripeSSlots = typeof __propDef.slots;
export default class FaStripeS extends SvelteComponentTyped<FaStripeSProps, FaStripeSEvents, FaStripeSSlots> {
}
export {};
