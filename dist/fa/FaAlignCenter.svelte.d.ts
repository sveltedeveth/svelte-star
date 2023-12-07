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
export type FaAlignCenterProps = typeof __propDef.props;
export type FaAlignCenterEvents = typeof __propDef.events;
export type FaAlignCenterSlots = typeof __propDef.slots;
export default class FaAlignCenter extends SvelteComponentTyped<FaAlignCenterProps, FaAlignCenterEvents, FaAlignCenterSlots> {
}
export {};
