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
export type GiDivingHelmetProps = typeof __propDef.props;
export type GiDivingHelmetEvents = typeof __propDef.events;
export type GiDivingHelmetSlots = typeof __propDef.slots;
export default class GiDivingHelmet extends SvelteComponentTyped<GiDivingHelmetProps, GiDivingHelmetEvents, GiDivingHelmetSlots> {
}
export {};
