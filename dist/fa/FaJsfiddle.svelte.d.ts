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
export type FaJsfiddleProps = typeof __propDef.props;
export type FaJsfiddleEvents = typeof __propDef.events;
export type FaJsfiddleSlots = typeof __propDef.slots;
export default class FaJsfiddle extends SvelteComponentTyped<FaJsfiddleProps, FaJsfiddleEvents, FaJsfiddleSlots> {
}
export {};
