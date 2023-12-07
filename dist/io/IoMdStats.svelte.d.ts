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
export type IoMdStatsProps = typeof __propDef.props;
export type IoMdStatsEvents = typeof __propDef.events;
export type IoMdStatsSlots = typeof __propDef.slots;
export default class IoMdStats extends SvelteComponentTyped<IoMdStatsProps, IoMdStatsEvents, IoMdStatsSlots> {
}
export {};
