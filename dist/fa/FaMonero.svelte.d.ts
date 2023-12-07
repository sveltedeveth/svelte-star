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
export type FaMoneroProps = typeof __propDef.props;
export type FaMoneroEvents = typeof __propDef.events;
export type FaMoneroSlots = typeof __propDef.slots;
export default class FaMonero extends SvelteComponentTyped<FaMoneroProps, FaMoneroEvents, FaMoneroSlots> {
}
export {};
