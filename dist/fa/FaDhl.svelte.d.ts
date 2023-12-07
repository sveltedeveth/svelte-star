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
export type FaDhlProps = typeof __propDef.props;
export type FaDhlEvents = typeof __propDef.events;
export type FaDhlSlots = typeof __propDef.slots;
export default class FaDhl extends SvelteComponentTyped<FaDhlProps, FaDhlEvents, FaDhlSlots> {
}
export {};
