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
export type GiReedProps = typeof __propDef.props;
export type GiReedEvents = typeof __propDef.events;
export type GiReedSlots = typeof __propDef.slots;
export default class GiReed extends SvelteComponentTyped<GiReedProps, GiReedEvents, GiReedSlots> {
}
export {};
