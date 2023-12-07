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
export type FaRedoProps = typeof __propDef.props;
export type FaRedoEvents = typeof __propDef.events;
export type FaRedoSlots = typeof __propDef.slots;
export default class FaRedo extends SvelteComponentTyped<FaRedoProps, FaRedoEvents, FaRedoSlots> {
}
export {};
