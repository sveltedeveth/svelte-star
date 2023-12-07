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
export type GiFossilProps = typeof __propDef.props;
export type GiFossilEvents = typeof __propDef.events;
export type GiFossilSlots = typeof __propDef.slots;
export default class GiFossil extends SvelteComponentTyped<GiFossilProps, GiFossilEvents, GiFossilSlots> {
}
export {};
