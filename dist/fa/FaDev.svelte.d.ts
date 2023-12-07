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
export type FaDevProps = typeof __propDef.props;
export type FaDevEvents = typeof __propDef.events;
export type FaDevSlots = typeof __propDef.slots;
export default class FaDev extends SvelteComponentTyped<FaDevProps, FaDevEvents, FaDevSlots> {
}
export {};
