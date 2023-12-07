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
export type FaDeafProps = typeof __propDef.props;
export type FaDeafEvents = typeof __propDef.events;
export type FaDeafSlots = typeof __propDef.slots;
export default class FaDeaf extends SvelteComponentTyped<FaDeafProps, FaDeafEvents, FaDeafSlots> {
}
export {};
