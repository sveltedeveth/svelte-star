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
export type FaDonateProps = typeof __propDef.props;
export type FaDonateEvents = typeof __propDef.events;
export type FaDonateSlots = typeof __propDef.slots;
export default class FaDonate extends SvelteComponentTyped<FaDonateProps, FaDonateEvents, FaDonateSlots> {
}
export {};
