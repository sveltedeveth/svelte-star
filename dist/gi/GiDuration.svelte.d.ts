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
export type GiDurationProps = typeof __propDef.props;
export type GiDurationEvents = typeof __propDef.events;
export type GiDurationSlots = typeof __propDef.slots;
export default class GiDuration extends SvelteComponentTyped<GiDurationProps, GiDurationEvents, GiDurationSlots> {
}
export {};
