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
export type GiGearsProps = typeof __propDef.props;
export type GiGearsEvents = typeof __propDef.events;
export type GiGearsSlots = typeof __propDef.slots;
export default class GiGears extends SvelteComponentTyped<GiGearsProps, GiGearsEvents, GiGearsSlots> {
}
export {};
