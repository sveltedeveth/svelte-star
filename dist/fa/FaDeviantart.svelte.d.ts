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
export type FaDeviantartProps = typeof __propDef.props;
export type FaDeviantartEvents = typeof __propDef.events;
export type FaDeviantartSlots = typeof __propDef.slots;
export default class FaDeviantart extends SvelteComponentTyped<FaDeviantartProps, FaDeviantartEvents, FaDeviantartSlots> {
}
export {};
