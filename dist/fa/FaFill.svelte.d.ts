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
export type FaFillProps = typeof __propDef.props;
export type FaFillEvents = typeof __propDef.events;
export type FaFillSlots = typeof __propDef.slots;
export default class FaFill extends SvelteComponentTyped<FaFillProps, FaFillEvents, FaFillSlots> {
}
export {};
