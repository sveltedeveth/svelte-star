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
export type GiThwompProps = typeof __propDef.props;
export type GiThwompEvents = typeof __propDef.events;
export type GiThwompSlots = typeof __propDef.slots;
export default class GiThwomp extends SvelteComponentTyped<GiThwompProps, GiThwompEvents, GiThwompSlots> {
}
export {};
