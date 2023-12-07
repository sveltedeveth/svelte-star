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
export type GiBanditProps = typeof __propDef.props;
export type GiBanditEvents = typeof __propDef.events;
export type GiBanditSlots = typeof __propDef.slots;
export default class GiBandit extends SvelteComponentTyped<GiBanditProps, GiBanditEvents, GiBanditSlots> {
}
export {};
