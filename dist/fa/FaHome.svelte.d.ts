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
export type FaHomeProps = typeof __propDef.props;
export type FaHomeEvents = typeof __propDef.events;
export type FaHomeSlots = typeof __propDef.slots;
export default class FaHome extends SvelteComponentTyped<FaHomeProps, FaHomeEvents, FaHomeSlots> {
}
export {};
