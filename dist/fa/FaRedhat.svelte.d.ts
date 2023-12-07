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
export type FaRedhatProps = typeof __propDef.props;
export type FaRedhatEvents = typeof __propDef.events;
export type FaRedhatSlots = typeof __propDef.slots;
export default class FaRedhat extends SvelteComponentTyped<FaRedhatProps, FaRedhatEvents, FaRedhatSlots> {
}
export {};
