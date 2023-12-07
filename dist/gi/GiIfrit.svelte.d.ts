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
export type GiIfritProps = typeof __propDef.props;
export type GiIfritEvents = typeof __propDef.events;
export type GiIfritSlots = typeof __propDef.slots;
export default class GiIfrit extends SvelteComponentTyped<GiIfritProps, GiIfritEvents, GiIfritSlots> {
}
export {};
