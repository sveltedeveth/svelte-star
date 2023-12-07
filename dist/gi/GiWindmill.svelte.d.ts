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
export type GiWindmillProps = typeof __propDef.props;
export type GiWindmillEvents = typeof __propDef.events;
export type GiWindmillSlots = typeof __propDef.slots;
export default class GiWindmill extends SvelteComponentTyped<GiWindmillProps, GiWindmillEvents, GiWindmillSlots> {
}
export {};
