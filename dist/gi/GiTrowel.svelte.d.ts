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
export type GiTrowelProps = typeof __propDef.props;
export type GiTrowelEvents = typeof __propDef.events;
export type GiTrowelSlots = typeof __propDef.slots;
export default class GiTrowel extends SvelteComponentTyped<GiTrowelProps, GiTrowelEvents, GiTrowelSlots> {
}
export {};
