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
export type FaSkypeProps = typeof __propDef.props;
export type FaSkypeEvents = typeof __propDef.events;
export type FaSkypeSlots = typeof __propDef.slots;
export default class FaSkype extends SvelteComponentTyped<FaSkypeProps, FaSkypeEvents, FaSkypeSlots> {
}
export {};
