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
export type FaJsProps = typeof __propDef.props;
export type FaJsEvents = typeof __propDef.events;
export type FaJsSlots = typeof __propDef.slots;
export default class FaJs extends SvelteComponentTyped<FaJsProps, FaJsEvents, FaJsSlots> {
}
export {};
