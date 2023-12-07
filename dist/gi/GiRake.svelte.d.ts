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
export type GiRakeProps = typeof __propDef.props;
export type GiRakeEvents = typeof __propDef.events;
export type GiRakeSlots = typeof __propDef.slots;
export default class GiRake extends SvelteComponentTyped<GiRakeProps, GiRakeEvents, GiRakeSlots> {
}
export {};
