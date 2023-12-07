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
export type GiBubbleFieldProps = typeof __propDef.props;
export type GiBubbleFieldEvents = typeof __propDef.events;
export type GiBubbleFieldSlots = typeof __propDef.slots;
export default class GiBubbleField extends SvelteComponentTyped<GiBubbleFieldProps, GiBubbleFieldEvents, GiBubbleFieldSlots> {
}
export {};
