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
export type FaReactProps = typeof __propDef.props;
export type FaReactEvents = typeof __propDef.events;
export type FaReactSlots = typeof __propDef.slots;
export default class FaReact extends SvelteComponentTyped<FaReactProps, FaReactEvents, FaReactSlots> {
}
export {};
