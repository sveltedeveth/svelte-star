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
export type DiDartProps = typeof __propDef.props;
export type DiDartEvents = typeof __propDef.events;
export type DiDartSlots = typeof __propDef.slots;
export default class DiDart extends SvelteComponentTyped<DiDartProps, DiDartEvents, DiDartSlots> {
}
export {};
