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
export type GoPlusProps = typeof __propDef.props;
export type GoPlusEvents = typeof __propDef.events;
export type GoPlusSlots = typeof __propDef.slots;
export default class GoPlus extends SvelteComponentTyped<GoPlusProps, GoPlusEvents, GoPlusSlots> {
}
export {};
