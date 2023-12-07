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
export type FaRulerProps = typeof __propDef.props;
export type FaRulerEvents = typeof __propDef.events;
export type FaRulerSlots = typeof __propDef.slots;
export default class FaRuler extends SvelteComponentTyped<FaRulerProps, FaRulerEvents, FaRulerSlots> {
}
export {};
