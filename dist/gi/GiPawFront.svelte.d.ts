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
export type GiPawFrontProps = typeof __propDef.props;
export type GiPawFrontEvents = typeof __propDef.events;
export type GiPawFrontSlots = typeof __propDef.slots;
export default class GiPawFront extends SvelteComponentTyped<GiPawFrontProps, GiPawFrontEvents, GiPawFrontSlots> {
}
export {};
