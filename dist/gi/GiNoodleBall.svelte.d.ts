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
export type GiNoodleBallProps = typeof __propDef.props;
export type GiNoodleBallEvents = typeof __propDef.events;
export type GiNoodleBallSlots = typeof __propDef.slots;
export default class GiNoodleBall extends SvelteComponentTyped<GiNoodleBallProps, GiNoodleBallEvents, GiNoodleBallSlots> {
}
export {};
