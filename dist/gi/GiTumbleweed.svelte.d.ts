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
export type GiTumbleweedProps = typeof __propDef.props;
export type GiTumbleweedEvents = typeof __propDef.events;
export type GiTumbleweedSlots = typeof __propDef.slots;
export default class GiTumbleweed extends SvelteComponentTyped<GiTumbleweedProps, GiTumbleweedEvents, GiTumbleweedSlots> {
}
export {};
