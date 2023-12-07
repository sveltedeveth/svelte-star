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
export type FaVkProps = typeof __propDef.props;
export type FaVkEvents = typeof __propDef.events;
export type FaVkSlots = typeof __propDef.slots;
export default class FaVk extends SvelteComponentTyped<FaVkProps, FaVkEvents, FaVkSlots> {
}
export {};
