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
export type FaICursorProps = typeof __propDef.props;
export type FaICursorEvents = typeof __propDef.events;
export type FaICursorSlots = typeof __propDef.slots;
export default class FaICursor extends SvelteComponentTyped<FaICursorProps, FaICursorEvents, FaICursorSlots> {
}
export {};
