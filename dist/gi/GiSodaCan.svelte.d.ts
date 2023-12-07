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
export type GiSodaCanProps = typeof __propDef.props;
export type GiSodaCanEvents = typeof __propDef.events;
export type GiSodaCanSlots = typeof __propDef.slots;
export default class GiSodaCan extends SvelteComponentTyped<GiSodaCanProps, GiSodaCanEvents, GiSodaCanSlots> {
}
export {};
