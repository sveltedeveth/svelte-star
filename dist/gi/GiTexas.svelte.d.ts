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
export type GiTexasProps = typeof __propDef.props;
export type GiTexasEvents = typeof __propDef.events;
export type GiTexasSlots = typeof __propDef.slots;
export default class GiTexas extends SvelteComponentTyped<GiTexasProps, GiTexasEvents, GiTexasSlots> {
}
export {};
