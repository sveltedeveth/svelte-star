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
export type GiFizzingFlaskProps = typeof __propDef.props;
export type GiFizzingFlaskEvents = typeof __propDef.events;
export type GiFizzingFlaskSlots = typeof __propDef.slots;
export default class GiFizzingFlask extends SvelteComponentTyped<GiFizzingFlaskProps, GiFizzingFlaskEvents, GiFizzingFlaskSlots> {
}
export {};
