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
export type FaLaravelProps = typeof __propDef.props;
export type FaLaravelEvents = typeof __propDef.events;
export type FaLaravelSlots = typeof __propDef.slots;
export default class FaLaravel extends SvelteComponentTyped<FaLaravelProps, FaLaravelEvents, FaLaravelSlots> {
}
export {};
