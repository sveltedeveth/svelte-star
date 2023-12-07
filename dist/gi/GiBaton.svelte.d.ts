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
export type GiBatonProps = typeof __propDef.props;
export type GiBatonEvents = typeof __propDef.events;
export type GiBatonSlots = typeof __propDef.slots;
export default class GiBaton extends SvelteComponentTyped<GiBatonProps, GiBatonEvents, GiBatonSlots> {
}
export {};
