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
export type FaAvianexProps = typeof __propDef.props;
export type FaAvianexEvents = typeof __propDef.events;
export type FaAvianexSlots = typeof __propDef.slots;
export default class FaAvianex extends SvelteComponentTyped<FaAvianexProps, FaAvianexEvents, FaAvianexSlots> {
}
export {};
