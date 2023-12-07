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
export type FaGripLinesProps = typeof __propDef.props;
export type FaGripLinesEvents = typeof __propDef.events;
export type FaGripLinesSlots = typeof __propDef.slots;
export default class FaGripLines extends SvelteComponentTyped<FaGripLinesProps, FaGripLinesEvents, FaGripLinesSlots> {
}
export {};
