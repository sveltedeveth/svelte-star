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
export type FaLineProps = typeof __propDef.props;
export type FaLineEvents = typeof __propDef.events;
export type FaLineSlots = typeof __propDef.slots;
export default class FaLine extends SvelteComponentTyped<FaLineProps, FaLineEvents, FaLineSlots> {
}
export {};
