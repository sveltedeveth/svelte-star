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
export type FaWpressrProps = typeof __propDef.props;
export type FaWpressrEvents = typeof __propDef.events;
export type FaWpressrSlots = typeof __propDef.slots;
export default class FaWpressr extends SvelteComponentTyped<FaWpressrProps, FaWpressrEvents, FaWpressrSlots> {
}
export {};
