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
export type FaPrayProps = typeof __propDef.props;
export type FaPrayEvents = typeof __propDef.events;
export type FaPraySlots = typeof __propDef.slots;
export default class FaPray extends SvelteComponentTyped<FaPrayProps, FaPrayEvents, FaPraySlots> {
}
export {};
