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
export type GiSpikedSnailProps = typeof __propDef.props;
export type GiSpikedSnailEvents = typeof __propDef.events;
export type GiSpikedSnailSlots = typeof __propDef.slots;
export default class GiSpikedSnail extends SvelteComponentTyped<GiSpikedSnailProps, GiSpikedSnailEvents, GiSpikedSnailSlots> {
}
export {};
